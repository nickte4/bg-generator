import "../styles/modern-normalize.css";
import "../styles/style.css";
import "../styles/components/bg.css";
import "../styles/utils.css";

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

listenForButtonOne();
listenForButtonTwo();
