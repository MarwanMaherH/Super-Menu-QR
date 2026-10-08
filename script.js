/* ==========================================================
   SUPER MENU — script.js (app logic)
   البيانات بتتحمّل فوراً من البيانات المدمجة (Default Data)
   مع مزامنة Firebase في الخلفية لو متاح
   ========================================================== */

import { db } from "./firebase-config.js";
import { CLOUDINARY } from "./cloudinary-config.js";
import { collection, getDocs, doc, getDoc }
  from "https://www.gstatic.com/firebasejs/10.14.1/firebase-firestore.js";

function cldFetch(url, width) {
  if (!url) return url;
  if (url.includes("res.cloudinary.com")) return url;
  if (!CLOUDINARY.cloudName || CLOUDINARY.cloudName.startsWith("PASTE")) return url;
  return `https://res.cloudinary.com/${CLOUDINARY.cloudName}/image/fetch/f_auto,q_auto,w_${width}/${encodeURIComponent(url)}`;
}

/* ---------------------------------------------------------
   DEFAULT DATA — بتظهر فوراً بدون أي انتظار
--------------------------------------------------------- */
const DEFAULT_CATEGORIES = [
  {
    id: "breakfast", ar: "فطار", en: "Breakfast", color: "#C9A24B",
    banner: "https://images.unsplash.com/photo-1533089862017-5614ecb352ae?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1533089862017-5614ecb352ae?w=200&q=80",
    order: 0, number: 1, icon: ""
  },
  {
    id: "main-dishes", ar: "أطباق رئيسية", en: "Main Dishes", color: "#C6512C",
    banner: "https://images.unsplash.com/photo-1544025162-d76694265947?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1544025162-d76694265947?w=200&q=80",
    order: 1, number: 2, icon: ""
  },
  {
    id: "desserts", ar: "حلويات", en: "Desserts", color: "#6E2A3A",
    banner: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=800&q=80",
    thumb: "https://images.unsplash.com/photo-1551024601-bec78aea704b?w=200&q=80",
    order: 2, number: 3, icon: ""
  }
];

