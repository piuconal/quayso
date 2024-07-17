const participants = [
  "Hà Văn Lượng ❤️ 13010084",
  "Nguyễn Văn Minh ❤️ 13040600",
  "Trịnh Thị Ngà ❤️ 14020242",
  "Nguyễn Trọng Bình ❤️ 17100832",
  "Nguyễn Văn Tăm ❤️ 18010009",
  "Nguyễn Thanh Thủy ❤️ 18030283",
  "Nguyễn Nhật Duy ❤️ 18030284",
  "Huỳnh Huy Hòa ❤️ 18080725",
  "Nguyễn Việt Trung ❤️ 18111069",
  "Liễu Minh Tuấn ❤️ 19080646",
  "Nguyễn Thị Dinh ❤️ 19100922",
  "Nguyễn Trọng Tâm ❤️ 19101049",
  "Nguyễn Thị Thùy ❤️ 19101070",
  "Nguyễn Trọng Trí ❤️ 19121292",
  "Nguyễn Lâm Huy Trường ❤️ 20080385",
  "Trần Phan Hoàng Huy ❤️ 20100609",
  "Trần Thị Minh Thư ❤️ 20100652",
  "Trần Hoàng Hùng ❤️ 21040445",
  "La Minh Tú ❤️ 21111066",
  "Nguyễn Văn Hướng ❤️ 22020199",
  "Trịnh Tú Xương ❤️ 22020211",
  "Nguyễn Minh Phú ❤️ 22020240",
  "Dương Văn Toàn ❤️ 22090801",
  "Chung Thị Huỳnh Nhi ❤️ 23040057",
  "Lê Thành Đạt ❤️ 23070164",
  "Nguyễn Anh Tuấn ❤️ 23080192",
  "Huỳnh Thanh Hằng ❤️ 23080211",
  "Dương Văn Phong ❤️ 23090244",
  "Võ Thị Thúy Danh ❤️ 23110412",
  "Phạm Minh Đạt ❤️ 24020084",
  "Nguyễn Văn Điền ❤️ 24050412",
  "Tạ Liên Khương ❤️ 18040395",
  "Phạm Minh Tuấn ❤️ 17070542",
  "Tô Thị Hồng Quyên ❤️ 18090892",
  "Nguyễn Minh Thành ❤️ 19020044",
  "Hoàng Đức Mạnh ❤️ 08010010",
  "Lê Minh Hiếu ❤️ 09040014",
  "Nguyễn Thị Huệ ❤️ 09040020",
  "Nguyễn Văn Đạo ❤️ 11070102",
  "Trần Quốc Vương ❤️ 11100116",
  "Hà Lê Minh Vũ ❤️ 12120461",
  "Nguyễn Văn Thuận ❤️ 13010004",
  "Nguyễn Tuấn Kiệt ❤️ 13020247",
  "Huỳnh Thị Đào ❤️ 13030468",
  "Thân Tiến Dũng ❤️ 13050681",
  "Nguyễn Đình Trọng ❤️ 13070875",
  "Đoàn Thị Ngọc Nhung ❤️ 13091186",
  "Võ Thanh Trúc ❤️ 13091226",
  "Nguyễn Viết Hạnh ❤️ 13101409",
  "Hồ Thị Hoài Thương ❤️ 13121492",
  "Tô Thiện Trí ❤️ 14080703",
  "Thân Duy Đạo ❤️ 14080704",
  "Trần Thị Kim Tuyến ❤️ 14080730",
  "Nguyễn Thị Luyên ❤️ 14121247",
  "Nguyễn Ngọc Quỳnh Như ❤️ 14121248",
  "Dương Văn Lực ❤️ 14121252",
  "Hà Thị Trang ❤️ 14121256",
  "Bùi Thị Trúc Ly ❤️ 15020127",
  "Trương Thị Ngọc Chi ❤️ 15050434",
  "Thân Đức Tùng ❤️ 15090870",
  "Đào Thị Mỹ Hạnh ❤️ 15091016",
  "Nguyễn Ngọc Hiếu ❤️ 15101177",
  "Nguyễn Trần Hồng Nhung ❤️ 15121508",
  "Ksor H' Duyết ❤️ 17060433",
  "Phạm Nguyên Thảo ❤️ 17060434",
  "Hoàng Thị Xuân ❤️ 17060436",
  "Nguyễn Thị Thúy Hằng ❤️ 17070519",
  "Dương Thụy Hồng Thắm ❤️ 18030207",
  "Lương Ngọc Bích ❤️ 18060625",
  "Lê Văn Son ❤️ 18070719",
  "Trần Thị Thúy ❤️ 18100961",
  "Bùi Thị Cẩm Tiên ❤️ 19020067",
  "Lê Minh Giang ❤️ 19020068",
  "Nguyễn Lâm Thông ❤️ 19101047",
  "Hồ Đăng Khoa ❤️ 20090428",
  "Nguyễn Thanh Phong ❤️ 20090429",
  "Hoàng Thị Hạnh ❤️ 20090430",
  "Võ Thanh Tùng ❤️ 20120819",
  "Nguyễn Ngọc Nhuận ❤️ 21040472",
  "Trần Thị Thanh Tuyền ❤️ 22010028",
  "Dương Thị Ánh Linh ❤️ 22010030",
  "Nguyễn Thị Thùy Linh ❤️ 22020237",
  "Trần Ngọc Phi Yến ❤️ 22020289",
  "Nguyễn Anh Thư ❤️ 22020290",
  "Nguyễn Thị Quyên ❤️ 22020299",
  "Nguyễn Thị Nhi ❤️ 22030396",
  "Nguyễn Thị Thanh Ngân ❤️ 22070678",
  "Lê Ngọc Vinh ❤️ 22070679",
  "Trương Đình Thanh Nhã ❤️ 22070680",
  "Nguyễn Văn Ngọc ❤️ 23010002",
  "Nguyễn Khắc Huy ❤️ 23030027",
  "Bùi Trương Hoàng My ❤️ 23030036",
  "Tô Thị Yến Nhi ❤️ 23040071",
  "Phạm Ngọc Long ❤️ 23040076",
  "Phạm Thị Phương Thảo ❤️ 23060116",
  "Nông Thanh Truyền ❤️ 23060118",
  "Lê Trọng Thủy ❤️ 23060120",
  "Mai Văn Tân ❤️ 23060135",
  "Nguyễn Thu Hường ❤️ 23100361",
  "Nguyễn Văn Nhí ❤️ 24030146",
  "Trương Kim Liên ❤️ 24030213",
  "Trần Thanh Phong ❤️ 09030012",
  "Trương Quốc Tuấn ❤️ 12100383",
  "Lý Thanh Vũ ❤️ 13010083",
  "Nguyễn Quang Nhiên ❤️ 13010085",
  "Huỳnh Tấn Kiên ❤️ 14030514",
  "Nguyễn Việt Quốc ❤️ 14100974",
  "Phạm Quang Vũ ❤️ 15091067",
  "Tăng Xuân Trung ❤️ 10060029",
  "Châu Hồng Đức ❤️ 14030413",
  "Trần Đức Dũng ❤️ 18060636",
  "Lê Công Phúc ❤️ 19100969",
  "Hoàng Thị Xuân ❤️ 23060101",
  "Phan Nguyễn Phi Hùng ❤️ 23090306",
  "Bùi Hữu Ân ❤️ 23120452",
  "Hoàng Anh Thuấn ❤️ 99020007",
  "Phạm Thị Mai Oanh ❤️ 01060006",
  "Trần Thị Tuẫn ❤️ 04030011",
  "Đỗ Thị Ngọc Anh ❤️ 06070030",
  "Lê Tú Quyên ❤️ 13081015",
  "Nguyễn Thị Hồng Phấn ❤️ 13081024",
  "Trịnh Thị Hà ❤️ 13111460",
  "Lê Thị Mỹ Hằng ❤️ 14030522",
  "Dương Thị Thúy Phận ❤️ 15050445",
  "Phạm Thị Hằng ❤️ 15111309",
  "Nguyễn Thị Nhàn ❤️ 16010047",
  "Thái Thị Hiệp ❤️ 16030393",
  "Đoàn Thị Lo ❤️ 16050584",
  "Vũ Văn Chuân ❤️ 16050586",
  "Trần Thị Thu Hương ❤️ 18080781",
  "Ngô Thị Hằng ❤️ 18080814",
  "Trần Thị Diệu My ❤️ 21121245",
  "Trần Văn Hào ❤️ 21121263",
  "Lê Thị Nga ❤️ 23010003",
  "Lê Thị Mừng ❤️ 23120476",
  "Phạm Sanh Hải ❤️ 06060038",
  "Nguyễn Thị Ái ❤️ 12050177",
  "Bùi Tuấn Đạt ❤️ 12120296",
  "Nguyễn Tấn Thọ ❤️ 15050412",
  "Tạ Hoàng Thành ❤️ 19090799",
  "Trần Thanh Tuấn ❤️ 21050586",
  "Nguyễn Đức Trọng ❤️ 22020184",
  "Nguyễn Thế Hiền ❤️ 23090267",
  "Nguyễn Nhật Tảo ❤️ 23090269",
  "Phạm Thị Bích Vân ❤️ 00090020",
  "Ngô Thị Luyến ❤️ 04030010",
  "Vòng Cấm Mùi ❤️ 05010006",
  "Mai Lê Thúy Bình ❤️ 05070021",
  "Quách Thị Ngọc Thủy ❤️ 06020009",
  "Nguyễn Huỳnh Minh Trang ❤️ 06020010",
  "Huỳnh Thị Thanh Giang ❤️ 06020012",
  "Nguyễn Thị Diễm Thúy ❤️ 06020019",
  "Ngô Thị Đông ❤️ 06120046",
  "Trần Thị Hồng Gấm ❤️ 06120049",
  "Đỗ Ngọc Lý ❤️ 06120050",
  "Hoàng Thị Hiên ❤️ 07030006",
  "Nguyễn Thị Hương ❤️ 09020010",
  "Lê Thị Minh ❤️ 11030065",
  "Phạm Thị Nhật Hà ❤️ 12010053",
  "Nguyễn Thị Oanh ❤️ 12030118",
  "Vũ Thị Phương Thảo ❤️ 12030120",
  "Nguyễn Thị Thu Thủy ❤️ 12040153",
  "Trần Thị Thanh Trang ❤️ 12040154",
  "Lê Thị Hương ❤️ 12070370",
  "Lày Cẩm Vân ❤️ 13020225",
  "Phạm Thị Thúy Hà ❤️ 13040632",
  "Nguyễn Thị Hạnh ❤️ 13060837",
  "Trần Thị Yến ❤️ 13060844",
  "Trịnh Thị Hằng ❤️ 13091230",
  "Phạm Thị Ngọc Châm ❤️ 13121549",
  "Đàm Thị Thu Hiền ❤️ 14010052",
  "Nguyễn Thị Huyền Dung ❤️ 14020284",
  "Lê Thị Kim Quyên ❤️ 14020301",
  "Nguyễn Thị Thanh Đài ❤️ 14020342",
  "Hồ Xuân Hương ❤️ 14020351",
  "Nguyễn Ngọc Nhã Khanh ❤️ 14030555",
  "Trương Thị Tuyến ❤️ 14090829",
  "Tô Thị Ngọc Thi ❤️ 14090915",
  "Vũ Nguyễn Quỳnh Như ❤️ 14111042",
  "Phan Thanh Thủy ❤️ 14111080",
  "Vũ Nguyễn Thanh Hằng ❤️ 15030235",
  "Nguyễn Ngọc Thanh Hằng ❤️ 15030243",
  "Nguyễn Ngọc Nhất Linh ❤️ 15030323",
  "Phạm Thị Xí ❤️ 15030331",
  "Trần Ngọc Nhiên ❤️ 15030349",
  "Trương Thị Phương Thảo ❤️ 15070576",
  "Mai Thị Vân ❤️ 15070637",
  "Nguyễn Xuân Tú ❤️ 15101227",
  "Huỳnh Hoàng Nam ❤️ 15111442",
  "Bùi Thị Yến ❤️ 16090847",
  "Lê Thị Hoài Thơ ❤️ 16090850",
  "Võ Thị Hồng Tâm ❤️ 16100875",
  "Nguyễn Đặng Quỳnh Trang ❤️ 16100881",
  "Lê Thị Tiến ❤️ 16100885",
  "Nguyễn Thị Bình Minh ❤️ 16110940",
  "Nguyễn Thị Lan Vy ❤️ 18100999",
  "Nguyễn Thị Thu Trang ❤️ 18101007",
  "Lê Cảnh Hiếu ❤️ 13020206",
  "Nguyễn Việt Sang ❤️ 18101038",
  "Nguyễn Minh Đoàn ❤️ 19111229",
  "Lê Hoàng Anh Dũng ❤️ 19121306",
  "Lê Thị Tuyết Nhung ❤️ 13020216",
  "Trần Ý Nghĩa ❤️ 13040642",
  "Phạm Thị Ngọc ❤️ 14090896",
  "Huỳnh Thị Điện ❤️ 15010003",
  "Đào Thị Thanh Chi ❤️ 15060515",
  "Phan Thị Thủy Tiên ❤️ 15060516",
  "Trịnh Thị Mai Nhi ❤️ 18010005",
  "Nguyễn Thị Kim Yến ❤️ 18010032",
  "Trịnh Thị Diễm Hương ❤️ 18050490",
  "Nguyễn Thị Thùy Trang ❤️ 18060626",
  "Huỳnh Thị Yến Nhi ❤️ 18090871",
  "Trần Thị Hằng ❤️ 18101029",
  "Phan Thị Nhung ❤️ 19100926",
  "Huỳnh Thị Mỹ Duyên ❤️ 21020077",
  "Nguyễn Thị Tân ❤️ 21030285",
  "Đặng Thị Kim Thảo ❤️ 21040398",
  "Đỗ Thị Hà Ly ❤️ 21040416",
  "Ngô Văn Tài ❤️ 21040486",
  "Phạm Thị Tuyết Nga ❤️ 21050527",
  "Ksor H'Đói ❤️ 21060663",
  "Nguyễn Thị Ngọc Hà ❤️ 21060665",
  "Nguyễn Thị Nhâm ❤️ 21121275",
  "Trần Thị Kim Đông ❤️ 22010026",
  "Nguyễn Thị Phương Thanh ❤️ 22020224",
  "Lang Thùy Trang ❤️ 22020228",
  "Trần Thị Bích Ngọc ❤️ 22040493",
  "H'Nek Êban ❤️ 22040497",
  "Dương Thị Hoài Thương ❤️ 23080199",
  "Nguyễn Thị Hồng Loan ❤️ 23080201",
  "Phạm Ngọc Trâm ❤️ 23080204",
  "Trần Huyền Diệu ❤️ 23080205",
  "Nguyễn Thị Chúc Ly ❤️ 23080206",
  "Nguyễn Ngọc Như Ý ❤️ 23090270",
  "Nguyễn Thị Tuyết Sương ❤️ 23090271",
  "Trần Thị Minh Thuận ❤️ 23090272",
  "Lê Thị Chúc Muội ❤️ 23090273",
  "Nguyễn Hoàng Yến Vy ❤️ 23090274",
  "Võ Thị Thanh Ngân ❤️ 24020088",
  "Trần Thúy Vy ❤️ 24020089",
  "Đào Lê Thị Loan ❤️ 24020091",
  "Đặng Thị Mỹ Trang ❤️ 24020092",
  "Nguyễn Thị Kim Phượng ❤️ 24020096",
  "Trương Thị Hải ❤️ 24020097",
  "Huỳnh Ngọc Giang ❤️ 24020098",
  "Lê Hoài Thu ❤️ 24020100",
  "Mai Thanh Thủy ❤️ 24020101",
  "Nguyễn Thị Khánh Linh ❤️ 04100015",
  "Nguyễn Khắc Giác ❤️ 06110043",
  "Nguyễn Mai Khanh ❤️ 11010058",
  "Lê Thị Hằng ❤️ 12100409",
  "Trần Tấn Quốc ❤️ 13060863",
  "Đoàn Uyển Nhi ❤️ 22080739",
  "Bùi Thúy Hòa ❤️ 99090060",
  "Nguyễn Huỳnh Tố Nguyên ❤️ 16040490",
  "Nguyễn Hồng Thắm ❤️ 23090281",
  "Nguyễn Tiến Dũng ❤️ 13060854",
  "Bùi Thị Tuyết Sương ❤️ 13101375",
  "Lâm Hoàng Bảo ❤️ 13121525",
  "Trần Phương Du ❤️ 14010036",
  "Vũ Quang Đôi ❤️ 14010061",
  "Nguyễn Thị Cẩm Loan ❤️ 14020091",
  "Nguyễn Kiên Định ❤️ 14020114",
  "Trương Thị Cẩm Nhung ❤️ 14080717",
  "Võ Duy Cảnh ❤️ 15010041",
  "Võ Thị Bích Tuyền ❤️ 15010043",
  "Nguyễn Thị Mỹ Chi ❤️ 15050451",
  "Trần Nguyễn Trung Nguyên ❤️ 16060623",
  "Trần Công Thanh ❤️ 17040243",
  "Huỳnh Thanh Lam ❤️ 17050417",
  "Võ Bảo Sơn ❤️ 17080676",
  "Võ Hữu Bảo ❤️ 17100813",
  "Dương Tấn Lộc ❤️ 18060637",
  "Dương Ngọc Yến ❤️ 19030221",
  "Hoàng Văn Hùng ❤️ 20090427",
  "Phan Hoàng Tôn ❤️ 21030229",
  "Cao Mạnh Cường ❤️ 21060707",
  "Bùi Văn Nghĩ ❤️ 21060708",
  "Nguyễn Thanh Hải ❤️ 21111039",
  "Lê Thị Ngọc Dư ❤️ 22090878",
  "Nguyễn Thành Trí ❤️ 22090880",
  "Nguyễn Cường Thịnh ❤️ 22090881",
  "Nguyễn Hoàng Sang ❤️ 23020009",
  "Phạm Đình Lợi ❤️ 23020023",
  "Võ Thị Thu An ❤️ 23070144",
  "Nguyễn Thanh Phụng ❤️ 23070145",
  "Nguyễn Thị Thanh Tuyền ❤️ 23070146",
  "Nguyễn Lưu Vũ ❤️ 23070159",
  "Vũ Thị Nhung ❤️ 00090019",
  "Vũ Thị Minh ❤️ 06020021",
  "Nguyễn Thị Thu Thảo ❤️ 12050170",
  "Hoàng Ngọc Phi Phượng ❤️ 12120442",
  "Bùi Hữu Hạnh ❤️ 13040505",
  "Nguyễn Thị Minh Xuân ❤️ 13040634",
  "Lại Thị Kim Oanh ❤️ 14020306",
  "Trần Thị Ngọc Vân ❤️ 15030320",
  "Nguyễn Ngọc Khánh Châu ❤️ 16030276",
  "Nguyễn Thị Hồng Nhung ❤️ 16100928",
  "Trương Thị Hồng Thắm ❤️ 16110944",
  "Nguyễn Thị Như ❤️ 18030099",
  "Nguyễn Thị Ánh ❤️ 18070696",
  "Ao Thị Nhựt Trinh ❤️ 19010023",
  "Phạm Thị Cẩm Tiên ❤️ 22050562",
  "Hồ Hải Yến ❤️ 22080747",
  "Nguyễn Thị Hồng Gấm ❤️ 23120444",
  "Hoàng Thị Mộng Điệp ❤️ 98090001",
  "Quách Thị Cẩm Loan ❤️ 99020024",
  "Phạm Đình Quốc Diễm Kiều ❤️ 99100066",
  "Bùi Minh Đức ❤️ 14090772",
  "Hoàng Thị Thúy ❤️ 15091018",
  "Hồ Thị Hồng Hạnh ❤️ 16020216",
  "Phan Văn Toàn ❤️ 17040258",
  "Bùi Văn Nạp ❤️ 17070539",
  "Nguyễn Thanh Tùng ❤️ 17090746",
  "Lê Đăng Hoàng ❤️ 17110889",
  "Lê Hoàng Kim Chi ❤️ 17110894",
  "Huỳnh Văn Chi ❤️ 18060627",
  "Nguyễn Hưng Khánh ❤️ 19030247",
  "Ngô Minh Khải ❤️ 19040278",
  "Nguyễn Thống Trị ❤️ 20030319",
  "Nguyễn Văn Thi ❤️ 20040333",
  "Nguyễn Thị Tuyết ❤️ 21030231",
  "Đỗ Tấn Đạt ❤️ 21040443",
  "Đỗ Thị Thúy Hằng ❤️ 21040464",
  "Trần Nhân Hậu ❤️ 22020122",
  "Phan Mạnh Minh ❤️ 22030437",
  "Nguyễn Thị Huỳnh Như ❤️ 22090934",
  "Ngô Hoài Thương ❤️ 23060114",
  "Đinh Thị Hiền Lương ❤️ 23060115",
  "Đinh Trọng Hiếu ❤️ 23060136",
  "Phạm Quang Vinh ❤️ 23100332",
  "Trần Xuân Lợi ❤️ 23110406",
  "Triệu Thành Tín ❤️ 23120475",
  "Đào Thanh Dự ❤️ 24010005",
  "Đỗ Đức Toàn ❤️ 24010006",
  "Võ Thu Ngân ❤️ 24030141",
  "Huỳnh Văn Hiền ❤️ 12110279",
  "Vũ Thị Hồng Ân ❤️ 13040516",
  "Nguyễn Thị Bích Giang ❤️ 13040641",
  "Rah Lan H'Nguêt ❤️ 19101055",
  "Nguyễn Cà Chuôl ❤️ 22020145",
  "Dương Kim Yến ❤️ 22020229",
  "Nguyễn Thúy Nhi ❤️ 22020302",
  "Nguyễn Thanh Nga ❤️ 22030392",
  "Hồ Sỷ An ❤️ 23090290",
  "Bùi Thị Thùy Trang ❤️ 13040552",
  "Nguyễn Văn Viễn ❤️ 13101419",
  "Nguyễn Thị Thanh Cúc ❤️ 18030095",
  "Võ Ánh Dương ❤️ 18030163",
  "Đỗ Thị Thu Diễm ❤️ 18060642",
  "Trần Thị Như Ý ❤️ 18070662",
  "Phan Anh Bảo Ngọc ❤️ 18100955",
  "Nguyễn Cu Đen ❤️ 20100571",
  "Châu Tiến Đạt ❤️ 21060774",
  "Nguyễn Minh Nhựt ❤️ 22080758",
  "Phan Thị Yến Nhi ❤️ 23060105",
  "Nguyễn Hoài Sơn ❤️ 23070165",
  "Lê Trường Sinh ❤️ 23080179",
  "Nguyễn Thị Sa ❤️ 23080207",
  "Nguyễn Công Anh Hoàng ❤️ 23100317",
  "Trần Minh Phương ❤️ 12080346",
  "Nguyễn Thanh Tuấn ❤️ 12100381",
  "Nguyễn Thị Mộng Tuyền ❤️ 13010022",
  "Trương Thị Thanh Tông ❤️ 13010023",
  "Huỳnh Thị Trang ❤️ 13010024",
  "Lê Thị Tuyết Mai ❤️ 13010043",
  "Nguyễn Thị Xuyên ❤️ 13020241",
  "Võ Kim Thoa ❤️ 13020243",
  "Phạm Thị Hoa ❤️ 13030299",
  "Đào Thị Dương ❤️ 13040513",
  "Trần Thị Trúc Hà ❤️ 13040602",
  "Bùi Tá Giang ❤️ 13050766",
  "Trần Kim Cúc ❤️ 13050776",
  "Bùi Thị Thanh Trúc ❤️ 13050779",
  "Đặng Thị Ánh Hồng ❤️ 13121611",
  "Nguyễn Thị Ngọc Trâm ❤️ 14020145",
  "Trần Thị Nguyện ❤️ 14020149",
  "Nguyễn Thị Thanh Trúc ❤️ 14080698",
  "Trần Thị Anh Thư ❤️ 14090889",
  "Nguyễn Hoàng Ánh Tuyết ❤️ 14100936",
  "Nguyễn An ❤️ 14111137",
  "Võ Thị Tuyết ❤️ 14121217",
  "Nguyễn Thị Yến ❤️ 15010047",
  "La Hoàng Ngọc Vân ❤️ 15010088",
  "Nguyễn Thị Nam ❤️ 15020109",
  "Lê Thị Hương ❤️ 15030140",
  "Trương Anh Kim Tước ❤️ 15060498",
  "Nguyễn Thị Thùy Trang ❤️ 15060509",
  "Nguyễn Thị Ngọc Hà ❤️ 15060510",
  "Đặng Thị Tuyết ❤️ 15060514",
  "Huỳnh Thị Trắng ❤️ 15070584",
  "Võ Thị Hồng Gấm ❤️ 15090883",
  "Nguyễn Thị Thu Hương ❤️ 15090887",
  "Nguyễn Thị Phương Dung ❤️ 15090888",
  "Nguyễn Hoàng Yến ❤️ 15091025",
  "Kiều Quốc Tài ❤️ 16070708",
  "Đặng Ngọc Chương ❤️ 17100830",
  "Vũ Minh Phụng ❤️ 18030154",
  "Mai Văn Thắng ❤️ 19020146",
  "Nguyễn Thị Thanh Hằng ❤️ 19090881",
  "Bạch Văn Tuấn ❤️ 20120823",
  "Phạm Ngọc Hữu Phước ❤️ 21010019",
  "Nguyễn Thị Hồng An ❤️ 21050587",
  "Lê Thị Thu Hiền ❤️ 21050647",
  "Trần Thị Huyền Trân ❤️ 21060734",
  "Mai Thị Kim Anh ❤️ 21060800",
  "Nguyễn Thị Hồng My ❤️ 21111068",
  "Trịnh Minh Thương ❤️ 21111129",
  "Nguyễn Hoàng Nam ❤️ 21111168",
  "Lâm Thị Ly Na ❤️ 21121173",
  "Lê Hoài Ân ❤️ 21121198",
  "Nguyễn Hồng Phong ❤️ 22010050",
  "Nguyễn Hữu Nhàn ❤️ 22020141",
  "Nguyễn Công Tuấn ❤️ 22090786",
  "Nguyễn Thị Hồng Đoan ❤️ 22090883",
  "Phan Thị Phương Dung ❤️ 22090884",
  "Nguyễn Thế Dinh ❤️ 23090293",
  "Nguyễn Bảo Anh ❤️ 23090294",
  "Bạch Ngọc Phú ❤️ 23090299",
  "Trịnh Minh Nhựt Tài ❤️ 24020099",
  "Nguyễn Trí Danh ❤️ 24030150",
  "Nguyễn Minh Quân ❤️ 24030151",
  "Hồ Thị Thủy Tiên ❤️ 24030162",
  "Lê Nguyễn Yến Na ❤️ 24030219",
  "Phạm Văn Thành ❤️ 13010030",
  "Đàm Văn Tính ❤️ 13111431",
  "Trần Đức Hùng ❤️ 14020181",
  "Nguyễn Trọng Hoàn ❤️ 14020239",
  "Phạm Đình Vũ ❤️ 15111420",
  "Nguyễn Thị Hồng Hạnh ❤️ 15121511",
  "Trang Thị Thùy Linh ❤️ 15121515",
  "Nguyễn Chiến Ngọc Dũng ❤️ 16080752",
  "Nguyễn Hoàng Duy ❤️ 18090920",
  "Lê Gia Tuấn ❤️ 19050312",
  "Nguyễn Ngọc Hải My ❤️ 19090746",
  "Lê Minh Quân ❤️ 20090489",
  "Lê Minh Vũ ❤️ 22030397",
  "Lê Quang Hậu ❤️ 23020018",
  "Hồ Anh Thương ❤️ 23120477",
  "Dương Chí Thiện ❤️ 24010029",
  "Nguyễn Minh Tùng ❤️ 12100393",
  "Nguyễn Thị Huỳnh Anh ❤️ 13030370",
  "Nguyễn Trí Hưng ❤️ 13081177",
  "Trần Cảnh Nết ❤️ 14100976",
  "Âu Thị Quỳnh Như ❤️ 18050550",
  "Trần Thị Quỳnh Như ❤️ 18090846",
  "Nguyễn Hữu Hiển ❤️ 20030189",
  "Trương Chí Nguyễn ❤️ 20100610",
  "Nguyễn Minh Quân ❤️ 22040510",
  "Phạm Thị Hải Ninh ❤️ 23090245",
  "Nguyễn Văn Đức ❤️ 24030191",
  "Nguyễn Thị Thùy ❤️ 24040248",
  "Nguyễn Thị Hằng ❤️ 24040263",
  "Đinh Văn Dương ❤️ 24050377",
  "Đào Thị Kim Thuận ❤️ 13091260",
  "Nguyễn Huy Thuật ❤️ 15111417",
  "Phan Chí Toàn ❤️ 19020126",
  "Phạm Hoàng Minh ❤️ 14050654",
  "Nguyễn Đức Tùng ❤️ 17040256",
  "Lưu Thị Nhung ❤️ 18111067",
  "Phạm Thị Thủy ❤️ 20090486",
  "Trần Văn Hoàng ❤️ 23070143",
  "Lương Khánh Hoàng ❤️ 23090246",
  "Nguyễn Tiến Dũng ❤️ 18121143",
  "Lê Hoàng Minh ❤️ 19050318",
  "Lê Chí Trí ❤️ 19101071",
  "Huỳnh Công Bình ❤️ 19111271",
  "Trần Văn Khởi ❤️ 21111137",
  "Vũ Đức Trường ❤️ 22070683",
  "Hoàng Ngọc Châu ❤️ 21111145",
  "Trần Xuân Thủy ❤️ 06020015",
  "Nguyễn Thị Thảo ❤️ 07100020",
  "Lưu Thị Mỹ Châu ❤️ 07120024",
  "Ngô Thị Lệ Ngọc ❤️ 10050028",
  "Mai Văn Quang ❤️ 12100403",
  "Huỳnh Trúc Trinh ❤️ 13081097",
  "Đinh Hiến Thành ❤️ 13121600",
  "Huỳnh Thị Xuân Đào ❤️ 14010031",
  "Lâm Hoàng Oanh ❤️ 15070619",
  "Hồ Thị Kim Ngân ❤️ 17070498",
  "Đặng Thị Kim Ngân ❤️ 18101049",
  "Huỳnh Thanh Liêm ❤️ 19020085",
  "Nguyễn Chí Nghĩa ❤️ 19020087",
  "Hà Phúc Thiện ❤️ 19020139",
  "Nguyễn Thị Ký ❤️ 19101074",
  "Phạm Phú Cường ❤️ 20110686",
  "Nguyễn Minh Nhựt Khanh ❤️ 20110753",
  "Đoàn Duy Thái ❤️ 21040390",
  "Bùi Thị Diệu Hiền ❤️ 21040504",
  "Lê Hồng Hảo ❤️ 21060727",
  "Nguyễn Thị Vân ❤️ 21060740",
  "Thân Thị Hồng Hoa ❤️ 21060758",
  "Lê Thị Thùy Trang ❤️ 22080752",
  "Lê Minh Phước ❤️ 23090247",
  "Phan Hoàng Mỹ ❤️ 24030143",
  "Nguyễn Văn Hải Đăng ❤️ 24050331",
  "Nguyễn Thành Sơn ❤️ 99020040",
];

