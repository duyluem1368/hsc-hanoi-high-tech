const cropSolutions = [
  {
    id: 'lua', name: 'Cây lúa', image: 'assets/crops/lua.webp', summary: 'Giải pháp quản lý sâu bệnh chủ yếu trên lúa từ mạ đến chín.',
    pests: [
      ['Rầy nâu', 'Rầy chích hút ở bẹ và thân, làm cây vàng lụi; mật số cao có thể gây cháy rầy và truyền virus.', 'Gieo sạ đồng loạt, mật độ hợp lý, bón đạm cân đối; thăm đồng sát gốc và chỉ xử lý khi đạt ngưỡng theo khuyến cáo địa phương.'],
      ['Sâu cuốn lá nhỏ', 'Sâu non nhả tơ cuốn lá, ăn phần thịt lá tạo vệt trắng, làm giảm quang hợp.', 'Bảo vệ thiên địch, tránh phun sớm; kiểm tra lá đòng và xử lý sâu tuổi nhỏ khi mật độ vượt ngưỡng.'],
      ['Sâu đục thân hai chấm', 'Sâu đục trong thân gây dảnh héo ở đẻ nhánh và bông bạc ở làm đòng–trổ.', 'Vệ sinh gốc rạ, gieo cấy đúng lịch, dùng bẫy đèn theo dõi; xử lý thời điểm trứng nở rộ theo dự tính dự báo.'],
      ['Bọ trĩ', 'Lá non bị chích hút, cuốn lại, bạc đầu lá; thường nặng khi ruộng thiếu nước và thời tiết khô.', 'Giữ đủ ẩm, chăm sóc cây khỏe, theo dõi mạ và lúa non; ưu tiên biện pháp canh tác, xử lý khi mật số cao.'],
      ['Đạo ôn', 'Vết bệnh hình thoi trên lá; ở cổ bông gây thắt cổ, lép hạt và gãy bông.', 'Dùng giống phù hợp, xử lý hạt, không thừa đạm; chủ động phòng ở giai đoạn xung yếu khi thời tiết thuận lợi cho bệnh.'],
      ['Bạc lá', 'Vết cháy từ mép lá lan dọc phiến, ranh giới gợn sóng; phát triển mạnh sau mưa bão.', 'Dùng giống sạch bệnh, bón cân đối, hạn chế làm tổn thương lá; tiêu thoát nước và dùng sản phẩm đăng ký theo nhãn.'],
      ['Khô vằn', 'Vết loang da hổ trên bẹ lá gần mặt nước, lan lên lá và bông khi ruộng rậm ẩm.', 'Sạ thưa, giảm đạm, tăng kali, quản lý nước; phát hiện sớm ổ bệnh để xử lý đúng phạm vi.'],
      ['Lem lép hạt', 'Vỏ hạt xuất hiện đốm nâu đen, hạt lép hoặc giảm chất lượng khi mưa ẩm lúc trổ.', 'Gieo đúng thời vụ, bón cân đối, vệ sinh đồng ruộng; bảo vệ bông trước và sau trổ theo dự báo bệnh.']
    ]
  },
  {
    id: 'vai', name: 'Cây vải', image: 'assets/crops/vai.webp', summary: 'Bảo vệ lộc, hoa và quả vải trong điều kiện nóng ẩm miền Bắc.',
    pests: [
      ['Sâu đục cuống quả', 'Sâu non đục qua cuống vào hạt, làm quả rụng hoặc giảm giá trị thương phẩm.', 'Thu gom quả rụng, tỉa tán thông thoáng, theo dõi trưởng thành bằng bẫy; xử lý đúng lứa sâu non mới nở.'],
      ['Bọ xít vải', 'Cả trưởng thành và ấu trùng chích hút lộc, hoa, quả non làm héo và rụng.', 'Rung cây bắt bọ lúc sáng sớm, bảo vệ ong ký sinh, tỉa tán; xử lý ổ dịch khi mật số cao.'],
      ['Nhện lông nhung', 'Mặt dưới lá nổi lớp lông nhung nâu, lá biến dạng, lộc non sinh trưởng kém.', 'Cắt tiêu hủy cành bị nặng, tạo tán thoáng; kiểm tra và xử lý ngay từ đầu đợt lộc.'],
      ['Rệp sáp', 'Rệp tụ thành cụm ở chùm quả, tiết mật gây nấm bồ hóng và làm quả còi.', 'Quản lý kiến, vệ sinh tán, bảo vệ thiên địch; dùng dầu khoáng hoặc sản phẩm đăng ký khi rệp còn non.'],
      ['Sương mai', 'Hoa và quả non có vết nâu, gặp ẩm cao xuất hiện lớp mốc trắng và rụng hàng loạt.', 'Tỉa tán, thoát ẩm, thu gom bộ phận bệnh; phòng sớm giai đoạn ra hoa–quả non khi có mưa phùn.'],
      ['Thán thư', 'Vết nâu lõm trên lá, hoa và quả; quả chín dễ thối trong điều kiện mưa ẩm.', 'Cắt nguồn bệnh, tránh tưới lên tán, thu hoạch nhẹ tay; luân phiên sản phẩm có cơ chế khác nhau theo nhãn.'],
      ['Chổi rồng', 'Chồi mọc dày thành chùm, lá nhỏ và không cho hoa quả bình thường.', 'Dùng cây giống sạch, cắt sâu dưới phần bệnh và tiêu hủy; vệ sinh dụng cụ, quản lý nhện môi giới.'],
      ['Thối quả', 'Quả xuất hiện đốm nâu mềm, lan nhanh khi mưa nhiều hoặc bị xây xát.', 'Tạo tán thoáng, tránh làm tổn thương quả, thu gom quả bệnh; quản lý ẩm và bảo vệ quả trước mưa kéo dài.']
    ]
  },
  {
    id: 'sau-rieng', name: 'Cây sầu riêng', image: 'assets/crops/sau-rieng.webp', summary: 'Quản lý sức khỏe rễ, thân, hoa và trái sầu riêng theo hướng tổng hợp.',
    pests: [
      ['Rầy phấn', 'Côn trùng chích hút lá non, làm lá cong, vàng và phủ mật ngọt tạo nấm bồ hóng.', 'Tỉa tán, quản lý kiến, bảo vệ thiên địch; theo dõi các cơi đọt và xử lý khi rầy tuổi nhỏ.'],
      ['Bọ trĩ', 'Chích hút lá, hoa và trái non tạo sẹo nâu, biến dạng và rụng hoa.', 'Giữ vườn thông thoáng, tưới đủ ẩm, dùng bẫy dính; xử lý sớm lúc mật số tăng, luân phiên cơ chế tác động.'],
      ['Nhện đỏ', 'Mặt lá lấm tấm vàng, sau chuyển đồng; cây giảm quang hợp trong mùa khô.', 'Giảm bụi, tưới cân bằng, bảo vệ nhện bắt mồi; kiểm tra mặt dưới lá và xử lý cục bộ khi cần.'],
      ['Sâu đục thân', 'Lỗ đục có phân và mùn gỗ, cành suy yếu hoặc gãy, nặng có thể chết cây.', 'Cắt cành bị hại, soi bắt sâu, quét bảo vệ thân; giữ cây khỏe và xử lý lỗ đục theo hướng dẫn kỹ thuật.'],
      ['Xì mủ Phytophthora', 'Vỏ thân nứt chảy nhựa nâu, rễ thối, lá vàng và cây suy nhanh trong đất úng.', 'Lên mô, thoát nước, không làm tổn thương thân; cạo mô bệnh hợp lý và dùng sản phẩm đăng ký theo nhãn.'],
      ['Thán thư', 'Đốm nâu trên lá, cháy mép, khô hoa và cành non trong thời tiết ẩm.', 'Tỉa cành bệnh, cân đối dinh dưỡng, tránh tưới tán; phòng trong thời kỳ mưa ẩm và luân phiên hoạt chất.'],
      ['Nấm hồng', 'Tơ nấm trắng rồi hồng bao quanh cành, làm vỏ khô và cành chết phía trên.', 'Tỉa tán, cắt cành bệnh đến phần khỏe, vệ sinh vết cắt; xử lý sớm trước khi nấm bao kín cành.'],
      ['Thối trái', 'Vết nâu sũng nước lan nhanh, trái có thể rụng; thường liên quan ẩm độ cao và nguồn bệnh đất.', 'Kê trái tránh tiếp xúc đất, thoát nước, thu gom trái bệnh; bảo vệ trái trước mưa và tuân thủ thời gian cách ly.']
    ]
  },
  {
    id: 'ca-phe', name: 'Cây cà phê', image: 'assets/crops/ca-phe.webp', summary: 'Bảo vệ vườn cà phê từ bộ rễ, cành mang quả đến giai đoạn thu hoạch.',
    pests: [
      ['Rệp sáp', 'Rệp bám chùm quả hoặc rễ, hút nhựa, tiết mật và thường được kiến bảo vệ.', 'Quản lý kiến, tỉa cành, giữ ẩm hợp lý; kiểm tra rễ và chùm quả, xử lý rệp non bằng sản phẩm phù hợp.'],
      ['Mọt đục quả', 'Mọt cái đục vào nhân, để lại lỗ tròn ở núm quả, làm giảm năng suất và chất lượng.', 'Thu hái sạch quả chín, gom quả rơi, vệ sinh sau vụ; dùng bẫy và xử lý theo thời điểm mọt di chuyển.'],
      ['Sâu đục thân', 'Sâu đục dưới vỏ hoặc trong gỗ làm cành héo, thân có mùn cưa và dễ gãy.', 'Thường xuyên kiểm tra thân, cắt tiêu hủy cành bị hại; chăm cây khỏe, xử lý sớm lỗ đục.'],
      ['Rệp vảy xanh', 'Rệp bám mặt dưới lá và cành non, làm cây suy và phát sinh nấm bồ hóng.', 'Tạo tán thoáng, quản lý kiến, bảo vệ bọ rùa; chỉ xử lý khi mật số ảnh hưởng sinh trưởng.'],
      ['Gỉ sắt', 'Mặt dưới lá có ổ bào tử màu vàng cam, lá rụng sớm và cành quả suy.', 'Dùng giống chống chịu, bón cân đối, tỉa tán; theo dõi đầu mùa mưa và phòng khi bệnh mới xuất hiện.'],
      ['Thán thư', 'Cành, lá và quả có vết nâu đen, gây khô cành và rụng quả trong điều kiện bất lợi.', 'Giảm stress cây, tỉa cành bệnh, cân đối dinh dưỡng; phun bảo vệ theo dự báo và luân phiên cơ chế.'],
      ['Khô cành khô quả', 'Cành mang quả khô dần, quả đen và dính trên cành, thường nặng khi cây thiếu dinh dưỡng.', 'Cắt tiêu hủy cành bệnh, bón cân đối và đủ hữu cơ; quản lý ẩm, phòng bệnh trong giai đoạn quả phát triển.'],
      ['Tuyến trùng rễ', 'Rễ tơ suy giảm hoặc có u, cây vàng còi, héo khi nắng dù đất còn ẩm.', 'Dùng cây giống sạch, tăng hữu cơ hoai và vi sinh đối kháng; quản lý đất, nước và sản phẩm đăng ký theo nhãn.']
    ]
  },
  {
    id: 'nhan', name: 'Cây nhãn', image: 'assets/crops/nhan.webp', summary: 'Quản lý sâu bệnh trên lộc, chùm hoa và quả nhãn.',
    pests: [
      ['Bọ xít nhãn', 'Chích hút lộc, hoa, quả non làm héo và rụng; tiết mùi hôi khi bị động.', 'Bắt bọ và ổ trứng, bảo vệ ong ký sinh, tỉa tán; xử lý tập trung khi bọ non mới nở.'],
      ['Sâu đục gân lá', 'Sâu non đục dọc gân chính, khiến lá non héo khô và đợt lộc suy yếu.', 'Cắt lá bị hại, theo dõi đợt lộc, dùng bẫy; xử lý sâu mới nở trước khi đục sâu vào gân.'],
      ['Sâu đục cuống quả', 'Sâu đục vào quả qua cuống, làm rụng quả và gây tổn thất gần thu hoạch.', 'Vệ sinh vườn, thu gom quả rụng, tỉa tán; theo dõi trưởng thành và bảo vệ chùm quả đúng thời điểm.'],
      ['Rệp sáp', 'Cụm rệp trắng ở chùm hoa, quả, gây bồ hóng và làm quả chậm lớn.', 'Quản lý kiến, cắt bỏ ổ nặng, bảo vệ thiên địch; xử lý khi rệp còn non và chùm quả chưa khép kín.'],
      ['Sương mai', 'Chùm hoa, quả non nâu đen, có mốc trắng khi ẩm lạnh và rụng nhanh.', 'Tỉa tán, giảm ẩm, vệ sinh nguồn bệnh; phòng sớm khi mưa phùn kéo dài trong thời kỳ ra hoa.'],
      ['Thán thư', 'Vết nâu trên lá, cháy hoa và thối lõm quả, phát triển mạnh sau mưa.', 'Thu gom bộ phận bệnh, tạo tán thoáng; bảo vệ lộc, hoa, quả non và luân phiên sản phẩm theo nhãn.'],
      ['Chổi rồng', 'Chồi và lá nhỏ mọc thành búi, cành không cho năng suất bình thường.', 'Dùng giống sạch, cắt tiêu hủy cành bệnh, vệ sinh dụng cụ; kiểm soát tác nhân môi giới ở đợt lộc.'],
      ['Thối quả', 'Vết nâu mềm từ cuống hoặc vỏ, lây nhanh trong chùm khi mưa ẩm.', 'Tỉa chùm, giữ tán thoáng, tránh gây vết thương; loại quả bệnh và quản lý bệnh trước thu hoạch.']
    ]
  },
  {
    id: 'xoai', name: 'Cây xoài', image: 'assets/crops/xoai.webp', summary: 'Chăm sóc lộc, hoa và trái xoài trước áp lực côn trùng và nấm bệnh.',
    pests: [
      ['Rầy bông xoài', 'Rầy chích hút chùm hoa và lộc, làm rụng hoa, tiết mật gây nấm bồ hóng.', 'Tỉa tán, vệ sinh vườn, theo dõi khi nhú hoa; xử lý sớm rầy non, tránh ảnh hưởng côn trùng thụ phấn.'],
      ['Bọ trĩ', 'Chích hút lá, hoa, trái non làm cháy mép, sẹo da và biến dạng quả.', 'Dùng bẫy dính, tưới đủ ẩm, bảo vệ thiên địch; kiểm tra chùm hoa và xử lý khi mật số tăng.'],
      ['Ruồi đục quả', 'Dòi phát triển trong thịt làm quả thối, rụng; vỏ có chấm đẻ trứng.', 'Bao quả, thu gom chôn hủy quả rụng, dùng bẫy dẫn dụ; thu hoạch đúng độ chín và không để quả lưu vườn.'],
      ['Sâu đục thân cành', 'Lỗ đục có mùn gỗ, cành héo và dễ gãy, thường xuất hiện trên cây suy.', 'Cắt cành hại, bắt sâu trong lỗ, quét bảo vệ thân; duy trì cây khỏe và kiểm tra định kỳ.'],
      ['Thán thư', 'Đốm đen trên lá, hoa cháy khô; quả có vết đen lõm và thối khi chín.', 'Tạo tán thoáng, dọn nguồn bệnh, bao quả; phòng giai đoạn hoa–quả và xử lý sau thu hoạch phù hợp.'],
      ['Phấn trắng', 'Lớp phấn trắng phủ hoa, cuống và quả non, làm hoa khô và giảm đậu quả.', 'Giữ tán thông thoáng, theo dõi thời tiết lạnh khô; phòng ngay khi phát hoa và luân phiên sản phẩm.'],
      ['Xì mủ thân', 'Vỏ nứt, chảy nhựa, mô gỗ đổi màu và cành suy yếu.', 'Tránh tổn thương thân, thoát nước tốt; cạo sạch mô bệnh đúng kỹ thuật và bảo vệ vết thương.'],
      ['Đốm đen vi khuẩn', 'Vết đen góc cạnh, nứt trên lá và quả; dễ lây qua mưa gió và vết thương.', 'Dùng cây sạch bệnh, chắn gió, vệ sinh dụng cụ; tỉa cành bệnh và dùng sản phẩm đăng ký khi cần.']
    ]
  },
  {
    id: 'che', name: 'Cây chè', image: 'assets/crops/che.webp', summary: 'Giữ búp chè khỏe, đồng đều và bảo đảm yêu cầu an toàn thu hái.',
    pests: [
      ['Rầy xanh', 'Rầy chích hút búp và lá non, mép lá cháy đỏ, búp chậm phát triển.', 'Hái đúng lứa, duy trì tán hợp lý, bảo vệ thiên địch; điều tra bằng khay và xử lý theo ngưỡng.'],
      ['Bọ cánh tơ', 'Chích hút mặt dưới lá non tạo vệt ánh bạc, lá biến dạng và búp nhỏ.', 'Giữ ẩm, tỉa cành, quản lý cỏ hợp lý; theo dõi mùa khô và xử lý sớm ổ mật số cao.'],
      ['Bọ xít muỗi', 'Vết chích nhỏ nâu đen trên búp, lá non cong và khô khi bị hại nặng.', 'Tạo tán thông thoáng, thu hái kịp thời, dọn cây ký chủ; kiểm tra sáng sớm và xử lý theo ngưỡng.'],
      ['Nhện đỏ', 'Lá có chấm vàng, chuyển đồng và rụng trong điều kiện khô nóng, nhiều bụi.', 'Tưới đủ ẩm, giảm bụi, bảo vệ nhện bắt mồi; luân phiên sản phẩm chọn lọc nếu phải xử lý.'],
      ['Sâu cuốn lá', 'Sâu cuốn hoặc ghép lá để ăn, làm giảm diện tích lá và chất lượng búp.', 'Hái và tiêu hủy tổ sâu, bảo vệ thiên địch; xử lý sâu tuổi nhỏ khi mật độ đáng kể.'],
      ['Bệnh phồng lá', 'Vết trong mờ rồi phồng mặt trên, mặt dưới lõm có lớp bào tử trắng.', 'Tỉa tán, giảm ẩm, hái bỏ lá bệnh; phòng khi mưa ẩm, sương mù kéo dài.'],
      ['Đốm nâu', 'Lá có đốm tròn nâu với vòng đồng tâm, nặng làm rụng lá và suy tán.', 'Bón cân đối, thoát nước, thu gom lá bệnh; bảo vệ lá non khi thời tiết thuận lợi cho bệnh.'],
      ['Thối búp', 'Búp chuyển nâu đen, mềm hoặc khô, làm mất trực tiếp phần thu hoạch.', 'Hái sạch búp bệnh, tạo tán thoáng, tránh làm dập; tuân thủ nghiêm thời gian cách ly trước thu hái.']
    ]
  },
  {
    id: 'cay-an-qua', name: 'Cây ăn quả', image: 'assets/crops/cay-an-qua.webp', summary: 'Nhóm giải pháp nền tảng cho vườn cây ăn quả nhiệt đới và cây có múi.',
    pests: [
      ['Rệp sáp', 'Rệp bám chồi, lá, quả hoặc rễ, tiết mật gây nấm bồ hóng và làm cây suy.', 'Quản lý kiến, tỉa tán, bảo vệ thiên địch; phát hiện sớm và xử lý khi rệp còn non.'],
      ['Nhện đỏ', 'Chích hút làm lá lấm tấm vàng, giảm quang hợp và gây rám vỏ quả.', 'Giữ vườn đủ ẩm, giảm bụi, bảo vệ thiên địch; kiểm tra mặt dưới lá và luân phiên cơ chế tác động.'],
      ['Ruồi đục quả', 'Dòi ăn trong thịt quả gây thối rụng, làm mất giá trị thương phẩm.', 'Bao quả, bẫy trưởng thành, thu gom quả rụng; vệ sinh đồng loạt trong vùng canh tác.'],
      ['Sâu vẽ bùa', 'Sâu tạo đường ngoằn ngoèo trên lá non, làm lá cong và tạo cửa ngõ cho bệnh.', 'Theo dõi đợt lộc, bón đạm cân đối, bảo vệ ong ký sinh; xử lý khi sâu mới nở.'],
      ['Thán thư', 'Vết nâu đen trên lá, hoa và quả, thường lõm và lan mạnh khi mưa.', 'Tỉa tán, vệ sinh nguồn bệnh, tránh tưới lên lá; bảo vệ hoa, quả non và luân phiên sản phẩm.'],
      ['Thối rễ', 'Rễ nâu đen, cây vàng lá, héo và suy dần, nặng sau úng nước kéo dài.', 'Làm mô và rãnh thoát nước, tăng hữu cơ hoai, dùng giống sạch; quản lý tác nhân đất theo hướng tổng hợp.'],
      ['Loét vi khuẩn', 'Vết nổi sần có quầng vàng trên lá và quả, lây qua mưa gió.', 'Cây giống sạch, chắn gió, vệ sinh dụng cụ, cắt cành bệnh; hạn chế tưới phun và xử lý theo nhãn.'],
      ['Nấm bồ hóng', 'Lớp muội đen phủ lá và quả, thường phát triển trên mật ngọt của rệp.', 'Kiểm soát rệp và kiến là chính, rửa tán khi phù hợp; tạo tán thoáng để giảm ẩm.']
    ]
  },
  {
    id: 'hoa-thap-tu', name: 'Cây hoa thập tự', image: 'assets/crops/hoa-thap-tu.webp', summary: 'Giải pháp cho bắp cải, súp lơ, cải xanh và các rau họ cải.',
    pests: [
      ['Sâu tơ', 'Sâu nhỏ ăn mặt dưới lá tạo lỗ thủng, dễ kháng thuốc và gây hại liên tục.', 'Luân canh, lưới chắn, bảo vệ thiên địch; dùng Bt và luân phiên nhóm thuốc khi sâu tuổi nhỏ.'],
      ['Sâu xanh bướm trắng', 'Sâu non ăn lá từ mép vào, để lại gân chính khi mật số cao.', 'Bắt ổ trứng và sâu non, che lưới, dùng chế phẩm sinh học; xử lý sớm trước khi sâu lớn.'],
      ['Sâu khoang', 'Sâu non ăn tập thể lúc nhỏ, sâu lớn cắn phá mạnh và ẩn ban ngày.', 'Dọn cỏ, bắt ổ trứng, dùng bẫy pheromone; xử lý chiều mát khi sâu tuổi nhỏ.'],
      ['Rệp muội', 'Rệp tụ mặt dưới lá và ngọn, làm xoăn lá, còi cây và truyền virus.', 'Che lưới, quản lý cỏ ký chủ, bảo vệ bọ rùa; phun rửa hoặc dùng sản phẩm chọn lọc khi cần.'],
      ['Bọ nhảy', 'Bọ trưởng thành cắn lá thành nhiều lỗ nhỏ; ấu trùng có thể hại rễ.', 'Luân canh, vệ sinh tàn dư, phủ đất và giữ ẩm; dùng lưới ngay sau gieo, xử lý theo ngưỡng.'],
      ['Sưng rễ', 'Rễ phình thành u, cây héo trưa và sinh trưởng kém, bệnh tồn tại lâu trong đất.', 'Luân canh cây khác họ, điều chỉnh pH bằng vôi theo phân tích đất, dùng cây giống sạch và thoát nước.'],
      ['Thối nhũn', 'Mô lá hoặc thân mềm nhũn, có mùi hôi, lan nhanh khi nóng ẩm và có vết thương.', 'Giảm ẩm, tránh gây thương tích, loại cây bệnh, vệ sinh dụng cụ; không tưới tràn từ luống bệnh.'],
      ['Sương mai', 'Mặt trên lá có đốm vàng góc cạnh, mặt dưới có lớp mốc xám trắng.', 'Luân canh, trồng thoáng, tưới buổi sáng; loại lá bệnh và luân phiên sản phẩm theo nhãn.']
    ]
  },
  {
    id: 'ngo', name: 'Cây ngô', image: 'assets/crops/ngo.webp', summary: 'Bảo vệ ngô từ cây con, xoáy nõn đến hình thành và nuôi hạt.',
    pests: [
      ['Sâu keo mùa thu', 'Sâu ăn lá trong nõn, tạo lỗ xếp hàng và nhiều phân vụn; sâu lớn khó phòng trừ.', 'Gieo đồng loạt, thăm đồng sớm, bảo vệ thiên địch; xử lý sâu tuổi 1–2, đưa thuốc đúng vào nõn theo nhãn.'],
      ['Sâu đục thân', 'Sâu đục thân và bắp, làm cây gãy, cờ héo và hạt bị hại.', 'Vệ sinh tàn dư, luân canh, theo dõi bướm; xử lý trước khi sâu chui vào thân.'],
      ['Rệp cờ', 'Rệp tập trung ở nõn, cờ và bẹ lá, hút nhựa, tiết mật và ảnh hưởng thụ phấn.', 'Bón đạm cân đối, bảo vệ bọ rùa và ong ký sinh; chỉ xử lý khi mật số cao trước trỗ cờ.'],
      ['Sâu xám', 'Sâu cắn ngang cây con sát mặt đất về đêm, gây mất khoảng trên ruộng.', 'Làm đất kỹ, dọn cỏ, kiểm tra chiều tối; bắt thủ công, dùng bả hoặc sản phẩm đăng ký khi cần.'],
      ['Khô vằn', 'Vết loang dạng da hổ trên bẹ và lá, lan lên bắp trong ruộng rậm ẩm.', 'Mật độ hợp lý, bón cân đối, tiêu thoát nước; bóc bẹ bệnh và xử lý ổ bệnh sớm.'],
      ['Đốm lá lớn', 'Vết dài hình thoi màu xám nâu, hợp lại làm cháy lá và giảm nuôi hạt.', 'Dùng giống chống chịu, luân canh, vùi tàn dư; bảo vệ lá trước và sau trỗ khi bệnh chớm xuất hiện.'],
      ['Gỉ sắt', 'Ổ bào tử nâu đỏ nổi trên hai mặt lá, nặng làm lá khô sớm.', 'Chọn giống phù hợp, gieo đúng vụ, dọn cây ký chủ; theo dõi từ xoáy nõn và xử lý khi cần.'],
      ['Thối thân thối bắp', 'Thân mềm yếu dễ đổ hoặc bắp mốc, hạt đổi màu và có nguy cơ độc tố nấm.', 'Thu hoạch đúng lúc, thoát nước, hạn chế sâu hại tạo vết thương; loại bỏ bắp mốc, phơi và bảo quản khô.']
    ]
  }
];