const DEFAULT_ITEMS = [
  {
    id: 1, category: "breakfast",
    name: { ar: "فول مدمس بالطحينة", en: "Hummus Tahini" },
    description: { ar: "فول مدمس ناعم مع طحينة وزيت زيتون بكر ممتاز وكمون", en: "Smooth fava beans with tahini, premium olive oil and cumin" },
    price: 35, tag: "",
    image: "https://images.unsplash.com/photo-1511690656952-34342bb7c2f2?w=600&q=80",
    available: true, order: 0
  },
  {
    id: 2, category: "breakfast",
    name: { ar: "بيض مقلي بالسمن", en: "Sunny Side Eggs" },
    description: { ar: "بيضتان مقليتان على السمن البلدي مع بهارات مشكلة", en: "Two farm eggs fried in clarified butter with mixed spices" },
    price: 28, tag: "NEW",
    image: "https://images.unsplash.com/photo-1525351484163-7529414344d8?w=600&q=80",
    available: true, order: 1
  },
  {
    id: 3, category: "breakfast",
    name: { ar: "فتة شاورما", en: "Shawarma Fatta" },
    description: { ar: "فتة بالشاورما والأرز والخل والثومية والخبز المحمص", en: "Fatta with shawarma, rice, vinegar, garlic sauce and toasted bread" },
    price: 75, tag: "SIGNATURE",
    image: "https://images.unsplash.com/photo-1561651823-34a0658ebc9d?w=600&q=80",
    available: true, order: 2
  },
  {
    id: 4, category: "main-dishes",
    name: { ar: "ريش ضاني مشوية", en: "Grilled Lamb Chops" },
    description: { ar: "ريش ضاني مشوية على الفحم مع الأرز البسمتي والسلطة", en: "Charcoal-grilled lamb chops with basmati rice and salad" },
    price: 185, tag: "SIGNATURE",
    image: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?w=600&q=80",
    available: true, order: 3
  },
  {
    id: 5, category: "main-dishes",
    name: { ar: "دجاج مشوي بالأعشاب", en: "Herb Grilled Chicken" },
    description: { ar: "نصف دجاجة مشوية متبلة بالزعتر والروزماري والليمون", en: "Half chicken grilled with thyme, rosemary and lemon marinade" },
    price: 95, tag: "",
    image: "https://images.unsplash.com/photo-1598103442097-8b74394b95c6?w=600&q=80",
    available: true, order: 4
  },
  {
    id: 6, category: "main-dishes",
    name: { ar: "كفتة مشوية", en: "Grilled Kofta" },
    description: { ar: "كفتة لحم بقري مشوية مع الطماطم والفلفل وصوص الطحينة", en: "Grilled beef kofta with tomatoes, peppers and tahini sauce" },
    price: 110, tag: "CHEF'S PICK",
    image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?w=600&q=80",
    available: true, order: 5
  },
  {
    id: 7, category: "desserts",
    name: { ar: "كريم كراميل", en: "Crème Caramel" },
    description: { ar: "حلى الكريم كراميل البارد بالفانيليا البوربون", en: "Cold vanilla crème caramel with bourbon vanilla" },
    price: 40, tag: "",
    image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=600&q=80",
    available: true, order: 6
  },
  {
    id: 8, category: "desserts",
    name: { ar: "كيك الشوكولاتة الداكنة", en: "Dark Chocolate Cake" },
    description: { ar: "كيك شوكولاتة غني 70% مع صوص الشوكولاتة الساخن والفانيليا", en: "Rich 70% dark chocolate cake with hot chocolate sauce and vanilla" },
    price: 55, tag: "CHEF'S PICK",
    image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?w=600&q=80",
    available: true, order: 7
  },
  {
    id: 9, category: "desserts",
    name: { ar: "كنافة نابلسية", en: "Knafeh Nabulsi" },
    description: { ar: "كنافة بالجبن النابلسي والقطر والفستق الحلبي", en: "Knafeh with Nabulsi cheese, syrup and Aleppo pistachios" },
    price: 48, tag: "NEW",
    image: "https://images.unsplash.com/photo-1519915028121-7d3463d20b13?w=600&q=80",
    available: true, order: 8
  }
];

const DEFAULT_SETTINGS = {
  name: { ar: "سوبر منيو", en: "Super Menu" },
  tagline: { ar: "أكل شهي، تجربة مختلفة", en: "Great food, a different experience" },
  logo: "",
  phone: "01000000000",
  whatsapp: "201000000000",
  instagram: "https://instagram.com/",
  location: "https://maps.google.com/",
  heroVideoEnabled: true,
  heroVideo: ""
};

/* ---------------------------------------------------------
   DATA STATE
--------------------------------------------------------- */
let categories = [...DEFAULT_CATEGORIES];
let menuItems = [...DEFAULT_ITEMS];
let settings = { ...DEFAULT_SETTINGS };

const CACHE_KEY = "superMenuCache";
const CACHE_MINUTES = 5;

function readCache() {
  try {
    const raw = localStorage.getItem(CACHE_KEY);
    if (!raw) return null;
    const cached = JSON.parse(raw);
    if (Date.now() - cached.ts > CACHE_MINUTES * 60 * 1000) return null;
    return cached;
  } catch { return null; }
}

function writeCache() {
  try { localStorage.setItem(CACHE_KEY, JSON.stringify({ ts: Date.now(), categories, menuItems, settings })); }
  catch { /* ignore */ }
}

async function loadMenuData() {
  const cached = readCache();
  if (cached) {
    categories = cached.categories;
    menuItems = cached.menuItems;
    settings = cached.settings;
    return;
  }

  try {
    const [catSnap, itemSnap, settingsSnap] = await Promise.all([
      getDocs(collection(db, "categories")),
      getDocs(collection(db, "items")),
      getDoc(doc(db, "settings", "main"))
    ]);

    const cats = catSnap.docs.map(d => d.data()).sort((a, b) => a.order - b.order);
    const items = itemSnap.docs.map(d => d.data()).filter(item => item.available !== false).sort((a, b) => a.order - b.order);
    const sets = settingsSnap.exists() ? settingsSnap.data() : {};

    if (cats.length) categories = cats;
    if (items.length) menuItems = items;
    if (Object.keys(sets).length) settings = sets;

    writeCache();
  } catch (err) {
    console.error("Firebase sync failed (using defaults):", err);
  }
}

