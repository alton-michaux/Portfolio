//create a function to handle dom element selection
const uiController = (function () {
  const domElements = {
    dropdown: "#projects",
    appCanvas: "#app-canvas",
    gameCanvas: "#game-canvas",
  };

  //   console.log("ui online");
  //return a method that selects elements
  return {
    domOutputs() {
      return {
        dropdown: document.querySelector(domElements.dropdown),
        appCanvas: document.querySelector(domElements.appCanvas),
        gameCanvas: document.querySelector(domElements.gameCanvas),
      };
    },
  };
})();

const pageFunctions = (function (uiCtrl) {
  //create a variable to select dom elements from ui controller
  const domSelector = uiCtrl.domOutputs();
  //select dropdown element
  const dropdownMenu = domSelector.dropdown;
  const appCanvas = domSelector.appCanvas;
  const gameCanvas = domSelector.gameCanvas;
    console.log(gameCanvas);
  dropdownMenu.addEventListener("change", () => {
    const dropdownValue = dropdownMenu.options[dropdownMenu.selectedIndex].value;
    // console.log(dropdownValue)
    if (dropdownValue == "Apps") {
        console.log("You picked Apps!");
        appCanvas.style.display = "block";
        gameCanvas.style.display = "none";
    } else {
        console.log("You picked Games!");
        gameCanvas.style.display = "block";
        appCanvas.style.display = "none";
    }
  });
})(uiController);
