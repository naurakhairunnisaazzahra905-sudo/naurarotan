const products = [
  { id: "reka", name: "Kursi Santai Reka", nameEn: "Reka Lounge Chair", category: "Teman di sudut favorit", categoryEn: "For your favorite corner", description: "Rangka kokoh dan anyaman rapat dengan bantalan yang nyaman untuk bersantai.", descriptionEn: "A sturdy frame, tightly woven rattan, and a comfortable cushion for slow afternoons.", image: "assets/kursi-reka.jpg", imageAlt: "Kursi santai rotan dengan bantalan merah", imageAltEn: "Rattan lounge chair with a red cushion", price: 1250000, weight: 8, stock: 8, variants: [{ name: "Natural", priceDelta: 0 }, { name: "Honey", priceDelta: 75000 }] },
  { id: "teras", name: "Kursi Teras Nusa", nameEn: "Nusa Patio Chair", category: "Sambut sore lebih lama", categoryEn: "Stay a little longer", description: "Siluet ringan untuk teras, dengan pilihan anyaman natural dan rangka gelap.", descriptionEn: "A light silhouette for the patio, with natural weave and a dark-frame finish.", image: "assets/kursi-teras.jpg", imageAlt: "Kursi rotan di ruang interior bernuansa kayu", imageAltEn: "Wicker chair in a warm, wood-toned room", price: 980000, weight: 6, stock: 5, variants: [{ name: "Natural", priceDelta: 0 }, { name: "Espresso", priceDelta: 50000 }] },
  { id: "lilit", name: "Lampu Gantung Lilit", nameEn: "Lilit Pendant Lamp", category: "Cahaya yang hangat", categoryEn: "A softer kind of light", description: "Kap lampu beranyam tangan, menghadirkan bayang-bayang lembut di malam hari.", descriptionEn: "A handwoven shade that casts a soft, welcoming glow after dark.", image: "assets/lampu-lilit.jpg", imageAlt: "Deretan lampu gantung dengan kap anyaman rotan", imageAltEn: "Woven rattan pendant lamps", price: 675000, weight: 3, stock: 12, variants: [{ name: "Natural", priceDelta: 0 }, { name: "Charcoal", priceDelta: 40000 }] }
];

const shippingZones = [
  { id: "jawa", name: "Jawa", nameEn: "Java", ratePerKg: 18000, minimum: 35000, estimate: "3-5 hari kerja", estimateEn: "3-5 business days" },
  { id: "bali-nusa", name: "Bali & Nusa Tenggara", nameEn: "Bali & Nusa Tenggara", ratePerKg: 30000, minimum: 45000, estimate: "5-8 hari kerja", estimateEn: "5-8 business days" },
  { id: "sumatra", name: "Sumatra", nameEn: "Sumatra", ratePerKg: 32000, minimum: 45000, estimate: "5-8 hari kerja", estimateEn: "5-8 business days" },
  { id: "kalimantan", name: "Kalimantan", nameEn: "Kalimantan", ratePerKg: 36000, minimum: 50000, estimate: "6-9 hari kerja", estimateEn: "6-9 business days" },
  { id: "sulawesi", name: "Sulawesi", nameEn: "Sulawesi", ratePerKg: 38000, minimum: 55000, estimate: "7-10 hari kerja", estimateEn: "7-10 business days" },
  { id: "indonesia-timur", name: "Indonesia Timur", nameEn: "Eastern Indonesia", ratePerKg: 52000, minimum: 65000, estimate: "8-14 hari kerja", estimateEn: "8-14 business days" }
];

