const toast = document.getElementById("toast");
function showToast(msg){
  toast.textContent = msg;
  toast.classList.add("on");
  clearTimeout(showToast.t);
  showToast.t = setTimeout(() => toast.classList.remove("on"), 1300);
}

const email = "hello@oliviaharris.fit";
document.getElementById("copyEmail").addEventListener("click", async () => {
  try{
    await navigator.clipboard.writeText(email);
    showToast("Email copied ✓");
  }catch(e){
    window.location.href = `mailto:${email}?subject=Collab%20idea`;
  }
});

document.querySelectorAll("[data-scroll]").forEach(el=>{
  el.addEventListener("click", ()=>{
    document.getElementById(el.getAttribute("data-scroll")).scrollIntoView({behavior:"smooth"});
  });
});
