let colorID = "red";

let buttonLightChanger = document.getElementById("btnTrafficLight");

intervalID = setInterval(colorButton, 10000);

function colorButton() {
  switch(colorID) {
    case "red":
      colorID = "yellow";
      break;
    case "yellow":
      colorID = "green";
      break;
    case "green":
      colorID = "red";
      break;
  }
    buttonLightChanger.style.background = colorID;
    buttonLightChanger.style.border = colorID;
  clearInterval(intervalID);
  intervalID = setInterval(colorButton, 10000);
}

buttonLightChanger.onclick = colorButton;
