let button = document.getElementById("generate");
let displayColor = document.querySelector("#color");
let copyColor = document.querySelector("#copy");
let color = `rgb(0, 0, 0)`;

button.addEventListener("click", () => {
  const r = Math.floor(Math.random() * 255);
  const g = Math.floor(Math.random() * 255);
  const b = Math.floor(Math.random() * 255);
  color = `rgb(${r}, ${g}, ${b})`;
  document.body.style.background = color;
  displayColor.textContent = `Color Generated: ${color.toUpperCase()}`;
});

copyColor.addEventListener("click", () => {
  navigator.clipboard.writeText(color);
  const temp = displayColor.textContent;
  displayColor.textContent = `Copied ${color}`;
  setTimeout(function () {
    displayColor.textContent = temp;
  }, 2000);
});
