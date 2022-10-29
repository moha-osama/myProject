text = document.getElementById("header");
const changeColor = () => {
  text.style.color = "red";
};

text.addEventListener("click", changeColor);
