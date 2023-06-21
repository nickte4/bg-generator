import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/bg.css";
import "../styles/utils.css";

function setInitialColors() {
  let colors = fetchColors();
  document.body.style.background =
    "radial-gradient(" + colors[0] + ", " + colors[1] + ")";
}

function fetchColors() {
  if (!window.localStorage.getItem("color1")) {
    window.localStorage.setItem("color1", "#ffffff");
  }
  if (!window.localStorage.getItem("color2")) {
    window.localStorage.setItem("color2", "#000000");
  }
  let color1 = window.localStorage.getItem("color1");
  let color2 = window.localStorage.getItem("color2");
  return [color1, color2];
}

function setColorOne(color) {
  window.localStorage.setItem("color1", color);
}

function setColorTwo(color) {
  window.localStorage.setItem("color2", color);
}

function listenForButtonOne() {
  let colorPalette = document.getElementById("bg__btn1");
  colorPalette.addEventListener("click", () => {
    console.log("clicked");
    let colorPaletteOne = document.getElementById("bg__input1");
    if (
      colorPaletteOne.style.display === "none" ||
      colorPaletteOne.style.display === ""
    ) {
      colorPaletteOne.style.setProperty("display", "block");
    } else {
      colorPaletteOne.style.setProperty("display", "none");
    }
  });
}

function listenForButtonTwo() {
  let colorPalette = document.getElementById("bg__btn2");
  colorPalette.addEventListener("click", () => {
    console.log("clicked");
    let colorPaletteTwo = document.getElementById("bg__input2");
    if (
      colorPaletteTwo.style.display === "none" ||
      colorPaletteTwo.style.display === ""
    ) {
      colorPaletteTwo.style.setProperty("display", "block");
    } else {
      colorPaletteTwo.style.setProperty("display", "none");
    }
  });
}

function listenForColorPickerOne() {
  let colorPicker = document.getElementById("bg__input1");
  colorPicker.addEventListener("input", () => {
    let chosenColor = colorPicker.value;
    setColorOne(chosenColor);
    let colors = fetchColors();
    document.body.style.background =
      "radial-gradient(" + chosenColor + ", " + colors[1] + ")";
    console.log(chosenColor);
  });
}

function listenForColorPickerTwo() {
  let colorPicker = document.getElementById("bg__input2");
  colorPicker.addEventListener("input", () => {
    let chosenColor = colorPicker.value;
    setColorTwo(chosenColor);
    let colors = fetchColors();
    document.body.style.background =
      "radial-gradient(" + colors[0] + ", " + chosenColor + ")";
    console.log(chosenColor);
  });
}

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

function listenForRandomize() {
  let rnd_btn = document.getElementById("bg__random-btn");
  rnd_btn.addEventListener("click", () => {
    let color1 =
      "rgb(" +
      getRandomInt(255) +
      "," +
      getRandomInt(255) +
      "," +
      getRandomInt(255) +
      ")";
    let color2 =
      "rgb(" +
      getRandomInt(255) +
      "," +
      getRandomInt(255) +
      "," +
      getRandomInt(255) +
      ")";
    setColorOne(color1);
    setColorTwo(color2);
    document.body.style.background =
      "radial-gradient(" + color1 + ", " + color2 + ")";
  });
}

listenForButtonOne();
listenForButtonTwo();
listenForColorPickerOne();
listenForColorPickerTwo();
listenForRandomize();
setInitialColors();