const faqs = [
  { question: "Bagaimana cara mengetahui produk yang ready?", questionEn: "How can I check product availability?", answer: "Jumlah stok tersedia ditampilkan pada setiap kartu produk dan diperbarui pada kalkulator saat kamu memilih produk. Jika stok habis, pilihan jumlah akan dinonaktifkan.", answerEn: "Available stock is shown on each product card and in the calculator. Quantity selection is disabled when an item is out of stock." },
  { question: "Apa saja pilihan varian yang tersedia?", questionEn: "Which product finishes are available?", answer: "Kursi Santai Reka tersedia dalam Natural dan Honey, Kursi Teras Nusa dalam Natural dan Espresso, serta Lampu Gantung Lilit dalam Natural dan Charcoal. Harga tiap varian ditampilkan di kalkulator.", answerEn: "The Reka Lounge Chair comes in Natural and Honey, the Nusa Patio Chair in Natural and Espresso, and the Lilit Pendant Lamp in Natural and Charcoal. Variant prices appear in the calculator." },
  { question: "Bagaimana total harga dihitung?", questionEn: "How is the total calculated?", answer: "Subtotal produk adalah harga varian dikalikan jumlah unit. Estimasi ongkir ditentukan dari berat produk, jumlah, dan zona tujuan, dengan biaya minimum sesuai zona.", answerEn: "The product subtotal is the selected variant price multiplied by the quantity. Estimated shipping is based on product weight, quantity, and destination zone, subject to a zone minimum." },
  { question: "Apakah ongkir yang ditampilkan sudah pasti?", questionEn: "Is the displayed shipping fee final?", answer: "Angka yang tampil merupakan estimasi berdasarkan zona, bukan tarif kurir langsung. Ongkir final dapat berubah menurut alamat lengkap, dimensi paket, dan layanan pengiriman yang tersedia.", answerEn: "The displayed amount is a zone-based estimate, not a live carrier quote. Final shipping may vary by full address, parcel dimensions, and available delivery service." },
  { question: "Berapa lama produk sampai?", questionEn: "How long will delivery take?", answer: "Perkiraan hari kerja ditampilkan otomatis berdasarkan zona tujuan. Waktu pengiriman belum termasuk waktu persiapan produk dan dapat berubah karena cuaca atau kondisi operasional kurir.", answerEn: "The estimated business days are shown automatically for each destination zone. Preparation time is not included, and delays may occur due to weather or carrier operations." },
  { question: "Apakah produk bisa dikirim ke luar Pulau Jawa?", questionEn: "Do you ship outside Java?", answer: "Bisa. Pilih zona tujuan di kalkulator untuk melihat perkiraan ongkir dan lama pengiriman. Pastikan alamat lengkap dikonfirmasi sebelum transaksi.", answerEn: "Yes. Choose a destination zone in the calculator to see estimated shipping and delivery time. Please confirm the full address before ordering." }
];

