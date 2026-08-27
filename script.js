/* ==========================================================
   SUPER MENU QR — script.js
   كل حاجة هنا Vanilla JS بدون أي framework
   ========================================================== */

/* ---------------------------------------------------------
   1) TRANSLATIONS (UI strings)
--------------------------------------------------------- */
const translations = {
  ar: {
    restaurant_name: "سوبر منيو",
    restaurant_tagline: "أكل شهي، تجربة مختلفة",
    search_placeholder: "ابحث عن صنف...",
    no_results: "مفيش نتائج مطابقة لبحثك",
    footer_made: "اصنع منيو زي ده لمطعمك ✨ Super Menu QR",
    cat_all: "الكل",
    cat_appetizers: "مقبلات",
    cat_main: "أطباق رئيسية",
    cat_burgers: "برجر",
    cat_pizza: "بيتزا",
    cat_desserts: "حلويات",
    cat_drinks: "مشروبات",
    currency: "ج.م"
  },
  en: {
    restaurant_name: "Super Menu",
    restaurant_tagline: "Great food, a different experience",
    search_placeholder: "Search for a dish...",
    no_results: "No items match your search",
    footer_made: "Build a menu like this for your restaurant ✨ Super Menu QR",
    cat_all: "All",
    cat_appetizers: "Appetizers",
    cat_main: "Main Dishes",
    cat_burgers: "Burgers",
    cat_pizza: "Pizza",
    cat_desserts: "Desserts",
    cat_drinks: "Drinks",
    currency: "EGP"
  }
};

/* ---------------------------------------------------------
   2) CATEGORIES
--------------------------------------------------------- */
const categories = [
  { id: "all",        labelKey: "cat_all" },
  { id: "appetizers", labelKey: "cat_appetizers" },
  { id: "main",       labelKey: "cat_main" },
  { id: "burgers",    labelKey: "cat_burgers" },
  { id: "pizza",      labelKey: "cat_pizza" },
  { id: "desserts",   labelKey: "cat_desserts" },
  { id: "drinks",     labelKey: "cat_drinks" }
];

