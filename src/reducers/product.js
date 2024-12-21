const initialState = {
    products: [
      {
        "id": "1",
        "name": "CÔNG TẮC PHA CỐT SSANGYONG KORANDO",
        "brand":"SSANGYONG",
        "price": "89.5",
        "description": "CÔNG TẮC PHA CỐT SSANGYONG KORANDO-8590105192, sản xuất bởi Ssanyong",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2022/12/z3971316075609_e9650a0467510b02d4780b1fd36cc92b-1.jpg"
      },
      {
        "id": "2",
        "name": "ĂNG TEN MAZDA 3",
        "brand":"MAZDA",
        "price": 18.5,
        "description": "ĂNG TEN MAZDA 3 – KD47676NXA sản xuất bởi Mazda oem, phụ tùng chính hãng",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/06/z4343604832287_6c1372ea361269779fca12e1776f2454.jpg"
      },
      {
        "id": "3",
        "name": "BALAST ĐÈN PHA CHEVROLET TRAILBLAZER",
        "brand":"CHEVROLET",
        "price": 115,
        "description": "BALAST ĐÈN PHA CHEVROLET TRAILBLAZER – 1470000153C1 sản xuất bởi GM",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/07/z4350289481373_687c74cca78ebf466a65e3cc609242a8.jpg"
      },
      {
        "id": "4",
        "name": "BALAST ĐÈN PHA VOLVO XC60",
        "brand":"VOLVO",
        "price": 94,
        "description": "BALAST ĐÈN PHA VOLVO XC60 | 32365275 – 32365275, sản xuất bởi Volvo",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/06/z5584494817633_ecff68f2bb870452c17221903e9379ff.jpg"
      },
      {
        "id": "5",
        "name": "BALATS ĐÈN PHA MAZDA 3, CX5, CX9",
        "brand":"MAZDA",
        "price": 80,
        "description": "BALATS ĐÈN PHA MAZDA 3, CX5, CX9-BHN3510H3, sản xuất bởi Mazda",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2019/11/ba8af361cff629a870e7.jpg"
      },
      {
        "id": "6",
        "name": "BALLAST ĐÈN PHA AUDI Q7",
        "brand":"AUDI",
        "price": 95,
        "description": "BALLAST ĐÈN PHA AUDI Q7- 4M0907397AC sản phẩm bởi Audi",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/04/z4162394153328_8ef7d40d741c5b427854c92db364198c.jpg"
      },
      {
        "id": "7",
        "name": "BẢNG CẦU CHÌ KIA SPECTRA",
        "brand":"SPECTRA",
        "price": 50,
        "description": "BẢNG CẦU CHÌ KIA SPECTRA – 919552F021, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/10/z2084600683813_48bb3bd211ad8206ced172e06701a059.jpg"
      },
      {
        "id": "8",
        "name": "BÌNH NƯỚC RỬA DAEWOO MATIZ 2",
        "brand":"DAEWOO",
        "price": 15,
        "description": "BÌNH NƯỚC RỬA KÍNH HYUNDAI COUNTY-983215A100, sản xuất bởi GM",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/08/z1981415868091_d769bc5a4228677b63641928dba75840.jpg"
      },
      {
        "id": "9",
        "name": "BÌNH NƯỚC RỬA KÍNH HYUNDAI COUNTY",
        "brand":"HYUNDAI",
        "price": 25,
        "description": "BÌNH NƯỚC RỬA KÍNH HYUNDAI COUNTY-983215A100, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/05/08f7890906d8fc86a5c9.jpg"
      },
      {
        "id": "10",
        "name": "BỘ ĐẦU LỐC ĐIỀU HÒA TOYOTA LAND CRUISER PRADO",
        "brand":"TOYOTA",
        "price": 120,
        "description": "BỘ ĐẦU LỐC ĐIỀU HÒA TOYOTA LAND CRUISER PRADO-8832060680, sản xuất bởi Toyota Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/06/45725722635b9e05c74a.jpg"
      },
      {
        "id": "11",
        "name": "BỘ ĐIỀU KHIỂN PHÁT SÁNG ĐỘNG CƠ KIA BONGO 3",
        "brand":"KIA",
        "price": 45,
        "description": "BỘ ĐIỀU KHIỂN PHÁT SÁNG ĐỘNG CƠ KIA BONGO 3 – 0K75B18701 sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/07/z4457415439198_390d3d7dcb383b98d1ae83fd6d133086.jpg"
      },
      {
        "id": "12",
        "name": "BƠM NƯỚC KIA MORNING, RIO",
        "brand":"KIA",
        "price": 19,
        "description": "BƠM NƯỚC KIA MORNING, RIO-2510004000 sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2019/03/fce27e15ac294e771738.jpg"
      },
      {
        "id": "13",
        "name": "BƠM NƯỚC RỬA KÍNH KIA CADENZA 2010-2015 | 985102M500",
        "brand":"KIA",
        "price": 17,
        "description": "BƠM NƯỚC RỬA KÍNH KIA CADENZA 2010-2015 | 985102M500, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/09/z5856142843175_55fd3e9b8ac38d43eb25e059a75accdf.jpg"
      },
      {
        "id": "14",
        "name": "BÓNG ĐÈN PHA XENON",
        "brand":"Philips",
        "price": 48,
        "description": "BÓNG ĐÈN PHA XENON – 42403C1, sản xuất bởi Philips",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/10/z2110934676448_ae9cfa9803fb523b3908bf26373a29b0.jpg"
      },
      {
        "id": "15",
        "name": "CẢM BIẾN ÁP SUẤT GA ĐIỀU HÒA PEUGEOT 3008",
        "brand":"PEUGEOT",
        "price": 65,
        "description": "CẢM BIẾN ÁP SUẤT GA ĐIỀU HÒA PEUGEOT 3008-9673006380, sản xuất bởi Peugeot",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 1,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/02/z4087661597928_cd2ade81cae4bfb106f78a7b71694946.jpg"
      },
      {
        "id": "16",
        "name": "BẠC BALIE CHEVROLET AVEO 2006-2010",
        "brand":"CHEVROLET",
        "price": 29,
        "description": "BẠC BALIE CHEVROLET AVEO 2006-2010 – 93742705, sản xuất bởi GM",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/09/z5864900286253_64348c6e114467067e682bb4b1ab6231.jpg"
      },
      {
        "id": "17",
        "name": "BẠC BALIE HONDA CIVIC 2.0",
        "brand":"HONDA",
        "price": 19,
        "description": "BẠC BALIE HONDA CIVIC 2.0 -13321PNA003, sản xuất bởi Honda Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/06/z5541605348269_d8ea5323527b9cba5b65910bcaa237ab.jpg"
      },
      {
        "id": "18",
        "name": "BẠC BALIE KIA SPECTRA",
        "brand":"KIA",
        "price": 23,
        "description": "BẠC BALIE KIA SPECTRA-KK1Y011SG0 sản xuất bởi Kia Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/07/z4505390398216_8bced0343e0c310e6f14f3b21cbcb6da.jpg"
      },
      {
        "id": "19",
        "name": "BẠC ĐẠN TĂNG CAM KIA PRIDE",
        "brand":"KIA",
        "price": 9,
        "description": "BẠC ĐẠN TĂNG CAM KIA PRIDE – 244102X000 sản xuất bởi Parts Mall",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/09/z4689771060095_eb7883a1659a25d1f6c323c5fca8ec01.jpg"
      },
      {
        "id": "20",
        "name": "BẠC ĐẠN TĂNG TỔNG CHEVROLET SPARK",
        "brand":"CHEVROLET",
        "price": 21,
        "description": "BẠC ĐẠN TĂNG TỔNG CHEVROLET SPARK – 96416331GM, sản xuất bởi GM",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/10/z4793651241949_d4101801209b4d9af30b68a424906974.jpg"
      },
      {
        "id": "21",
        "name": "BẠC XÉC MĂNG ACURA RSX",
        "brand":"HONDA",
        "price": 33,
        "description": "BẠC XÉC MĂNG ACURA RSX – 13011PNEG02, sản xuất bởi Honda oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/06/z5538572484822_c308f877ad8484bab2fb6b08b1ab2257.jpg"
      },
      {
        "id": "22",
        "name": "BÁNH ĐÀ AUDI A3",
        "brand":"AUDI",
        "price": 45,
        "description": "BÁNH ĐÀ AUDI A3–415068209, sản xuất bởi LUX",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2022/02/337-1-600x450-1.jpg"
      },
      {
        "id": "23",
        "name": "BÁNH ĐÀ FORD TRANSIT",
        "brand":"FORD",
        "price": 89,
        "description": "BÁNH ĐÀ FORD TRANSIT-1878600558, sản xuất bởi Ford Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2019/08/2e10f2d4ef6d0b33527c.jpg"
      },
      {
        "id": "24",
        "name": "BÁNH ĐÀ HYUNDAI PORTER 2, KIA BONGO 3",
        "brand":"HYUNDAI",
        "price": 119,
        "description": "BÁNH ĐÀ HYUNDAI PORTER 2, KIA BONGO 3-232004A200, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/02/6ac16fdc65e79db9c4f6.jpg"
      },
      {
        "id": "25",
        "name": "BẦU E KIA BONGO 3 81104E000",
        "brand":"KIA",
        "price": 50,
        "description": "BẦU E KIA BONGO 3-81104E000EX, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2021/03/z2357872598918_7f17546100186a759e2d3c5bfdf6a25d.jpg"
      },
      {
        "id": "26",
        "name": "BẦU LỌC GIÓ HONDA ACCORD",
        "brand":"HONDA",
        "price": 27,
        "description": "BẦU LỌC GIÓ HONDA ACCORD-17230R40A00, sản xuất bởi Honda Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2019/08/995d772d759d91c3c88c.jpg"
      },
      {
        "id": "27",
        "name": "BẦU LỌC KHÍ XẢ HYUNDAI TUCSON",
        "brand":"HYUNDAI",
        "price": 147,
        "description": "BẦU LỌC KHÍ XẢ HYUNDAI TUCSON-285302BAD0, sản xuất bởi Hyundai Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2021/09/z2714050916267_cdd4fd6c3173411d3a5af32a2ae04491.jpg"
      },
      {
        "id": "28",
        "name": "BẦU TIÊU ÂM KIA BONGO 3 | 287004E900",
        "brand":"KIA",
        "price": 69,
        "description": "BẦU TIÊU ÂM KIA BONGO 3 | 287004E900 sản xuất bởi Kia oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/06/z5572837437451_23f542a633061d630a2b879899fb0795.jpg"
      },
      {
        "id": "29",
        "name": "BÉC PHUN DẦU KIA SEDONA",
        "brand":"KIA",
        "price": 242,
        "description": "BÉC PHUN DẦU KIA SEDONA – 33800-2F610, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/04/z5350154555766_018d13548ed25dec59a0e27fef5867c7.jpg"
      },
      {
        "id": "30",
        "name": "BI CHỮ THẬP HYUNDAI HD170",
        "brand":"HYUNDAI",
        "price": 65,
        "description": "BI CHỮ THẬP HYUNDAI HD170 – 491407F200, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/10/z4764529502648_9f63d88551d6c9388c9ac90679133c20.jpg"
      },
      {
        "id": "31",
        "name": "BI TĂNG CAM MITSUBISHI GRANDIS",
        "brand":"MITSUBISHI",
        "price": 26,
        "description": "BI TĂNG CAM MITSUBISHI GRANDIS-MD352473, sản xuất bởI Mitsubishi",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/03/5e5f7c5ebd51460f1f40.jpg"
      },
      {
        "id": "32",
        "name": "BI TỲ RÃNH HONDA CIVIC, CRV",
        "brand":"HONDA",
        "price": 20,
        "description": "BI TỲ RÃNH HONDA CIVIC, CRV-31190RL2G01, sản xuất bởi Honda Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/12/z2173892188790_3e97ff9dde9799468c6fdda4ed5fc26d.jpg"
      },
      {
        "id": "33",
        "name": "ẮC NHÍP MITSUBISHI FUSO CANTER",
        "brand":"MITSUBISHI",
        "price": 11,
        "description": "ẮC NHÍP MITSUBISHI FUSO CANTER –TDN0208216, sản xuất bởi Mitsubishi Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2021/08/z2599058212240_020c026857a098b637a0be4804b01e33.jpg"
      },
      {
        "id": "70",
        "name": "BẠC BIÊN BẠC BALIE CHEVROLET CAPTIVA",
        "brand":"CHEVROLET",
        "price": 29,
        "description": "BẠC BIÊN BẠC BALIE CHEVROLET CAPTIVA-93743374, sản xuất bởi Parts Mall",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 2,
        "image_url": "https://phutungotosieure.vn/wp-content/uploads/2020/04/27.jpg"
      },
      {
        "id": "34",
        "name": "ẮC PHANH HYUNDAI PORTER 2",
        "brand":"HYUNDAI",
        "price": 12,
        "description": "ẮC PHANH HYUNDAI PORTER 2-581624F000, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2022/02/z2786431355651_cafad9ce00496bc2fa06113615294c05.jpg"
      },
      {
        "id": "35",
        "name": "BẠC ẮC NHÍP HYUNDAI COUNTY",
        "brand":"HYUNDAI",
        "price": 11,
        "description": "BẠC ẮC NHÍP HYUNDAI COUNTY-497105K700 sản phẩm bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2021/08/z2599122597990_cde8cdf531d73664aec0f6afb2dbb04d.jpg"
      },
      {
        "id": "36",
        "name": "Bạc biên, bạc balie Daewoo Nubira, Chevrolet Vivant",
        "brand":"DAEWOO",
        "price": 25,
        "description": "BẠC BIÊN, BẠC BALIE DAEWOO NUBIRA, CHEVROLET VIVANT-I92067468, sản xuất bởi GMB",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2018/10/39d1a4e35914b94ae005-1.jpg"
      },
      {
        "id": "37",
        "name": "BẠC CÀNG A FORD EVEREST",
        "brand":"FORD",
        "price": 16,
        "description": "BẠC CÀNG A FORD EVEREST – UR56344708 sản xuất bởi Mazda",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/09/z4717349107769_210d36f0f63a7cb2433e5f925189181d.jpg"
      },
      {
        "id": "38",
        "name": "BẠC ĐẠN BÁNH SAU BMW 318I",
        "brand":"BMW",
        "price": 35,
        "description": "BẠC ĐẠN BÁNH SAU BMW 318I– 33416762317 sản xuất bởi BMTS",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/09/z4662765543046_73e32312b67aa3e001855494d500e1c5.jpg"
      },
      {
        "id": "39",
        "name": "BẠC ĐẠN BÁNH SAU HONDA CIVIC 2006-2011 | 42200SNAA52",
        "brand":"HONDA",
        "price": 47,
        "description": "BẠC ĐẠN BÁNH SAU HONDA CIVIC 2006-2011 | 42200SNAA52, sản xuất bởi NTN",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/09/z5830578163913_abbe70411813a208618fba5dba7ec549.jpg"
      },
      {
        "id": "40",
        "name": "BẠC ĐẠN BÁNH SAU PEUOGET 5008",
        "brand":"PEUOGET",
        "price": 80,
        "description": "BẠC ĐẠN BÁNH SAU PEUOGET 5008 – 9803767780, sản xuất bởi Peugeot",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/04/z5343701577765_cd71d497f123ccd7ec2241780594b2c3.jpg"
      },
      {
        "id": "41",
        "name": "BẠC ĐẠN BÁNH TRƯỚC TOYOTA YARIS 2015-2020",
        "brand":"TOYOTA",
        "price": 88,
        "description": "BẠC ĐẠN BÁNH TRƯỚC TOYOTA YARIS 2015-2020 -435600D071, sản xuất bởi TOYOTA",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/05/z5469260314677_cff9c7dfd6d19c56680a54ca0a527964.jpg"
      },
      {
        "id": "42",
        "name": "Bàn ép Chevrolet Spark M300, Daewoo Matiz 4",
        "brand":"CHEVROLET",
        "price": 27,
        "description": "BÀN ÉP CHEVROLET SPARK M300, DAEWOO  MATIZ 4-96980050, sản xuất bởi Valeo",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2018/09/1d1786f570bf90e1c9ae.jpg"
      },
      {
        "id": "43",
        "name": "BAO DA BỌC CẦN SỐ KIA FORTE, CERATO",
        "brand":"KIA",
        "price": 21,
        "description": "BAO DA BỌC CẦN SỐ KIA FORTE, CERATO-846401M000WK, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/08/z2000768338515_370b8ee93d81279c56d74e9419c2823a.jpg"
      },
      {
        "id": "44",
        "name": "Bát bèo Chevrolet Spark m300, Daewoo Matiz 4",
        "brand":"CHEVROLET",
        "price": 12,
        "description": "BÁT BÈO CHEVROLET SPARK M300, DAEWOO MATIZ 4-P13502180, sản xuất bởi Parts Mall",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2018/10/b005b2df043ce462bd2d.jpg"
      },
      {
        "id": "45",
        "name": "BÁT BÈO GIẢM XÓC KIA CERATO",
        "brand":"KIA",
        "price": 19,
        "description": "BÁT BÈO GIẢM XÓC KIA CERATO-546121M000 sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2022/03/z3273106792967_96ed2b850fabf67e651321a09fc1e07e.jpg"
      },
      {
        "id": "46",
        "name": "BÁT BÈO GIẢM XÓC MAZDA 3",
        "brand":"MAZDA",
        "price": 25,
        "description": "BÁT BÈO GIẢM XÓC MAZDA 3 – KD3534380 sản xuất bởi Mazda",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/07/z4347455121986_a1cef21547f8be8c9465244688cb5ed1.jpg"
      },
      {
        "id": "47",
        "name": "BÁT BÈO GIẢM XÓC TRƯỚC JAGUAR XF, XJ",
        "brand":"JAGUAR",
        "price": 50,
        "description": "BÁT BÈO GIẢM XÓC TRƯỚC JAGUAR XJ, XF-C2D51875 sản xuất bởi Jaguar ",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2022/01/z2775814434393_1feabd915db5ec439266014d36e2a4b7-1.jpg"
      },
      {
        "id": "48",
        "name": "BÁT BÈO GIẢM XÓC TRƯỚC SUZUKI 5 TẠ",
        "brand":"SUZUKI",
        "price": 9,
        "description": "BÁT BÈO GIẢM XÓC TRƯỚC SUZUKI 5 TẠ-TDN28081 sản xuất bởi Suzuki Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 3,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2019/08/0b78fd05901777492e06.jpg"
      },
      {
        "id": "49",
        "name": "ẮC PHI DÊ KIA FRONTIER, K2700, K3000, BONGO 3",
        "brand":"KIA",
        "price": 35,
        "description": "ẮC PHI DÊ KIA FRONTIER, K2700, K3000, BONGO 3-30X174, sản xuất bởi Kia Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/06/9afab3e531e1ccbf95f0.jpg"
      },
      {
        "id": "50",
        "name": "ĂNG TEN FORD ECOSPORT, FIESTA, RANGER, ESCAPE",
        "brand":"FORD",
        "price": 21,
        "description": "ĂNG TEN FORD ECOSPORT, FIESTA, RANGER, ESCAPE-EB3T18A886CB, sản xuất bởi Ford",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/05/ed664e4cf1380b665229.jpg"
      },
      {
        "id": "51",
        "name": "ĂNG TEN MAZDA 2",
        "brand":"MAZDA",
        "price": 19,
        "description": "ĂNG TEN MAZDA 2-DA6A66A30A, sản xuất bởi Mazda",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/02/66c785a2646d9c33c57c.jpg"
      },
      {
        "id": "52",
        "name": "ĂNG TEN VÂY CÁ ISUZU MUX",
        "brand":"ISUZU",
        "price": 86,
        "description": "ĂNG TEN VÂY CÁ ISUZU MU-X-8974622790, sản xuất bởi Isuzu",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/06/1cbd90e82ef4d3aa8ae5.jpg"
      },
      {
        "id": "53",
        "name": "BẠC ĐẠN LÁP DỌC FORD ESCAPE",
        "brand":"FORD",
        "price": 54,
        "description": "BẠC ĐẠN LÁP DỌC FORD ESCAPE-7L8Z4800A, sản xuất bởi Motocraft",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/02/2df956ddd44a2c14755b.jpg"
      },
      {
        "id": "55",
        "name": "BẠC ĐẠN TĂNG TỔNG KIA SORENTO 2021-2024",
        "brand":"KIA",
        "price": 45,
        "description": "BẠC ĐẠN TĂNG TỔNG KIA SORENTO 2021-2024 | 252812R001, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/10/z5909026849218_b9f61547782c64c44c0396e8512731d4.bak_.jpg"
      },
      {
        "id": "56",
        "name": "BẠC ĐẠN TỲ TỔNG KIA FRONTIER | 252884A600",
        "brand":"KIA",
        "price": 19,
        "description": "BẠC ĐẠN TỲ TỔNG KIA FRONTIER | 252884A600, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2024/08/z5707058371072_24eb6ed3e3d5b1b4908356b00488c769.jpg"
      },
      {
        "id": "57",
        "name": "BÀN ĐẠP CHÂN GA HYUNDAI HD65",
        "brand":"HYUNDAI",
        "price": 15,
        "description": "BÀN ĐẠP CHÂN GA HYUNDAI HD65 -327105H001, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2022/04/z3317545208409_3201dfdaf558784cfd97550f5965777c-1.jpg"
      },
      {
        "id": "58",
        "name": "BÀN ĐẠP CHÂN GA FORD EVEREST",
        "brand":"FORD",
        "price": 155,
        "description": "BÀN ĐẠP CHÂN GA FORD EVEREST-AB399F836, sản xuất bởi Ford",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2023/02/z4083760617202_36321aacf05cd1a044a7bce60091f802.jpg"
      },
      {
        "id": "59",
        "name": "BÀN ĐẠP CHÂN GA KIA MORNING",
        "brand":"KIA",
        "price": 47,
        "description": "BÀN ĐẠP CHÂN GA KIA MORNING-327001Y200, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/12/z2195618612022_67f6225faab53a797fa505440128a759.jpg"
      },
      {
        "id": "60",
        "name": "BÀN ĐẠP CHÂN GA SUZUKI 5 TẠ",
        "brand":"SUZUKI",
        "price": 9,
        "description": "BÀN ĐẠP CHÂN GA SUZUKI 5 TẠ-TDN02706, sản xuất bởi Suzuki Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2019/06/b27344e11689f2d7ab98.jpg"
      },
      {
        "id": "61",
        "name": "Bàn lề cánh cửa Ford Transit",
        "brand":"FORD",
        "price": 16,
        "description": "BÀN LỀ CÁNH CỬA FORD TRANSIT-TDN1710, sản xuất bởi Ford",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2018/10/6ba6f31f39ddd98380cc.jpg"
      },
      {
        "id": "62",
        "name": "BÀN ĐI SỐ HYUNDAI PORTER 2, PORTER 150",
        "brand":"HYUNDAI",
        "price": 50,
        "description": "BÀN ĐI SỐ HYUNDAI PORTER 2, PORTER 150-437004F020, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2019/10/30f77a8d4ce7aab9f3f6.jpg"
      },
      {
        "id": "63",
        "name": "BẢN LỀ CÁNH CỬA TOYOTA CAMRY, INNOVA",
        "brand":"TOYOTA",
        "price": 10,
        "description": "BẢN LỀ CÁNH CỬA TOYOTA CAMRY, INNOVA-687500P010, sản xuất bởi Toyota Oem",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2019/04/03fd3cde3549d7178e58.jpg"
      },
      {
        "id": "64",
        "name": "BẢN LỀ NẮP CA BO TOYOTA VIOS",
        "brand":"TOYOTA",
        "price": 19,
        "description": "BẢN LỀ NẮP CAPO TOYOTA VIOS- 53420-0D400 sản xuất bởi Toyota",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2022/05/z3421526274270_f704983a0457ec0cd7a61bda480f0385-e1652847159207.jpg"
      },
      {
        "id": "65",
        "name": "BẢNG TÁP LÔ HONDA CITY",
        "brand":"HONDA",
        "price": 368,
        "description": "BẢNG TÁP LÔ HONDA CITY-TDN0804 sản xuất bởi Honda",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/04/26e5ffadf931026f5b20-1.jpg"
      },
      {
        "id": "66",
        "name": "BẢNG TÁP LÔ HYUNDAI GETZ",
        "brand":"HYUNDAI",
        "price": 208,
        "description": "BẢNG TÁP LÔ HYUNDAI GETZ-847101C253 sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2020/05/313ca26ce0671a394376.jpg"
      },
      {
        "id": "67",
        "name": "BAO DA BỌC CẦN SỐ CHEVROLET SPARK, DAEWOO MATIZ 3",
        "brand":"CHEVROLET",
        "price": 11,
        "description": "BAO DA BỌC CẦN SỐ CHEVROLET SPARK, DAEWOO MATIZ 3- 96457375, sản xuất bởi Mercedes OEM",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2019/02/7bd1130166068458dd17.jpg"
      },
      {
        "id": "68",
        "name": "BÁT BÈO GIẢM XÓC TRƯỚC BMW 320I, 325I",
        "brand":"BMW",
        "price": "35",
        "description": "BÁT BÈO GIẢM XÓC TRƯỚC BMW 320I, 325I – 31336760943, sản xuất bởi Frey",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2022/05/z3408808802086_02685bd3f3241e3a6a3989f05c28ff15-e1652349467937.jpg"
      },
      {
        "id": "69",
        "name": "BÁT NHÍP HYUNDAI PORTER 2",
        "brand":"HYUNDAI",
        "price": "15",
        "description": "BÁT NHÍP HYUNDAI PORTER 2-5525044103, sản xuất bởi Mobis",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://muaphutungoto.vn/wp-content/uploads/2019/06/61065af271769428cd67.jpg"
      },
      {
        "id": "71",
        "name": "BÀN ĐẠP CHÂN GA FORD RANGER",
        "brand":"FORD",
        "price": "50",
        "description": "BÀN ĐẠP CHÂN GA FORD RANGER – AB399F836 sản xuất bởi FORD",
        "created_at": "CURRENT_TIMESTAMP",
        "updated_at": "CURRENT_TIMESTAMP",
        "category_id": 4,
        "image_url": "https://phutungotosieure.vn/wp-content/uploads/2023/01/B%C3%80N-%C4%90%E1%BA%A0P-CH%C3%82N-GA-FORD-RANGER.jpg"
      }
    ],
};


const productReducer = (state = initialState, action) => {
    switch(action.type){
        case "DETAIL":
            return {
                ...state,
                id:action.id
            }
        default:
            return state;
    }
}
export default productReducer;