const englishText = {
  navLabel: "Main navigation", menuLabel: "Open navigation", languageLabel: "Choose language", navCollection: "Collection", navShipping: "Shipping estimate", navStory: "Our story", navFaq: "FAQ", navCheckPrice: "Get a quote",
  heroEyebrow: "HANDMADE IN CIREBON", heroTitle: "Woven to make your house feel", heroEm: "like home.", heroDescription: "Carefully selected rattan, shaped by skilled hands. Find chairs and lamps that feel at home in your space.", heroBrowse: "Explore the collection", heroLocation: "Cirebon, West Java", heroProof: "Natural rattan · Made with care · Ready to ship", heroArtAria: "Reka rattan lounge chair", heroImageAlt: "Rattan lounge chair with a red cushion", heroCaption: "01 / REKA CHAIR", heroSide: "RATTAN · HOME · STORIES", stampTop: "MADE IN", stampBottom: "CIREBON",
  collectionEyebrow: "FROM OUR WORKSHOP", collectionTitle: "Meet the collection", collectionNote: "Every weave has its own character.\nWhich one feels right for your home?",
  calcEyebrow: "CLEAR PRICING, NO GUESSWORK", calcTitle: "Delivered to your door.", calcIntro: "Choose a product and destination. We’ll estimate your subtotal, shipping, and delivery time.", calcNote: "Shipping is estimated by destination zone and product weight. The final fee is confirmed once we have your full address.", selectProduct: "Choose a product", selectVariant: "Finish", selectDestination: "Destination zone", selectQuantity: "Quantity", priceLabel: "Product subtotal", shippingLabel: "Estimated shipping", totalLabel: "Estimated total", copyQuote: "Copy quote details",
  storyEyebrow: "WE BELIEVE IN THE PROCESS", storyTitle: "More than furniture. Made by hands that care.", storyBodyOne: "Rattan has long been part of everyday life in Cirebon. Patience, precision, and generations of skill turn it into the weave you see here.", storyBodyTwo: "We select our materials with care and make each piece to feel comfortable, easy to maintain, and made to last.", storyLink: "The story of rattan",
  faqEyebrow: "BEFORE YOU ASK", faqTitle: "A few things to know", faqDescription: "Still have a question? Copy the estimate above and include it with your message.", footerTagline: "Cirebon-made weaving, for homes with stories.", backTop: "Back to top", footerCopyright: "Ruang Rotan. Made with care in Cirebon.", photoCredit: "Photos",
  readySuffix: "units in stock", outOfStock: "Currently out of stock.", weightLabel: "Approx. weight", perUnit: "kg per unit", readyPrefix: "In stock", deliveryPrefix: "Estimated delivery", prepExcluded: "preparation time not included.", quoteTitle: "Ruang Rotan quote", quantityLabel: "Quantity", productLabel: "Product", zoneLabel: "destination zone", totalQuoteLabel: "Estimated total", etaLabel: "Estimated delivery", finalShippingNote: "Note: final shipping is confirmed once the full address is provided.", copied: "Quote details copied.", copyReady: "Quote details are ready to copy.", promptCopy: "Copy these quote details:", andWord: "and"
};

let currentLanguage = "id";
let currency = createCurrency();
const languageButtons = document.querySelectorAll("[data-language]");
const productGrid = document.querySelector("#productGrid");
const productSelect = document.querySelector("#estimateProduct");
const variantSelect = document.querySelector("#estimateVariant");
const destinationSelect = document.querySelector("#destination");
const quantityInput = document.querySelector("#quantity");
const stockMessage = document.querySelector("#stockMessage");
const copyButton = document.querySelector("#copyQuote");
let currentQuote = "";

function createCurrency() {
  return new Intl.NumberFormat(currentLanguage === "en" ? "en-US" : "id-ID", { style: "currency", currency: "IDR", maximumFractionDigits: 0 });
}

function applyLanguage() {
  document.documentElement.lang = currentLanguage;
  document.title = currentLanguage === "en" ? "Ruang Rotan | Cirebon Rattan" : "Ruang Rotan | Anyaman Cirebon";
  document.querySelector("#pageDescription").content = currentLanguage === "en"
    ? "Discover Cirebon rattan furniture, check availability, choose a finish, and estimate delivery costs."
    : "Temukan furnitur rotan Cirebon, cek ketersediaan, pilih varian, dan hitung estimasi biaya pengiriman.";

  document.querySelectorAll("[data-i18n]").forEach((element) => {
    if (!element.dataset.indonesianText) element.dataset.indonesianText = element.textContent;
    const key = element.dataset.i18n;
    element.textContent = currentLanguage === "en" ? englishText[key] : element.dataset.indonesianText;
  });

  document.querySelectorAll("[data-i18n-aria-label]").forEach((element) => {
    if (!element.dataset.indonesianAria) element.dataset.indonesianAria = element.getAttribute("aria-label");
    const key = element.dataset.i18nAriaLabel;
    element.setAttribute("aria-label", currentLanguage === "en" ? englishText[key] : element.dataset.indonesianAria);
  });

  document.querySelectorAll("[data-i18n-alt]").forEach((element) => {
    if (!element.dataset.indonesianAlt) element.dataset.indonesianAlt = element.alt;
    const key = element.dataset.i18nAlt;
    element.alt = currentLanguage === "en" ? englishText[key] : element.dataset.indonesianAlt;
  });

  languageButtons.forEach((button) => {
    button.setAttribute("aria-pressed", String(button.dataset.language === currentLanguage));
  });

  currency = createCurrency();
  renderProducts();
  renderSelectOptions();
  renderFaqs();
  updateVariantOptions();
}

