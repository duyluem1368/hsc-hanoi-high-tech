const grid = document.querySelector('#cropGrid');
const catalog = document.querySelector('#cropCatalog');
const detail = document.querySelector('#cropDetail');
const params = new URLSearchParams(location.search);
const selected = cropSolutions.find(crop => crop.id === params.get('crop'));

const escapeHtml = value => String(value).replace(/[&<>'"]/g, char => ({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[char]));

function renderCatalog() {
  grid.innerHTML = cropSolutions.map((crop, index) => `
    <a class="crop-card" href="?crop=${crop.id}" aria-label="Xem giải pháp cho ${escapeHtml(crop.name)}">
      <img src="${crop.image}" alt="${escapeHtml(crop.name)}" loading="${index < 4 ? 'eager' : 'lazy'}" width="1280" height="900">
      <span class="crop-card-shade"></span><span class="crop-index">${String(index + 1).padStart(2, '0')}</span>
      <span class="crop-card-copy"><strong>${escapeHtml(crop.name)}</strong><small>8 sâu, bệnh hại <b>→</b></small></span>
    </a>`).join('');
}

function renderDetail(crop) {
  document.querySelector('#cropHero').hidden = true; catalog.hidden = true; detail.hidden = false;
  document.title = `${crop.name} – Sâu bệnh & giải pháp | HSC`;
  document.querySelector('#detailImage').src = crop.image;
  document.querySelector('#detailImage').alt = `Hình ảnh đại diện ${crop.name.toLowerCase()}`;
  document.querySelector('#detailTitle').textContent = crop.name;
  document.querySelector('#detailSummary').textContent = crop.summary;
  document.querySelector('#pestGrid').innerHTML = crop.pests.map((pest, index) => `
    <button class="pest-card" type="button" data-pest="${escapeHtml(pest[0])}" aria-label="Xem chi tiết ${escapeHtml(pest[0])}">
      <span class="pest-photo"><img src="${pestPhoto(crop.id,pest[0]).src}" alt="${escapeHtml(pest[0])} trên ${escapeHtml(crop.name.toLowerCase())}" loading="lazy"><b>${String(index + 1).padStart(2, '0')}</b></span>
      <span class="pest-card-content"><small>Sâu, bệnh hại</small><strong>${escapeHtml(pest[0])}</strong><span>${escapeHtml(pest[1])}</span><em>Xem hồ sơ chi tiết →</em></span>
    </button>`).join('');
}

renderCatalog();
if (selected) renderDetail(selected);

const pestModal = document.querySelector('#pestModal');
let lastPestTrigger = null;
function openPest(name, trigger) {
  const crop = selected;
  const pest = crop?.pests.find(item => item[0] === name);
  if (!pest) return;
  const info = pestDetails[name] || pestFallback;
  const photo = pestPhoto(crop.id, name);
  lastPestTrigger = trigger;
  document.querySelector('#pestModalImage').src = photo.src;
  document.querySelector('#pestModalImage').alt = `${name} – hình ảnh nhận dạng`;
  document.querySelector('#pestModalCrop').textContent = crop.name;
  document.querySelector('#pestModalTitle').textContent = name;
  document.querySelector('#pestScientific').textContent = info[0];
  document.querySelector('#pestIdentification').textContent = pest[1];
  document.querySelector('#pestLifecycle').textContent = info[1];
  document.querySelector('#pestDamage').textContent = info[2];
  document.querySelector('#pestControl').textContent = pest[2];
  document.querySelector('#pestChemical').textContent = info[3];
  const manualLinks = info[4].map(id => ({ id, item: hscProducts[id] })).filter(entry => entry.item);
  const automaticLinks = (window.HSC_PRODUCT_ADDITIONS || [])
    .filter(product => product.relatedPests?.includes(name))
    .map(product => ({id:product.id,item:[product.name,product.active,product.image]}));
  const links = [...manualLinks, ...automaticLinks].filter((entry,index,list)=>list.findIndex(other=>other.id===entry.id)===index);
  document.querySelector('#linkedProducts').innerHTML = links.length ? `<h3>Sản phẩm HSC liên quan</h3><p class="product-scope-note">Danh sách tự động cập nhật theo hoạt chất/đối tượng. Chỉ sử dụng khi nhãn sản phẩm có đăng ký cho đúng cây trồng và dịch hại đang xử lý.</p><div class="linked-product-grid">${links.map(({id,item}) => `<a href="products.html?product=${id}"><img src="${item[2]}" alt="${item[0]}" loading="lazy"><span><strong>${item[0]}</strong><small>${item[1]}</small><b>Xem sản phẩm →</b></span></a>`).join('')}</div>` : '<p class="no-product">HSC chưa có sản phẩm trong danh mục trực tuyến khớp trực tiếp với đối tượng này. Vui lòng gửi mẫu hoặc hình ảnh để được kỹ thuật tư vấn.</p>';
  pestModal.hidden = false;
  document.body.classList.add('modal-open');
  const modalUrl = new URL(location.href); modalUrl.searchParams.set('pest', pestSlug(name)); history.replaceState(null, '', modalUrl);
  pestModal.querySelector('.pest-modal-close').focus();
}
function closePest() { pestModal.hidden = true; document.body.classList.remove('modal-open'); const cleanUrl = new URL(location.href); cleanUrl.searchParams.delete('pest'); history.replaceState(null, '', cleanUrl); lastPestTrigger?.focus(); }
document.querySelector('#pestGrid')?.addEventListener('click', event => { const trigger = event.target.closest('[data-pest]'); if (trigger) openPest(trigger.dataset.pest, trigger); });
pestModal.addEventListener('click', event => { if (event.target.closest('[data-close-pest]')) closePest(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && !pestModal.hidden) closePest(); });
const requestedPest = params.get('pest');
if (selected && requestedPest) { const match = selected.pests.find(item => pestSlug(item[0]) === requestedPest); if (match) openPest(match[0], null); }

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); navToggle.setAttribute('aria-expanded', String(open)); });