function applySettings() {
  if (settings.name?.ar) translations.ar.restaurant_name = settings.name.ar;
  if (settings.name?.en) translations.en.restaurant_name = settings.name.en;
  if (settings.tagline?.ar) translations.ar.restaurant_tagline = settings.tagline.ar;
  if (settings.tagline?.en) translations.en.restaurant_tagline = settings.tagline.en;

  const callLink = document.getElementById("call-link");
  if (callLink) {
    if (settings.phone) callLink.href = "tel:" + settings.phone;
    else callLink.style.display = "none";
  }

  const waLink = document.getElementById("whatsapp-link");
  if (waLink) {
    if (settings.whatsapp) waLink.href = "https://wa.me/" + settings.whatsapp;
    else waLink.style.display = "none";
  }

  const igLink = document.getElementById("instagram-link");
  if (igLink) {
    if (settings.instagram) igLink.href = settings.instagram;
    else igLink.style.display = "none";
  }

  const locLink = document.getElementById("location-link");
  if (locLink) {
    if (settings.location) locLink.href = settings.location;
    else locLink.style.display = "none";
  }

  const video = document.getElementById("header-video");
  if (video) {
    if (settings.heroVideoEnabled === false) {
      video.style.display = "none";
    } else if (settings.heroVideo) {
      const source = document.getElementById("header-video-src");
      source.src = settings.heroVideo;
      video.load();
      video.play().catch(() => {});
    }
  }
}

/* ---------------------------------------------------------
   1) TRANSLATIONS
--------------------------------------------------------- */
const translations = {
  ar: {
    restaurant_name: "سوبر منيو",
    restaurant_tagline: "أكل شهي، تجربة مختلفة",
    eyebrow: "منيو رقمي تفاعلي",
    search_placeholder: "ابحث عن صنف...",
    no_results: "مفيش نتائج مطابقة لبحثك",
    footer_made: "قم بإنشاء قائمة طعام مثل هذه لمطعمك",
    cat_all: "الكل",
    currency: "ج.م",
    items_count_suffix: "صنف",
    tap_to_browse: "اضغط للتصفح",
    back_to_categories: "الأقسام",
    search_results: "نتائج البحث",
    favorites_title: "المفضلة",
    added_fav: "تمت الإضافة للمفضلة",
    removed_fav: "تمت الإزالة من المفضلة",
    order_hint: "اطلب من فريق الخدمة",
    view_categories: "تصفح كل الأقسام",
    maroo: "من تطوير مروان ماهر"
  },
  en: {
    restaurant_name: "Super Menu",
    restaurant_tagline: "Great food, a different experience",
    eyebrow: "Interactive Digital Menu",
    search_placeholder: "Search for a dish...",
    no_results: "No items match your search",
    footer_made: "Create a menu like this for your restaurant",
    cat_all: "All",
    currency: "EGP",
    items_count_suffix: "items",
    tap_to_browse: "Tap to browse",
    back_to_categories: "Categories",
    search_results: "Search results",
    favorites_title: "Favorites",
    added_fav: "Added to favorites",
    removed_fav: "Removed from favorites",
    order_hint: "Ask your server to order",
    view_categories: "Browse all categories",
    maroo: "Developed by Marwan Maher"
  }
};

/* ---------------------------------------------------------
   2) STATE
--------------------------------------------------------- */
let state = {
  lang: localStorage.getItem("sm_lang") || "ar",
  theme: localStorage.getItem("sm_theme") || "light",
  view: "home",
  activeCategory: "all",
  searchQuery: "",
  favorites: JSON.parse(localStorage.getItem("sm_favorites") || "[]"),
  showFavoritesOnly: false
};