function localized(item, key) {
  return currentLanguage === "en" ? item[`${key}En`] : item[key];
}

function renderProducts() {
  productGrid.innerHTML = products.map((product) => {
    const stockText = product.stock > 0
      ? currentLanguage === "en" ? `${product.stock} ${englishText.readySuffix}` : `${product.stock} unit ready`
      : currentLanguage === "en" ? "Out of stock" : "Stok habis";
    const stockClass = product.stock > 0 ? "" : " is-empty";
    const variantNames = product.variants.map((variant) => variant.name).join(" · ");
    return `<div class="col-md-6 col-lg-4"><article class="product-card"><div class="product-photo"><img src="${product.image}" alt="${localized(product, "imageAlt")}" loading="lazy"><span class="product-stock${stockClass}">${stockText}</span></div><div class="product-detail"><p class="product-kicker">${localized(product, "category")}</p><h3>${localized(product, "name")}</h3><p class="product-description">${localized(product, "description")}</p><div class="product-meta"><div><span class="product-price-label">${currentLanguage === "en" ? "Starting at" : "Mulai dari"}</span><span class="product-price">${currency.format(product.price)}</span></div><div class="product-variants"><strong>${currentLanguage === "en" ? "Available finishes" : "Warna rotan"}</strong>${variantNames}</div></div></div></article></div>`;
  }).join("");
}

function renderSelectOptions() {
  const selectedProduct = productSelect.value;
  const selectedZone = destinationSelect.value;
  productSelect.innerHTML = products.map((product) => `<option value="${product.id}">${localized(product, "name")}</option>`).join("");
  destinationSelect.innerHTML = shippingZones.map((zone) => `<option value="${zone.id}">${localized(zone, "name")}</option>`).join("");
  if (products.some((product) => product.id === selectedProduct)) productSelect.value = selectedProduct;
  if (shippingZones.some((zone) => zone.id === selectedZone)) destinationSelect.value = selectedZone;
}

function getSelectedProduct() {
  return products.find((product) => product.id === productSelect.value) ?? products[0];
}

function updateVariantOptions() {
  const product = getSelectedProduct();
  const selectedVariant = variantSelect.value;
  variantSelect.innerHTML = product.variants.map((variant) => {
    const label = variant.priceDelta === 0 ? variant.name : `${variant.name} (+${currency.format(variant.priceDelta)})`;
    return `<option value="${variant.name}">${label}</option>`;
  }).join("");
  if (product.variants.some((variant) => variant.name === selectedVariant)) variantSelect.value = selectedVariant;
  quantityInput.max = String(product.stock);
  quantityInput.value = String(Math.min(Number(quantityInput.value) || 1, product.stock || 1));
  updateEstimate();
}