const prizes = [
  { title: "😘KHUYẾN KHÍCH", count: 21 },
  { title: "5️⃣GIẢI NĂM", count: 15 },
  { title: "4️⃣GIẢI TƯ", count: 15 },
  { title: "3️⃣GIẢI BA", count: 10 },
  { title: "2️⃣GIẢI NHÌ", count: 3 },
  { title: "1️⃣GIẢI NHẤT", count: 1 },
  { title: "🫅🏼GIẢI ĐẶC BIỆT", count: 1 },
];

let winners = [];
let remainingParticipants = [...participants];
let currentPrizeIndex = 0;
let currentPrizeCount = 0;
let k = 0;

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function drawWinner(prizeTitle) {
  if (remainingParticipants.length === 0) {
    alert("Không còn người tham gia nào để quay!");
    return null;
  }
  const randomIndex = getRandomInt(remainingParticipants.length);
  const winner = {
    prize: prizeTitle,
    name: remainingParticipants[randomIndex],
  };
  remainingParticipants.splice(randomIndex, 1);
  return winner;
}

function handleDrawPrize() {
  const prize = prizes[currentPrizeIndex];
  const winner = drawWinner(prize.title);
  if (winner) {
    winners.push(winner);
    addWinnerToList(winner);

    currentPrizeCount++;
    if (currentPrizeCount >= prize.count) {
      currentPrizeIndex++;
      currentPrizeCount = 0;
      k = 0;
    }

    showNextButton();
  }
}
function addWinnerToList(winner) {
  k++;
  const winnersList = document.getElementById("winnersList");
  const listItem = document.createElement("li");

  // Tạo màu chữ dựa trên từng giải
  let color = "";
  switch (winner.prize) {
    case "🫅🏼GIẢI ĐẶC BIỆT":
      color = "red"; // Đặt màu chữ cho giải đặc biệt là đỏ
      break;
    case "1️⃣GIẢI NHẤT":
      color = "blue"; // Đặt màu chữ cho giải nhất là xanh
      break;
    case "2️⃣GIẢI NHÌ":
      color = "green"; // Đặt màu chữ cho giải nhì là màu xanh lá cây
      break;
    case "3️⃣GIẢI BA":
      color = "purple"; // Đặt màu chữ cho giải ba là màu tím
      break;
    case "4️⃣GIẢI TƯ":
      color = "orange"; // Đặt màu chữ cho giải tư là màu cam
      break;
    case "5️⃣GIẢI NĂM":
      color = "brown"; // Đặt màu chữ cho giải năm là màu nâu
      break;
    case "😘KHUYẾN KHÍCH":
      color = "gray"; // Đặt màu chữ cho giải khuyến khích là màu xám
      break;
    default:
      color = "black"; // Màu chữ mặc định là đen
      break;
  }
  // Tạo nội dung cho listItem với màu chữ được chọn
  const text = `${k}.${winner.prize}: ${winner.name}`;
  listItem.innerHTML = `<span style="color: ${color};"></span>`;
  // k++;
  winnersList.appendChild(listItem);

  // Hiển thị từng ký tự sau 3 giây
  setTimeout(() => {
    const span = listItem.querySelector("span");
    let index = 0;
    const interval = setInterval(() => {
      if (index < text.length) {
        span.innerHTML += text[index];
        index++;
      } else {
        clearInterval(interval);
      }
    }, 100); // Hiển thị một ký tự mỗi 100ms
  }, 15); // Trì hoãn 3 giây trước khi bắt đầu
  // Xóa các phần tử li cũ sau 3 giây
  setTimeout(() => {
    const items = winnersList.querySelectorAll("li");
    if (items.length > 1) {
      items[0].classList.add("fade-out");
      setTimeout(() => {
        winnersList.removeChild(items[0]);
      }, 1200); // Thời gian cho hiệu ứng fade out
    }
  }, 60000);
}
function showNextButton() {
  const buttons = document.querySelectorAll("#buttonsContainer button");
  buttons.forEach((button, index) => {
    if (index === currentPrizeIndex) {
      button.style.display = "inline-block";
    } else {
      button.style.display = "none";
    }
  });
}
const videoContainer = document.getElementById("myVideo");
function createPrizeButtons() {
  const buttonsContainer = document.getElementById("buttonsContainer");
  const Container = document.getElementById("cc");
  buttonsContainer.innerHTML = ""; // Xóa các nút cũ nếu có

  prizes.forEach((prize) => {
    const button = document.createElement("button");
    button.textContent = "QUAY";
    button.addEventListener("click", function () {
      playSound();
      videoContainer.play();
      document.getElementById("backBtn").style.display = "block";
      Container.style.display = "block"; // Ẩn container khi click vào nút "QUAY"
      setTimeout(function () {
        Container.style.display = "block";
        endSound(); // Hiển thị lại sau 2 giây
      }, 15);
      handleDrawPrize(prize); // Gọi hàm xử lý với giải thưởng tương ứng
    });
    buttonsContainer.appendChild(button);
  });
  showNextButton();
}
const audio = document.getElementById("backgroundMusic");
const audio1 = document.getElementById("backgroundMusic1");
function playSound() {
  audio.play();
}
function endSound() {
  const audio = document.getElementById("backgroundMusic");
  audio.pause();
  audio1.play();
  audio.currentTime = 0;
}
function handleBackButton() {
  if (winners.length > 0) {
    const lastWinner = winners.pop();
    remainingParticipants.push(lastWinner.name);
    currentPrizeCount--;
    k--;
    
    if (currentPrizeCount < 0) {
      currentPrizeIndex--;
      currentPrizeCount = prizes[currentPrizeIndex].count - 1;
    }

    const winnersList = document.getElementById("winnersList");
    const items = winnersList.querySelectorAll("li");
    if (items.length > 0) {
      winnersList.removeChild(items[items.length - 1]);
    }

    showNextButton();
  }
}

document.getElementById("backBtn").addEventListener("click", handleBackButton);
document.addEventListener("DOMContentLoaded", () => {
  winners = [];
  remainingParticipants = [...participants];
  document.getElementById("winnersList").innerHTML = "";
  createPrizeButtons();
});