/* ---------------------------------------------------------
   3) MENU DATA
   غيّر / أضف / احذف أي صنف من هنا بس — الموقع كله هيتحدث تلقائي
--------------------------------------------------------- */
const menuItems = [
  {
    id: 1,
    category: "appetizers",
    name: { ar: "بطاطس مقرمشة", en: "Crispy Fries" },
    description: { ar: "بطاطس مقرمشة مقلية طازة مع صوص الجبن الحار", en: "Freshly fried crispy fries with spicy cheese dip" },
    price: 65,
    tag: "BEST SELLER",
    color: "#D7B56D"
  },
  {
    id: 2,
    category: "appetizers",
    name: { ar: "حلقات بصل", en: "Onion Rings" },
    description: { ar: "حلقات بصل مقرمشة مع صوص الرانش البارد", en: "Crunchy onion rings with cold ranch sauce" },
    price: 70,
    tag: "",
    color: "#C9A24B"
  },
  {
    id: 3,
    category: "main",
    name: { ar: "بطاطا الراعي الذكية", en: "Big Ben Classic Jacket" },
    description: { ar: "بطاطا مشوية بالفرن مع الجبن وقطع اللحم المقدد وصوص الرانش", en: "Jacket potato, cheese, bacon bits and ranch sauce" },
    price: 200,
    tag: "BEST SELLER",
    color: "#C23B22"
  },
  {
    id: 4,
    category: "main",
    name: { ar: "تشيلي البطاطا الحارة", en: "Churchili" },
    description: { ar: "بطاطا مشوية مع تشيلي اللحم الحار وشيبس التورتيلا وصوص الرانش", en: "Jacket potato, beef chili con carne, tortilla chips and ranch" },
    price: 230,
    tag: "🌶 HOT",
    color: "#B5442D"
  },
  {
    id: 5,
    category: "burgers",
    name: { ar: "برجر كلاسيك", en: "Classic Burger" },
    description: { ar: "قطعة لحم بقري طازة مع الجبن الشيدر والخضروات الطازة", en: "Beef patty with cheddar cheese and fresh vegetables" },
    price: 180,
    tag: "BEST SELLER",
    color: "#8A5A32"
  },
  {
    id: 6,
    category: "burgers",
    name: { ar: "سموكي شيرلوك", en: "Smoky Sherlock" },
    description: { ar: "لحم مسحب مدخن مع صوص الباربكيو والمايونيز الحار والبصل المقرمش", en: "Pulled pork, BBQ sauce, chipotle mayo and crispy onions" },
    price: 250,
    tag: "HOUSE SPECIALTY",
    color: "#7A4A2A"
  },
  {
    id: 7,
    category: "pizza",
    name: { ar: "بيتزا مارجريتا", en: "Margherita Pizza" },
    description: { ar: "صوص طماطم طازة مع جبنة الموتزاريلا والريحان", en: "Fresh tomato sauce with mozzarella and basil" },
    price: 160,
    tag: "NEW",
    color: "#C0392B"
  },
  {
    id: 8,
    category: "pizza",
    name: { ar: "بيتزا الدجاج المشوي", en: "Grilled Chicken Pizza" },
    description: { ar: "قطع دجاج مشوي متبل مع الفلفل الألوان والجبنة الموزاريلا", en: "Grilled seasoned chicken with bell peppers and mozzarella" },
    price: 190,
    tag: "",
    color: "#A8322B"
  },
  {
    id: 9,
    category: "desserts",
    name: { ar: "وافل الفراولة", en: "Strawberry Waffles" },
    description: { ar: "وافل مقرمش مع الفراولة الطازة والموز وشراب القيقب", en: "Crispy waffle with fresh strawberries, banana and maple syrup" },
    price: 140,
    tag: "NEW",
    color: "#D9A441"
  },
  {
    id: 10,
    category: "desserts",
    name: { ar: "براوني بالشوكولاتة", en: "Fudgy Brownies" },
    description: { ar: "براوني طري من الداخل ومقرمش من الخارج، يُخبز يوميًا", en: "Soft on the inside, crispy on the outside — baked fresh daily" },
    price: 90,
    tag: "BEST SELLER",
    color: "#5A3A28"
  },
  {
    id: 11,
    category: "desserts",
    name: { ar: "دونات كراميل مقرمش", en: "Caramel Crack Donut" },
    description: { ar: "دونات محشو كريمة مغطى بصوص الكراميل المالح وقطع الكراميل المقرمش", en: "Cream-filled donut topped with salted caramel and crunchy caramel bits" },
    price: 95,
    tag: "SIGNATURE",
    color: "#B9812E"
  },
  {
    id: 12,
    category: "drinks",
    name: { ar: "قهوة مثلجة بالفانيليا", en: "Iced Vanilla Coffee" },
    description: { ar: "قهوة باردة منعشة بنكهة الفانيليا الطبيعية", en: "Refreshing cold coffee with natural vanilla flavor" },
    price: 60,
    tag: "",
    color: "#2E5FA3"
  },
  {
    id: 13,
    category: "drinks",
    name: { ar: "قهوة مثلجة بالشوكولاتة", en: "Iced Chocolate Coffee" },
    description: { ar: "مزيج غني من القهوة والشوكولاتة الداكنة والثلج", en: "A rich blend of coffee, dark chocolate and ice" },
    price: 65,
    tag: "NEW",
    color: "#4A3324"
  },
  {
    id: 14,
    category: "drinks",
    name: { ar: "عصير جوافة طازة", en: "Fresh Guava Juice" },
    description: { ar: "عصير جوافة طبيعي ١٠٠٪ بدون سكر مضاف", en: "100% natural guava juice, no added sugar" },
    price: 45,
    tag: "",
    color: "#E0765A"
  }
];

/* ---------------------------------------------------------
   4) STATE
--------------------------------------------------------- */
let state = {
  lang: localStorage.getItem("sm_lang") || "ar",
  theme: localStorage.getItem("sm_theme") || "light",
  activeCategory: "all",
  searchQuery: "",
  favorites: JSON.parse(localStorage.getItem("sm_favorites") || "[]"),
  showFavoritesOnly: false
};

