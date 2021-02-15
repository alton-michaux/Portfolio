const uiController = (function () {
  const domElements = {
    dropdown: "#projects",
  };

  //   console.log("ui online");
  return {
    domOutputs() {
      return {
        dropdown: document.querySelector(domElements.dropdown),
      };
    },
  };
})();

const pageFunctions = (function (uiCtrl) {
  //create a variable to select dom elements from ui controller
  const domSelector = uiCtrl.domOutputs();
  //select dropdown element
  const dropdownMenu = domSelector.dropdown;
  //   console.log(dropdownMenu);
  dropdownMenu.addEventListener("change", () => {
    const dropdownValue = dropdownMenu.options[dropdownMenu.selectedIndex].value;
    // console.log(dropdownValue)
    if (dropdownValue == "Apps") {
        console.log("You picked Apps!");
    } else {
        console.log("You picked Games!");
    }
  });
})(uiController);
