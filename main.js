let ar = false;

function toggleLang(){
  ar = !ar;
  document.body.dir = ar ? "rtl" : "ltr";

  document.querySelectorAll("[data-en]").forEach(el=>{
    el.innerText = ar ? el.dataset.ar : el.dataset.en;
  });
}