/* ---------------------------------------------------------
   5) PLACEHOLDER IMAGE GENERATOR (no external network needed)
   بيولّد صورة SVG بسيطة كبديل مؤقت لحد ما تحط صور المنتجات
   الحقيقية في مجلد images/ وتغيّر مسارها هنا في menuItems
--------------------------------------------------------- */
function placeholderImage(color, emoji) {
  const svg = `
    <svg xmlns="http://www.w3.org/2000/svg" width="400" height="300">
      <defs>
        <linearGradient id="g" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stop-color="${color}" stop-opacity="0.85"/>
          <stop offset="100%" stop-color="${color}" stop-opacity="0.55"/>
        </linearGradient>
      </defs>
      <rect width="400" height="300" fill="url(#g)"/>
      <text x="50%" y="54%" font-size="90" text-anchor="middle" dominant-baseline="middle">${emoji}</text>
    </svg>`;
  return "data:image/svg+xml;utf8," + encodeURIComponent(svg);
}

const categoryEmoji = {
  appetizers: "🍟", main: "🥔", burgers: "🍔",
  pizza: "🍕", desserts: "🧇", drinks: "🥤"
};

/* ---------------------------------------------------------
   6) DOM REFS
--------------------------------------------------------- */
const $ = (sel) => document.querySelector(sel);
const menuContainer = $("#menu-container");
const emptyState = $("#empty-state");
const categoriesNav = $("#categories");
const searchInput = $("#search-input");
const clearSearchBtn = $("#clear-search");
const favFilterBtn = $("#fav-filter-btn");
const langToggle = $("#lang-toggle");
const themeToggle = $("#theme-toggle");
const modal = $("#product-modal");

/* ---------------------------------------------------------
   7) INIT
--------------------------------------------------------- */
function init() {
  document.documentElement.setAttribute("data-theme", state.theme);
  document.documentElement.setAttribute("lang", state.lang);
  document.documentElement.setAttribute("dir", state.lang === "ar" ? "rtl" : "ltr");
  $(".lang-current").textContent = state.lang === "ar" ? "EN" : "AR";

  renderCategories();
  applyTranslations();
  renderMenu();

  searchInput.addEventListener("input", onSearchInput);
  clearSearchBtn.addEventListener("click", clearSearch);
  favFilterBtn.addEventListener("click", toggleFavFilter);
  langToggle.addEventListener("click", toggleLanguage);
  themeToggle.addEventListener("click", toggleTheme);
  $("#modal-close").addEventListener("click", closeModal);
  modal.addEventListener("click", (e) => { if (e.target === modal) closeModal(); });
  $("#modal-fav").addEventListener("click", () => toggleFavorite(currentModalId, true));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") closeModal(); });
}

/* ---------------------------------------------------------
   8) RENDER CATEGORIES
--------------------------------------------------------- */
function renderCategories() {
  const t = translations[state.lang];
  categoriesNav.innerHTML = "";
  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (cat.id === state.activeCategory ? " active" : "");
    btn.textContent = t[cat.labelKey];
    btn.dataset.category = cat.id;
    btn.addEventListener("click", () => {
      state.activeCategory = cat.id;
      renderCategories();
      renderMenu();
    });
    categoriesNav.appendChild(btn);
  });
}

/* ---------------------------------------------------------
   9) FILTER + RENDER MENU
--------------------------------------------------------- */
function getFilteredItems() {
  return menuItems.filter(item => {
    const matchesCategory = state.activeCategory === "all" || item.category === state.activeCategory;
    const name = item.name[state.lang].toLowerCase();
    const desc = item.description[state.lang].toLowerCase();
    const query = state.searchQuery.toLowerCase();
    const matchesSearch = !query || name.includes(query) || desc.includes(query);
    const matchesFav = !state.showFavoritesOnly || state.favorites.includes(item.id);
    return matchesCategory && matchesSearch && matchesFav;
  });
}

function renderMenu() {
  const items = getFilteredItems();
  const t = translations[state.lang];
  menuContainer.innerHTML = "";

  if (items.length === 0) {
    emptyState.classList.remove("hidden");
    return;
  }
  emptyState.classList.add("hidden");

  items.forEach((item, index) => {
    const card = document.createElement("article");
    card.className = "menu-card";
    card.style.animationDelay = (index * 0.05) + "s";

    const img = item.image || placeholderImage(item.color, categoryEmoji[item.category] || "🍽️");
    const isFav = state.favorites.includes(item.id);
    const tagClass = item.tag && item.tag.toUpperCase().includes("NEW") ? "tag-new" : "";

    card.innerHTML = `
      <div class="card-img-wrap">
        <img src="${img}" alt="${item.name[state.lang]}" loading="lazy">
        ${item.tag ? `<span class="menu-tag ${tagClass}">${item.tag}</span>` : ""}
        <button class="card-fav ${isFav ? "is-fav" : ""}" data-id="${item.id}" aria-label="favorite">
          <svg class="icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
        </button>
      </div>
      <div class="card-content">
        <h3>${item.name[state.lang]}</h3>
        <p>${item.description[state.lang]}</p>
        <span class="card-price">${item.price} ${t.currency}</span>
      </div>
    `;

    card.addEventListener("click", (e) => {
      if (e.target.closest(".card-fav")) return;
      openModal(item.id);
    });

    card.querySelector(".card-fav").addEventListener("click", (e) => {
      e.stopPropagation();
      toggleFavorite(item.id, false);
    });

    menuContainer.appendChild(card);
  });
}

