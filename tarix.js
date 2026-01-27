const tarixQuestions = [
    {
        q: "O’zbekistonning eng yangi tarixi nechanchi yillarni o’z ichiga oladi?",
        a: ["1886–1920", "1920–1991", "1991 yildan hozirgi vaqtga qadar", "1917–1991"],
        c: 2
    },
    {
        q: "Amir Temur qachon Movarounnahr amiri deb e’lon qilindi?",
        a: ["1336", "1365", "1370", "1402"],
        c: 2
    },
    {
        q: "Movarounnahr so‘zining ma’nosi nima?",
        a: ["Ikki daryo oralig‘i", "Daryoning chap qirg‘og‘i", "Daryoning nargi tomoni", "Daryoning o‘ng tomoni"],
        c: 0
    },
    {
        q: "“Qayta qurish” islohoti necha bosqichda amalga oshirilgan?",
        a: ["2", "3", "4", "5"],
        c: 1
    },
    {
        q: "Yurtimizda Alisher Navoiyning 550 yilligi qachon nishonlangan?",
        a: ["1991 yil", "2001 yil", "1994 yil", "2000 yil"],
        c: 2
    },
    {
        q: "O‘zbekiston Shanxay hamkorlik tashkilotiga qachon a’zo bo‘lgan?",
        a: ["2002 yil iyun", "2001 yil iyun", "2000 yil iyun", "1990 yil iyun"],
        c: 1
    },
    {
        q: "Qoraqalpog‘iston Respublikasining ijro hokimiyat organi qanday nomlanadi?",
        a: ["Jo‘qorg‘i Kengas", "Vazirlar Kengashi", "Vazirlar Mahkamasi", "Deputatlar kengashi"],
        c: 1
    },
    {
        q: "“Tarixiy xotirasiz kelajak yo‘q” asarining muallifi kim?",
        a: ["Sharof Rashidov", "Islom Karimov", "Rafiq Nishonov", "Shavkat Mirziyoyev"],
        c: 1
    },
    {
        q: "O‘zbekiston hududidagi eng qadimgi davlatlar qaysilar?",
        a: ["Qadimgi Xorazm, Baqtriya, Sug‘diyona", "Eftaliylar, Xioniylar", "Kidariylar, Xorazmshohlar", "Tohiriylar, Temuriylar"],
        c: 0
    },
    {
        q: "Amir Temur va Yildirim Boyazid o‘rtasidagi jang qanday nomlangan?",
        a: ["Loy jangi", "Anqara jangi", "O‘tror jangi", "To‘g‘ri javob yo‘q"],
        c: 1
    },
    {
        q: "“Qayta qurish” islohotining muallifi kim?",
        a: ["Brejnev", "Gorbachyov", "Andropov", "Sharof Rashidov"],
        c: 1
    },
    {
        q: "“Avesto” qaysi dinning muqaddas kitobi?",
        a: ["Zardushtiylik", "Buddaviylik", "Xristianlik", "Konfutsiylik"],
        c: 0
    },
    {
        q: "Arablar O‘rta Osiyoga dastlabki yurishlarini qaysi asrda boshlagan?",
        a: ["V asr", "VI asr", "VII asr", "VIII asr"],
        c: 2
    },
    {
        q: "O‘rta Osiyoda arablarga qarshi eng yirik qo‘zg‘olon qaysi?",
        a: ["Rofe ibn Lays qo‘zg‘oloni", "Oq kiyimlilar qo‘zg‘oloni", "Andijon qo‘zg‘oloni", "Jizzax qo‘zg‘oloni"],
        c: 1
    },
    {
        q: "“Ikkinchi muallim” nomi bilan mashhur bo‘lgan alloma kim?",
        a: ["Ibn Sino", "Xorazmiy", "Farobiy", "Beruniy"],
        c: 2
    },
    {
        q: "O‘rta Osiyodagi birinchi Renessans qaysi asrlarni o‘z ichiga oladi?",
        a: ["IX–XII asrlar", "XIV–XV asrlar", "IX–XI asrlar", "XII–XIV asrlar"],
        c: 0
    },
    {
        q: "Mo‘g‘ullarga qarshi mardonavor kurashgan Xorazmshohlar shahzodasi kim?",
        a: ["O‘zloqshoh", "Oqshoh", "Otsiz", "Jaloliddin Manguberdi"],
        c: 3
    },
    {
        q: "Amir Temur davlatining poytaxti qaysi shahar bo‘lgan?",
        a: ["Buxoro", "Samarqand", "Xorazm", "Jizzax"],
        c: 1
    },
    {
        q: "1402 yildagi Anqara jangida Amir Temur kim bilan jang qilgan?",
        a: ["To‘xtamishxon", "Ilyosxo‘ja", "Boyazid", "Amir Husayn"],
        c: 2
    },
    {
        q: "O‘rta Osiyo hududida nechta xonlik bo‘lgan?",
        a: ["3", "5", "6", "4"],
        c: 0
    },
    {
        q: "Qo‘qon xonligida adabiy muhit rivojiga katta hissa qo‘shgan xon kim?",
        a: ["Olimxon", "Xudoyorxon", "Madalixon", "Umarxon"],
        c: 3
    },
    {
        q: "O‘rta Osiyo xonliklarini qaysi davlat bosib olgan?",
        a: ["Angliya", "Fransiya", "Rossiya", "Portugaliya"],
        c: 2
    },
    {
        q: "1898 yilda Andijonda nima sodir bo‘lgan?",
        a: ["Dukchi eshon qo‘zg‘oloni", "Ilk madrasa ochilgan", "Temir yo‘l qurilgan", "Bosib olingan"],
        c: 0
    },
    {
        q: "Jadid so‘zining lug‘aviy ma’nosi nima?",
        a: ["Maktab", "Yangi, yangi usul", "Ma’rifat", "Ilm"],
        c: 1
    },
    {
        q: "Quyidagilardan qaysi jadid namoyondalari?",
        a: ["Avloniy, Madaminbek, Olimxon", "Behbudiy, Fitrat, F.Xo‘jaev", "Navoiy, F.Xo‘jaev, Shermuhammadbek", "Katta Ergash, Avloniy, Madaminbek"],
        c: 1
    },
    {
        q: "O‘zbekiston SHHTga to‘la huquqli a’zo bo‘lishi qachon qaror qabul qilingan?",
        a: ["1996 yil", "2001 yil", "1998 yil", "1999 yil"],
        c: 1
    },
    {
        q: "O‘zbek tiliga davlat maqomi qachon berilgan?",
        a: ["1989 yil 17 avgust", "1989 yil 21 oktabr", "1990 yil 24 mart", "1990 yil 22 iyun"],
        c: 1
    },
    {
        q: "Navro‘z bayrami qachondan qayta tiklandi?",
        a: ["1988 yil 21 mart", "1989 yil 21 mart", "1990 yil 21 mart", "1991 yil 22 mart"],
        c: 1
    },
    {
        q: "O‘zbekiston BMTga qachon a’zo bo‘lgan?",
        a: ["1995 yil", "1992 yil 2 mart", "1993 yil", "1994 yil"],
        c: 1
    },
    {
        q: "O‘zbekiston Respublikasining Konstitutsiyasi qachon qabul qilingan?",
        a: ["1991 yil", "1992 yil 12 avgust", "1992 yil 8 dekabr", "1993 yil"],
        c: 2
    },
    {
        q: "Qayta ishlanmasdan respublika tashqarisiga chiqarilgan qishloq xo‘jaligi mahsulotlarining ulushi qancha edi?",
        a: ["80 foizdan ko‘proq", "60 foizdan ko‘proq", "50 foizdan ko‘proq", "20 foizdan ko‘proq"],
        c: 0
    },
    {
        q: "Dehqonlarning farovon yashashini ta’minlashning asosiy manbalari qaysi?",
        a: ["Ish haqini oshirish", "Ijtimoiy muammolarni hal qilish", "Shaxsiy tomorqalarni kengaytirish", "Barcha javob to‘g‘ri"],
        c: 3
    },
    {
        q: "1989 yil 17 avgustdagi qarorga ko‘ra qishloq aholisi uchun qancha yer ajratilishi ko‘zda tutilgan?",
        a: ["6 sotix", "4,5 sotix", "25 sotix", "20 sotix"],
        c: 0
    },
    {
        q: "Mustaqillik arafasida O‘zbekistondagi asosiy fondlarning qanchasi sobiq ittifoq tasarrufida edi?",
        a: ["70 foizi", "60 foizi", "40 foizi", "30 foizi"],
        c: 0
    },
    {
        q: "1990 yilda O‘zbekiston aholisining necha foizi daromadi eng quyi darajadan past edi?",
        a: ["30 foizi", "45 foizi", "60 foizi", "70 foizi"],
        c: 2
    },
    {
        q: "Ishlab chiqarish bilan band bo‘lmagan mehnat resurslari soni qancha edi?",
        a: ["1 mln", "1,5 mln", "2 mln", "3 mln"],
        c: 1
    },
    {
        q: "Sobiq ittifoqda “Qayta qurish” qachondan boshlandi?",
        a: ["1980-yillar boshidan", "1990-yillar boshidan", "1980-yillar o‘rtalaridan", "1988 yildan"],
        c: 2
    },
    {
        q: "Ittifoq hududlarida milliy nizolar kuchayishining asosiy sababi?",
        a: ["Iqtisodiy inqiroz", "Buyruqbozlik", "Milliy o‘zlikni anglash", "Barchasi"],
        c: 3
    },
    {
        q: "Farg‘ona fojiasining asosiy sababi qaysi?",
        a: ["Yoshlarni ish bilan ta’minlash", "Ijtimoiy-iqtisodiy ahvolning og‘irligi", "Milliy adovat", "Barchasi"],
        c: 1
    },
    {
        q: "1989 yil 20 maydagi O‘sh fojiasidan ko‘zlangan maqsad?",
        a: ["Mustaqillik", "Qardoshlikni parchalash", "Radikalistlar hokimiyati", "Markaz nazoratni saqlash"],
        c: 1
    },
    {
        q: "80-yillar oxirida O‘zbekistondagi eng jiddiy muammo?",
        a: ["Texnologiya rivoji", "Nomaqbul ixtisoslashuv", "Ishlab chiqarish yetishmasligi", "Ijtimoiy ahvol"],
        c: 3
    },
    {
        q: "80-yillar oxirida qishloqlarda yeri yo‘q oilalar soni?",
        a: ["10,5 ming", "240 ming", "350 ming", "1,5 mln"],
        c: 1
    },
    {
        q: "Islom Karimov O‘zbekiston rahbari sifatida qachon faoliyat boshlagan?",
        a: ["1986 yil", "1989 yil 23 iyun", "1990 yil 24 mart", "1990 yil 20 iyun"],
        c: 1
    },
    {
        q: "Prezidentlik lavozimi qachon joriy etilgan?",
        a: ["1990 yil 24 mart", "1989 yil 23 iyun", "1991 yil", "1992 yil"],
        c: 0
    },
    {
        q: "1991 yil 31 avgustda qanday hujjat qabul qilindi?",
        a: ["Mustaqillik deklaratsiyasi", "Prezident saylovi to‘g‘risida qonun", "Davlat mustaqilligi asoslari", "Mudofaa vazirligi"],
        c: 2
    },
    {
        q: "“Paxta ishi” qachondan boshlangan?",
        a: ["1983 sentabr", "1985 aprel", "1987 mart", "1989 avgust"],
        c: 0
    },
    {
        q: "O‘zbek tiliga davlat maqomi berilgan sana?",
        a: ["1989 yil 17 avgust", "1989 yil 21 oktabr", "1990 yil 24 mart", "1990 yil 22 iyun"],
        c: 1
    },
    {
        q: "Navro‘z umumxalq bayrami sifatida qachondan nishonlandi?",
        a: ["1988", "1989", "1990", "1991"],
        c: 1
    },
    {
        q: "O‘zbekistonda YUNESKO ro‘yxatiga kiritilgan obidalar soni?",
        a: ["3 ming", "4 ming", "5 ming", "6 ming"],
        c: 2
    },
    {
        q: "Saylovlarni tashkil etuvchi doimiy organ?",
        a: ["Konstitutsiyaviy sud", "Markaziy saylov komissiyasi", "Oliy Majlis", "Vazirlar Mahkamasi"],
        c: 1
    },
    {
        q: "Prezidentlikka nomzod necha yoshdan?",
        a: ["35", "34", "33", "32"],
        c: 0
    },
    {
        q: "Hokimiyatlar bo‘linishi qaysilar?",
        a: ["Ijro va sud", "Prezident va sud", "Qonun chiqaruvchi, ijro etuvchi, sud", "Mahalliy hokimiyat"],
        c: 2
    },
    {
        q: "Ijroiya hokimiyatni amalga oshiruvchi organ?",
        a: ["Vazirlar Mahkamasi", "Oliy Majlis", "Sud", "Senat"],
        c: 0
    },
    {
        q: "Oliy Majlisning inson huquqlari bo‘yicha vakili?",
        a: ["Senat", "Qonunchilik palatasi", "Ombudsman", "NNTlar"],
        c: 2
    },
    {
        q: "Millatning ruhi deb nimaga aytilgan?",
        a: ["Din", "Ona tili", "Konstitutsiya", "Xalq ijodi"],
        c: 1
    },
    {
        q: "Milliy valyuta so‘m qachon muomalaga kiritilgan?",
        a: ["1997", "1991", "1994 yil 1 iyul", "1992"],
        c: 2
    },
    {
        q: "Mustaqillik davrida yangi bayramlar qaysilar?",
        a: ["Ustozlar kuni", "Xotin-qizlar kuni", "Mehnatkashlar kuni", "Yangi yil"],
        c: 0
    },
    {
        q: "O‘zbekiston davlat bayrog‘i qachon tasdiqlangan?",
        a: ["1992 yil 2 iyul", "1993", "1991", "1990"],
        c: 2
    },
    {
        q: "Kadrlar tayyorlash milliy dasturi qachon qabul qilingan?",
        a: ["1998", "1994", "1997 yil 29 avgust", "1999"],
        c: 2
    }
    , {
        q: "Millat mavjudligining asosiy shartlari qaysilar?",
        a: [
            "Iqtisodiy va siyosiy rivojlanish",
            "Moddiy va ma’naviy meros",
            "G‘oyaviy faollik",
            "Til, yagona hudud va milliy o‘zlikni anglash"
        ],
        c: 3
    },
    {
        q: "Qadriyatlar ichida eng oliysi qaysi?",
        a: [
            "Atrof-muhit",
            "Urf-odat va an’analar",
            "Inson va uning hayoti",
            "Ilm-fan"
        ],
        c: 2
    },
    {
        q: "O‘zbekiston Respublikasining davlat gerbi qachon tasdiqlangan?",
        a: [
            "1991 yil 22 oktabr",
            "1994 yil 2 iyul",
            "1992 yil 12 avgust",
            "1992 yil 2 iyul"
        ],
        c: 3
    },
    {
        q: "O‘zbekiston Respublikasi Konstitutsiyasi qachon qabul qilingan?",
        a: [
            "1991 yil 22 oktabr",
            "1994 yil 2 iyul",
            "1992 yil 12 avgust",
            "1992 yil 8 dekabr"
        ],
        c: 3
    },
    {
        q: "O‘zbek modeli nechta tamoyildan iborat?",
        a: ["4 ta", "5 ta", "3 ta", "2 ta"],
        c: 1
    },
    {
        q: "Mustaqillik deklaratsiyasi qachon qabul qilingan?",
        a: [
            "1991 yil 31 avgust",
            "1990 yil 20 iyun",
            "1991 yil 18 noyabr",
            "1990 yil 1 mart"
        ],
        c: 1
    },
    {
        q: "Mustabid tuzum davrida ishlab chiqarilgan paxtaning nechta foizi mamlakatda qoldirilgan?",
        a: ["5 %", "15 %", "25 %", "35 %"],
        c: 0
    },
    {
        q: "Bozor iqtisodiyotiga o‘tishning nechta yo‘li mavjud?",
        a: ["3", "2", "4", "5"],
        c: 2
    },
    {
        q: "O‘zbekistonda bozor munosabatlariga o‘tishning 1-bosqichi qaysi yillar?",
        a: [
            "1991–1994",
            "2000–2001",
            "1994–2002",
            "2002–2003"
        ],
        c: 0
    },
    {
        q: "O‘zbekistonda o‘lim jazosi qachondan bekor qilingan?",
        a: [
            "2009 yildan",
            "2007 yildan",
            "2008 yildan",
            "2006 yildan"
        ],
        c: 2
    },
    {
        q: "Qonun chiqaruvchi hokimiyat qaysi organga tegishli?",
        a: [
            "Vazirlar Mahkamasi",
            "Oliy Majlis",
            "Oliy sud",
            "Bosh prokuratura"
        ],
        c: 1
    },
    {
        q: "1984–1987 yillarda Rossiyadan O‘zbekistonga nechta kadr yuborilgan?",
        a: [
            "300 nafar",
            "200 nafar",
            "400 nafar",
            "500 nafar"
        ],
        c: 3
    },
    {
        q: "1983–1990 yillarda “paxta ishi” bo‘yicha nechta kishi tergov qilingan?",
        a: [
            "40 ming",
            "50 ming",
            "30 ming",
            "20 ming"
        ],
        c: 1
    },
    {
        q: "Namangan voqealari qachon bo‘lib o‘tgan?",
        a: [
            "1990 yil dekabr",
            "1990 yil iyun",
            "1990 yil avgust",
            "1990 yil may"
        ],
        c: 3
    },
    {
        q: "Milliy o‘zlikni anglash tushunchasi nimani bildiradi?",
        a: [
            "Milliy mentalitet",
            "Milliy iftixor",
            "Millat manfaatlarini anglash",
            "O‘zini etnik birlik sifatida tushunish"
        ],
        c: 3
    },
    {
        q: "Toshkent shahri Islom madaniyati poytaxti deb qachon e’lon qilingan?",
        a: [
            "2005 yil",
            "2006 yil",
            "2007 yil",
            "2004 yil"
        ],
        c: 3
    },
    {
        q: "Imom Buxoriyning eng ishonchli hadislar to‘plami?",
        a: [
            "Sunani Termiziy",
            "Hadis ul-mo‘tabar",
            "Hidoya",
            "Al-jome as-sahih"
        ],
        c: 3
    },
    {
        q: "“Diling Allohda, qo‘ling mehnatda bo‘lsin” hikmati kimga tegishli?",
        a: [
            "Ahmad Yassaviy",
            "Abdulxoliq G‘ijduvoniy",
            "Bahouddin Naqshband",
            "Iso Termiziy"
        ],
        c: 2
    },
    {
        q: "Aholi farovonligi darajasi nimani bildiradi?",
        a: [
            "Yetarli daromad",
            "Daromadlar tengligi",
            "Minimal byudjetdan yuqori daromad",
            "Munosib turmush darajasi"
        ],
        c: 3
    },
    {
        q: "Ijtimoiy muhofazaning asosiy maqsadi nima?",
        a: [
            "Kuchli ijtimoiy siyosat",
            "Turmush darajasining pasayishiga yo‘l qo‘ymaslik",
            "Daromadlarni nazorat qilish",
            "Narxlarni belgilash"
        ],
        c: 1
    },
    {
        q: "1998 yil tarixda qanday nom bilan qoldi?",
        a: [
            "Yoshlar yili",
            "Amir Temur yili",
            "Oila yili",
            "Ona va bola yili"
        ],
        c: 2
    },
    {
        q: "Amir Temurning 660 yilligi qaysi shaharda nishonlangan?",
        a: [
            "London",
            "Kanada",
            "Berlin",
            "Parij"
        ],
        c: 3
    },
    {
        q: "Toshkentda BMT vakolatxonasi qachon ochilgan?",
        a: [
            "1993 yil oktabr",
            "1992 yil yanvar",
            "1994 yil mart",
            "1996 yil aprel"
        ],
        c: 0
    },
    {
        q: "UZDAEWOO qo‘shma korxonasi qachon ishga tushirilgan?",
        a: [
            "1991–1995",
            "1992–1996",
            "1995–1997",
            "1997–1999"
        ],
        c: 2
    },
    {
        q: "Jahon moliyaviy-iqtisodiy inqirozi qachon boshlangan?",
        a: [
            "2009",
            "2007",
            "2008",
            "2006"
        ],
        c: 2
    },
    {
        q: "Xiva va Buxoro shaharlarining 2500 yilligi qachon nishonlangan?",
        a: [
            "1998",
            "1996",
            "1999",
            "1997"
        ],
        c: 0
    },
    {
        q: "Mustaqillikning dastlabki yillarida nechta davlat O‘zbekistonni tan olgan?",
        a: [
            "110 ta",
            "120 ta",
            "115 ta",
            "130 ta"
        ],
        c: 2
    },
    {
        q: "Kadrlar tayyorlash milliy dasturining mohiyati nimada?",
        a: [
            "Uzluksizlik",
            "Uzviylik",
            "Fan va ta’lim",
            "Fan va ishlab chiqarish"
        ],
        c: 0
    },
    {
        q: "Kadrlar tayyorlash milliy dasturining 1-bosqichi qaysi yillar?",
        a: [
            "1997–2001",
            "1997–2002",
            "1996–2001",
            "1997–2003"
        ],
        c: 0
    },
    {
        q: "PF-5763-sonli farmon qachon qabul qilingan?",
        a: [
            "2018 yil 12 iyul",
            "2020 yil 15 iyul",
            "2017 yil 14 iyul",
            "2019 yil 11 iyul"
        ],
        c: 0
    },
    {
        q: "Hozirda O‘zbekiston hududida nechta millat vakillari istiqomat qiladi?",
        a: ["120 dan ortiq", "130 dan ortiq", "140 dan ortiq", "150 dan ortiq"],
        c: 2
    },
    {
        q: "O‘zbekiston aholisining qancha qismi ijtimoiy muhofaza qilinadi?",
        a: ["Barcha aholi", "Uchdan ikki qismi", "Yarmi", "Chorak qismi"],
        c: 0
    },
    {
        q: "Aholini ijtimoiy muhofaza etishning ustuvor xususiyati nimada?",
        a: [
            "Aholi soni ko‘p, daromad kam",
            "Aholi tez o‘sadi, iqtisodiyot takomillashmagan",
            "Aholi tez o‘sadi, ayniqsa qishloq aholisi ko‘p",
            "Aholi ko‘p, ish joylari kam"
        ],
        c: 2
    },
    {
        q: "1997–2001 yillarda ta’lim tizimini rivojlantirishga qancha mablag‘ sarflangan?",
        a: ["50 mlrd so‘m", "65 mlrd so‘m", "70 mlrd so‘m", "75 mlrd so‘m"],
        c: 3
    },
    {
        q: "Turmush darajasi tushunchasiga to‘g‘ri ta’rif qaysi?",
        a: [
            "Daromadlar darajasi",
            "Xarajatlar darajasi",
            "Daromad va xarajatlar farqi",
            "Hamma javob to‘g‘ri"
        ],
        c: 3
    },
    {
        q: "Harakatlar strategiyasi emblemasidagi siyohrang nimani bildiradi?",
        a: [
            "Qonuniylik va or-nomus",
            "Iqtisodiy qudrat",
            "Munosib turmush",
            "Tinchlik va soflik"
        ],
        c: 0
    },
    {
        q: "Qonun ustuvorligini ta’minlash yo‘nalishining ikkinchi bandi qaysi?",
        a: [
            "Fuqarolarning huquqlarini himoya qilish",
            "Sud mustaqilligini ta’minlash",
            "Qonunchilikni takomillashtirish",
            "Huquqbuzarliklarning oldini olish"
        ],
        c: 1
    },
    {
        q: "Harakatlar strategiyasining asosiy maqsadi nima?",
        a: [
            "Islohotlar samaradorligini oshirish va rivojlanishni ta’minlash",
            "Yoshlarning siyosiy faolligi",
            "Sud tizimini tushuntirish",
            "Huquqiy mexanizmlarni yaratish"
        ],
        c: 0
    },
    {
        q: "Davlat va jamiyat qurilishini takomillashtirish yo‘nalishining 2-bandi nimani qamrab oladi?",
        a: [
            "Davlat xizmatini isloh qilish va elektron hukumat",
            "Sudlarni ixtisoslashtirish",
            "Parlament rolini kuchaytirish",
            "Jamoatchilik nazorati"
        ],
        c: 2
    },
    {
        q: "Qonun ustuvorligini ta’minlash va sud-huquq tizimini isloh qilish yo‘nalishi nechta banddan iborat?",
        a: ["6 ta", "3 ta", "5 ta", "4 ta"],
        c: 2
    },
    {
        q: "Harakatlar strategiyasini amalga oshirish bo‘yicha Milliy komissiyaga kim rahbarlik qiladi?",
        a: [
            "Prezident Sh.M. Mirziyoyev",
            "Bosh vazir o‘rinbosari",
            "Birinchi o‘rinbosar",
            "Bosh vazir"
        ],
        c: 0
    },
    {
        q: "Qonun ustuvorligini ta’minlash yo‘nalishi qanday masalalarni nazarda tutadi?",
        a: [
            "Sud mustaqilligi va qonun ustuvorligi",
            "Ijtimoiy sohani rivojlantirish",
            "Vakolatlarni joylarga berish",
            "Siyosiy partiyalar rolini oshirish"
        ],
        c: 0
    },
    {
        q: "2017–2021 yillardagi Harakatlar strategiyasi nechta ustuvor yo‘nalishni qamrab oladi?",
        a: ["5", "3", "7", "12"],
        c: 0
    },
    {
        q: "Harakatlar strategiyasi emblemasidagi tillarang nimani bildiradi?",
        a: [
            "Iqtisodiy qudrat va boylik",
            "Qonuniylik",
            "Tinchlik",
            "Munosib turmush"
        ],
        c: 0
    },
    {
        q: "Harakatlar strategiyasi emblemasidagi qizil rang nimani bildiradi?",
        a: [
            "Munosib turmush",
            "Iqtisodiy qudrat",
            "Tinchlik",
            "Qonuniylik"
        ],
        c: 0
    },
    {
        q: "Harakatlar strategiyasi to‘g‘risidagi farmon qachon qabul qilingan?",
        a: [
            "2017 yil 7 fevral",
            "2016 yil 10 noyabr",
            "2016 yil 12 noyabr",
            "2016 yil 9 fevral"
        ],
        c: 0
    },
    {
        q: "O‘zbekiston taraqqiyot strategiyasining yangi tamoyili qaysi?",
        a: [
            "Davlat – jamiyat – inson",
            "Inson – jamiyat – davlat",
            "Iqtisod – siyosat – ta’lim",
            "Xalq – hukumat – tadbirkorlik"
        ],
        c: 1
    },
    {
        q: "Harakatlar strategiyasining ikkinchi yo‘nalishi qanday nomlanadi?",
        a: [
            "Qonun ustuvorligini ta’minlash",
            "Axborot sohasini isloh qilish",
            "Ijtimoiy sohani rivojlantirish",
            "Iqtisodiyotni rivojlantirish"
        ],
        c: 0
    },
    {
        q: "Vazirlar Mahkamasi qanday hokimiyat hisoblanadi?",
        a: [
            "Ijro etuvchi",
            "Qonun chiqaruvchi",
            "Sud",
            "To‘rtinchi hokimiyat"
        ],
        c: 0
    },
    {
        q: "Vazirlar Mahkamasi o‘z faoliyati bo‘yicha qaysi organga hisob beradi?",
        a: [
            "Oliy Majlisga",
            "Prezident devoniga",
            "Sud kengashiga",
            "Qo‘mitalarga"
        ],
        c: 0
    },
    {
        q: "Yangi tahrirdagi “Ta’lim to‘g‘risida”gi qonun qachon qabul qilingan?",
        a: ["2019 yil 25 may", "2020 yil 23 sentabr", "2020 yil 31 mart", "2019 yil 15 iyun"],
        c: 1
    },
    {
        q: "Prezidentning 2019 yilda Sirdaryo va Namangan viloyatlariga tashrifi davomida qanday tashabbus amalga oshirildi?",
        a: ["Kitob do‘koni ochildi", "Ma’rifat karvoni", "Boshlang‘ich sinf o‘quvchilariga bepul kitoblar", "Kitobxonlarga avtomobil sovg‘asi"],
        c: 1
    },
    {
        q: "Besh tashabbusning qaysi biri yoshlarning san’atga qiziqishini oshirishga qaratilgan?",
        a: ["3-tashabbus", "5-tashabbus", "1-tashabbus", "4-tashabbus"],
        c: 2
    },
    {
        q: "Besh tashabbusning ikkinchi tashabbusi qanday nomlanadi?",
        a: [
            "Yoshlarning san’atga qiziqishini oshirish",
            "Kompyuter texnologiyalari va internetdan samarali foydalanish",
            "Yoshlarni sportga jalb qilish",
            "Xotin-qizlarni ish bilan ta’minlash"
        ],
        c: 0
    },
    {
        q: "Xotin-qizlarni ish bilan ta’minlash masalasi besh tashabbusning qaysi biriga kiradi?",
        a: ["3", "5", "1", "4"],
        c: 1
    },
    {
        q: "To‘rtinchi tashabbus qanday nomlanadi?",
        a: [
            "San’atga qiziqishni oshirish",
            "Kompyuter va internet",
            "Sportga jalb qilish",
            "Kitobxonlikni targ‘ib qilish"
        ],
        c: 3
    },
    {
        q: "Harakatlar strategiyasini amalga oshirish bo‘yicha Milliy komissiyaga kim boshchilik qiladi?",
        a: ["Prezident", "Bosh vazir", "Senat raisi", "Bosh prokuror"],
        c: 0
    },
    {
        q: "Mustaqillikning dastlabki yillarida nechta mamlakatda O‘zbekiston elchixonalari ochilgan?",
        a: ["20 dan ortiq", "30 dan ortiq", "40 dan ortiq", "50 dan ortiq"],
        c: 1
    },
    {
        q: "Yoshlar daftariga qaysi yosh toifasi kiritiladi?",
        a: ["14–30", "16–28", "18–35", "18–30"],
        c: 0
    },
    {
        q: "2020 yil 23 sentabrda qabul qilingan “Ta’lim to‘g‘risida”gi qonunning 10-bobi qanday nomlangan?",
        a: [
            "Ta’lim sohasidagi xalqaro hamkorlik",
            "Maktabgacha ta’limda davlat nazorati",
            "O‘rta ta’limda davlat nazorati",
            "Maktabdan keyingi ta’limda davlat nazorati"
        ],
        c: 0
    },
    {
        q: "“Ayollar daftari”ga qaysi shaxslar kiritiladi?",
        a: ["Tadbirkorlar", "Ishsiz ayollar", "Faol yoshlar", "Nafaqaxo‘rlar"],
        c: 1
    },
    {
        q: "“Biznes yuritish” indeksini qaysi tashkilot e’lon qiladi?",
        a: ["UNESCO", "Jahon banki", "Fitch Ratings", "BMT"],
        c: 1
    },
    {
        q: "BMT Bosh kotibi Pan Gi Mun O‘zbekistonga qachon tashrif buyurgan?",
        a: ["2011", "2010", "2015", "2016"],
        c: 1
    },
    {
        q: "“Ikkinchi muallim” nomi bilan mashhur alloma kim?",
        a: ["Imom al-Buxoriy", "Farobiy", "Al-Xorazmiy", "Ibn Sino"],
        c: 1
    },
    {
        q: "“Musulmonlar e’tiqodini tuzatuvchi” degan sharaf kimga berilgan?",
        a: ["Imom al-Buxoriy", "Imom Moturidiy", "Al-Xorazmiy", "Ibn Sino"],
        c: 1
    },
    {
        q: "“Diling Allohda, qo‘ling mehnatda bo‘lsin” hikmati kimga tegishli?",
        a: ["Ahmad Yassaviy", "Bahouddin Naqshband", "Najmiddin Kubro", "Ibn Sino"],
        c: 1
    },
    {
        q: "Hozirgi kunda O‘zbekistonda prezident vakolat muddati necha yil?",
        a: ["5", "7", "4", "3"],
        c: 1
    },
    {
        q: "“Dehqon bu – hayotning baquvvat ustuni” degan so‘zlar kimga tegishli?",
        a: ["Sharof Rashidov", "Shavkat Mirziyoyev", "Islom Karimov", "Erkin Vohidov"],
        c: 2
    },
    {
        q: "Hozirgi kunda O‘zbekistonda nechta siyosiy partiya faoliyat ko‘rsatmoqda?",
        a: ["5", "4", "6", "7"],
        c: 0
    },
    {
        q: "Qo‘qon xonligini kim asos solgan?",
        a: ["Shohruhbiy", "Xudoyorxon", "Elbarsxon", "Olimxon"],
        c: 0
    },
    {
        q: "“Allohning qo‘shnisi, arablar va g‘ayriarablar ustozi” nomiga sazovor bo‘lgan alloma kim?",
        a: ["Zamaxshariy", "Beruniy", "Xorazmiy", "Imom Buxoriy"],
        c: 0
    },
    {
        q: "“Ziji jadidi Ko‘ragoniy” asarining muallifi kim?",
        a: ["Mirzo Ulug‘bek", "Beruniy", "Xorazmiy", "Farg‘oniy"],
        c: 0
    },
    {
        q: "2030 yilga borib maktab bitiruvchilarining oliy ta’lim bilan qamrovi nechaga yetkazilishi rejalashtirilgan?",
        a: ["50–60 %", "30–40 %", "40–45 %", "20–40 %"],
        c: 0
    },
    {
        q: "Mustaqillik davrida “Xotira” kitobi qachon nashr etilgan?",
        a: ["1999", "1998", "2002", "1995"],
        c: 0
    },
    {
        q: "“Shahidlar xotirasi” yodgorlik majmuasi qachon ochilgan?",
        a: ["2000", "1998", "2002", "1999"],
        c: 3
    },
    {
        q: "Farg‘ona voqealari qaysi yilda sodir bo‘lgan?",
        a: ["1989", "1987", "1991", "1995"],
        c: 0
    },
    {
        q: "1990 yil 24 martda qanday tarixiy qaror qabul qilingan?",
        a: [
            "Prezidentlik lavozimi joriy etildi",
            "Mustaqillik deklaratsiyasi",
            "Konstitutsiya qabul qilindi",
            "Qayta qurish boshlandi"
        ],
        c: 0
    },
    {
        q: "O‘zbekiston Respublikasi qachon davlat mustaqilligini e’lon qilgan?",
        a: ["1990 yil 31 avgust", "1991 yil 1 avgust", "1991 yil 31 sentabr", "1991 yil 31 avgust"],
        c: 3
    },
    {
        q: "“Amir Temur” ordeni qachon ta’sis etilgan?",
        a: ["1995", "1994", "2001", "1996"],
        c: 0
    },
    {
        q: "O‘zbekiston Respublikasining davlat boshqaruv tizimida hokimiyat qanday taqsimlanadi?",
        a: [
            "Faqat Prezident hokimiyati ostida",
            "Markazlashgan boshqaruv tizimi",
            "Bo‘linmaydi",
            "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyatlari"
        ],
        c: 3
    },
    {
        q: "Milliy parlamentni tashkil qilishning birinchi davri qaysi yillarga to‘g‘ri keladi?",
        a: [
            "1991–1994 yillar",
            "1995–2004 yillar",
            "2005–2023 yillar",
            "2023 yildan keyin"
        ],
        c: 0
    },
    {
        q: "“Adolat” sotsial-demokratik partiyasi qachon tashkil etilgan?",
        a: ["1995 yil", "1994 yil", "1993 yil", "1991 yil"],
        c: 0
    },
    {
        q: "Parlamentning Qonunchilik palatasiga nechta deputat saylanadi?",
        a: ["150", "100", "120", "65"],
        c: 0
    },
    {
        q: "“Milliy tiklanish” demokratik partiyasi qachon tashkil etilgan?",
        a: ["1995 yil", "1994 yil", "1993 yil", "1991 yil"],
        c: 1
    },
    {
        q: "O‘zbekistonda ilk bo‘lib qaysi siyosiy partiya tashkil topgan?",
        a: [
            "Xalq demokratik partiyasi",
            "Milliy tiklanish demokratik partiyasi",
            "Fidokorlar milliy demokratik partiyasi",
            "Adolat sotsial-demokratik partiyasi"
        ],
        c: 0
    },
    {
        q: "Har bir xalq va millatning o‘zini real mavjud subyekt sifatida anglashiga nima deyiladi?",
        a: [
            "Milliy mentalitet",
            "Milliy iftixor",
            "Milliy o‘zlikni anglash",
            "Milliy g‘urur"
        ],
        c: 2
    },
    {
        q: "Imom Buxoriy qaysi asari bilan eng mashhur?",
        a: [
            "Sunani Termiziy",
            "Hadis ul-mo‘tabar",
            "Al-jome as-sahih",
            "Hidoya"
        ],
        c: 2
    },
    {
        q: "“Allohning qo‘shnisi, arablar va g‘ayriarablar ustozi” degan sharaf kimga berilgan?",
        a: [
            "Zamaxshariy",
            "Beruniy",
            "Xorazmiy",
            "Imom Buxoriy"
        ],
        c: 0
    },
    {
        q: "O‘zbek modelining asosiy tamoyillaridan biri qaysi?",
        a: [
            "Bozor iqtisodiyoti",
            "Kuchli ijtimoiy siyosat",
            "Tezkor xususiylashtirish",
            "Davlat aralashmasligi"
        ],
        c: 1
    },
    {
        q: "Bozor iqtisodiyotiga o‘tishda davlatning asosiy vazifasi nima?",
        a: [
            "Bozorni to‘liq nazorat qilish",
            "Ijtimoiy himoyani ta’minlash",
            "Narxlarni belgilash",
            "Ishlab chiqarishni cheklash"
        ],
        c: 1
    },
    {
        q: "Mustaqillikdan so‘ng O‘zbekistonda nechta siyosiy partiya ro‘yxatdan o‘tgan?",
        a: ["3", "4", "5", "6"],
        c: 2
    },
    {
        q: "O‘zbekiston Respublikasida dastlab “Vijdon erkinligi va diniy tashkilotlar to‘g‘risida”gi qonun qachon qabul qilingan?",
        a: [
            "1998 yil 1 may",
            "1999 yil 10 aprel",
            "1991 yil 14 iyun",
            "1999 yil 3 oktabr"
        ],
        c: 2
    },
    {
        q: "Umuminsoniy qadriyat bo‘lmish “ma’rifat” so‘zining ma’nosi nima?",
        a: [
            "Aql, bilim, fan",
            "Idrok etish",
            "Bilish",
            "O‘qish"
        ],
        c: 0
    },
    {
        q: "Millat mavjudligining asosiy sharti qaysi?",
        a: [
            "Iqtisodiy rivoj",
            "Moddiy meros",
            "G‘oyaviy faollik",
            "Til, hudud va milliy o‘zlik"
        ],
        c: 3
    },
    {
        q: "Qadriyatlar ichida eng oliysi qaysi?",
        a: [
            "Atrof-muhit",
            "Urf-odatlar",
            "Inson va uning hayoti",
            "Ilm-fan"
        ],
        c: 2
    },
    {
        q: "Mustaqil O‘zbekiston Respublikasining davlat gerbi qachon tasdiqlangan?",
        a: [
            "1991 yil 22 oktabr",
            "1994 yil 2 iyul",
            "1992 yil 12 avgust",
            "1992 yil 2 iyul"
        ],
        c: 3
    },
    {
        q: "Mustaqil O‘zbekiston Respublikasining Konstitutsiyasi qachon qabul qilingan?",
        a: [
            "1991 yil 22 oktabr",
            "1994 yil 2 iyul",
            "1992 yil 12 avgust",
            "1992 yil 8 dekabr"
        ],
        c: 3
    },
    {
        q: "O‘zbek modeli nechta tamoyildan iborat?",
        a: ["4", "5", "3", "2"],
        c: 1
    },
    {
        q: "Bozor iqtisodiyotiga o‘tishning nechta yo‘li mavjud?",
        a: ["3", "2", "4", "5"],
        c: 2
    },
    {
        q: "O‘zbekistonda bozor munosabatlariga o‘tishning 1-bosqichi qaysi yillarni qamrab oladi?",
        a: [
            "1991–1994",
            "2000–2001",
            "1994–2002",
            "2002–2003"
        ],
        c: 0
    },
    {
        q: "O‘zbekistonda o‘lim jazosi qachondan bekor qilingan?",
        a: [
            "2009",
            "2007",
            "2008",
            "2006"
        ],
        c: 2
    },
    {
        q: "Qonun chiqaruvchi hokimiyat qaysi organ?",
        a: [
            "Vazirlar Mahkamasi",
            "Oliy Majlis",
            "Oliy sud",
            "Bosh prokuratura"
        ],
        c: 1
    },
    {
        q: "1984–1987 yillarda markazdan O‘zbekistonga nechta kadr yuborilgan?",
        a: [
            "300",
            "200",
            "400",
            "500"
        ],
        c: 3
    },
    {
        q: "1983–1990 yillarda “paxta ishi” bo‘yicha necha kishi tergov qilingan?",
        a: [
            "40 ming",
            "50 ming",
            "30 ming",
            "20 ming"
        ],
        c: 1
    },
    {
        q: "Namangan voqealari qachon bo‘lib o‘tgan?",
        a: [
            "1990 dekabr",
            "1990 iyun",
            "1990 avgust",
            "1990 may"
        ],
        c: 3
    },
    {
        q: "Toshkent shahri Islom madaniyati poytaxti deb qachon e’lon qilingan?",
        a: [
            "2005",
            "2006",
            "2007",
            "2004"
        ],
        c: 3
    },
    {
        q: "Imom Buxoriy hadislar to‘plamining nomi?",
        a: [
            "Sunani Termiziy",
            "Hadis ul-mo‘tabar",
            "Al-jome as-sahih",
            "Hidoya"
        ],
        c: 2
    },
    {
        q: "“Diling Allohda, qo‘ling mehnatda bo‘lsin” hikmati kimga tegishli?",
        a: [
            "Ahmad Yassaviy",
            "Abdulxoliq G‘ijduvoniy",
            "Bahouddin Naqshband",
            "Iso Termiziy"
        ],
        c: 2
    }
];

window.tarixQuestions = tarixQuestions;