/* ==========================================================
   SUPER MENU — script.js (app logic)
   يعتمد على البيانات الموجودة في data.js (categories, menuItems)
   Vanilla JS بدون أي framework
   ========================================================== */

/* ---------------------------------------------------------
   1) TRANSLATIONS (UI strings)
--------------------------------------------------------- */
const translations = {
  ar: {
    restaurant_name: "سوبر منيو",
    restaurant_tagline: "أكل شهي، تجربة مختلفة",
    eyebrow: "منيو رقمي تفاعلي",
    search_placeholder: "ابحث عن صنف...",
    no_results: "مفيش نتائج مطابقة لبحثك",
    footer_made: "اصنع منيو زي ده لمطعمك Super Menu QR",
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
    view_categories: "تصفح كل الأقسام"
  },
  en: {
    restaurant_name: "Super Menu",
    restaurant_tagline: "Great food, a different experience",
    eyebrow: "Interactive Digital Menu",
    search_placeholder: "Search for a dish...",
    no_results: "No items match your search",
    footer_made: "Crafted with Super Menu QR",
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
    view_categories: "Browse all categories"
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

  // subtle parallax for category hero image
  const heroImg = document.querySelector(".cat-hero-img");
  if (heroImg) {
    const hero = heroImg.closest(".cat-hero");
    const rect = hero.getBoundingClientRect();
    const offset = rect.top * -0.12;
    heroImg.style.transform = `translateY(${offset}px)`;
  }
}

/* ---------------------------------------------------------
   6) SCROLL REVEAL (IntersectionObserver)
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

/* Lazy-load with fade-in + skeleton removal */
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
   7) RENDER CATEGORIES (top pills with photo avatar)
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
    btn.innerHTML = `<img class="cat-avatar" src="${cat.thumb}" alt="" loading="lazy"><span>${state.lang === "ar" ? cat.ar : cat.en}</span>`;
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
      <img src="${item.image}" alt="${item.name[state.lang]}" loading="lazy">
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
   9) MAIN RENDER — decides which "page" to show
--------------------------------------------------------- */
function renderMenu() {
  setupRevealObserver();
  const query = state.searchQuery.trim();

  if (state.view === "home" && (query || state.showFavoritesOnly)) {
    renderFlatResults();
    return;
  }
  if (state.view === "category") {
    renderCategoryPage(state.activeCategory);
    return;
  }
  renderHomeTheater();
}

/* ---- HOME: theater grid of category cards (real photo hero per category) ---- */
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
        <img class="cat-theater-img" src="${cat.banner}" alt="${state.lang === "ar" ? cat.ar : cat.en}" loading="lazy">
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

/* ---- CATEGORY PAGE: back button + real-photo hero + dishes grid ---- */
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
        <img class="cat-hero-img" src="${cat.banner}" alt="${state.lang === "ar" ? cat.ar : cat.en}">
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

/* ---- FLAT RESULTS: search / favorites triggered from the home screen ---- */
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
   11) FAVORITES (localStorage)
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
  imgEl.src = item.image;
  bindImageLoad(imgEl, null);

  $("#modal-name").textContent = item.name[state.lang];
  $("#modal-desc").textContent = item.description[state.lang];
  $("#modal-price").textContent = `${item.price} ${t.currency}`;
  $("#modal-order-hint").textContent = t.order_hint;

  const tagEl = $("#modal-tag");
  if (item.tag) {
    tagEl.textContent = item.tag;
    tagEl.className = "menu-tag " + tagClassOf(item.tag);
  } else {
    tagEl.classList.add("hidden");
  }
  if (item.tag) tagEl.classList.remove("hidden");

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