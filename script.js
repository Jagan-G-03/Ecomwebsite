const categories = [
  ["🛒", "Grocery", "Grocery"], ["📱", "Mobiles", "Mobiles"], ["👗", "Fashion", "Fashion"],
  ["💻", "Electronics", "Electronics"], ["🛋️", "Home & Furniture", "Home"], ["🧺", "Appliances", "Appliances"],
  ["💄", "Beauty", "Beauty"], ["🧸", "Toys", "Toys"], ["🏍️", "Two Wheelers", "Vehicles"]
];

const products = [
  {id:1,name:"Aurora X5 5G Smartphone",category:"Mobiles",section:"Best-Selling Mobiles",price:17999,old:23999,rating:4.6,reviews:1280,image:"https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500&q=80"},
  {id:2,name:"Pixel Pro Wireless Headphones",category:"Electronics",section:"Best of Electronics",price:2499,old:4999,rating:4.4,reviews:845,image:"https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500&q=80"},
  {id:3,name:"Minimalist Linen Overshirt",category:"Fashion",section:"Fashion Top Deals",price:899,old:1799,rating:4.3,reviews:410,image:"https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=500&q=80"},
  {id:4,name:"Nordic Ceramic Table Set",category:"Home",section:"Home Essentials",price:1299,old:2499,rating:4.5,reviews:267,image:"https://images.unsplash.com/photo-1610701596007-11502861dcfa?w=500&q=80"},
  {id:5,name:"Smart Fitness Watch Active",category:"Electronics",section:"Deals of the Day",price:1599,old:3999,rating:4.2,reviews:980,image:"https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500&q=80"},
  {id:6,name:"AirFlex Running Shoes",category:"Fashion",section:"Fashion Top Deals",price:1199,old:2499,rating:4.5,reviews:632,image:"https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=500&q=80"},
  {id:7,name:"Brewmate Coffee Maker",category:"Appliances",section:"Deals of the Day",price:2199,old:3599,rating:4.4,reviews:201,image:"https://images.unsplash.com/photo-1517668808822-9ebb02f2a0e6?w=500&q=80"},
  {id:8,name:"Everyday Cotton Bedsheet",category:"Home",section:"Home Essentials",price:699,old:1299,rating:4.1,reviews:1840,image:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&q=80"},
  {id:9,name:"SoundPod Mini Speaker",category:"Electronics",section:"Best of Electronics",price:1299,old:2299,rating:4.3,reviews:555,image:"https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80"},
  {id:10,name:"LumiGlow Skincare Kit",category:"Beauty",section:"Deals of the Day",price:799,old:1499,rating:4.6,reviews:379,image:"https://images.unsplash.com/photo-1556229010-6c3f2c9ca5f8?w=500&q=80"},
  {id:11,name:"Nova Max 5G Smartphone",category:"Mobiles",section:"Best-Selling Mobiles",price:22499,old:28999,rating:4.5,reviews:736,image:"https://images.unsplash.com/photo-1598327105666-5b89351aff97?w=500&q=80"},
  {id:12,name:"UltraView AMOLED Phone",category:"Mobiles",section:"Best-Selling Mobiles",price:26999,old:34999,rating:4.4,reviews:492,image:"https://images.unsplash.com/photo-1565849904461-04a58ad377e0?w=500&q=80"},
  {id:13,name:"PowerCore Fast Charger",category:"Electronics",section:"Best of Electronics",price:899,old:1599,rating:4.5,reviews:1204,image:"https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=500&q=80"},
  {id:14,name:"WorkMate Wireless Keyboard",category:"Electronics",section:"Best of Electronics",price:1499,old:2799,rating:4.3,reviews:638,image:"https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=500&q=80"},
  {id:15,name:"Vision 4K Smart TV",category:"Electronics",section:"Best of Electronics",price:28999,old:45999,rating:4.6,reviews:318,image:"https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=500&q=80"},
  {id:16,name:"Classic Denim Jacket",category:"Fashion",section:"Fashion Top Deals",price:1299,old:2499,rating:4.4,reviews:821,image:"https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500&q=80"},
  {id:17,name:"Breezy Summer Dress",category:"Fashion",section:"Fashion Top Deals",price:999,old:1999,rating:4.5,reviews:547,image:"https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500&q=80"},
  {id:18,name:"Urban Casual Sneakers",category:"Fashion",section:"Fashion Top Deals",price:1599,old:2999,rating:4.3,reviews:914,image:"https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=500&q=80"},
  {id:19,name:"Oakwood Study Desk",category:"Home",section:"Home Essentials",price:4999,old:7999,rating:4.5,reviews:176,image:"https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=500&q=80"},
  {id:20,name:"CloudSoft Cushion Set",category:"Home",section:"Home Essentials",price:849,old:1499,rating:4.2,reviews:693,image:"https://images.unsplash.com/photo-1584100936595-c0654b55a2e2?w=500&q=80"},
  {id:21,name:"GlowNest Table Lamp",category:"Home",section:"Home Essentials",price:1199,old:2199,rating:4.4,reviews:288,image:"https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=500&q=80"},
  {id:22,name:"QuickCook Air Fryer",category:"Appliances",section:"Deals of the Day",price:3299,old:5999,rating:4.6,reviews:1108,image:"https://images.unsplash.com/photo-1648132930941-7f4cce1b0e35?w=500&q=80"},
  {id:23,name:"PureBreeze Air Purifier",category:"Appliances",section:"Deals of the Day",price:5499,old:8999,rating:4.3,reviews:264,image:"https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=500&q=80"},
  {id:24,name:"FreshFoam Face Wash Duo",category:"Beauty",section:"Deals of the Day",price:599,old:999,rating:4.5,reviews:742,image:"https://images.unsplash.com/photo-1556228578-8c89e6adf883?w=500&q=80"},
  {id:25,name:"SilkyCare Hair Dryer",category:"Beauty",section:"Deals of the Day",price:1399,old:2499,rating:4.4,reviews:389,image:"https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=500&q=80"},
  {id:26,name:"NoiseCancel Travel Buds",category:"Electronics",section:"Best of Electronics",price:1899,old:3499,rating:4.4,reviews:467,image:"https://images.unsplash.com/photo-1606220945770-b5b6c2c55bf1?w=500&q=80"},
  {id:27,name:"Relaxed Fit Cargo Trousers",category:"Fashion",section:"Fashion Top Deals",price:1099,old:2199,rating:4.2,reviews:354,image:"https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?w=500&q=80"},
  {id:28,name:"Luxe Velvet Throw",category:"Home",section:"Home Essentials",price:1299,old:2399,rating:4.5,reviews:228,image:"https://images.unsplash.com/photo-1600369671236-e74521d4b8ad?w=500&q=80"},
  {id:29,name:"Zen Z2 5G Smartphone",category:"Mobiles",section:"Best-Selling Mobiles",price:19999,old:26999,rating:4.3,reviews:581,image:"https://images.unsplash.com/photo-1510557880182-3d4d3cba35a5?w=500&q=80"},
  {id:30,name:"Edge Lite 5G Smartphone",category:"Mobiles",section:"Best-Selling Mobiles",price:15999,old:21999,rating:4.2,reviews:674,image:"https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=500&q=80"},
  {id:31,name:"ProShot Camera Phone",category:"Mobiles",section:"Best-Selling Mobiles",price:31999,old:39999,rating:4.6,reviews:305,image:"https://images.unsplash.com/photo-1556656793-08538906a9f8?w=500&q=80"}
];
const sections = ["Deals of the Day","Best of Electronics","Fashion Top Deals","Home Essentials","Best-Selling Mobiles"];
const state = {cart: JSON.parse(localStorage.getItem("shopkart-cart") || "{}"), wishlist: new Set(), expandedSections: new Set(), query:"", category:"All", sort:"featured", slide:0};
const $ = selector => document.querySelector(selector);
const escapeHtml = value => String(value).replace(/[&<>"']/g, char => ({ "&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;","'":"&#039;" }[char]));
const money = value => `₹${value.toLocaleString("en-IN")}`;

function showToast(message) {
  const toast = $("#toast"); toast.textContent = message; toast.classList.add("show");
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove("show"), 2200);
}
function saveCart() { localStorage.setItem("shopkart-cart", JSON.stringify(state.cart)); updateCartCount(); }
function updateCartCount() {
  const count = Object.values(state.cart).reduce((sum, item) => sum + item.qty, 0);
  $("#cartCount").textContent = count; $("#cartModalCount").textContent = `${count} item${count === 1 ? "" : "s"}`;
}
function openModal(id) { $("#modalBackdrop").classList.add("open"); document.querySelectorAll(".modal").forEach(modal => modal.classList.remove("active")); $(`#${id}`).classList.add("active"); }
function closeModal() { $("#modalBackdrop").classList.remove("open"); }

function renderCategories() {
  $("#categoryList").innerHTML = categories.map(([icon, label, value]) => `<button class="category-item" data-category="${value}"><span>${icon}</span><span>${label}</span></button>`).join("");
  document.querySelectorAll(".category-item").forEach(button => button.addEventListener("click", () => {
    state.category = button.dataset.category; state.query = ""; $("#searchInput").value = ""; renderProducts();
  }));
}
function renderHeroes() {
  const slides = [
    ["The everyday edit", "Small upgrades. Big difference.", "Fresh finds for the way you live, work and unwind.", "Explore the edit", "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=900&q=85"],
    ["Festive-ready styles", "Colour outside the ordinary.", "Bright looks and beautiful details, starting at ₹499.", "Shop fashion", "https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=900&q=85"],
    ["Upgrade your world", "Tech that keeps up.", "Powerful gadgets, honest prices and fast delivery.", "See electronics", "https://images.unsplash.com/photo-1498049794561-7780e7231661?w=900&q=85"]
  ];
  $("#heroTrack").innerHTML = slides.map(slide => `<article class="hero-slide"><div class="hero-copy"><p class="eyebrow">${slide[0]}</p><h2>${slide[1]}</h2><p>${slide[2]}</p><button class="primary-btn">${slide[3]} →</button></div><img class="hero-product" src="${slide[4]}" alt=""></article>`).join("");
  $("#heroDots").innerHTML = slides.map((_, index) => `<button class="${index === 0 ? "active" : ""}" data-slide="${index}" aria-label="Go to slide ${index + 1}"></button>`).join("");
  document.querySelectorAll(".hero-dots button").forEach(dot => dot.addEventListener("click", () => goToSlide(Number(dot.dataset.slide))));
}
function goToSlide(index) {
  state.slide = (index + 3) % 3; $("#heroTrack").style.transform = `translateX(-${state.slide * 100}%)`;
  document.querySelectorAll(".hero-dots button").forEach((dot, dotIndex) => dot.classList.toggle("active", dotIndex === state.slide));
}
function visibleProducts(section) {
  let result = products.filter(product => product.section === section);
  if (state.category !== "All") result = result.filter(product => product.category === state.category);
  if (state.query) result = result.filter(product => `${product.name} ${product.category} ${product.section}`.toLowerCase().includes(state.query.toLowerCase()));
  if (state.sort === "price-low") result.sort((a,b) => a.price - b.price);
  if (state.sort === "price-high") result.sort((a,b) => b.price - a.price);
  if (state.sort === "rating") result.sort((a,b) => b.rating - a.rating);
  return result;
}
function productCard(product) {
  const discount = Math.round((1 - product.price / product.old) * 100);
  return `<article class="product-card"><div class="product-image-wrap"><img class="product-image" src="${product.image}" alt="${escapeHtml(product.name)}" loading="lazy"><button class="wishlist ${state.wishlist.has(product.id) ? "active" : ""}" data-wishlist="${product.id}" aria-label="Wishlist">${state.wishlist.has(product.id) ? "♥" : "♡"}</button></div><h3 title="${escapeHtml(product.name)}">${escapeHtml(product.name)}</h3><span class="rating">★ ${product.rating}</span> <small class="review-count">(${product.reviews})</small><div class="price-row"><span class="price">${money(product.price)}</span><span class="old-price">${money(product.old)}</span><span class="discount">${discount}% off</span></div><div class="card-actions"><button class="view-btn" data-view="${product.id}">Quick view</button><button class="add-btn" data-add="${product.id}">Add to cart</button></div></article>`;
}
function renderProducts() {
  const hasQuery = state.query || state.category !== "All";
  const matching = products.filter(product => (!hasQuery || `${product.name} ${product.category} ${product.section}`.toLowerCase().includes(state.query.toLowerCase())) && (state.category === "All" || product.category === state.category));
  $("#searchStatus").textContent = hasQuery ? `${matching.length} product${matching.length === 1 ? "" : "s"} found${state.category !== "All" ? ` in ${state.category}` : ""}` : "";
  const html = sections.map(section => {
    const items = visibleProducts(section);
    if (!items.length) return "";
    const isExpanded = state.expandedSections.has(section);
    const displayedItems = isExpanded ? items : items.slice(0, 5);
    const viewAllControl = items.length > 5 ? `<button class="view-all-btn" data-section="${escapeHtml(section)}">${isExpanded ? "Show less ↑" : `View all (${items.length}) →`}</button>` : "";
    return `<section class="product-section"><div class="section-heading"><h2>${section}</h2>${viewAllControl}</div><div class="product-grid">${displayedItems.map(productCard).join("")}</div></section>`;
  }).join("");
  $("#productSections").innerHTML = html || `<div class="no-results"><strong>Nothing matched that search</strong>Try another keyword or browse all our categories.</div>`;
  bindProductActions();
}
function bindProductActions() {
  document.querySelectorAll("[data-section]").forEach(button => button.addEventListener("click", () => {
    const section = button.dataset.section;
    state.expandedSections.has(section) ? state.expandedSections.delete(section) : state.expandedSections.add(section);
    renderProducts();
  }));
  document.querySelectorAll("[data-add]").forEach(button => button.addEventListener("click", () => addToCart(Number(button.dataset.add))));
  document.querySelectorAll("[data-view]").forEach(button => button.addEventListener("click", () => showQuickView(Number(button.dataset.view))));
  document.querySelectorAll("[data-wishlist]").forEach(button => button.addEventListener("click", () => {
    const id = Number(button.dataset.wishlist); state.wishlist.has(id) ? state.wishlist.delete(id) : state.wishlist.add(id); renderProducts(); showToast(state.wishlist.has(id) ? "Added to wishlist" : "Removed from wishlist");
  }));
}
function addToCart(id) {
  const product = products.find(item => item.id === id); if (!state.cart[id]) state.cart[id] = {product, qty:0}; state.cart[id].qty++; saveCart(); showToast(`${product.name} added to your cart`);
}
function renderCart() {
  const items = Object.values(state.cart);
  $("#cartItems").innerHTML = items.length ? items.map(item => `<div class="cart-line"><img src="${item.product.image}" alt=""><div class="cart-line-info"><strong>${escapeHtml(item.product.name)}</strong><small>${money(item.product.price)}</small></div><div class="quantity"><button data-quantity="${item.product.id}" data-change="-1">−</button><span>${item.qty}</span><button data-quantity="${item.product.id}" data-change="1">+</button></div><button class="remove-line" data-remove="${item.product.id}">Remove</button></div>`).join("") : `<div class="empty-cart">Your cart is waiting for something wonderful.<br><button class="primary-btn" data-close-modal>Start shopping</button></div>`;
  const total = items.reduce((sum, item) => sum + item.product.price * item.qty, 0); $("#cartTotal").textContent = money(total); updateCartCount();
  document.querySelectorAll("[data-quantity]").forEach(button => button.addEventListener("click", () => changeQuantity(Number(button.dataset.quantity), Number(button.dataset.change))));
  document.querySelectorAll("[data-remove]").forEach(button => button.addEventListener("click", () => { delete state.cart[button.dataset.remove]; saveCart(); renderCart(); showToast("Item removed from cart"); }));
  document.querySelectorAll("[data-close-modal]").forEach(button => button.addEventListener("click", closeModal));
}
function changeQuantity(id, change) { state.cart[id].qty += change; if (state.cart[id].qty <= 0) delete state.cart[id]; saveCart(); renderCart(); }
function showQuickView(id) {
  const product = products.find(item => item.id === id); const discount = Math.round((1 - product.price / product.old) * 100);
  $("#quickViewContent").innerHTML = `<div class="quick-view"><img src="${product.image}" alt="${escapeHtml(product.name)}"><div class="quick-info"><p class="eyebrow">${product.category}</p><h2>${escapeHtml(product.name)}</h2><span class="rating">★ ${product.rating} · ${product.reviews} ratings</span><div class="price-row"><span class="price">${money(product.price)}</span><span class="old-price">${money(product.old)}</span><span class="discount">${discount}% off</span></div><p>Designed for everyday comfort and effortless style. Enjoy fast, reliable delivery with ShopKart.</p><button class="primary-btn" data-quick-add="${product.id}">Add to cart</button></div></div>`;
  openModal("quickViewModal"); $("[data-quick-add]").addEventListener("click", () => { addToCart(id); closeModal(); });
}

renderCategories(); renderHeroes(); renderProducts(); updateCartCount();
setInterval(() => goToSlide(state.slide + 1), 5000);
$("#prevSlide").addEventListener("click", () => goToSlide(state.slide - 1)); $("#nextSlide").addEventListener("click", () => goToSlide(state.slide + 1));
$("#searchInput").addEventListener("input", event => { state.query = event.target.value.trim(); renderProducts(); });
$("#searchBtn").addEventListener("click", () => { state.query = $("#searchInput").value.trim(); renderProducts(); $("#productSections").scrollIntoView({behavior:"smooth"}); });
$("#sortSelect").addEventListener("change", event => { state.sort = event.target.value; renderProducts(); });
$("#loginBtn").addEventListener("click", () => openModal("loginModal")); $("#cartBtn").addEventListener("click", () => { renderCart(); openModal("cartModal"); });
$("#mobileMenuBtn").addEventListener("click", () => $("#headerActions").classList.toggle("mobile-open"));
$("#moreBtn").addEventListener("click", () => $("#moreMenu").classList.toggle("show"));
$("#loginSubmit").addEventListener("click", () => { closeModal(); showToast("Demo login successful — welcome to ShopKart!"); });
$("#checkoutBtn").addEventListener("click", () => showToast("Checkout is a demo — no payment was processed."));
$("#modalBackdrop").addEventListener("click", event => { if (event.target.id === "modalBackdrop") closeModal(); });
document.addEventListener("click", event => { if (!event.target.closest(".more-btn") && !event.target.closest(".more-menu")) $("#moreMenu").classList.remove("show"); });
