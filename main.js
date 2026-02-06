function toggleLang() {
  document.body.classList.toggle("rtl");
}let currentLang = "en";

const content = {
  en: {
    homeTitle: "Architecture Engineer",
    homeTagline: "Modern Architecture & Smart Design",
    contactTitle: "Contact",
    projectsTitle: "Projects"
  },
  ar: {
    homeTitle: "مهندس معماري",
    homeTagline: "تصميم معماري حديث وذكي",
    contactTitle: "اتصل بنا",
    projectsTitle: "المشاريع"
  }
};

function toggleLang() {
  currentLang = currentLang === "en" ? "ar" : "en";

  document.body.dir = currentLang === "ar" ? "rtl" : "ltr";

  const title = document.getElementById("homeTitle");
  const tagline = document.getElementById("homeTagline");

  if (title) title.innerText = content[currentLang].homeTitle;
  if (tagline) tagline.innerText = content[currentLang].homeTagline;
}