/* ---------------------------------------------------------
   3) HELPERS
--------------------------------------------------------- */
function categoryMeta(catId) {
  return categories.find(c => c.id === catId) || {};
}
function tagClassOf(tag) {
  if (!tag) return "";
  const t = tag.toUpperCase();
  if (t.includes("NEW")) return "tag-new";
  if (t.includes("SIGNATURE")) return "tag-signature";
  if (t.includes("CHEF")) return "tag-chefs-pick";
  return "";
}

/* ---------------------------------------------------------
   4) DOM REFS
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
const scrollTopBtn = $("#scroll-top-btn");
const toastEl = $("#toast");

let toastTimer = null;
function showToast(msg) {
  toastEl.textContent = msg;
  toastEl.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toastEl.classList.remove("show"), 1800);
}

/* ---------------------------------------------------------
   5) INIT
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
  scrollTopBtn.addEventListener("click", () => window.scrollTo({ top: 0, behavior: "smooth" }));

  window.addEventListener("scroll", onWindowScroll, { passive: true });
}

function onWindowScroll() {
  const y = window.scrollY || document.documentElement.scrollTop;
  scrollTopBtn.classList.toggle("show", y > 420);
  categoriesNav.classList.toggle("scrolled", y > 6);

  const heroImg = document.querySelector(".cat-hero-img");
  if (heroImg) {
    const hero = heroImg.closest(".cat-hero");
    const rect = hero.getBoundingClientRect();
    const offset = rect.top * -0.12;
    heroImg.style.transform = `translateY(${offset}px)`;
  }
}

/* ---------------------------------------------------------
   6) SCROLL REVEAL
--------------------------------------------------------- */
let revealObserver = null;
function setupRevealObserver() {
  if (revealObserver) revealObserver.disconnect();
  revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        revealObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12, rootMargin: "0px 0px -40px 0px" });
}
function observeReveal(selector) {
  document.querySelectorAll(selector).forEach(el => revealObserver.observe(el));
}

function bindImageLoad(imgEl, wrapEl) {
  const done = () => {
    imgEl.classList.add("loaded");
    if (wrapEl) wrapEl.classList.add("loaded");
  };
  if (imgEl.complete && imgEl.naturalWidth > 0) {
    done();
  } else {
    imgEl.addEventListener("load", done, { once: true });
    imgEl.addEventListener("error", done, { once: true });
  }
}

/* ---------------------------------------------------------
   7) RENDER CATEGORIES
--------------------------------------------------------- */
function renderCategories() {
  const t = translations[state.lang];
  categoriesNav.innerHTML = "";

  const allBtn = document.createElement("button");
  allBtn.className = "cat-btn all-pill" + (state.activeCategory === "all" ? " active" : "");
  allBtn.textContent = t.cat_all;
  allBtn.dataset.category = "all";
  allBtn.addEventListener("click", () => goToCategory("all"));
  categoriesNav.appendChild(allBtn);

  categories.forEach(cat => {
    const btn = document.createElement("button");
    btn.className = "cat-btn" + (cat.id === state.activeCategory ? " active" : "");
    btn.dataset.category = cat.id;
    btn.innerHTML = `<img class="cat-avatar" src="${cldFetch(cat.thumb, 100)}" alt="" loading="lazy"><span>${state.lang === "ar" ? cat.ar : cat.en}</span>`;
    btn.addEventListener("click", () => goToCategory(cat.id));
    categoriesNav.appendChild(btn);
  });
}

function setActiveCatButton(catId) {
  categoriesNav.querySelectorAll(".cat-btn").forEach(b => {
    b.classList.toggle("active", b.dataset.category === catId);
  });
}

function goToCategory(catId) {
  if (catId === "all") {
    state.view = "home";
    state.activeCategory = "all";
  } else {
    state.view = "category";
    state.activeCategory = catId;
  }
  setActiveCatButton(catId);
  window.scrollTo({ top: 0, behavior: "smooth" });
  renderMenu();
}

