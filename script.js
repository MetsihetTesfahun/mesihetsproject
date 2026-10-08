// 1. Navbar Active Link Highlighter
// ተጠቃሚው ያለበትን ገፅ በ Menu ላይ በከለር ለይቶ ያሳያል
document.addEventListener("DOMContentLoaded", () => {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const navLinks = document.querySelectorAll("nav ul li a");

  navLinks.forEach(link => {
    const linkPage = link.getAttribute("href");
    if (linkPage === currentPage) {
      link.style.color = "#38bdf8"; // ያለህበትን ገፅ ሰማያዊ ያደርገዋል
      link.style.fontWeight = "bold";
    }
  });
});

// 2. Simple Contact Form Handling (ለ contact.html ገፅህ)
const contactForm = document.querySelector("#contact-form");

if (contactForm) {
  contactForm.addEventListener("submit", (e) => {
    e.preventDefault(); // ገፁ Refresh እንዳይሆን ይከለክላል
    
    alert("እናመሰግናለን! መልእክትህ በትክክል ደርሷል።");
    contactForm.reset(); // Form-ኡን ባዶ ያደርገዋል
  });
}