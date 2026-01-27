const cppQuestions = [
            {
                q: "\"\\n\" bilan endl orasidagi farq?",
                correct: "\\n faqat yangi qator, endl esa yangi qator + buffer tozalaydi",
                wrong: ["Farqi yo‘q", "endl faqat bo‘sh joy qo‘yadi", "\\n ekranni tozalaydi"]
            },
            {
                q: "cout << \"Salom\"; bu qanday amal?",
                correct: "Chiqarish (output) amali",
                wrong: ["Kiritish", "Taqqoslash", "O‘chirish"]
            },
            {
                q: "cin >> a; kodida a nima bo‘lishi kerak?",
                correct: "Oldindan e’lon qilingan o‘zgaruvchi",
                wrong: ["Funksiya", "Kutubxona", "Operator"]
            },
            {
                q: "iostream nima?",
                correct: "Kiritish-chiqarish kutubxonasi",
                wrong: ["Matematik kutubxona", "String kutubxonasi", "Grafik kutubxona"]
            },
            {
                q: "sqrt(x) funksiyasi nima qiladi?",
                correct: "Kvadrat ildizni hisoblaydi",
                wrong: ["Darajaga oshiradi", "Modulni topadi", "Logarifmni topadi"]
            },
            {
                q: "pow(2,3) natija?",
                correct: "8",
                wrong: ["6", "9", "5"]
            },
            {
                q: "abs(-7) natija?",
                correct: "7",
                wrong: ["-7", "0", "14"]
            },
            {
                q: "math.h qaysi turdagi funksiyalarni o‘z ichiga oladi?",
                correct: "Matematik funksiyalar",
                wrong: ["Kiritish-chiqarish", "Matn bilan ishlash", "Fayl funksiyalari"]
            },
            {
                q: "sqrt() funksiyasi qaysi kutubxonaga tegishli?",
                correct: "math.h",
                wrong: ["iostream", "string", "stdlib.h"]
            },
            {
                q: "C++ da matnlar qaysi tipda saqlanadi?",
                correct: "string",
                wrong: ["int", "char", "float"]
            },
            {
                q: "String bilan ishlash uchun qaysi kutubxona chaqiriladi?",
                correct: "string",
                wrong: ["iostream", "math.h", "stdio.h"]
            },
            {
                q: "Stringlar qanday taqqoslanadi?",
                correct: "== operatori bilan",
                wrong: ["=", "+", "%"]
            },
            {
                q: "Butun sonlar uchun qaysi tip ishlatiladi?",
                correct: "int",
                wrong: ["float", "double", "string"]
            },
            {
                q: "Haqiqiy sonlar uchun?",
                correct: "float yoki double",
                wrong: ["int", "char", "bool"]
            },
            {
                q: "char qaysi qiymatni oladi?",
                correct: "Bitta belgi",
                wrong: ["Butun son", "Matn", "Haqiqiy son"]
            },
            {
                q: "Mantiqiy qiymatlar uchun qaysi tur ishlatiladi?",
                correct: "bool",
                wrong: ["int", "char", "string"]
            },
            {
                q: "Katta haqiqiy sonlar uchun qaysi tur ishlatiladi?",
                correct: "double",
                wrong: ["int", "float", "char"]
            },
            {
                q: "int a; bu nima?",
                correct: "Butun tipdagi o‘zgaruvchi e’loni",
                wrong: ["Funksiya", "Operator", "Kutubxona"]
            },
            {
                q: "const kalit so‘zi?",
                correct: "O‘zgarmas qiymat belgilaydi",
                wrong: ["O‘zgaruvchini o‘chiradi", "Funksiya chaqiradi", "Shart tekshiradi"]
            },
            {
                q: "int a=5, b=7; bu nima?",
                correct: "Ikki o‘zgaruvchini e’lon qilish",
                wrong: ["Taqqoslash", "Sikl", "Funksiya"]
            },
            {
                q: "switch qachon ishlatiladi?",
                correct: "Bir o‘zgaruvchining bir nechta qiymatlari tekshirilganda",
                wrong: ["Sikl kerak bo‘lganda", "Funksiya yozishda", "Massivda"]
            },
            {
                q: "default bo‘limi qachon bajariladi?",
                correct: "Hech bir case mos kelmasa",
                wrong: ["Har doim", "Birinchi bo‘lib", "break bo‘lsa"]
            },
            {
                q: "for siklida nechta qism bo‘ladi?",
                correct: "3 ta",
                wrong: ["1 ta", "2 ta", "4 ta"]
            },
            {
                q: "while sikli qachon ishlaydi?",
                correct: "Shart rost bo‘lsa",
                wrong: ["Har doim", "Bir marta", "Shart yolg‘on bo‘lsa"]
            },
            {
                q: "do while siklining afzalligi?",
                correct: "Kamida bir marta bajariladi",
                wrong: ["Tezroq ishlaydi", "Shartsiz ishlaydi", "Faqat sikl oxirida"]
            },
            {
                q: "iostream kutubxonasini chaqirish uchun?",
                correct: "#include <iostream>",
                wrong: ["#include <math.h>", "#include <string>", "#include <stdio.h>"]
            },
            {
                q: "string kutubxonasini chaqirish uchun?",
                correct: "#include <string>",
                wrong: ["#include <iostream>", "#include <math.h>", "#include <stdlib.h>"]
            },
            {
                q: "sqrt funksiyasi qaysi kutubxonaga tegishli?",
                correct: "math.h",
                wrong: ["iostream", "string", "stdio.h"]
            },
            {
                q: "cout nima vazifani bajaradi?",
                correct: "Ma’lumotni ekranga chiqaradi",
                wrong: ["Kiritadi", "Saqlaydi", "O‘chiradi"]
            },
            {
                q: "return 0; vazifasi nima?",
                correct: "Dasturni muvaffaqiyatli tugatadi",
                wrong: ["Siklni to‘xtatadi", "Funksiyani chaqiradi", "Xatolik beradi"]
            },
            {
                q: "“\\n” vazifasi nima?",
                correct: "Yangi qatorga o‘tkazadi",
                wrong: ["Tab qo‘yadi", "Ekranni tozalaydi", "To‘xtatadi"]
            },
            {
                q: "F9 tugmasi Dev C++ da nima qiladi?",
                correct: "Compile & Run",
                wrong: ["Saqlaydi", "O‘chiradi", "Yopadi"]
            },
            {
                q: "F10 tugmasi vazifasi nima?",
                correct: "Keyingi qatorga o‘tadi (debug)",
                wrong: ["Run qiladi", "To‘xtatadi", "Saqlaydi"]
            },
            {
                q: "F11 tugmasining vazifasi nima?",
                correct: "Ichkariga kirib tekshiradi (debug)",
                wrong: ["Run", "Stop", "Save"]
            },
            {
                q: "if (a > b) – bu qaysi turdagi operator?",
                correct: "Mantiqiy (taqqoslash)",
                wrong: ["Arifmetik", "Bitli", "O‘zlashtirish"]
            },
            {
                q: "switch case matn bilan ishlaydimi?",
                correct: "Ha (string bilan ham ishlaydi)",
                wrong: ["Yo‘q", "Faqat char", "Faqat float"]
            },
            {
                q: "for (int i=1; i<=3; i++) nechta marta ishlaydi?",
                correct: "3 marta",
                wrong: ["2 marta", "4 marta", "Cheksiz"]
            },
            {
                q: "while siklida shart false bo‘lsa nima bo‘ladi?",
                correct: "Umuman bajarilmaydi",
                wrong: ["Bir marta bajariladi", "Xato beradi", "Cheksiz ishlaydi"]
            },
            {
                q: "do while da shart false bo‘lsa nima bo‘ladi?",
                correct: "Bir marta bajariladi",
                wrong: ["Bajarilmaydi", "Cheksiz", "Xato beradi"]
            },
            {
                q: "string s = \"\"; bu nimani anglatadi?",
                correct: "Bo‘sh satr",
                wrong: ["Null", "Xato", "0 qiymat"]
            },
            {
                q: "O‘zgaruvchi qiymatini o‘zgartirish qaysi operator bilan?",
                correct: "=",
                wrong: ["==", "+", "%"]
            },
            {
                q: "fabs(-12.5) natija?",
                correct: "12.5",
                wrong: ["-12.5", "0", "25"]
            },
            {
                q: "log10(100) natija?",
                correct: "2",
                wrong: ["10", "1", "0"]
            },
            {
                q: "exp(1) qiymati nimaga yaqin?",
                correct: "2.718",
                wrong: ["3.14", "1", "10"]
            },
            {
                q: "int a=13, b=5; a/b natija?",
                correct: "2",
                wrong: ["2.6", "3", "8"]
            },
            {
                q: "int a=13, b=5; a%b natija?",
                correct: "3",
                wrong: ["2", "5", "8"]
            },
            {
                q: "break operatori nima qiladi?",
                correct: "Sikl yoki switchdan chiqadi",
                wrong: ["Davom ettiradi", "Xato beradi", "Qayta boshlaydi"]
            },
            {
                q: "continue nima qiladi?",
                correct: "Keyingi takrorlanishga o‘tkazadi",
                wrong: ["Siklni to‘xtatadi", "Dasturdan chiqadi", "Qiymat beradi"]
            },
            {
                q: "while(true) nimani bildiradi?",
                correct: "Cheksiz sikl",
                wrong: ["Bir marta", "Shartli", "Xato"]
            },
            {
                q: "i++ nimani anglatadi?",
                correct: "i ni 1 ga oshiradi",
                wrong: ["i ni kamaytiradi", "2 ga oshiradi", "Nolga tenglaydi"]
            },
            {
                q: "sqrt(64) natija?",
                correct: "8",
                wrong: ["6", "7", "16"]
            },
            {
                q: "pow(3,2) natija?",
                correct: "9",
                wrong: ["6", "8", "3"]
            },
            {
                q: "abs(-15) natija?",
                correct: "15",
                wrong: ["-15", "0", "30"]
            },
            {
                q: "Massiv nima?",
                correct: "Bir xil turdagi ma’lumotlar to‘plami",
                wrong: ["Har xil tip", "Funksiya", "Operator"]
            },
            {
                q: "int a[5]; bu nima?",
                correct: "5 ta elementli butun massiv",
                wrong: ["Funksiya", "Pointer", "String"]
            },
            {
                q: "Massiv indekslari qayerdan boshlanadi?",
                correct: "0 dan",
                wrong: ["1 dan", "-1 dan", "Istalgan joydan"]
            },
            {
                q: "a[0] nimani bildiradi?",
                correct: "Birinchi element",
                wrong: ["Ikkinchi", "Oxirgi", "Yo‘q"]
            },
            {
                q: "for sikli massiv bilan nega qulay?",
                correct: "Avtomatik takrorlanadi",
                wrong: ["Tezroq ishlaydi", "Xato bermaydi", "Faqat for ishlaydi"]
            },
            {
                q: "2 o‘lchamli massiv nima?",
                correct: "Jadval ko‘rinishidagi massiv",
                wrong: ["Bitta ustun", "Funksiya", "Pointer"]
            },
            {
                q: "int a[3][3]; bu nima?",
                correct: "3x3 matritsa",
                wrong: ["3 ta massiv", "9 ta funksiya", "Xato"]
            },
            {
                q: "Funksiya nima?",
                correct: "Qayta ishlatiladigan kod bo‘lagi",
                wrong: ["O‘zgaruvchi", "Sikl", "Operator"]
            },
            {
                q: "Funksiya qachon ishlaydi?",
                correct: "Chaqarilganda",
                wrong: ["E’lon qilinganda", "Har doim", "Oxirida"]
            },
            {
                q: "void funksiya nimani qaytaradi?",
                correct: "Hech narsa",
                wrong: ["0", "1", "Qiymat"]
            },
            {
                q: "return vazifasi?",
                correct: "Qiymat qaytarish",
                wrong: ["Chiqarish", "Kiritish", "To‘xtatish"]
            },
            {
                q: "main() nima?",
                correct: "Dasturning asosiy funksiyasi",
                wrong: ["Kutubxona", "Sikl", "Operator"]
            },
            {
                q: "Funksiya parametri nima?",
                correct: "Tashqaridan keladigan qiymat",
                wrong: ["Ichki o‘zgaruvchi", "Natija", "Xato"]
            },
            {
                q: "global o‘zgaruvchi qayerda e’lon qilinadi?",
                correct: "main dan tashqarida",
                wrong: ["Sikl ichida", "Funksiya ichida", "if da"]
            },
            {
                q: "local o‘zgaruvchi qayerda ishlaydi?",
                correct: "E’lon qilingan joyida",
                wrong: ["Hamma joyda", "Faqat main da", "Faylda"]
            },
            {
                q: "Pointer nima?",
                correct: "Xotira manzilini saqlaydi",
                wrong: ["Qiymat", "Funksiya", "Massiv"]
            },
            {
                q: "int *p; bu nima?",
                correct: "Butun songa pointer",
                wrong: ["Massiv", "Funksiya", "Xato"]
            },
            {
                q: "& operatori nima?",
                correct: "Manzilni oladi",
                wrong: ["Qiymat", "Ko‘paytirish", "Bo‘lish"]
            },
            {
                q: "* operatori pointerda nima qiladi?",
                correct: "Qiymatni oladi",
                wrong: ["Manzil", "O‘chirish", "Qo‘shish"]
            },
            {
                q: "struct nima?",
                correct: "Bir nechta turdagi ma’lumotlarni birlashtiradi",
                wrong: ["Funksiya", "Sikl", "Operator"]
            },
            {
                q: "class nima?",
                correct: "Obyekt yaratish uchun shablon",
                wrong: ["Sikl", "Operator", "Massiv"]
            },
            {
                q: "public nimani bildiradi?",
                correct: "Hamma joydan ochiq",
                wrong: ["Yopiq", "Faqat ichki", "Faqat private"]
            },
            {
                q: "private nimani bildiradi?",
                correct: "Faqat class ichida",
                wrong: ["Hamma joyda", "main da", "Funksiyada"]
            },
            {
                q: "OOP nimani anglatadi?",
                correct: "Obyektga yo‘naltirilgan dasturlash",
                wrong: ["Oddiy protsedura", "Matematika", "Grafika"]
            },
            {
                q: "Constructor qachon ishlaydi?",
                correct: "Obyekt yaratilganda",
                wrong: ["O‘chirilganda", "Har doim", "Qo‘lda"]
            },
            {
                q: "Destructor vazifasi?",
                correct: "Xotirani tozalash",
                wrong: ["Yaratish", "Hisoblash", "Chop etish"]
            },
            {
                q: "new operatori nima qiladi?",
                correct: "Xotiradan joy ajratadi",
                wrong: ["O‘chiradi", "Chiqaradi", "Saqlaydi"]
            },
            {
                q: "delete nima qiladi?",
                correct: "Xotirani bo‘shatadi",
                wrong: ["Yaratadi", "Ko‘paytiradi", "Saqlaydi"]
            },
            {
                q: "C++ da fayl bilan ishlash uchun qaysi kutubxona?",
                correct: "fstream",
                wrong: ["iostream", "math.h", "string"]
            },
            {
                q: "ofstream nima?",
                correct: "Faylga yozish",
                wrong: ["O‘qish", "O‘chirish", "Saqlash"]
            },
            {
                q: "ifstream nima?",
                correct: "Fayldan o‘qish",
                wrong: ["Yozish", "Yaratish", "Yopish"]
            },
            {
                q: "EOF nimani bildiradi?",
                correct: "Fayl oxiri",
                wrong: ["Xato", "Boshlanish", "Qiymat"]
            },
            {
                q: "try-catch nima uchun?",
                correct: "Xatolarni ushlash",
                wrong: ["Tezlashtirish", "Sikl", "Chiqarish"]
            },
            {
                q: "throw nima qiladi?",
                correct: "Xato chiqaradi",
                wrong: ["To‘xtatadi", "Yozadi", "O‘chiradi"]
            },
            {
                q: "C++ da STL nima?",
                correct: "Standart shablonlar kutubxonasi",
                wrong: ["Sikl", "Operator", "IDE"]
            },
            {
                q: "vector nima?",
                correct: "Dinamik massiv",
                wrong: ["Oddiy massiv", "Pointer", "Funksiya"]
            },
            {
                q: "push_back nima qiladi?",
                correct: "Oxiriga element qo‘shadi",
                wrong: ["O‘chiradi", "O‘zgartiradi", "Tozalaydi"]
            },
            {
                q: "size() nimani qaytaradi?",
                correct: "Elementlar sonini",
                wrong: ["Xotira", "Manzil", "Qiymat"]
            },
            {
                q: "C++ da namespace nima?",
                correct: "Nomlar to‘qnashuvini oldini oladi",
                wrong: ["Sikl", "Class", "Funksiya"]
            },
            {
                q: "std nima?",
                correct: "Standart namespace",
                wrong: ["Funksiya", "Class", "Kutubxona"]
            }
];

window.cppQuestions = cppQuestions;