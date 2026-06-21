
function toggleTheme() {
  document.body.classList.toggle("light-mode");
  

  const theme = document.body.classList.contains("light-mode") ? "light" : "dark";
  localStorage.setItem("theme-preference", theme);
}


document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme-preference");
  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }
});