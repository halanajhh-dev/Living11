// زر البداية
function startJourney() {
  alert("أهلاً بك! لنبدأ رحلتك مع Living Homes 🐶");
}


// تمرير سلس للقوائم
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute("href")).scrollIntoView({
      behavior: "smooth"
    });
  });
});