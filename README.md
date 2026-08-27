# 🍽️ Super Menu QR

منيو رقمي تفاعلي (Mobile-first) — العميل يمسح QR فيفتح المنيو مباشرة.
مبني بالكامل بـ **HTML + CSS + JavaScript** بدون أي framework وبدون Backend.

---

## 📁 هيكل المشروع

```
super-menu/
├── index.html      → هيكل الصفحة
├── style.css       → كل التصميم والحركات (Theme system بمتغيرات CSS)
├── script.js       → بيانات المنيو + كل المنطق (فلترة، بحث، مفضلة، لغة...)
├── images/
│   └── logo.svg    → لوجو مبدئي (غيّره بلوجو مطعمك)
└── README.md
```

---

## ✅ الميزات الجاهزة

- 📱 Mobile-first + Responsive (يشتغل على أي مقاس شاشة)
- ⚡ سريع جدًا (بدون مكتبات خارجية تقيلة)
- ✨ Animations (ظهور الكروت، hover، fade)
- 🌙 Dark / Light Mode (يتذكر اختيار المستخدم عبر localStorage)
- 🌍 عربي / English بالكامل (نص + اتجاه الصفحة RTL/LTR)
- 🔍 بحث فوري في الأصناف
- 🏷️ Tags (NEW, BEST SELLER, HOT...)
- ❤️ Favorites محلي (يتخزن في متصفح العميل، بدون حساب)
- 📍 أزرار Location + 📞 اتصال + 📱 WhatsApp + 📸 Instagram
- 🧾 Product Modal يعرض تفاصيل الصنف عند الضغط عليه

---

## ✏️ إزاي تعدّل المنيو (الجزء الوحيد اللي هتلمسه غالبًا)

افتح `script.js` ولاقي الجزء ده فوق:

```js
const menuItems = [
  {
    id: 1,
    category: "appetizers",
    name: { ar: "بطاطس مقرمشة", en: "Crispy Fries" },
    description: { ar: "...", en: "..." },
    price: 65,
    tag: "BEST SELLER",   // سيبها "" لو مفيش تاج
    color: "#D7B56D"      // لون البديل المؤقت (لو مفيش صورة حقيقية)
  },
  ...
];
```

### لإضافة صنف جديد:
انسخ أي `{ ... }` من الأصناف وعدّل البيانات، وحط `id` مختلف عن الباقي.

### لإضافة صورة حقيقية للصنف:
1. حط الصورة في مجلد `images/` (مثلاً `images/burger.jpg`)
2. أضف سطر `image: "images/burger.jpg",` جوه الصنف في `script.js`

> لو مفيش `image`، الموقع بيعرض تلقائيًا صورة بديلة (Placeholder) ملوّنة بإيموجي — عشان الموقع يفضل شغال ومنظم من أول لحظة حتى قبل ما تجهز الصور الحقيقية.

### لإضافة/حذف قسم (Category):
عدّل الـ array دي في `script.js`:

```js
const categories = [
  { id: "all", labelKey: "cat_all" },
  { id: "appetizers", labelKey: "cat_appetizers" },
  ...
];
```

وأضف الترجمة المقابلة في `translations` فوق (`ar` و `en`).

---

## 🎨 إزاي تغيّر ألوان وهوية المطعم

كل الألوان متجمعة في أول `style.css`:

```css
:root{
  --navy: #0B1D3A;     /* اللون الأساسي */
  --cream: #F5EFE1;    /* الخلفية */
  --gold: #D7B56D;     /* لون التمييز */
  --red-accent: #C23B22; /* لون التاجات والمفضلة */
}
```

غيّر القيم دي بس، وهيتغير شكل الموقع كله تلقائيًا.

---

## 📞 إزاي تغيّر بيانات التواصل

في `index.html` دور على `header-actions` وغيّر:

- رقم الهاتف: `tel:+201234567890`
- واتساب: `https://wa.me/201234567890`
- انستجرام: `https://instagram.com`
- الموقع (Google Maps): `https://maps.google.com`

كمان اسم المطعم والوصف موجودين في `translations` جوه `script.js` (`restaurant_name`, `restaurant_tagline`).

---

## 🚀 النشر (Hosting) على GitHub Pages — مجانًا

1. اعمل حساب على [github.com](https://github.com) لو مفيش عندك
2. اعمل Repository جديد اسمه مثلاً `super-menu`
3. ارفع كل ملفات المشروع (`index.html`, `style.css`, `script.js`, `images/`)
4. من `Settings` → `Pages` → `Deploy from branch` → اختار `main` و `/ (root)`
5. هيديك رابط شكله كده:
   ```
   https://username.github.io/super-menu/
   ```

---

## 📱 توليد QR Code

بعد ما ياخد لينك الموقع، ولّد QR Code مجانًا من:
[https://www.qr-code-generator.com](https://www.qr-code-generator.com)

خليه يشاور على رابط GitHub Pages بتاعك (مش ملف محلي على جهازك).

---

## 🧠 خطوات تعلّم بسيطة لو عايز تفهم الكود أكتر

1. **HTML** (`index.html`) — الهيكل بس، مفيش بيانات مكتوبة يدوي
2. **CSS** (`style.css`) — كل التصميم عن طريق CSS Variables، فسهل تغيّره
3. **JavaScript** (`script.js`) — فيه:
   - `menuItems` → قاعدة بيانات بسيطة (array of objects)
   - `renderMenu()` → بتاخد البيانات وتعرضها كـ HTML تلقائيًا
   - `getFilteredItems()` → بتفلتر حسب القسم/البحث/المفضلة
   - `openModal()` → بتفتح تفاصيل الصنف
   - `toggleFavorite()` / `toggleTheme()` / `toggleLanguage()` → بتستخدم `localStorage` عشان تحفظ اختيار المستخدم حتى بعد ما يقفل المتصفح

---

صُنع بـ ❤️ — Super Menu QR
