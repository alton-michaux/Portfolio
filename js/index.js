//create a controller to handle dom element selection
const uiController = (function () {
  //element object
  const domElements = {
    dropdown: "#projects",
    projectDisplay: ".project-display",
    appDiv: "#app-div",
    gameDiv: "#game-div",
  };

  //return methods
  return {
    //return a method that selects elements
    domOutputs() {
      return {
        dropdown: document.querySelector(domElements.dropdown),
        projectDisplay: document.querySelector(domElements.projectDisplay),
        appDiv: document.querySelector(domElements.appDiv),
        gameDiv: document.querySelector(domElements.gameDiv),
      };
    },
    //return a method that resets the div whenever an option is selected
    resetDivs() {
      const projectDiv = domElements.projectDisplay;
      projectDiv.innerHTML = "";
    },
  };
})();

//controller function that handles the actual events of the homepage
const pageFunctions = (function (uiCtrl) {
  //---DOM selectors---//
  //create a variable to select dom elements from ui controller
  const domSelector = uiCtrl.domOutputs();
  //select dropdown element
  const dropdownMenu = domSelector.dropdown;
  //select app and game divs
  const appDiv = domSelector.appDiv;
  const gameDiv = domSelector.gameDiv;
  //----Dropdown Event Listener----//
  dropdownMenu.addEventListener("change", () => {
    //get selected option
    const dropdownValue =
      dropdownMenu.options[dropdownMenu.selectedIndex].value;
    //check the option and display/hide appropriate divs
    if (dropdownValue == "Apps") {
      uiCtrl.resetDivs();
      appDiv.style.display = "grid";
      gameDiv.style.display = "none";
    } else {
      uiCtrl.resetDivs();
      gameDiv.style.display = "grid";
      appDiv.style.display = "none";
    }
  });
})(uiController);
