const css = document.querySelector(".css1");
const button = document.querySelector(".darkmode");

console.log(button);

button.addEventListener("click", () => {
  if (css.classList.contains("css1")) {
    css.classList.replace("css1", "css2");
    css.href = "style2.css";
    button.textContent = "Light Mode ";
  } else {
    css.classList.replace("css2", "css1");
    css.href = "style.css";
    button.textContent = "Dark Mode";
  }
});