/* ---------------------------------------------------------
   8) FILTER HELPERS + CARD BUILDER
--------------------------------------------------------- */
function matchesFilters(item) {
  const name = item.name[state.lang].toLowerCase();
  const desc = item.description[state.lang].toLowerCase();
  const query = state.searchQuery.toLowerCase();
  const matchesSearch = !query || name.includes(query) || desc.includes(query);
  const matchesFav = !state.showFavoritesOnly || state.favorites.includes(item.id);
  return matchesSearch && matchesFav;
}

function buildCard(item, index) {
  const t = translations[state.lang];
  const card = document.createElement("article");
  card.className = "menu-card";
  card.style.animationDelay = Math.min(index * 0.045, 0.5) + "s";

  const isFav = state.favorites.includes(item.id);
  const tagClass = tagClassOf(item.tag);

  card.innerHTML = `
    <div class="card-img-wrap">
      <img src="${cldFetch(item.image, 500)}" alt="${item.name[state.lang]}" loading="lazy">
      ${item.tag ? `<span class="menu-tag ${tagClass}">${item.tag}</span>` : ""}
      <button class="card-fav ${isFav ? "is-fav" : ""}" data-id="${item.id}" aria-label="favorite">
        <svg class="icon" viewBox="0 0 24 24"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
      </button>
    </div>
    <div class="card-content">
      <h3>${item.name[state.lang]}</h3>
      <p>${item.description[state.lang]}</p>
      <span class="card-price">${item.price} <small>${t.currency}</small></span>
    </div>
  `;

  const imgWrap = card.querySelector(".card-img-wrap");
  const imgEl = card.querySelector("img");
  bindImageLoad(imgEl, imgWrap);

  card.addEventListener("click", (e) => {
    if (e.target.closest(".card-fav")) return;
    openModal(item.id);
  });

  card.querySelector(".card-fav").addEventListener("click", (e) => {
    e.stopPropagation();
    toggleFavorite(item.id, false, e.currentTarget);
  });

  return card;
}

/* ---------------------------------------------------------
   9) MAIN RENDER
--------------------------------------------------------- */
function renderMenu() {
  setupRevealObserver();
  const query = state.searchQuery.trim();

  if (state.view === "home" && (query || state.showFavoritesOnly)) {
    renderFlatResults();
  } else if (state.view === "category") {
    renderCategoryPage(state.activeCategory);
  } else {
    renderHomeTheater();
  }
}

function renderHomeTheater() {
  const t = translations[state.lang];
  menuContainer.innerHTML = "";

  const grid = document.createElement("div");
  grid.className = "cat-theater-grid";

  categories.forEach((cat, idx) => {
    const count = menuItems.filter(item => item.category === cat.id).length;
    const card = document.createElement("button");
    card.type = "button";
    card.className = "cat-theater";
    card.style.setProperty("--cat-color", cat.color);
    card.innerHTML = `
      <div class="cat-theater-img-wrap">
        <img class="cat-theater-img" src="${cldFetch(cat.banner, 700)}" alt="${state.lang === "ar" ? cat.ar : cat.en}" loading="lazy">
      </div>
      <div class="cat-theater-scrim"></div>
      <div class="cat-theater-scrim2"></div>
      <span class="cat-theater-number">${String(cat.number).padStart(2, "0")}</span>
      <div class="cat-theater-body">
        <h2 class="cat-theater-title">${state.lang === "ar" ? cat.ar : cat.en}</h2>
        <div class="cat-theater-meta">
          <span class="cat-theater-count">${count} ${t.items_count_suffix}</span>
          <span class="cat-theater-arrow">
            <svg class="icon" viewBox="0 0 24 24"><path d="M5 12h14M13 5l7 7-7 7"/></svg>
          </span>
        </div>
      </div>
    `;
    const img = card.querySelector(".cat-theater-img");
    bindImageLoad(img, null);
    card.addEventListener("click", () => goToCategory(cat.id));
    grid.appendChild(card);
  });

  menuContainer.appendChild(grid);
  emptyState.classList.add("hidden");
  observeReveal(".cat-theater");
}

