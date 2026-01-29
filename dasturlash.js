// const cppQuestions = [
//             {
//                 q: "\"\\n\" bilan endl orasidagi farq?",
//                 correct: "\\n faqat yangi qator, endl esa yangi qator + buffer tozalaydi",
//                 wrong: ["Farqi yo‘q", "endl faqat bo‘sh joy qo‘yadi", "\\n ekranni tozalaydi"]
//             },
//             {
//                 q: "cout << \"Salom\"; bu qanday amal?",
//                 correct: "Chiqarish (output) amali",
//                 wrong: ["Kiritish", "Taqqoslash", "O‘chirish"]
//             },
//             {
//                 q: "cin >> a; kodida a nima bo‘lishi kerak?",
//                 correct: "Oldindan e’lon qilingan o‘zgaruvchi",
//                 wrong: ["Funksiya", "Kutubxona", "Operator"]
//             },
//             {
//                 q: "iostream nima?",
//                 correct: "Kiritish-chiqarish kutubxonasi",
//                 wrong: ["Matematik kutubxona", "String kutubxonasi", "Grafik kutubxona"]
//             },
//             {
//                 q: "sqrt(x) funksiyasi nima qiladi?",
//                 correct: "Kvadrat ildizni hisoblaydi",
//                 wrong: ["Darajaga oshiradi", "Modulni topadi", "Logarifmni topadi"]
//             },
//             {
//                 q: "pow(2,3) natija?",
//                 correct: "8",
//                 wrong: ["6", "9", "5"]
//             },
//             {
//                 q: "abs(-7) natija?",
//                 correct: "7",
//                 wrong: ["-7", "0", "14"]
//             },
//             {
//                 q: "math.h qaysi turdagi funksiyalarni o‘z ichiga oladi?",
//                 correct: "Matematik funksiyalar",
//                 wrong: ["Kiritish-chiqarish", "Matn bilan ishlash", "Fayl funksiyalari"]
//             },
//             {
//                 q: "sqrt() funksiyasi qaysi kutubxonaga tegishli?",
//                 correct: "math.h",
//                 wrong: ["iostream", "string", "stdlib.h"]
//             },
//             {
//                 q: "C++ da matnlar qaysi tipda saqlanadi?",
//                 correct: "string",
//                 wrong: ["int", "char", "float"]
//             },
//             {
//                 q: "String bilan ishlash uchun qaysi kutubxona chaqiriladi?",
//                 correct: "string",
//                 wrong: ["iostream", "math.h", "stdio.h"]
//             },
//             {
//                 q: "Stringlar qanday taqqoslanadi?",
//                 correct: "== operatori bilan",
//                 wrong: ["=", "+", "%"]
//             },
//             {
//                 q: "Butun sonlar uchun qaysi tip ishlatiladi?",
//                 correct: "int",
//                 wrong: ["float", "double", "string"]
//             },
//             {
//                 q: "Haqiqiy sonlar uchun?",
//                 correct: "float yoki double",
//                 wrong: ["int", "char", "bool"]
//             },
//             {
//                 q: "char qaysi qiymatni oladi?",
//                 correct: "Bitta belgi",
//                 wrong: ["Butun son", "Matn", "Haqiqiy son"]
//             },
//             {
//                 q: "Mantiqiy qiymatlar uchun qaysi tur ishlatiladi?",
//                 correct: "bool",
//                 wrong: ["int", "char", "string"]
//             },
//             {
//                 q: "Katta haqiqiy sonlar uchun qaysi tur ishlatiladi?",
//                 correct: "double",
//                 wrong: ["int", "float", "char"]
//             },
//             {
//                 q: "int a; bu nima?",
//                 correct: "Butun tipdagi o‘zgaruvchi e’loni",
//                 wrong: ["Funksiya", "Operator", "Kutubxona"]
//             },
//             {
//                 q: "const kalit so‘zi?",
//                 correct: "O‘zgarmas qiymat belgilaydi",
//                 wrong: ["O‘zgaruvchini o‘chiradi", "Funksiya chaqiradi", "Shart tekshiradi"]
//             },
//             {
//                 q: "int a=5, b=7; bu nima?",
//                 correct: "Ikki o‘zgaruvchini e’lon qilish",
//                 wrong: ["Taqqoslash", "Sikl", "Funksiya"]
//             },
//             {
//                 q: "switch qachon ishlatiladi?",
//                 correct: "Bir o‘zgaruvchining bir nechta qiymatlari tekshirilganda",
//                 wrong: ["Sikl kerak bo‘lganda", "Funksiya yozishda", "Massivda"]
//             },
//             {
//                 q: "default bo‘limi qachon bajariladi?",
//                 correct: "Hech bir case mos kelmasa",
//                 wrong: ["Har doim", "Birinchi bo‘lib", "break bo‘lsa"]
//             },
//             {
//                 q: "for siklida nechta qism bo‘ladi?",
//                 correct: "3 ta",
//                 wrong: ["1 ta", "2 ta", "4 ta"]
//             },
//             {
//                 q: "while sikli qachon ishlaydi?",
//                 correct: "Shart rost bo‘lsa",
//                 wrong: ["Har doim", "Bir marta", "Shart yolg‘on bo‘lsa"]
//             },
//             {
//                 q: "do while siklining afzalligi?",
//                 correct: "Kamida bir marta bajariladi",
//                 wrong: ["Tezroq ishlaydi", "Shartsiz ishlaydi", "Faqat sikl oxirida"]
//             },
//             {
//                 q: "iostream kutubxonasini chaqirish uchun?",
//                 correct: "#include <iostream>",
//                 wrong: ["#include <math.h>", "#include <string>", "#include <stdio.h>"]
//             },
//             {
//                 q: "string kutubxonasini chaqirish uchun?",
//                 correct: "#include <string>",
//                 wrong: ["#include <iostream>", "#include <math.h>", "#include <stdlib.h>"]
//             },
//             {
//                 q: "sqrt funksiyasi qaysi kutubxonaga tegishli?",
//                 correct: "math.h",
//                 wrong: ["iostream", "string", "stdio.h"]
//             },
//             {
//                 q: "cout nima vazifani bajaradi?",
//                 correct: "Ma’lumotni ekranga chiqaradi",
//                 wrong: ["Kiritadi", "Saqlaydi", "O‘chiradi"]
//             },
//             {
//                 q: "return 0; vazifasi nima?",
//                 correct: "Dasturni muvaffaqiyatli tugatadi",
//                 wrong: ["Siklni to‘xtatadi", "Funksiyani chaqiradi", "Xatolik beradi"]
//             },
//             {
//                 q: "“\\n” vazifasi nima?",
//                 correct: "Yangi qatorga o‘tkazadi",
//                 wrong: ["Tab qo‘yadi", "Ekranni tozalaydi", "To‘xtatadi"]
//             },
//             {
//                 q: "F9 tugmasi Dev C++ da nima qiladi?",
//                 correct: "Compile & Run",
//                 wrong: ["Saqlaydi", "O‘chiradi", "Yopadi"]
//             },
//             {
//                 q: "F10 tugmasi vazifasi nima?",
//                 correct: "Keyingi qatorga o‘tadi (debug)",
//                 wrong: ["Run qiladi", "To‘xtatadi", "Saqlaydi"]
//             },
//             {
//                 q: "F11 tugmasining vazifasi nima?",
//                 correct: "Ichkariga kirib tekshiradi (debug)",
//                 wrong: ["Run", "Stop", "Save"]
//             },
//             {
//                 q: "if (a > b) – bu qaysi turdagi operator?",
//                 correct: "Mantiqiy (taqqoslash)",
//                 wrong: ["Arifmetik", "Bitli", "O‘zlashtirish"]
//             },
//             {
//                 q: "switch case matn bilan ishlaydimi?",
//                 correct: "Ha (string bilan ham ishlaydi)",
//                 wrong: ["Yo‘q", "Faqat char", "Faqat float"]
//             },
//             {
//                 q: "for (int i=1; i<=3; i++) nechta marta ishlaydi?",
//                 correct: "3 marta",
//                 wrong: ["2 marta", "4 marta", "Cheksiz"]
//             },
//             {
//                 q: "while siklida shart false bo‘lsa nima bo‘ladi?",
//                 correct: "Umuman bajarilmaydi",
//                 wrong: ["Bir marta bajariladi", "Xato beradi", "Cheksiz ishlaydi"]
//             },
//             {
//                 q: "do while da shart false bo‘lsa nima bo‘ladi?",
//                 correct: "Bir marta bajariladi",
//                 wrong: ["Bajarilmaydi", "Cheksiz", "Xato beradi"]
//             },
//             {
//                 q: "string s = \"\"; bu nimani anglatadi?",
//                 correct: "Bo‘sh satr",
//                 wrong: ["Null", "Xato", "0 qiymat"]
//             },
//             {
//                 q: "O‘zgaruvchi qiymatini o‘zgartirish qaysi operator bilan?",
//                 correct: "=",
//                 wrong: ["==", "+", "%"]
//             },
//             {
//                 q: "fabs(-12.5) natija?",
//                 correct: "12.5",
//                 wrong: ["-12.5", "0", "25"]
//             },
//             {
//                 q: "log10(100) natija?",
//                 correct: "2",
//                 wrong: ["10", "1", "0"]
//             },
//             {
//                 q: "exp(1) qiymati nimaga yaqin?",
//                 correct: "2.718",
//                 wrong: ["3.14", "1", "10"]
//             },
//             {
//                 q: "int a=13, b=5; a/b natija?",
//                 correct: "2",
//                 wrong: ["2.6", "3", "8"]
//             },
//             {
//                 q: "int a=13, b=5; a%b natija?",
//                 correct: "3",
//                 wrong: ["2", "5", "8"]
//             },
//             {
//                 q: "break operatori nima qiladi?",
//                 correct: "Sikl yoki switchdan chiqadi",
//                 wrong: ["Davom ettiradi", "Xato beradi", "Qayta boshlaydi"]
//             },
//             {
//                 q: "continue nima qiladi?",
//                 correct: "Keyingi takrorlanishga o‘tkazadi",
//                 wrong: ["Siklni to‘xtatadi", "Dasturdan chiqadi", "Qiymat beradi"]
//             },
//             {
//                 q: "while(true) nimani bildiradi?",
//                 correct: "Cheksiz sikl",
//                 wrong: ["Bir marta", "Shartli", "Xato"]
//             },
//             {
//                 q: "i++ nimani anglatadi?",
//                 correct: "i ni 1 ga oshiradi",
//                 wrong: ["i ni kamaytiradi", "2 ga oshiradi", "Nolga tenglaydi"]
//             },
//             {
//                 q: "sqrt(64) natija?",
//                 correct: "8",
//                 wrong: ["6", "7", "16"]
//             },
//             {
//                 q: "pow(3,2) natija?",
//                 correct: "9",
//                 wrong: ["6", "8", "3"]
//             },
//             {
//                 q: "abs(-15) natija?",
//                 correct: "15",
//                 wrong: ["-15", "0", "30"]
//             },
//             {
//                 q: "Massiv nima?",
//                 correct: "Bir xil turdagi ma’lumotlar to‘plami",
//                 wrong: ["Har xil tip", "Funksiya", "Operator"]
//             },
//             {
//                 q: "int a[5]; bu nima?",
//                 correct: "5 ta elementli butun massiv",
//                 wrong: ["Funksiya", "Pointer", "String"]
//             },
//             {
//                 q: "Massiv indekslari qayerdan boshlanadi?",
//                 correct: "0 dan",
//                 wrong: ["1 dan", "-1 dan", "Istalgan joydan"]
//             },
//             {
//                 q: "a[0] nimani bildiradi?",
//                 correct: "Birinchi element",
//                 wrong: ["Ikkinchi", "Oxirgi", "Yo‘q"]
//             },
//             {
//                 q: "for sikli massiv bilan nega qulay?",
//                 correct: "Avtomatik takrorlanadi",
//                 wrong: ["Tezroq ishlaydi", "Xato bermaydi", "Faqat for ishlaydi"]
//             },
//             {
//                 q: "2 o‘lchamli massiv nima?",
//                 correct: "Jadval ko‘rinishidagi massiv",
//                 wrong: ["Bitta ustun", "Funksiya", "Pointer"]
//             },
//             {
//                 q: "int a[3][3]; bu nima?",
//                 correct: "3x3 matritsa",
//                 wrong: ["3 ta massiv", "9 ta funksiya", "Xato"]
//             },
//             {
//                 q: "Funksiya nima?",
//                 correct: "Qayta ishlatiladigan kod bo‘lagi",
//                 wrong: ["O‘zgaruvchi", "Sikl", "Operator"]
//             },
//             {
//                 q: "Funksiya qachon ishlaydi?",
//                 correct: "Chaqarilganda",
//                 wrong: ["E’lon qilinganda", "Har doim", "Oxirida"]
//             },
//             {
//                 q: "void funksiya nimani qaytaradi?",
//                 correct: "Hech narsa",
//                 wrong: ["0", "1", "Qiymat"]
//             },
//             {
//                 q: "return vazifasi?",
//                 correct: "Qiymat qaytarish",
//                 wrong: ["Chiqarish", "Kiritish", "To‘xtatish"]
//             },
//             {
//                 q: "main() nima?",
//                 correct: "Dasturning asosiy funksiyasi",
//                 wrong: ["Kutubxona", "Sikl", "Operator"]
//             },
//             {
//                 q: "Funksiya parametri nima?",
//                 correct: "Tashqaridan keladigan qiymat",
//                 wrong: ["Ichki o‘zgaruvchi", "Natija", "Xato"]
//             },
//             {
//                 q: "global o‘zgaruvchi qayerda e’lon qilinadi?",
//                 correct: "main dan tashqarida",
//                 wrong: ["Sikl ichida", "Funksiya ichida", "if da"]
//             },
//             {
//                 q: "local o‘zgaruvchi qayerda ishlaydi?",
//                 correct: "E’lon qilingan joyida",
//                 wrong: ["Hamma joyda", "Faqat main da", "Faylda"]
//             },
//             {
//                 q: "Pointer nima?",
//                 correct: "Xotira manzilini saqlaydi",
//                 wrong: ["Qiymat", "Funksiya", "Massiv"]
//             },
//             {
//                 q: "int *p; bu nima?",
//                 correct: "Butun songa pointer",
//                 wrong: ["Massiv", "Funksiya", "Xato"]
//             },
//             {
//                 q: "& operatori nima?",
//                 correct: "Manzilni oladi",
//                 wrong: ["Qiymat", "Ko‘paytirish", "Bo‘lish"]
//             },
//             {
//                 q: "* operatori pointerda nima qiladi?",
//                 correct: "Qiymatni oladi",
//                 wrong: ["Manzil", "O‘chirish", "Qo‘shish"]
//             },
//             {
//                 q: "struct nima?",
//                 correct: "Bir nechta turdagi ma’lumotlarni birlashtiradi",
//                 wrong: ["Funksiya", "Sikl", "Operator"]
//             },
//             {
//                 q: "class nima?",
//                 correct: "Obyekt yaratish uchun shablon",
//                 wrong: ["Sikl", "Operator", "Massiv"]
//             },
//             {
//                 q: "public nimani bildiradi?",
//                 correct: "Hamma joydan ochiq",
//                 wrong: ["Yopiq", "Faqat ichki", "Faqat private"]
//             },
//             {
//                 q: "private nimani bildiradi?",
//                 correct: "Faqat class ichida",
//                 wrong: ["Hamma joyda", "main da", "Funksiyada"]
//             },
//             {
//                 q: "OOP nimani anglatadi?",
//                 correct: "Obyektga yo‘naltirilgan dasturlash",
//                 wrong: ["Oddiy protsedura", "Matematika", "Grafika"]
//             },
//             {
//                 q: "Constructor qachon ishlaydi?",
//                 correct: "Obyekt yaratilganda",
//                 wrong: ["O‘chirilganda", "Har doim", "Qo‘lda"]
//             },
//             {
//                 q: "Destructor vazifasi?",
//                 correct: "Xotirani tozalash",
//                 wrong: ["Yaratish", "Hisoblash", "Chop etish"]
//             },
//             {
//                 q: "new operatori nima qiladi?",
//                 correct: "Xotiradan joy ajratadi",
//                 wrong: ["O‘chiradi", "Chiqaradi", "Saqlaydi"]
//             },
//             {
//                 q: "delete nima qiladi?",
//                 correct: "Xotirani bo‘shatadi",
//                 wrong: ["Yaratadi", "Ko‘paytiradi", "Saqlaydi"]
//             },
//             {
//                 q: "C++ da fayl bilan ishlash uchun qaysi kutubxona?",
//                 correct: "fstream",
//                 wrong: ["iostream", "math.h", "string"]
//             },
//             {
//                 q: "ofstream nima?",
//                 correct: "Faylga yozish",
//                 wrong: ["O‘qish", "O‘chirish", "Saqlash"]
//             },
//             {
//                 q: "ifstream nima?",
//                 correct: "Fayldan o‘qish",
//                 wrong: ["Yozish", "Yaratish", "Yopish"]
//             },
//             {
//                 q: "EOF nimani bildiradi?",
//                 correct: "Fayl oxiri",
//                 wrong: ["Xato", "Boshlanish", "Qiymat"]
//             },
//             {
//                 q: "try-catch nima uchun?",
//                 correct: "Xatolarni ushlash",
//                 wrong: ["Tezlashtirish", "Sikl", "Chiqarish"]
//             },
//             {
//                 q: "throw nima qiladi?",
//                 correct: "Xato chiqaradi",
//                 wrong: ["To‘xtatadi", "Yozadi", "O‘chiradi"]
//             },
//             {
//                 q: "C++ da STL nima?",
//                 correct: "Standart shablonlar kutubxonasi",
//                 wrong: ["Sikl", "Operator", "IDE"]
//             },
//             {
//                 q: "vector nima?",
//                 correct: "Dinamik massiv",
//                 wrong: ["Oddiy massiv", "Pointer", "Funksiya"]
//             },
//             {
//                 q: "push_back nima qiladi?",
//                 correct: "Oxiriga element qo‘shadi",
//                 wrong: ["O‘chiradi", "O‘zgartiradi", "Tozalaydi"]
//             },
//             {
//                 q: "size() nimani qaytaradi?",
//                 correct: "Elementlar sonini",
//                 wrong: ["Xotira", "Manzil", "Qiymat"]
//             },
//             {
//                 q: "C++ da namespace nima?",
//                 correct: "Nomlar to‘qnashuvini oldini oladi",
//                 wrong: ["Sikl", "Class", "Funksiya"]
//             },
//             {
//                 q: "std nima?",
//                 correct: "Standart namespace",
//                 wrong: ["Funksiya", "Class", "Kutubxona"]
//             }
// ];
const cppQuestions =[
{
  q: "C++ dasturida cout dan foydalanish uchun qaysi kutubxona chaqiriladi?",
  correct: "iostream",
  wrong: ["cmath", "string", "stdlib"]
},
{
  q: "cout qaysi vazifani bajaradi?",
  correct: "Ekranda ma'lumot chiqarish",
  wrong: ["Ma'lumot kiritish", "Matn uzunligini hisoblash", "Daraja hisoblash"]
},
{
  q: "cin qaysi operator bilan ishlatiladi?",
  correct: ">>",
  wrong: ["<<", "==", "="]
},
{
  q: "using namespace std; yozilmasa cout qanday yoziladi?",
  correct: "std::cout",
  wrong: ["namespace::cout", "system::cout", "main::cout"]
},
{
  q: "endl ning vazifasi nima?",
  correct: "Yangi qatorga o'tish",
  wrong: ["Tab qo‘yish", "Formatlash", "Dasturni to‘xtatish"]
},
{
  q: "\"\\n\" bilan endl orasidagi farq nima?",
  correct: "endl buffer ni tozalaydi, \\n esa yo‘q",
  wrong: ["Farqi yo‘q", "endl faqat Windowsda ishlaydi", "\\n faqat string uchun"]
},
{
  q: "cout << \"Salom\"; bu qanday amal?",
  correct: "Ekranga \"Salom\" chiqarish",
  wrong: ["O‘zgaruvchiga saqlash", "Faylga yozish", "O‘qish"]
},
{
  q: "cin >> a; kodida a nima bo‘lishi kerak?",
  correct: "O‘zgaruvchi",
  wrong: ["Funksiya", "Kutubxona", "Operator"]
},
{
  q: "iostream nima?",
  correct: "Kirish/chiqish operatsiyalari kutubxonasi",
  wrong: ["Matematik", "Matn", "Vaqt kutubxonasi"]
},
{
  q: "sqrt(x) funksiyasi nima qiladi?",
  correct: "x ning kvadrat ildizini hisoblaydi",
  wrong: ["Kvadratini", "Modulini", "Logarifmini"]
},
{
  q: "pow(2,3) natijasi nima?",
  correct: "8",
  wrong: ["6", "9", "5"]
},
{
  q: "abs(-7) natijasi nima?",
  correct: "7",
  wrong: ["-7", "0", "1"]
},
{
  q: "math.h qaysi funksiyalarni o‘z ichiga oladi?",
  correct: "Matematik funksiyalar",
  wrong: ["Matn", "Fayl", "Vaqt"]
},
{
  q: "sqrt() funksiyasi qaysi kutubxonaga tegishli?",
  correct: "cmath",
  wrong: ["iostream", "string", "stdlib"]
},
{
  q: "C++ da matnlar qaysi tipda saqlanadi?",
  correct: "string",
  wrong: ["int", "char", "float"]
},
{
  q: "String bilan ishlash uchun qaysi kutubxona chaqiriladi?",
  correct: "string",
  wrong: ["iostream", "cmath", "vector"]
},
{
  q: "Stringlar qanday taqqoslanadi?",
  correct: "== operatori bilan",
  wrong: ["=", "compare() faqat", "Faqat < operatori"]
},
{
  q: "Butun sonlar uchun qaysi tip ishlatiladi?",
  correct: "int",
  wrong: ["float", "char", "bool"]
},
{
  q: "Haqiqiy sonlar uchun qaysi tip ishlatiladi?",
  correct: "float yoki double",
  wrong: ["int", "char", "string"]
},
{
  q: "char tipi nimani saqlaydi?",
  correct: "Bitta belgi",
  wrong: ["Butun son", "Matn", "Mantiqiy qiymat"]
},
{
  q: "Mantiqiy qiymatlar uchun qaysi tip ishlatiladi?",
  correct: "bool",
  wrong: ["int", "char", "float"]
},
{
  q: "Katta haqiqiy sonlar uchun qaysi tip ishlatiladi?",
  correct: "double",
  wrong: ["int", "char", "bool"]
},
{
  q: "int a; bu nimani bildiradi?",
  correct: "Butun tipdagi o‘zgaruvchi e’lon qilish",
  wrong: ["Funksiya", "Kutubxona", "Konstanta"]
},
{
  q: "const kalit so‘zi nima qiladi?",
  correct: "Konstanta e’lon qiladi",
  wrong: ["Funksiya", "Shart operatori", "Sikl"]
},
{
  q: "int a=5, b=7; bu nima?",
  correct: "Ikki o‘zgaruvchini e’lon qilish va qiymat berish",
  wrong: ["Funksiya", "Konstanta", "Kutubxona"]
},
{
  q: "Eng kichik butun tip qaysi?",
  correct: "char",
  wrong: ["int", "short", "long"]
},
{
  q: "Eng katta butun tip qaysi?",
  correct: "long long",
  wrong: ["int", "short", "char"]
},
{
  q: "O‘zgaruvchi nomi qaysi belgidan boshlanmaydi?",
  correct: "Raqam",
  wrong: ["Harif", "_", "$"]
},
{
  q: "C++ da _name nomli o‘zgaruvchi bo‘ladimi?",
  correct: "Ha",
  wrong: ["Yo‘q", "Faqat funksiya ichida", "Faqat global"]
},
{
  q: "O‘zgaruvchi nomida bo‘sh joy ishlatiladimi?",
  correct: "Yo‘q",
  wrong: ["Ha", "Faqat orasida", "Faqat oxirida"]
},
{
  q: "Algoritm nima?",
  correct: "Muammoni hal qilish tartibi",
  wrong: ["Dastur tili", "Matematik formula", "Kutubxona"]
},
{
  q: "Algoritmning asosiy xususiyati qaysi?",
  correct: "Aniqlik",
  wrong: ["Rangdorlik", "Murakkablik", "Uzunlik"]
},
{
  q: "Algoritm kirishi nimani anglatadi?",
  correct: "Dasturga beriladigan ma'lumotlar",
  wrong: ["Natijalar", "Dastur kodi", "Algoritm turi"]
},
{
  q: "Algoritm chiqishi nima?",
  correct: "Natijalar",
  wrong: ["Kirish ma'lumotlari", "Oraliq hisoblar", "Dastur kodi"]
},
{
  q: "Algoritm turlari nechta?",
  correct: "3",
  wrong: ["2", "4", "5"]
},
{
  q: "Chiziqli algoritm qanday ishlaydi?",
  correct: "Qadamlar ketma-ket bajariladi",
  wrong: ["Shartga qarab", "Takrorlanib", "Tasodifiy"]
},
{
  q: "Tarmoqlanuvchi algoritm qaysi operator bilan ishlaydi?",
  correct: "if-else",
  wrong: ["for", "while", "do-while"]
},
{
  q: "Takrorlanuvchi algoritm nima orqali amalga oshiriladi?",
  correct: "Sikllar orqali",
  wrong: ["if-else", "switch", "break"]
},
{
  q: "Blok-sxemada parallelogram nimani bildiradi?",
  correct: "Kirish/chiqish",
  wrong: ["Shart", "Jarayon", "Boshlash"]
},
{
  q: "Blok-sxemada romb nimani bildiradi?",
  correct: "Shartni tekshirish",
  wrong: ["Hisoblash", "Kirish", "Boshlash"]
},
{
  q: "Blok-sxemada oval nimani bildiradi?",
  correct: "Boshlash yoki tugatish",
  wrong: ["Shart", "Hisoblash", "Kirish"]
},
{
  q: "Blok-sxemada to‘g‘ri to‘rtburchak nimani bildiradi?",
  correct: "Hisoblash amali",
  wrong: ["Shart", "Kirish", "Boshlash"]
},
{
  q: "Algoritmga qo‘yiladigan talablar qaysilar?",
  correct: "Aniqlik, cheklilik, samaradorlik",
  wrong: ["Rangdorlik", "Go‘zallik", "Murakkablik"]
},
{
  q: "Tarmoqlanish nechta chiqishga ega bo‘lishi mumkin?",
  correct: "2 yoki undan ko‘p",
  wrong: ["1", "3", "Cheksiz"]
},
{
  q: "Blok-sxemada start qanday belgilanadi?",
  correct: "Oval ichida",
  wrong: ["To‘rtburchak", "Romb", "Parallelogram"]
},
{
  q: "if operatori qachon bajariladi?",
  correct: "Shart rost bo‘lsa",
  wrong: ["Har doim", "Shart yolg‘on bo‘lsa", "Hech qachon"]
},
{
  q: "else qachon ishlaydi?",
  correct: "if sharti yolg‘on bo‘lsa",
  wrong: ["if rost bo‘lsa", "Har doim", "Hech qachon"]
},
{
  q: "else if nima uchun ishlatiladi?",
  correct: "Bir nechta shartni tekshirish uchun",
  wrong: ["Sikllar uchun", "Bitta shart", "Funksiya uchun"]
},
{
  q: "if(a>b) nimani tekshiradi?",
  correct: "a b dan kattami",
  wrong: ["a b dan kichikmi", "a b ga tengmi", "a b dan farqlimi"]
},
{
  q: "Bir nechta shartni tekshirish uchun qaysi tuzilma ishlatiladi?",
  correct: "if-else if-else",
  wrong: ["faqat if", "faqat else", "switch"]
},
{
  q: "if(a==b) operatori nimani tekshiradi?",
  correct: "Tenglikni tekshiradi",
  wrong: ["Kattalikni", "Kichiklikni", "Faqat raqamlar uchun"]
},
{
  q: "if(a!=b) nimani anglatadi?",
  correct: "a b ga teng emas",
  wrong: ["a b ga teng", "a b dan katta", "a b dan kichik"]
},
{
  q: "if(shart) dan keyin qaysi belgi ishlatiladi?",
  correct: "{} jingalak qavslar",
  wrong: ["()", "[]", ";"]
},
{
  q: "else dan oldin nima bo‘lishi shart?",
  correct: "if",
  wrong: ["for", "while", "switch"]
},
{
  q: "else if qayerda joylashadi?",
  correct: "if dan keyin, else dan oldin",
  wrong: ["if dan oldin", "else dan keyin", "Har joyda"]
},
{
  q: "switch qaysi turdagi qiymatlar bilan ishlaydi?",
  correct: "Butun sonlar va char",
  wrong: ["Matnlar", "Haqiqiy sonlar", "Hammasi bilan"]
},
{
  q: "case dan keyin nima yoziladi?",
  correct: "Qiymat va ikki nuqta",
  wrong: ["Funksiya", "O‘zgaruvchi", "Operator"]
},
{
  q: "default qachon bajariladi?",
  correct: "Hech bir case mos kelmasa",
  wrong: ["Har doim birinchi", "Har doim oxirgi", "Hech qachon"]
},
{
  q: "break ning vazifasi nima?",
  correct: "switch yoki sikldan chiqish",
  wrong: ["Dasturni to‘xtatish", "Xatoni tuzatish", "Davom ettirish"]
},
{
  q: "switch(a) nimani bildiradi?",
  correct: "a qiymatiga qarab tarmoqlanish",
  wrong: ["a ni oshirish", "a ni kamaytirish", "a ni saqlash"]
},
{
  q: "case 1: nimani anglatadi?",
  correct: "a=1 bo‘lsa bajariladigan kod",
  wrong: ["1 ni a ga berish", "Taqqoslash", "Chiqarish"]
},
{
  q: "switch dan keyin qaysi qavslar ishlatiladi?",
  correct: "{} jingalak qavslar",
  wrong: ["()", "[]", "Qavs kerak emas"]
},
{
  q: "break ishlatilmasa nima bo‘ladi?",
  correct: "Keyingi case lar ham bajariladi",
  wrong: ["Xato beradi", "Dastur to‘xtaydi", "Hech narsa"]
},
{
  q: "default necha marta ishlatiladi?",
  correct: "Switch da bir marta",
  wrong: ["Har case dan keyin", "Cheksiz", "Hech qachon"]
},
{
  q: "Switch qachon foydali?",
  correct: "Ko‘p alternativ shartlar bo‘lsa",
  wrong: ["Faqat ikkita shart", "Sikllarda", "Funksiyalarda"]
},
{
  q: "for sikli nechta qismdan iborat?",
  correct: "3",
  wrong: ["2", "4", "1"]
},
{
  q: "for(int i=0; i<5; i++) necha marta ishlaydi?",
  correct: "5 marta",
  wrong: ["4", "6", "Cheksiz"]
},
{
  q: "while qachon ishlaydi?",
  correct: "Shart rost bo‘lganda",
  wrong: ["Har doim", "Hech qachon", "Bir marta"]
},
{
  q: "do while ning afzalligi nimada?",
  correct: "Kamida bir marta bajariladi",
  wrong: ["Bajarilmaydi", "Cheksiz", "Tezroq"]
},
{
  q: "while(i<5) nimani bildiradi?",
  correct: "i 5 dan kichik bo‘lganda bajar",
  wrong: ["i ni oshir", "Taqqosla", "5 marta takrorla"]
},
{
  q: "break siklda nima qiladi?",
  correct: "Sikldan darhol chiqadi",
  wrong: ["Davom ettiradi", "Qayta boshlaydi", "Xato chiqaradi"]
},
{
  q: "while(true) nima?",
  correct: "Cheksiz sikl",
  wrong: ["Xato", "Bir marta", "Ishlamaydi"]
},
{
  q: "i++ nimani anglatadi?",
  correct: "i ni 1 ga oshiradi",
  wrong: ["1 ga kamaytiradi", "2 ga oshiradi", "Tekshiradi"]
},
{
  q: "string s=\"Hello\"; cout<<s; natija?",
  correct: "Hello chiqadi",
  wrong: ["Xato", "Hech narsa", "Saqlaydi"]
},
{
  q: "string turi nimani saqlaydi?",
  correct: "Matn",
  wrong: ["Butun son", "Haqiqiy son", "Mantiqiy qiymat"]
},
{
  q: "sqrt(64) natijasi?",
  correct: "8",
  wrong: ["32", "4096", "4"]
},
{
  q: "abs(-15) natijasi?",
  correct: "15",
  wrong: ["-15", "0", "1"]
},
{
  q: "string a=\"Salom \", b=\"Talabalar\"; cout<<a<<b; natija?",
  correct: "Salom Talabalar",
  wrong: ["SalomTalabalar", "Xato", "Hech narsa"]
},
{
  q: "cout<<\"Salom\"<<endl; nima qiladi?",
  correct: "Salom chiqarib yangi qatorga o‘tadi",
  wrong: ["Faqat chiqaradi", "Xato", "To‘xtatadi"]
},
{
  q: "\\t belgisi nima qiladi?",
  correct: "Tab bo‘shlig‘i qo‘yadi",
  wrong: ["Yangi qator", "Orqaga qaytadi", "Xato"]
},
{
  q: "float turi nimaga mo‘ljallangan?",
  correct: "O‘nli kasrli sonlar uchun",
  wrong: ["Butun son", "Matn", "Mantiqiy"]
},
{
  q: "int a=10; a=a+5; cout<<a; natija?",
  correct: "15",
  wrong: ["10", "5", "Xato"]
},
{
  q: "else qachon yoziladi?",
  correct: "if dan keyin, alternativ holat uchun",
  wrong: ["if dan oldin", "for dan keyin", "while dan keyin"]
},
{
  q: "else if nima uchun ishlatiladi?",
  correct: "Qo‘shimcha shartlarni tekshirish uchun",
  wrong: ["Bitta shart", "Sikllar", "Funksiyalar"]
},
{
  q: "switch qachon ishlatiladi?",
  correct: "Turli qiymatlar uchun turli kod bajarishda",
  wrong: ["Faqat raqamlar", "Faqat matnlar", "Sikllar"]
},
{
  q: "default bo‘limi qachon bajariladi?",
  correct: "Hech bir case mos kelmasa",
  wrong: ["Har doim birinchi", "Har doim oxirgi", "Har doim"]
},
{
  q: "for siklida nechta qism bo‘ladi?",
  correct: "3",
  wrong: ["2", "4", "1"]
},
{
  q: "while sikli qachon ishlaydi?",
  correct: "Shart rost bo‘lganda",
  wrong: ["Yolg‘on bo‘lganda", "Har doim", "Hech qachon"]
},
{
  q: "do while sikli while dan nimasi bilan farq qiladi?",
  correct: "Kamida bir marta bajariladi",
  wrong: ["Bajarilmaydi", "Tezroq", "Xato bermaydi"]
},
{
  q: "iostream kutubxonasi nimaga kerak?",
  correct: "Kirish va chiqish amallari uchun",
  wrong: ["Matematik", "Matn", "Vaqt"]
},
{
  q: "return 0; nimani bildiradi?",
  correct: "Dastur muvaffaqiyatli tugadi",
  wrong: ["To‘xtatadi", "Xato", "Qiymat qaytaradi"]
},
{
  q: "\"\\n\" ning vazifasi nima?",
  correct: "Yangi qatorga o‘tish",
  wrong: ["Tab", "Orqaga qaytish", "To‘xtash"]
},
{
  q: "Dev C++ da F9 tugmasi nima qiladi?",
  correct: "Kompilyatsiya va ishga tushiradi",
  wrong: ["To‘xtatadi", "Saqlaydi", "Yordam"]
},
{
  q: "Dev C++ da F10 nima qiladi?",
  correct: "Dasturni ishga tushiradi",
  wrong: ["Saqlaydi", "Yordam", "To‘xtatadi"]
},
{
  q: "Dev C++ da F11 nima qiladi?",
  correct: "Debug rejimida ishga tushiradi",
  wrong: ["Saqlaydi", "To‘xtatadi", "Yordam"]
},
{
  q: "if(a>b) bu qaysi turdagi operator?",
  correct: "Shart operatori",
  wrong: ["Sikl", "Tayinlash", "Funksiya"]
},
{
  q: "switch case matn bilan ishlaydimi?",
  correct: "Yo‘q, faqat butun sonlar va char bilan",
  wrong: ["Ha", "Faqat raqamlar", "Faqat harflar"]
},
{
  q: "for(int i=1;i<=3;i++) necha marta ishlaydi?",
  correct: "3 marta",
  wrong: ["2", "4", "Cheksiz"]
},
{
  q: "while siklida agar shart false bo‘lsa nima bo‘ladi?",
  correct: "Sikl bajarilmaydi",
  wrong: ["Cheksiz ishlaydi", "Xato beradi", "Bir marta bajariladi"]
},
{
  q: "do while da shart false bo‘lsa nima bo‘ladi?",
  correct: "Sikl kamida bir marta bajariladi",
  wrong: ["Umuman bajarilmaydi", "Cheksiz ishlaydi", "Xato beradi"]
},
{
  q: "iostream kutubxonasini chaqirish uchun qaysi yozuv ishlatiladi?",
  correct: "#include <iostream>",
  wrong: ["using iostream", "import iostream", "#include iostream"]
},
{
  q: "string kutubxonasini chaqirish uchun qaysi yozuv to‘g‘ri?",
  correct: "#include <string>",
  wrong: ["using string", "import string", "#include string"]
},
{
  q: "sqrt funksiyasi qaysi kutubxonaga tegishli?",
  correct: "cmath",
  wrong: ["iostream", "stdlib", "string"]
},
{
  q: "cout operatori nima vazifani bajaradi?",
  correct: "Ma'lumotni ekranga chiqaradi",
  wrong: ["Ma'lumot kiritadi", "Saqlaydi", "O‘chiradi"]
},
{
  q: "return 0; nimani bildiradi?",
  correct: "Dastur muvaffaqiyatli yakunlandi",
  wrong: ["Xato bor", "Dasturni to‘xtatadi", "Qiymat kiritadi"]
},
{
  q: "string a=\"ABC\"; cout<<a<<endl<<\"123\"; natija?",
  correct: "ABC va yangi qatorda 123",
  wrong: ["ABC123", "Xato", "Hech narsa"]
},
{
  q: "\"\\n\" belgisi nima qiladi?",
  correct: "Yangi qatorga o‘tkazadi",
  wrong: ["Tab qo‘yadi", "O‘chiradi", "To‘xtatadi"]
},
{
  q: "Dev C++ da F9 tugmasi vazifasi?",
  correct: "Kompilyatsiya qilib ishga tushiradi",
  wrong: ["To‘xtatadi", "Saqlaydi", "Debug"]
},
{
  q: "Dev C++ da F10 tugmasi nima qiladi?",
  correct: "Dasturni ishga tushiradi",
  wrong: ["Saqlaydi", "To‘xtatadi", "Yordam"]
},
{
  q: "Dev C++ da F11 tugmasi vazifasi?",
  correct: "Debug rejimida ishga tushiradi",
  wrong: ["Oddiy ishga tushiradi", "Saqlaydi", "To‘xtatadi"]
},
{
  q: "if (a > b) bu qaysi operator?",
  correct: "Shart operatori",
  wrong: ["Sikl", "Tayinlash", "Mantiqiy"]
},
{
  q: "switch operatori nimaga xizmat qiladi?",
  correct: "Bir nechta variantli tarmoqlanish uchun",
  wrong: ["Sikl", "Funksiya", "Massiv"]
},
{
  q: "for (int i=1; i<=3; i++) necha marta bajariladi?",
  correct: "3 marta",
  wrong: ["2", "4", "Cheksiz"]
},
{
  q: "while siklida shart false bo‘lsa nima bo‘ladi?",
  correct: "Sikl bajarilmaydi",
  wrong: ["Bir marta bajariladi", "Cheksiz", "Xato"]
},
{
  q: "do while siklining farqi nimada?",
  correct: "Kamida bir marta bajariladi",
  wrong: ["Bajarilmaydi", "Tezroq ishlaydi", "Xato bermaydi"]
},
{
  q: "int a=5; cout<<a+3; natija?",
  correct: "8",
  wrong: ["5", "3", "Xato"]
},
{
  q: "string s=\"\"; bu nimani bildiradi?",
  correct: "Bo‘sh matn",
  wrong: ["Xato", "0", "Bo‘sh joy"]
},
{
  q: "Qiymat tayinlash qaysi operator bilan bajariladi?",
  correct: "=",
  wrong: ["==", "!=", ">"]
},
{
  q: "Parallelogram blok-sxemada nimani bildiradi?",
  correct: "Kirish/chiqish",
  wrong: ["Shart", "Hisoblash", "Boshlash"]
},
{
  q: "Romb shakli blok-sxemada nimani bildiradi?",
  correct: "Shartni tekshirish",
  wrong: ["Hisoblash", "Kirish", "Chiqish"]
},
{
  q: "int a; bu nimani bildiradi?",
  correct: "Butun son o‘zgaruvchisi e’lon qilindi",
  wrong: ["Haqiqiy son", "Matn", "Mantiqiy"]
},
{
  q: "string familiya; bu nima?",
  correct: "Matn o‘zgaruvchisi",
  wrong: ["Butun son", "Haqiqiy son", "Mantiqiy"]
},
{
  q: "sqrt(25) natijasi?",
  correct: "5",
  wrong: ["25", "625", "0.2"]
},
{
  q: "abs(0-7) natijasi?",
  correct: "7",
  wrong: ["0", "-7", "1"]
},
{
  q: "string x=\"A\", y=\"B\"; cout<<x+y; natija?",
  correct: "AB",
  wrong: ["A B", "Xato", "Hech narsa"]
},
{
  q: "cout<<\"Salom\"<<\"\\n\"<<\"Dunyo\"; natija?",
  correct: "Salom va yangi qatorda Dunyo",
  wrong: ["SalomDunyo", "Xato", "Hech narsa"]
},
{
  q: "string name=\"Ali\"; cout<<name; natija?",
  correct: "Ali",
  wrong: ["name", "Xato", "Hech narsa"]
},
{
  q: "fabs(-12.5) natijasi?",
  correct: "12.5",
  wrong: ["-12.5", "0", "1"]
},
{
  q: "abs(-7) natijasi?",
  correct: "7",
  wrong: ["-7", "0", "1"]
},
{
  q: "pow(2,3) natijasi?",
  correct: "8",
  wrong: ["6", "9", "5"]
},
{
  q: "log(1) natijasi?",
  correct: "0",
  wrong: ["1", "10", "Xato"]
},
{
  q: "log10(100) natijasi?",
  correct: "2",
  wrong: ["10", "100", "1"]
},
{
  q: "exp(1) qaysi qiymatga yaqin?",
  correct: "2.718",
  wrong: ["1", "0", "10"]
},
{
  q: "int a=13,b=5; cout<<a/b; natija?",
  correct: "2",
  wrong: ["2.6", "3", "Xato"]
},
{
  q: "int a=13,b=5; cout<<a%b; natija?",
  correct: "3",
  wrong: ["2", "0", "Xato"]
},
{
  q: "int x=10; if(x>5) cout<<\"Katta\"; natija?",
  correct: "Katta",
  wrong: ["Hech narsa", "Xato", "10"]
},
{
  q: "else qachon bajariladi?",
  correct: "if sharti yolg‘on bo‘lsa",
  wrong: ["if rost bo‘lsa", "Har doim", "Hech qachon"]
},
{
  q: "else if nima uchun ishlatiladi?",
  correct: "Qo‘shimcha shartlarni tekshirish uchun",
  wrong: ["Sikl", "Funksiya", "Kutubxona"]
},
{
  q: "switch operatori qachon qulay?",
  correct: "Ko‘p variantli shartlarda",
  wrong: ["Sikllarda", "Funksiyada", "Massivda"]
},
{
  q: "default bo‘limi qachon ishlaydi?",
  correct: "Hech bir case mos kelmasa",
  wrong: ["Har doim", "Birinchi", "Oxirgi"]
},
{
  q: "for(int i=0;i<4;i++) necha marta ishlaydi?",
  correct: "4 marta",
  wrong: ["3", "5", "Cheksiz"]
},
{
  q: "while(x<3) qachon bajariladi?",
  correct: "x 3 dan kichik bo‘lsa",
  wrong: ["x katta bo‘lsa", "Har doim", "Hech qachon"]
},
{
  q: "do while(x<3) nimasi bilan farq qiladi?",
  correct: "Kamida bir marta bajariladi",
  wrong: ["Bajarilmaydi", "Tezroq", "Xato bermaydi"]
},
{
  q: "cout<<matn; nimani bajaradi?",
  correct: "Matnni ekranga chiqaradi",
  wrong: ["Kiritadi", "Saqlaydi", "O‘chiradi"]
},
{
  q: "fabs funksiyasi nimani hisoblaydi?",
  correct: "Haqiqiy sonning modulini",
  wrong: ["Butun son", "Daraja", "Logarifm"]
},
{
  q: "abs funksiyasi nimani hisoblaydi?",
  correct: "Butun son modulini",
  wrong: ["Haqiqiy son", "Kvadrat", "Logarifm"]
},
{
  q: "int a = 5; a = a + 2; cout << a; natija?",
  correct: "7",
  wrong: ["5", "2", "Xato"]
},
{
  q: "string matn = \"Salom\"; cout << matn + \" dunyo\"; natija?",
  correct: "Salom dunyo",
  wrong: ["Salomdunyo", "Xato", "dunyo"]
},
{
  q: "int a = 4, b = 2; cout << a / b; natija?",
  correct: "2",
  wrong: ["0.5", "8", "Xato"]
},
{
  q: "int a = 5, b = 2; cout << a % b; natija?",
  correct: "1",
  wrong: ["2", "0", "2.5"]
},
{
  q: "int a = 5; a = a + 2; cout << a; natija?",
  correct: "7",
  wrong: ["5", "2", "Xato"]
},
{
  q: "string matn = \"Salom\"; cout << matn + \" dunyo\"; natija?",
  correct: "Salom dunyo",
  wrong: ["Salomdunyo", "Xato", "dunyo"]
},
{
  q: "int a = 4, b = 2; cout << a / b; natija?",
  correct: "2",
  wrong: ["0.5", "8", "Xato"]
},
{
  q: "int a = 5, b = 2; cout << a % b; natija?",
  correct: "1",
  wrong: ["2", "0", "2.5"]
},
{
  q: "pow(3,2) natija?",
  correct: "9",
  wrong: ["6", "27", "8"]
},
{
  q: "log(10) qaysi qiymatga yaqin?",
  correct: "2.3026",
  wrong: ["1", "10", "0"]
},
{
  q: "log10(1000) natija?",
  correct: "3",
  wrong: ["10", "100", "1"]
},
{
  q: "exp(2) qaysi qiymatga yaqin?",
  correct: "7.389",
  wrong: ["2", "4", "1"]
},
{
  q: "int a=17, b=3; cout << a / b; natija?",
  correct: "5",
  wrong: ["5.66", "6", "Xato"]
},
{
  q: "int a=17, b=3; cout << a % b; natija?",
  correct: "2",
  wrong: ["5", "0", "1"]
},
{
  q: "if(x>5) cout<<\"A\"; else cout<<\"B\"; x=10; natija?",
  correct: "A",
  wrong: ["B", "10", "Xato"]
},
{
  q: "if/else if/else tuzilmasi to‘g‘rimi?",
  correct: "Ha, to‘g‘ri",
  wrong: ["Yo‘q", "Faqat bitta else bo‘ladi", "else if bo‘lmaydi"]
},
{
  q: "switch case da break nima qiladi?",
  correct: "case dan chiqadi",
  wrong: ["Dasturni to‘xtatadi", "Qiymat beradi", "Xato chiqaradi"]
},
{
  q: "string s = \"\"; bu nimani bildiradi?",
  correct: "Bo‘sh matn",
  wrong: ["Xato", "0", "Bo‘sh joy"]
},
{
  q: "int a = 5; a = a + 7; cout << a; natija?",
  correct: "12",
  wrong: ["5", "7", "Xato"]
},
{
  q: "string x=\"Hello\"; cout << x + \" World\"; natija?",
  correct: "Hello World",
  wrong: ["HelloWorld", "Xato", "World"]
},
{
  q: "int a=10, b=2; cout << a / b; natija?",
  correct: "5",
  wrong: ["0.2", "20", "Xato"]
},
{
  q: "int a=10, b=3; cout << a % b; natija?",
  correct: "1",
  wrong: ["3", "0", "3.33"]
},
{
  q: "if(x==7) bu qaysi operator?",
  correct: "Tenglikni tekshirish",
  wrong: ["Tayinlash", "Kattalik", "Kichiklik"]
},
{
  q: "string name; name=\"Olim\"; cout << name; natija?",
  correct: "Olim",
  wrong: ["name", "Xato", "Hech narsa"]
},
{
  q: "int a=20, b=4; cout << a / b; natija?",
  correct: "5",
  wrong: ["0.2", "80", "Xato"]
},
{
  q: "int a=20, b=4; cout << a % b; natija?",
  correct: "0",
  wrong: ["5", "1", "2"]
},
{
  q: "string x=\"X\", y=\"Y\"; cout << x + y; natija?",
  correct: "XY",
  wrong: ["X Y", "X+Y", "X,Y"]
},
{
  q: "int x=8; if(x>5) cout<<\"Yes\"; else cout<<\"No\"; natija?",
  correct: "Yes",
  wrong: ["No", "8", "Xato"]
},
{
  q: "for(int i=0;i<4;i++) cout<<i; natija?",
  correct: "0123",
  wrong: ["1234", "4", "Xato"]
},
{
  q: "while(int i=0;i<3) {} xato sababi?",
  correct: "while da initsializatsiya bo‘lmaydi",
  wrong: ["To‘g‘ri", "{} kerak emas", "i++ yo‘q"]
},
{
  q: "do { cout<<\"Hi\"; } while(false); nechta marta bajariladi?",
  correct: "1 marta",
  wrong: ["0", "Cheksiz", "Xato"]
},
{
  q: "Algoritm xususiyati qaysi?",
  correct: "Aniqlik",
  wrong: ["Rangdorlik", "Uzunlik", "Qiyinlik"]
},
{
  q: "string s=\"Salom\"; cout<<s; natija?",
  correct: "Salom",
  wrong: ["s", "Xato", "Hech narsa"]
},
{
  q: "abs(-100) natija?",
  correct: "100",
  wrong: ["-100", "0", "1"]
},
{
  q: "fabs(-0.99) natija?",
  correct: "0.99",
  wrong: ["-0.99", "0", "1"]
},
{
  q: "pow(3,3) natija?",
  correct: "27",
  wrong: ["9", "81", "6"]
},
{
  q: "log(10) qaysi qiymatga yaqin?",
  correct: "2.3026",
  wrong: ["1", "10", "0"]
},
{
  q: "int a=25, b=4; cout << a / b; natija?",
  correct: "6",
  wrong: ["6.25", "5", "Xato"]
},
{
  q: "int a=25, b=4; cout << a % b; natija?",
  correct: "1",
  wrong: ["6", "0", "2"]
},
{
  q: "int x=12; if(x>10) cout<<\"Katta\"; natija?",
  correct: "Katta",
  wrong: ["Kichik", "12", "Hech narsa"]
},
{
  q: "else operatori qachon ishlaydi?",
  correct: "if sharti yolg‘on bo‘lsa",
  wrong: ["if rost bo‘lsa", "Har doim", "Hech qachon"]
},
{
  q: "else if nima uchun ishlatiladi?",
  correct: "Qo‘shimcha shartlarni tekshirish uchun",
  wrong: ["Asosiy shart", "Sikl", "Funksiya"]
},
{
  q: "switch qachon ishlatiladi?",
  correct: "Turli qiymatlar uchun",
  wrong: ["Sikl uchun", "Matn uchun", "Faqat raqam"]
},
{
  q: "default case vazifasi nima?",
  correct: "Mos kelmasa ishlaydi",
  wrong: ["Har doim", "Birinchi", "Oxirgi"]
},
{
  q: "for(int i=0;i<6;i++) nechta marta bajariladi?",
  correct: "6 marta",
  wrong: ["5", "7", "Cheksiz"]
},
{
  q: "while(x<5) qachon ishlaydi?",
  correct: "x 5 dan kichik bo‘lsa",
  wrong: ["x katta bo‘lsa", "Har doim", "Hech qachon"]
},
{
  q: "do while(x<5) ning farqi nimada?",
  correct: "Kamida bir marta bajariladi",
  wrong: ["Bajarilmaydi", "Tezroq", "Xato bermaydi"]
},
{
  q: "cout << matn; nimani bajaradi?",
  correct: "Matnni chiqaradi",
  wrong: ["Kiritadi", "Saqlaydi", "O‘chiradi"]
},
{
  q: "fabs funksiyasi nimani hisoblaydi?",
  correct: "Haqiqiy son modulini",
  wrong: ["Butun son", "Daraja", "Logarifm"]
},
{
  q: "abs funksiyasi nimani hisoblaydi?",
  correct: "Butun son modulini",
  wrong: ["Haqiqiy son", "Kvadrat", "Logarifm"]
},
{
  q: "return 0; nimani bildiradi?",
  correct: "Dastur to‘g‘ri tugadi",
  wrong: ["Xato", "To‘xtaydi", "Qiymat beradi"]
},
{
  q: "int a = 15, b = 6; cout << a / b; natija?",
  correct: "2",
  wrong: ["2.5", "3", "Xato"]
},
{
  q: "int a = 15, b = 6; cout << a % b; natija?",
  correct: "3",
  wrong: ["2", "0", "1"]
},
{
  q: "string x=\"A\", y=\"C\"; cout << x + y; natija?",
  correct: "AC",
  wrong: ["A C", "Xato", "Hech narsa"]
},
{
  q: "int x=9; if(x>7) cout<<\"Yes\"; else cout<<\"No\"; natija?",
  correct: "Yes",
  wrong: ["No", "9", "Xato"]
},
{
  q: "for(int i=0;i<2;i++) cout<<i; natija?",
  correct: "01",
  wrong: ["12", "2", "Xato"]
},
{
  q: "while(int i=0;i<2) {} xato sababi?",
  correct: "while da initsializatsiya bo‘lmaydi",
  wrong: ["To‘g‘ri", "{} kerak emas", "i++ yo‘q"]
},
{
  q: "do { cout<<\"Hi\"; } while(false); nechta marta bajariladi?",
  correct: "1 marta",
  wrong: ["0", "Cheksiz", "Xato"]
},
{
  q: "Algoritm xususiyati qaysi?",
  correct: "Aniqlik",
  wrong: ["Rangdorlik", "Uzunlik", "Qiyinlik"]
},
{
  q: "string s=\"Salom\"; cout<<s; natija?",
  correct: "Salom",
  wrong: ["s", "Xato", "Hech narsa"]
},
{
  q: "abs(-100) natija?",
  correct: "100",
  wrong: ["-100", "0", "1"]
},
{
  q: "fabs(-0.99) natija?",
  correct: "0.99",
  wrong: ["-0.99", "0", "1"]
},
{
  q: "pow(3,3) natija?",
  correct: "27",
  wrong: ["9", "81", "6"]
},
{
  q: "log(10) qaysi qiymatga yaqin?",
  correct: "2.3026",
  wrong: ["1", "10", "0"]
},
{
  q: "int a=25, b=4; cout << a / b; natija?",
  correct: "6",
  wrong: ["6.25", "5", "Xato"]
},
{
  q: "int a=25, b=4; cout << a % b; natija?",
  correct: "1",
  wrong: ["6", "0", "2"]
},
{
  q: "int x=12; if(x>10) cout<<\"Katta\"; natija?",
  correct: "Katta",
  wrong: ["Kichik", "12", "Hech narsa"]
},
{
  q: "else operatori qachon ishlaydi?",
  correct: "if sharti yolg‘on bo‘lsa",
  wrong: ["if rost bo‘lsa", "Har doim", "Hech qachon"]
},
{
  q: "else if nima uchun ishlatiladi?",
  correct: "Qo‘shimcha shartlarni tekshirish uchun",
  wrong: ["Asosiy shart", "Sikl", "Funksiya"]
},
{
  q: "switch case qachon ishlatiladi?",
  correct: "Turli qiymatlar uchun",
  wrong: ["Sikl", "Faqat matn", "Faqat raqam"]
},
{
  q: "default case vazifasi nima?",
  correct: "Mos kelmasa bajariladi",
  wrong: ["Har doim", "Birinchi", "Oxirgi"]
},
{
  q: "int a = 7; a = a - 2; cout << a; natija?",
  correct: "5",
  wrong: ["7", "2", "Xato"]
},
{
  q: "string s = \"Hi\"; cout << s + \" all\"; natija?",
  correct: "Hi all",
  wrong: ["Hiall", "Xato", "all"]
},
{
  q: "int a = 9, b = 2; cout << a / b; natija?",
  correct: "4",
  wrong: ["4.5", "5", "Xato"]
},
{
  q: "int a = 18, b = 5; cout << a / b; natija?",
  correct: "3",
  wrong: ["3.6", "4", "Xato"]
},
{
  q: "int a = 18, b = 5; cout << a % b; natija?",
  correct: "3",
  wrong: ["4", "0", "1"]
},
{
  q: "if(x>5) cout<<\"Ha\"; else cout<<\"Yo‘q\"; x=4; natija?",
  correct: "Yo‘q",
  wrong: ["Ha", "4", "Xato"]
},
{
  q: "if/else if/else tuzilmasi to‘g‘rimi?",
  correct: "Ha, to‘g‘ri",
  wrong: ["Yo‘q", "Faqat bitta else", "else if bo‘lmaydi"]
},
{
  q: "switch(x) operatorining vazifasi?",
  correct: "Qiymatga qarab turli kod bajarish",
  wrong: ["Qiymatni oshirish", "Taqqoslash", "Chiqarish"]
},
{
  q: "string s=\"\"; bu nimani bildiradi?",
  correct: "Bo‘sh matn",
  wrong: ["Xato", "0", "Bo‘sh joy"]
},
{
  q: "int a = 3; a = a + 4; cout << a; natija?",
  correct: "7",
  wrong: ["3", "4", "Xato"]
},
{
  q: "string x=\"Hi\"; cout << x + \" World\"; natija?",
  correct: "Hi World",
  wrong: ["HiWorld", "Xato", "World"]
},
{
  q: "int a=8, b=2; cout << a / b; natija?",
  correct: "4",
  wrong: ["0.25", "16", "Xato"]
},
{
  q: "int a=8, b=3; cout << a % b; natija?",
  correct: "2",
  wrong: ["3", "0", "2.66"]
},
{
  q: "if(x==10) bu qaysi operator?",
  correct: "Tenglikni tekshirish",
  wrong: ["Tayinlash", "Kattalik", "Kichiklik"]
},
{
  q: "string name; name=\"Olim\"; cout << name; natija?",
  correct: "Olim",
  wrong: ["name", "Xato", "Hech narsa"]
},
{
  q: "int a=15, b=6; cout << a / b; natija?",
  correct: "2",
  wrong: ["2.5", "3", "Xato"]
},
{
  q: "int a=15, b=6; cout << a % b; natija?",
  correct: "3",
  wrong: ["2", "0", "1"]
},
{
  q: "string x=\"X\", y=\"Y\"; cout << x + y; natija?",
  correct: "XY",
  wrong: ["X Y", "X+Y", "X,Y"]
},
{
  q: "int x=8; if(x>5) cout<<\"Yes\"; else cout<<\"No\"; natija?",
  correct: "Yes",
  wrong: ["No", "8", "Xato"]
},
{
  q: "for(int i=0;i<4;i++) cout<<i; natija?",
  correct: "0123",
  wrong: ["1234", "4", "Xato"]
},
{
  q: "while(int i=0;i<3) {} xato sababi?",
  correct: "while da initsializatsiya bo‘lmaydi",
  wrong: ["To‘g‘ri", "{} kerak emas", "i++ yo‘q"]
},
{
  q: "do { cout<<\"Hi\"; } while(false); nechta marta bajariladi?",
  correct: "1 marta",
  wrong: ["0", "Cheksiz", "Xato"]
},
{
  q: "Algoritm xususiyatlari qaysilar?",
  correct: "Aniqlik, cheklilik, samaradorlik",
  wrong: ["Rangdorlik", "Uzunlik", "Qiyinlik"]
},
{
  q: "abs(-25) natija?",
  correct: "25",
  wrong: ["-25", "0", "1"]
},
{
  q: "fabs(-3.14) natija?",
  correct: "3.14",
  wrong: ["-3.14", "0", "1"]
},
{
  q: "pow(5,2) natija?",
  correct: "25",
  wrong: ["10", "125", "32"]
},
{
  q: "log(1) natija?",
  correct: "0",
  wrong: ["1", "10", "e"]
},
{
  q: "int a=20, b=6; cout << a / b; natija?",
  correct: "3",
  wrong: ["3.33", "4", "Xato"]
},
{
  q: "int a=20, b=6; cout << a % b; natija?",
  correct: "2",
  wrong: ["3", "0", "1"]
},
{
  q: "Fakultet dekani kim?",
  correct: "prof. O.S. Abdullayeva",
  wrong: ["prof. U.I. Erkaboyev", "prof. A.B. Karimov", "prof. S.T. Yusupov"]
}
]

window.cppQuestions = cppQuestions;