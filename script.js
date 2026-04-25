// ✅ CHANGE THIS NUMBER (WhatsApp)
const BUSINESS_PHONE = "91XXXXXXXXXX"; // e.g. 919876543210 (no +, no spaces)

function waUrl(message) {
  const encoded = encodeURIComponent(message);
  return `https://wa.me/${BUSINESS_PHONE}?text=${encoded}`;
}

function openWhatsApp(message) {
  window.open(waUrl(message), "_blank");
}

document.getElementById("year").textContent = new Date().getFullYear();
document.getElementById("bizPhoneText").textContent = `+${BUSINESS_PHONE}`;
document.getElementById("callBtn").addEventListener("click", () => {
  window.location.href = `tel:+${BUSINESS_PHONE}`;
});

// Floating WA
document.getElementById("waFloat").addEventListener("click", () => {
  openWhatsApp("Hi! Mujhe carry bags printing ke liye quotation chahiye.");
});

// Quick buttons
document.getElementById("whatsAppQuickBtn").addEventListener("click", () => {
  openWhatsApp("Hi! Mujhe aaj quotation chahiye. Bag type, size, quantity aur print colors share kar dijiye.");
});

document.getElementById("whatsAppSpecsBtn").addEventListener("click", () => {
  openWhatsApp("Hi! Mere paas ye details hain:\n1) Bag Type:\n2) Size:\n3) Quantity:\n4) Print Colors:\n5) Delivery Location:");
});

// Product buttons
document.querySelectorAll(".productOrderBtn").forEach(btn => {
  btn.addEventListener("click", () => {
    const product = btn.dataset.product;
    openWhatsApp(`Hi! Mujhe ${product} ke liye quotation chahiye.\nSize: \nQuantity: \nPrint Colors: \nDelivery Location: `);
  });
});

// Quick Quote Form -> WhatsApp
document.getElementById("quickQuoteForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const msg =
`Hi! Quick Quote:
Name: ${data.get("name")}
Phone: ${data.get("phone")}
Bag Type: ${data.get("bagType")}
Quantity: ${data.get("qty")}
Print Colors: ${data.get("colors")}
Please share rate & delivery time.`;
  openWhatsApp(msg);
});

// Contact Form -> WhatsApp
document.getElementById("contactForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const data = new FormData(e.target);
  const msg =
`Hi! I want a quotation:
Name: ${data.get("name")}
Phone: ${data.get("phone")}
Requirement: ${data.get("msg")}`;
  openWhatsApp(msg);
});