/* ---------------------------------------------------------
   10) SEARCH
--------------------------------------------------------- */
function onSearchInput(e) {
  state.searchQuery = e.target.value;
  clearSearchBtn.classList.toggle("show", state.searchQuery.length > 0);
  renderMenu();
}
function clearSearch() {
  searchInput.value = "";
  state.searchQuery = "";
  clearSearchBtn.classList.remove("show");
  renderMenu();
}

/* ---------------------------------------------------------
   11) FAVORITES (localStorage)
--------------------------------------------------------- */
function toggleFavorite(id, fromModal) {
  const idx = state.favorites.indexOf(id);
  if (idx > -1) state.favorites.splice(idx, 1);
  else state.favorites.push(id);
  localStorage.setItem("sm_favorites", JSON.stringify(state.favorites));
  renderMenu();
  if (fromModal) updateModalFavIcon(id);
}

function toggleFavFilter() {
  state.showFavoritesOnly = !state.showFavoritesOnly;
  favFilterBtn.classList.toggle("active", state.showFavoritesOnly);
  renderMenu();
}

/* ---------------------------------------------------------
   12) PRODUCT MODAL
--------------------------------------------------------- */
let currentModalId = null;

function openModal(id) {
  const item = menuItems.find(i => i.id === id);
  if (!item) return;
  currentModalId = id;
  const t = translations[state.lang];

  $("#modal-img").src = item.image || placeholderImage(item.color, categoryEmoji[item.category] || "🍽️");
  $("#modal-name").textContent = item.name[state.lang];
  $("#modal-desc").textContent = item.description[state.lang];
  $("#modal-price").textContent = `${item.price} ${t.currency}`;

  const tagEl = $("#modal-tag");
  if (item.tag) {
    tagEl.textContent = item.tag;
    tagEl.classList.remove("hidden");
  } else {
    tagEl.classList.add("hidden");
  }

  updateModalFavIcon(id);

  modal.classList.remove("hidden");
  document.body.style.overflow = "hidden";
}

function updateModalFavIcon(id) {
  $("#modal-fav").classList.toggle("is-fav", state.favorites.includes(id));
}

function closeModal() {
  modal.classList.add("hidden");
  document.body.style.overflow = "";
}

/* ---------------------------------------------------------
   13) LANGUAGE TOGGLE
--------------------------------------------------------- */
function toggleLanguage() {
  state.lang = state.lang === "ar" ? "en" : "ar";
  localStorage.setItem("sm_lang", state.lang);
  document.documentElement.setAttribute("lang", state.lang);
  document.documentElement.setAttribute("dir", state.lang === "ar" ? "rtl" : "ltr");
  $(".lang-current").textContent = state.lang === "ar" ? "EN" : "AR";
  applyTranslations();
  renderCategories();
  renderMenu();
}

function applyTranslations() {
  const t = translations[state.lang];
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.dataset.i18n;
    if (t[key]) el.textContent = t[key];
  });
  document.querySelectorAll("[data-i18n-placeholder]").forEach(el => {
    const key = el.dataset.i18nPlaceholder;
    if (t[key]) el.placeholder = t[key];
  });
}

/* ---------------------------------------------------------
   14) THEME TOGGLE (Dark / Light)
--------------------------------------------------------- */
function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  localStorage.setItem("sm_theme", state.theme);
  document.documentElement.setAttribute("data-theme", state.theme);
}

/* ---------------------------------------------------------
   15) GO!
--------------------------------------------------------- */
document.addEventListener("DOMContentLoaded", init);
