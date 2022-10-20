const mainBtn = document.querySelector("button");
const body = document.body;
const currentColor = document.querySelector(".current_color");
console.log(currentColor);

function randomColors() {
  const red = Math.floor(Math.random() * 256);
  const green = Math.floor(Math.random() * 256);
  const blue = Math.floor(Math.random() * 256);

  const colors = `RGB(${red}, ${green},${blue})`;
  return colors;
}
mainBtn.addEventListener("click", () => {
  const colors = randomColors();
  //   console.log(colors);
  body.style.backgroundColor = colors;
  currentColor.textContent = colors;
});
