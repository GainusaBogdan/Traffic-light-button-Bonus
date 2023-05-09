let colorID = 0;
const colors = ["red" , "yellow" , "green"];
let buttonLightChanger = document.getElementById("btnTrafficLight");
let intervalID = setInterval(colorButton, 10000);

buttonLightChanger.onclick = colorButton;

function colorButton() {
  colorID = colorID >= colors.length -1 ? 0 : ++colorID;
  buttonLightChanger.style.background = colors[colorID];
  buttonLightChanger.style.border = colors[colorID];
  clearInterval(intervalID);
  intervalID = setInterval(colorButton, 10000);
}