function renderCategoryPage(catId) {
  const t = translations[state.lang];
  const cat = categoryMeta(catId);
  menuContainer.innerHTML = "";

  const items = menuItems.filter(item => item.category === catId && matchesFilters(item));

  const page = document.createElement("div");
  page.className = "cat-page";

  page.innerHTML = `
    <button type="button" class="back-btn">
      <svg class="icon" viewBox="0 0 24 24"><path d="M19 12H5M12 19l-7-7 7-7"/></svg>
      ${t.back_to_categories}
    </button>
    <div class="cat-hero">
      <div class="cat-hero-img-wrap">
        <img class="cat-hero-img" src="${cldFetch(cat.banner, 1000)}" alt="${state.lang === "ar" ? cat.ar : cat.en}" loading="lazy">
      </div>
      <div class="cat-hero-scrim"></div>
      <div class="cat-hero-content">
        <div class="cat-hero-number">${String(cat.number).padStart(2, "0")} / ${categories.length}</div>
        <h2 class="cat-hero-title">${state.lang === "ar" ? cat.ar : cat.en}</h2>
        <span class="cat-hero-count">${items.length} ${t.items_count_suffix}</span>
      </div>
    </div>
    <div class="cat-row"></div>
  `;

  page.querySelector(".back-btn").addEventListener("click", () => goToCategory("all"));

  const heroImg = page.querySelector(".cat-hero-img");
  bindImageLoad(heroImg, null);

  const row = page.querySelector(".cat-row");
  items.forEach((item, i) => row.appendChild(buildCard(item, i)));

  menuContainer.appendChild(page);
  emptyState.classList.toggle("hidden", items.length > 0);
}

function renderFlatResults() {
  const t = translations[state.lang];
  menuContainer.innerHTML = "";

  const items = menuItems.filter(matchesFilters);

  const title = document.createElement("h2");
  title.className = "flat-results-title";
  title.textContent = state.searchQuery.trim() ? t.search_results : t.favorites_title;
  menuContainer.appendChild(title);

  const grid = document.createElement("div");
  grid.className = "menu-grid";
  items.forEach((item, i) => grid.appendChild(buildCard(item, i)));
  menuContainer.appendChild(grid);

  emptyState.classList.toggle("hidden", items.length > 0);
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
   11) FAVORITES
--------------------------------------------------------- */
function toggleFavorite(id, fromModal, btnEl) {
  const t = translations[state.lang];
  const idx = state.favorites.indexOf(id);
  const adding = idx === -1;
  if (adding) state.favorites.push(id); else state.favorites.splice(idx, 1);
  localStorage.setItem("sm_favorites", JSON.stringify(state.favorites));
  showToast(adding ? t.added_fav : t.removed_fav);

  if (btnEl) {
    btnEl.classList.toggle("is-fav", adding);
    btnEl.classList.add("pop");
    setTimeout(() => btnEl.classList.remove("pop"), 450);
  } else {
    renderMenu();
  }
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

  const imgEl = $("#modal-img");
  imgEl.classList.remove("loaded");
  imgEl.src = cldFetch(item.image, 900);
  bindImageLoad(imgEl, null);

  $("#modal-name").textContent = item.name[state.lang];
  $("#modal-desc").textContent = item.description[state.lang];
  $("#modal-price").textContent = `${item.price} ${t.currency}`;
  $("#modal-order-hint").textContent = t.order_hint;

  const tagEl = $("#modal-tag");
  if (item.tag) {
    tagEl.textContent = item.tag;
    tagEl.className = "menu-tag " + tagClassOf(item.tag);
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
   14) THEME TOGGLE
--------------------------------------------------------- */
function toggleTheme() {
  state.theme = state.theme === "light" ? "dark" : "light";
  localStorage.setItem("sm_theme", state.theme);
  document.documentElement.setAttribute("data-theme", state.theme);
}

/* ---------------------------------------------------------
   15) BOOT — فوري بدون أي انتظار
--------------------------------------------------------- */
function boot() {
  // عرض البيانات الافتراضية فوراً — بدون skeleton ولا loader
  applySettings();
  init();

  // مزامنة Firebase في الخلفية (silent update)
  loadMenuData().then(() => {
    applySettings();
    renderCategories();
    renderMenu();
  }).catch(err => {
    console.error("Background sync failed:", err);
  });
}

boot();