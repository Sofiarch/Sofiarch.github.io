// Helper for stationery images (Real High-Quality Photos)
const station = (id) => `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=600&q=80`;

export const books = [
  // --- BOOKS: IRAQI HERITAGE & SOCIOLOGY ---
  { id: 1, title: "لمحات اجتماعية - ج1", author: "د. علي الوردي", price: "12,000", category: "تاريخ واجتماع" },
  { id: 2, title: "لمحات اجتماعية - ج2", author: "د. علي الوردي", price: "12,000", category: "تاريخ واجتماع" },
  { id: 3, title: "لمحات اجتماعية - ج3", author: "د. علي الوردي", price: "12,000", category: "تاريخ واجتماع" },
  { id: 4, title: "وعاظ السلاطين", author: "د. علي الوردي", price: "8,000", category: "تاريخ واجتماع" },
  { id: 5, title: "مهزلة العقل البشري", author: "د. علي الوردي", price: "8,000", category: "تاريخ واجتماع" },
  { id: 6, title: "خوارق اللاشعور", author: "د. علي الوردي", price: "9,000", category: "تاريخ واجتماع" },
  { id: 7, title: "شخصية الفرد العراقي", author: "د. علي الوردي", price: "5,000", category: "تاريخ واجتماع" },
  { id: 8, title: "العودة من بابل", author: "احمد الطريفي", price: "10,000", category: "تاريخ واجتماع" },
  { id: 9, title: "تاريخ النجف الأشرف", author: "محمد حسين الحرز", price: "25,000", category: "تاريخ واجتماع" },
  { id: 10, title: "شناشيل ابنة الجلبي", author: "عالية ممدوح", price: "7,000", category: "روايات" },

  // --- BOOKS: RELIGION ---
  { id: 11, title: "القرآن الكريم (ملون)", author: "طباعة فاخرة", price: "15,000", category: "كتب دينية" },
  { id: 12, title: "نهج البلاغة", author: "الشريف الرضي", price: "18,000", category: "كتب دينية" },
  { id: 13, title: "مفاتيح الجنان", author: "الشيخ عباس القمي", price: "20,000", category: "كتب دينية" },
  { id: 14, title: "الصحيفة السجادية", author: "الإمام السجاد (ع)", price: "8,000", category: "كتب دينية" },
  { id: 15, title: "فلسفتنا", author: "محمد باقر الصدر", price: "12,000", category: "كتب دينية" },
  { id: 16, title: "اقتصادنا", author: "محمد باقر الصدر", price: "14,000", category: "كتب دينية" },
  { id: 17, title: "ليالي بيشاور", author: "سلطان الواعظين", price: "15,000", category: "كتب دينية" },
  { id: 18, title: "قصص الأنبياء", author: "الجزائري", price: "10,000", category: "كتب دينية" },
  { id: 19, title: "بحار الأنوار - ج1", author: "المجلسي", price: "25,000", category: "كتب دينية" },
  { id: 20, title: "منهاج الصالحين - ج1", author: "السيد السيستاني", price: "6,000", category: "كتب دينية" },

  // --- BOOKS: NOVELS ---
  { id: 21, title: "فرانكشتاين في بغداد", author: "أحمد سعداوي", price: "10,000", category: "روايات" },
  { id: 22, title: "ساق البامبو", author: "سعود السنعوسي", price: "9,000", category: "روايات" },
  { id: 23, title: "قواعد العشق الأربعون", author: "اليف شافاق", price: "8,000", category: "روايات عالمية" },
  { id: 24, title: "الجريمة والعقاب", author: "دوستويفسكي", price: "15,000", category: "روايات عالمية" },
  { id: 25, title: "الأخوة كارامازوف", author: "دوستويفسكي", price: "18,000", category: "روايات عالمية" },
  { id: 26, title: "1984", author: "جورج أورويل", price: "7,000", category: "روايات عالمية" },
  { id: 27, title: "مزرعة الحيوان", author: "جورج أورويل", price: "5,000", category: "روايات عالمية" },
  { id: 28, title: "الخيميائي", author: "باولو كويلو", price: "6,000", category: "روايات عالمية" },
  { id: 29, title: "شيفرة دافنشي", author: "دان براون", price: "9,000", category: "روايات عالمية" },
  { id: 30, title: "فن اللامبالاة", author: "مارك مانسون", price: "8,000", category: "تطوير ذات" },

  // --- BOOKS: SELF HELP & THOUGHT ---
  { id: 31, title: "العادات الذرية", author: "جيمس كلير", price: "10,000", category: "تطوير ذات" },
  { id: 32, title: "الأب الغني والأب الفقير", author: "روبرت كيوساكي", price: "9,000", category: "تطوير ذات" },
  { id: 33, title: "كيف تكسب الأصدقاء", author: "ديل كارنيجي", price: "8,000", category: "تطوير ذات" },
  { id: 34, title: "قوة العادات", author: "تشارلز دويج", price: "11,000", category: "تطوير ذات" },
  { id: 35, title: "الرجال من المريخ", author: "جون غراي", price: "10,000", category: "تطوير ذات" },
  { id: 36, title: "نظرية الفستق 1", author: "فهد عامر الأحمدي", price: "8,000", category: "تطوير ذات" },
  { id: 37, title: "نظرية الفستق 2", author: "فهد عامر الأحمدي", price: "8,000", category: "تطوير ذات" },
  { id: 38, title: "لأنك الله", author: "علي الفيفي", price: "6,000", category: "كتب دينية" },
  { id: 39, title: "ملهمون", author: "صالح الخزيم", price: "7,000", category: "تطوير ذات" },
  { id: 40, title: "أقوم قيلا", author: "سلطان الموسى", price: "6,000", category: "فكر" },

  // --- STATIONERY: REAL PHOTOS ---
  {
    id: 41,
    title: "دفتر جامعي سلك (200 ورقة)",
    author: "قرطاسية",
    price: "4,000",
    image: station("1531346878377-a5139c88784a"),
    category: "قرطاسية"
  },
  {
    id: 42,
    title: "دفتر ملاحظات جلدي فاخر",
    author: "NotePro",
    price: "8,000",
    image: station("1544816155-12df9643f363"),
    category: "قرطاسية"
  },
  {
    id: 43,
    title: "مجموعة دفاتر مدرسية (Pack of 5)",
    author: "النجف",
    price: "5,000",
    image: station("1517842645767-c639042777db"),
    category: "قرطاسية"
  },
  {
    id: 44,
    title: "دفتر رسم (Sketchbook) A3",
    author: "Canson",
    price: "6,000",
    image: station("1513364776144-60967b0f800f"),
    category: "قرطاسية"
  },
  {
    id: 45,
    title: "أجندة سنوية 2026",
    author: "تنظيم",
    price: "10,000",
    image: station("1506784317764-9d9921666e9e"),
    category: "قرطاسية"
  },
  {
    id: 46,
    title: "ورق ملاحظات لاصق (Sticky Notes)",
    author: "Post-it",
    price: "1,500",
    image: station("1586075010925-e6316bd52889"),
    category: "قرطاسية"
  },
  
  // --- PENS & TOOLS: REAL PHOTOS ---
  {
    id: 50,
    title: "قلم جاف أزرق (Piano) - علبة",
    author: "Piano",
    price: "3,000",
    image: station("1585336261022-680e295ce3fe"),
    category: "قرطاسية"
  },
  {
    id: 51,
    title: "قلم حبر سائل فاخر (Parker)",
    author: "Parker",
    price: "35,000",
    image: station("1521485361287-c46698656d07"),
    category: "هدايا"
  },
  {
    id: 52,
    title: "طقم أقلام رصاص (Faber-Castell)",
    author: "Faber-Castell",
    price: "4,000",
    image: station("1515234919102-18d6c70258d4"),
    category: "قرطاسية"
  },
  {
    id: 53,
    title: "أقلام تحديد (Highlighters) - 4 ألوان",
    author: "Stabilo",
    price: "3,500",
    image: station("1522271811617-a9a391560932"),
    category: "قرطاسية"
  },
  {
    id: 54,
    title: "ألوان خشبية 24 لون",
    author: "Faber-Castell",
    price: "7,000",
    image: station("1513364776144-60967b0f800f"), // Reused art supply image
    category: "قرطاسية"
  },
  {
    id: 55,
    title: "علبة هندسة متكاملة",
    author: "Maped",
    price: "2,500",
    image: station("1593478954750-70f901235372"),
    category: "قرطاسية"
  },

  // --- GIFTS & ACCESSORIES: REAL PHOTOS ---
  {
    id: 81,
    title: "فاصل كتب (Bookmark) معدني",
    author: "إكسسوارات",
    price: "3,000",
    image: station("1535446055278-62d264560127"),
    category: "إكسسوارات"
  },
  {
    id: 82,
    title: "مصباح قراءة ليلي",
    author: "Tech",
    price: "8,000",
    image: station("1516962215327-7a8f10e4c6c0"),
    category: "إكسسوارات"
  },
  {
    id: 83,
    title: "ستاند حمل كتب خشبي",
    author: "WoodCraft",
    price: "15,000",
    image: station("1529148482759-b35b25c6f63e"),
    category: "إكسسوارات"
  },
  {
    id: 84,
    title: "حقيبة قماشية (Tote Bag)",
    author: "Canvas",
    price: "6,000",
    image: station("1544816155-12df9643f363"), // Reused bag/notebook vibe
    category: "إكسسوارات"
  },
  {
    id: 85,
    title: "كوب قهوة (عشاق القراءة)",
    author: "Ceramic",
    price: "5,000",
    image: station("1514432324607-a09d9b4aefdd"),
    category: "هدايا"
  },

  // --- MORE BOOKS ---
  { id: 60, title: "مذكرات كافر مغربي", author: "هشام نوستيك", price: "9,000", category: "سير ذاتية" },
  { id: 61, title: "رحلتي من الشك إلى الإيمان", author: "مصطفى محمود", price: "6,000", category: "فكر" },
  { id: 62, title: "حوار مع صديقي الملحد", author: "مصطفى محمود", price: "6,000", category: "فكر" },
  { id: 63, title: "الرصد", author: "ميسرة طاهر", price: "8,000", category: "روايات" },
  { id: 64, title: "شيفرة بلال", author: "أحمد خيري العمري", price: "9,000", category: "روايات" },
  { id: 65, title: "البؤساء", author: "فيكتور هوجو", price: "14,000", category: "روايات عالمية" },
  { id: 66, title: "الحرب والسلم", author: "تولستوي", price: "20,000", category: "روايات عالمية" },
  { id: 67, title: "مائة عام من العزلة", author: "ماركيز", price: "10,000", category: "روايات عالمية" },
  { id: 68, title: "الحب في زمن الكوليرا", author: "ماركيز", price: "9,000", category: "روايات عالمية" },
  { id: 69, title: "عالم صوفي", author: "جوستاين غاردر", price: "11,000", category: "فلسفة" },
  { id: 70, title: "هكذا تكلم زرادشت", author: "نيتشه", price: "10,000", category: "فلسفة" },
  { id: 71, title: "الأمير", author: "مكيافيلي", price: "6,000", category: "سياسة" },
  { id: 72, title: "فن الحرب", author: "سون تزو", price: "7,000", category: "استراتيجية" },
  { id: 73, title: "مقدمة ابن خلدون", author: "ابن خلدون", price: "18,000", category: "تاريخ واجتماع" },
  { id: 74, title: "البداية والنهاية", author: "ابن كثير", price: "40,000", category: "تاريخ واجتماع" },
  { id: 75, title: "الرحيق المختوم", author: "المباركفوري", price: "8,000", category: "كتب دينية" },
  
  // --- KIDS: HYBRID (SOME BOOKS, SOME TOYS) ---
  { id: 95, title: "قصص اطفال مصورة", author: "مكتبة الطفل", price: "8,000", category: "أطفال" }, // Book
  { id: 96, title: "سلسلة ميكي ماوس", author: "Disney", price: "3,000", category: "أطفال" }, // Book
  { 
    id: 98, 
    title: "ألوان شمعية (Crayons)", 
    author: "Faber-Castell", 
    price: "3,000", 
    image: station("1598440065796-0158a12c4c82"), 
    category: "ألعاب" 
  },
  { 
    id: 99, 
    title: "لعبة بازل (خريطة العراق)", 
    author: "Toys", 
    price: "5,000", 
    image: station("1585842468641-5374828b14a6"), 
    category: "ألعاب" 
  }
];