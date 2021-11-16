const categories = [
    {
        id: 1,
        name: "grocery",
        imageUrl: "https://dkstatics-public.digikala.com/digikala-categories/2d17f04eb6e8ba7d91b0a5c5d3c5ada45ae0cf93_1621765237.jpg?x-oss-process=image/resize,m_fill,h_380,w_170/quality,q_90",
        count: 10,
        items: [
            {
                title: "روغن سبوس برنج مری کینگ - 1800 میلی لیتر",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/7e087356b410e1af723d7693b84bde625fe9904c_1625991562.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 270000,
                discountPersent: 10,
                price: 243000,
                sellCounter: 0
            },
            {
                title: "زعفران درجه یک مصطفوی - 4.608 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/114356296.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 145700,
                discountPersent: 43,
                price: 82000,
                sellCounter: 0
            },
            {
                title: "برنج طارم ممتاز گلستان - 10 کیلوگرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/33c369a82b613badd2b4b20fc810ff15bc535869_1601119232.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 639500,
                discountPersent: 0,
                price: 639500,
                sellCounter: 0
            },
            {
                title: "روغن نیمه جامد لادن - 5 کیلوگرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/111984180.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 91000,
                discountPersent: 0,
                price: 91000,
                sellCounter: 0
            },
            {
                title: "روغن مایع آفتابگردان حاوی ویتامین دی و ای لادن - 1.8 لیتر",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/49e7c1a2c92b24c67ec30a36a9d10860424f3f40_1596616288.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 27100,
                discountPersent: 0,
                price: 27100,
                sellCounter: 1
            },
            {
                title: "برنج دم سیاه درجه یک آقاجانیان - 10 کیلوگرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/112069780.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 588000,
                discountPersent: 0,
                price: 588000,
                sellCounter: 1
            },
            {
                title: "ماکارونی گرامینیا زر ماکارون مقدار 500 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/c056f666e23214b59b404f3cf938e303c1500758_1607497926.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 73660,
                discountPersent: 14,
                price: 6300,
                sellCounter: 0
            },
            {
                title: "مایه خمیر ساف لوور - 125 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/64a2a7dce526d1072e21ffde6cdb17838e87044e_1622039473.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 99000,
                discountPersent: 0,
                price: 99000,
                sellCounter: 1
            },
            {
                title: "روغن حیوانی کرمانشاهی مخصوص نیک منش - 900 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/121371969.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 225000,
                discountPersent: 16,
                price: 189000,
                sellCounter: 0
            },
            {
                title: "حبوبات 125 - 450 گرم بسته 4 عددی",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/2936af7d5c959e7298192e905a39907e1a92ecae_1626505276.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 117500,
                discountPersent: 20,
                price: 94040,
                sellCounter: 0
            }
        ]
    },
    {
        id: 2,
        name: "dairy",
        imageUrl: "https://dkstatics-public.digikala.com/digikala-categories/45b324263b9209e909a39c1ef269b64a4e53daa4_1621765256.jpg?x-oss-process=image/resize,m_fill,h_380,w_170/quality,q_90",
        count: 6,
        items: [
            {
                title: "شیر غیرلبنی بادام کاله - 1 لیتر",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/1c35e1d074c9127f512a9faedac58a01b5cc6957_1611989738.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 80000,
                discountPersent: 0,
                price: 80000,
                sellCounter: 1
            },
            {
                title: "شیر نیم چرب ارگانیک کوهپناه مقدار 940 میلی لیتر",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/6ebceb70ffc91633141c276d38b8c8cbd0b97fdc_1625308968.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 16300,
                discountPersent: 0,
                price: 16300,
                sellCounter: 2
            },
            {
                title: "پنیر پیتزا مطهر - 2 کیلوگرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/effe99cd18f9803e8f71bf5e8548887988398b28_1605073173.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 242000,
                discountPersent: 0,
                price: 242000,
                sellCounter: 2
            },
            {
                title: "پنیر گودا پستو سبز / قرمز / پراتو کاله مقدار 300 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/b3a6ed3446f04b7af744b85a227c92c18990f58d_1620715652.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 90900,
                discountPersent: 8,
                price: 83620,
                sellCounter: 0
            },
            {
                title: "کره سنتی شکلی - 100 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/114087213.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 13000,
                discountPersent: 0,
                price: 13000,
                sellCounter: 0
            },
            {
                title: "شیر پرومیلک کاله با طعم وانیل - 330 میلی لیتر",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/4dea48b08d5e85dfee23da4689d502c22663e466_1630909194.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 22000,
                discountPersent: 15,
                price: 18700,
                sellCounter: 0
            }
        ]
    },
    {
        id: 3,
        name: "protein_products",
        imageUrl: "https://dkstatics-public.digikala.com/digikala-categories/668b1103fb60ed886b6a680d8f74253f677bdd08_1621765281.jpg?x-oss-process=image/resize,m_fill,h_380,w_170/quality,q_90",
        count: 6,
        items: [
            {
                title: "تخم مرغ حسام بسته 20 عددی",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/cb575beea0df8915b71ea46e9990a86529dcc9c1_1614082978.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 66200,
                discountPersent: 0,
                price: 66200,
                sellCounter: 0
            },
            {
                title: "گوشت چرخ کرده مخلوط گوساله و گوسفند مهیا پروتئین - 1 کیلوگرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/794a2ec2fb145d77f8b9b0a16db7a96259e29836_1627384854.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 137550,
                discountPersent: 0,
                price: 137550,
                sellCounter: 1
            },
            {
                title: "تخم مرغ تلاونگ بسته 20 عددی",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/121718587.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 69900,
                discountPersent: 15,
                price: 59400,
                sellCounter: 1
            },
            {
                title: "گوشت چرخکرده مخلوط گوساله و گوسفند مهيا پروتئين - 900 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/b65b34d58a9f0c6d7dcec6d977cbfbcb71eb81fa_1593597087.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 123800,
                discountPersent: 17,
                price: 103300,
                sellCounter: 0
            },
            {
                title: "کراکف پنیر 60 درصد گوشت قرمز آندره - 300 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/ca274f7f74428ae57e218b5ca17c4b5944876f2e_1597553517.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 35800,
                discountPersent: 25,
                price: 26700,
                sellCounter: 0
            },
            {
                title: "کالباس 90 درصد گوشت مرغ با طعم دود فارسی - 250 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/112897153.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90", 
                priceBeforDiscount: 41800,
                discountPersent: 20,
                price: 33440,
                sellCounter: 2
            }
        ]
    },
    {
        id: 4,
        name: "breakfast",
        imageUrl: "https://dkstatics-public.digikala.com/digikala-categories/e5188b2a7e47df2e2d4a8813e92031829753b59e_1621765300.jpg?x-oss-process=image/resize,m_fill,h_380,w_170/quality,q_90",
        count: 6,
        items: [
            {
                title: "کره بادام زمینی کرانچی جیف - 454گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/9b753c74e4ca9e2c2453a1e0f64dc4c8c100e7f9_1614000752.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 111700,
                discountPersent: 0,
                price: 111700,
                sellCounter: 0
            },
            {
                title: "شکلات صبحانه فندقی نوتلا - 350 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/a8816004fda9f14041e359947eaa3d0441a412b6_1621931518.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 106360,
                discountPersent: 0,
                price: 106360,
                sellCounter: 1
            },
            {
                title: "کره بادام زمینی بدون نمک و شکر افزوده شیررضا - 450 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/119616827.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 61000,
                discountPersent: 0,
                price: 61000,
                sellCounter: 2
            },
            {
                title: "کورن فلکس غلات صبحانه نسکوییک مقدار 450 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/e30325e0c9c364a13964b74da192ad6a503ca058_1621084072.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 125000,
                discountPersent: 0,
                price: 125000,
                sellCounter: 2
            },
            {
                title: "کاتلا کاله - 200 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/4877434.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 26000,
                discountPersent: 23,
                price: 19900,
                sellCounter: 0
            },
            {
                title: "عسل فوق بکر پارس کندو - 1000 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/112897153.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 850000,
                discountPersent: 10,
                price: 765000,
                sellCounter: 0
            }
        ]
    },
    {
        id: 5,
        name: "drinks",
        imageUrl: "https://dkstatics-public.digikala.com/digikala-categories/f974209cfba479dd02b623f6d89ec5c3164577ad_1621765314.jpg?x-oss-process=image/resize,m_fill,h_380,w_170/quality,q_90",
        count: 6,
        items: [
            {
                title: "چای ممتاز سیلان آباگا - 450 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/9b753c74e4ca9e2c2453a1e0f64dc4c8c100e7f9_1614000752.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 125000,
                discountPersent: 10,
                price: 112500,
                sellCounter: 1
            },
            {
                title: "قهوه اسپرسو بن مانو مدل آرتیمان وزن 250 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/358fae479c25fcdd2afbb04a7f68f5f13e3b2453_1632296076.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 69000,
                discountPersent: 25,
                price: 51500,
                sellCounter: 2
            },
            {
                title: "پودر قهوه علی کافه مدل Black Gold بسته 40 عددی",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/112431121.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 245000,
                discountPersent: 8,
                price: 225000,
                sellCounter: 0
            },
            {
                title: "قهوه فوری کلاسیک مولتی کافه - 100 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/2fb95ceac9fc89af14dd7d413c7949d71a7f1fa9_1621917476.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 60000,
                discountPersent: 28,
                price: 43500,
                sellCounter: 1
            },
            {
                title: "کاپوچینو ترابیکا مدل Cappuccino بسته 20 عددی",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/2147104.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 124000,
                discountPersent: 0,
                price: 124000,
                sellCounter: 0
            },
            {
                title: "قهوه ترک بن مانو مقدار 250 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/3138198.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 49000,
                discountPersent: 4,
                price: 46900,
                sellCounter: 0
            }
        ]
    },
    {
        id: 6,
        name: "convenience-food",
        imageUrl: "https://dkstatics-public.digikala.com/digikala-categories/50a81d73b09e02128134594675fa6d7a4ae2f68e_1621765331.jpg?x-oss-process=image/resize,m_fill,h_380,w_170/quality,q_90",
        count: 5,
        items: [
            {
                title: "پاستا نیمه آماده الیت با طعم گوجه فرنگی و ریحان - 180 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/120367280.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 15000,
                discountPersent: 0,
                price: 15000,
                sellCounter: 0
            },
            {
                title: "آش رشته الیت مقدار 180 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/5038952.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 22000,
                discountPersent: 10,
                price: 19800,
                sellCounter: 1
            },
            {
                title: "پودر آبگوشت الیت مقدار 70 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/5041778.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 7000,
                discountPersent: 0,
                price: 7000,
                sellCounter: 2
            },
            {
                title: "نودل با عصاره مرغ هاتی کارا - بسته 5 عددی",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/2fb95ceac9fc89af14dd7d413c7949d71a7f1fa9_1621917476.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 40000,
                discountPersent: 13,
                price: 35000,
                sellCounter: 1
            },
            {
                title: "کنسرو تن ماهی مارلین در روغن گیاهی شینل - ۱۸۰ گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/119853186.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 25000,
                discountPersent: 24,
                price: 18900,
                sellCounter: 0
            }
        ]
    },
    {
        id: 7,
        name: "sweets-and-nuts",
        imageUrl: "https://dkstatics-public.digikala.com/digikala-categories/3ecba71c1053aa60f30ce0e008068b0cdf096010_1621765408.jpg?x-oss-process=image/resize,m_fill,h_380,w_170/quality,q_90",
        count: 6,
        items: [
            {
                title: "خرما عسلی Fresh مقدار 800 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/31099606d170f26837cdfad7f55419e60fb2fe0f_1627731159.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 30000,
                discountPersent: 20,
                price: 24000,
                sellCounter: 0
            },
            {
                title: "میوه خشک مخلوط رازیان - 400 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/3b4bea6cbd2c3d6f1e11a3e7b2a56c1f11aaa232_1601470130.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 95000,
                discountPersent: 27,
                price: 69000,
                sellCounter: 2
            },
            {
                title: "خرما کبکاب ساغر - 1250 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/115088246.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 57500,
                discountPersent: 33,
                price: 38300,
                sellCounter: 1
            },
            {
                title: "آجیل سلامت اکبر راستگو - 250 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/8891d1a762f983a536259909e7854cf9517ac3b7_1623073688.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 58500,
                discountPersent: 9,
                price: 53000,
                sellCounter: 3
            },
            {
                title: "سوهان زعفرانی حبه قم - 300 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/01c1733afb20751592336e5fd8b3fa2bb53f5799_1612816291.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 85000,
                discountPersent: 35,
                price: 55000,
                sellCounter: 1
            },
            {
                title: "خرما ساغر - 500 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/dd0b93d810e2d90a54debad40a2c3295de15e660_1622626018.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 45000,
                discountPersent: 42,
                price: 26200,
                sellCounter: 0
            }
        ]
    },
    {
        id: 8,
        name: "snacks",
        imageUrl: "https://dkstatics-public.digikala.com/digikala-categories/f7b10475d884289f2ed28152cf81fd1a26ea993c_1621765439.jpg?x-oss-process=image/resize,m_fill,h_380,w_170/quality,q_90",
        count: 6,
        items: [
            {
                title: "چیپس مزمز - مجموعه 18 عددی",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/6ee07e65d5fda242341df595f86bfd9a4cb8523a_1629780916.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 76000,
                discountPersent: 15,
                price: 64600,
                sellCounter: 0
            },
            {
                title: "شکلات تلخ 60 درصد گالاردو فرمند - 10 گرم بسته 30 عددی",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/e06d76abe205e26f9ba928c5ff3c588e9972b8e3_1624081091.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 90000,
                discountPersent: 17,
                price: 75000,
                sellCounter: 2
            },
            {
                title: "ویفر با روکش شکلات تلخ کوپا بسته 30 عددی",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/121483290.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 150000,
                discountPersent: 40,
                price: 89900,
                sellCounter: 0
            },
            {
                title: "چیپس اورجینال پرینگلز - 149 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/c92ca27200a70a33a397e5feb22bb5782d93d4d8_1622377463.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 89000,
                discountPersent: 0,
                price: 89000,
                sellCounter: 0
            },
            {
                title: "پاستیل نواری لقمه ای بریز کندی میکس - 250 گرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/0e268b87f742db155f02a59901ca4f2009cf2ec5_1620802181.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 40000,
                discountPersent: 15,
                price: 34000,
                sellCounter: 0
            },
            {
                title: "شکلات مغز دار نانی شیرین عسل -800 گرم بسته 100 عددی",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/d4b632f71f64bbfb1410b97133ea9bb8013219f7_1624289234.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 49700,
                discountPersent: 0,
                price: 49700,
                sellCounter: 0
            }
        ]
    },
    {
        id: 9,
        name: "fruites-and-vegtables",
        imageUrl: "https://dkstatics-public.digikala.com/digikala-categories/c125d9c8af36777f0f3c636b6ef17980d6b51421_1621765451.jpg?x-oss-process=image/resize,m_fill,h_380,w_170/quality,q_90",
        count: 6,
        items: [
            {
                title: "موز Fresh مقدار 1 کیلوگرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/997f85045f05d837803b9b8018454396a799d67c_1625303009.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 33000,
                discountPersent: 8,
                price: 30360,
                sellCounter: 0
            },
            {
                title: "گوجه فرنگی بوته ای میوری - 1 کیلوگرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/f872efc1c50f8e0b9a21664af500a2ce6e907305_1612870144.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 17500,
                discountPersent: 10,
                price: 15750,
                sellCounter: 0
            },
            {
                title: "خیار اصفهان Fresh مقدار 1 کیلوگرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/7ca4f6f638d058a45894596e7c6ab2d20caf81fb_1625307726.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 12000,
                discountPersent: 8,
                price: 11040,
                sellCounter: 0
            },
            {
                title: "هویج Fresh مقدار 1 کیلوگرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/bdadcf2f35f11e7f32ed67aa24e079af8c301cb2_1625306767.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 15000,
                discountPersent: 8,
                price: 13800,
                sellCounter: 0
            },
            {
                title: "سیب زمینی Fresh مقدار 1 کیلوگرم",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/8d208dd52debc12c61216cf99fbd856b8031da71_1625308692.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 8500,
                discountPersent: 8,
                price: 7520,
                sellCounter: 0
            },
            {
                title: "کاهو رسمی Fresh مقدار 1 عدد",
                imageUrl: "https://dkstatics-public.digikala.com/digikala-products/2df92aed28155ef9aa08b595f1433dc51be06bd6_1625301925.jpg?x-oss-process=image/resize,m_lfit,h_600,w_600/quality,q_90",
                priceBeforDiscount: 13000,
                discountPersent: 8,
                price: 11960,
                sellCounter: 0
            }
        ]
    }
]

export default categories;