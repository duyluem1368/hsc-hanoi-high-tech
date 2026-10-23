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
    <section class="pest-card">
      <div class="pest-number">${String(index + 1).padStart(2, '0')}</div>
      <div><h3>${escapeHtml(pest[0])}</h3><h4>Đặc tính & dấu hiệu</h4><p>${escapeHtml(pest[1])}</p><h4>Cách phòng trừ</h4><p>${escapeHtml(pest[2])}</p></div>
    </section>`).join('');
}

renderCatalog();
if (selected) renderDetail(selected);

const navToggle = document.querySelector('.nav-toggle');
const nav = document.querySelector('.nav');
navToggle.addEventListener('click', () => { const open = nav.classList.toggle('open'); navToggle.setAttribute('aria-expanded', String(open)); });