function updateEstimate() {
  const product = getSelectedProduct();
  const variant = product.variants.find((item) => item.name === variantSelect.value) ?? product.variants[0];
  const zone = shippingZones.find((item) => item.id === destinationSelect.value) ?? shippingZones[0];
  const quantity = Math.min(Math.max(Number(quantityInput.value) || 1, 1), product.stock);
  const available = product.stock > 0;
  const subtotal = (product.price + variant.priceDelta) * quantity;
  const shipping = available ? Math.max(zone.minimum, Math.ceil(product.weight * quantity * zone.ratePerKg)) : 0;
  const total = subtotal + shipping;

  quantityInput.max = String(product.stock);
  quantityInput.value = String(quantity);
  quantityInput.disabled = !available;
  variantSelect.disabled = !available;
  copyButton.disabled = !available;
  stockMessage.textContent = available
    ? currentLanguage === "en"
      ? `${englishText.readyPrefix}: ${product.stock} ${englishText.readySuffix}. ${englishText.weightLabel}: ${product.weight} ${englishText.perUnit}.`
      : `Ready ${product.stock} unit. Berat produk sekitar ${product.weight} kg per unit.`
    : currentLanguage === "en" ? englishText.outOfStock : "Produk sedang tidak tersedia.";
  stockMessage.classList.toggle("is-empty", !available);
  document.querySelector("#productSubtotal").textContent = currency.format(subtotal);
  document.querySelector("#shippingCost").textContent = currency.format(shipping);
  document.querySelector("#grandTotal").textContent = currency.format(total);
  document.querySelector("#deliveryEstimate").textContent = currentLanguage === "en"
    ? `${englishText.deliveryPrefix}: ${zone.estimateEn}; ${englishText.prepExcluded}`
    : `Perkiraan tiba ${zone.estimate}, belum termasuk persiapan produk.`;
  currentQuote = currentLanguage === "en"
    ? [`${englishText.quoteTitle}: ${localized(product, "name")} (${variant.name})`, `${englishText.quantityLabel}: ${quantity}`, `${englishText.productLabel}: ${currency.format(subtotal)}`, `Estimated shipping (${localized(zone, "name")}): ${currency.format(shipping)}`, `${englishText.totalQuoteLabel}: ${currency.format(total)}`, `${englishText.etaLabel}: ${zone.estimateEn}`, englishText.finalShippingNote].join("\n")
    : [`Penawaran Ruang Rotan: ${product.name} (${variant.name})`, `Jumlah: ${quantity} unit`, `Harga produk: ${currency.format(subtotal)}`, `Estimasi ongkir zona ${zone.name}: ${currency.format(shipping)}`, `Estimasi total: ${currency.format(total)}`, `Perkiraan tiba: ${zone.estimate}`, "Catatan: ongkir final dikonfirmasi berdasarkan alamat lengkap."].join("\n");
}

function renderFaqs() {
  document.querySelector("#faqAccordion").innerHTML = faqs.map((faq, index) => {
    const question = currentLanguage === "en" ? faq.questionEn : faq.question;
    const answer = currentLanguage === "en" ? faq.answerEn : faq.answer;
    return `<div class="accordion-item"><h3 class="accordion-header" id="faqHeading${index}"><button class="accordion-button${index === 0 ? "" : " collapsed"}" type="button" data-bs-toggle="collapse" data-bs-target="#faqAnswer${index}" aria-expanded="${index === 0}" aria-controls="faqAnswer${index}">${question}</button></h3><div id="faqAnswer${index}" class="accordion-collapse collapse${index === 0 ? " show" : ""}" aria-labelledby="faqHeading${index}" data-bs-parent="#faqAccordion"><div class="accordion-body">${answer}</div></div></div>`;
  }).join("");
}

async function copyQuote() {
  const feedback = document.querySelector("#copyFeedback");
  try {
    await navigator.clipboard.writeText(currentQuote);
    feedback.textContent = currentLanguage === "en" ? englishText.copied : "Rincian penawaran berhasil disalin.";
  } catch {
    window.prompt(currentLanguage === "en" ? englishText.promptCopy : "Salin rincian penawaran berikut:", currentQuote);
    feedback.textContent = currentLanguage === "en" ? englishText.copyReady : "Rincian penawaran siap disalin.";
  }
}

renderProducts();
renderSelectOptions();
renderFaqs();
document.querySelector("#currentYear").textContent = String(new Date().getFullYear());
productSelect.addEventListener("change", updateVariantOptions);
variantSelect.addEventListener("change", updateEstimate);
destinationSelect.addEventListener("change", updateEstimate);
quantityInput.addEventListener("input", updateEstimate);
copyButton.addEventListener("click", copyQuote);
languageButtons.forEach((button) => {
  button.addEventListener("click", () => {
    if (button.dataset.language === currentLanguage) return;
    currentLanguage = button.dataset.language;
    applyLanguage();
  });
});
updateVariantOptions();