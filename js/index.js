//create a controller to handle dom element selection
const uiController = (function () {
  const domElements = {
    dropdown: "#projects",
    projectDisplay: ".project-display",
    appDiv: "#app-div",
    gameDiv: "#game-div",
  };

  //   console.log("ui online");
  //return a method that selects elements
  return {
    domOutputs() {
      return {
        dropdown: document.querySelector(domElements.dropdown),
        projectDisplay: document.querySelector(domElements.projectDisplay),
        appDiv: document.querySelector(domElements.appDiv),
        gameDiv: document.querySelector(domElements.gameDiv),
      };
    },

    resetCanvas() {
      const projectDiv = domElements.projectDisplay;
      projectDiv.innerHTML = "";
    },
  };
})();

const pageFunctions = (function (uiCtrl) {
  //---DOM selectors---//

  //create a variable to select dom elements from ui controller
  const domSelector = uiCtrl.domOutputs();
  //select dropdown element
  const dropdownMenu = domSelector.dropdown;
  const appDiv = domSelector.appDiv;
  const gameDiv = domSelector.gameDiv;
  //console.log(appSelector, appImageSelector, gameSelector, gameImageSelector);
  //----Event Listener----//
  dropdownMenu.addEventListener("change", () => {
    const dropdownValue =
      dropdownMenu.options[dropdownMenu.selectedIndex].value;
    if (dropdownValue == "Apps") {
      uiCtrl.resetCanvas();
      console.log("You picked Apps!");
      appDiv.style.display = "grid";
      gameDiv.style.display = "none";
    } else {
      uiCtrl.resetCanvas();
      console.log("You picked Games!");
      gameDiv.style.display = "grid";
      appDiv.style.display = "none";
    }
  });
})(uiController);
