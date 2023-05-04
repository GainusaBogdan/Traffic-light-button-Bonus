colorID = 0;

var buttonLightChanger = document.getElementById("btnTrafficLight");

intervalID = setInterval(colorButton, 10000);

function colorButton() {
  if (colorID == 0) {
    buttonLightChanger.style.background = "yellow";
    buttonLightChanger.style.border = "yellow";
    ++colorID;
  }
  else if (colorID == 1) {
    buttonLightChanger.style.background = "green";
    buttonLightChanger.style.border = "green";
    ++colorID;
  }
  else if (colorID == 2) {
    buttonLightChanger.style.background = "red";
    buttonLightChanger.style.border = "red";
    colorID = 0;
  }
  clearInterval(intervalID);
  intervalID = setInterval(colorButton, 10000);
}

buttonLightChanger.onclick = colorButton;