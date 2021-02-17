const spotifyImg = new Image()
spotifyImg.src = "images/spotify.png"
spotifyImg.alt = "spotify playlist app"

const weatherImg = new Image()
weatherImg.src = "images/weather.jpg"
weatherImg.alt = "weather app"

const rsvpImg = new Image()
rsvpImg.src = "images/Rsvp.png"
rsvpImg.alt = "rsvp app"

const breakoutImg = new Image()
breakoutImg.src = "images/Breakout.png"
breakoutImg.alt = "breakout game"

const battleshipImg = new Image()
battleshipImg.src = "images/battleship.png"
battleshipImg.alt = "battleship game"

const apps = [spotifyImg, weatherImg, rsvpImg];
const games = [breakoutImg, battleshipImg];
// console.log(apps, games);

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

    placeAppImages(arr) {
      for (i = 0; i < arr.length; i++) {
        let appCanvas = document.getElementsByClassName("project-blocks")[i];
        let appContext = appCanvas.getContext("2d");
        console.log(appContext)
        arr[i].onload = () => {
          appContext.drawImage(arr[i], 20, 10, 300, 300, 0, 0, 200, 200);
      }
      };
      console.log("placing image...");
    },

    placeGameImages(arr) {
      for (i = 0; i < arr.length; i++) {
        let gameCanvas = document.getElementsByClassName('project-blocks')[i]
        let gameContext = gameCanvas.getContext("2d");
        console.log(gameContext)
        arr[i].onload = () => {
          gameContext.drawImage(arr[i], 20, 10, 300, 300, 0, 0, 200, 200);
      }
      };
      console.log("placing image...");
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
      uiCtrl.placeAppImages(apps);
    } else {
      uiCtrl.resetCanvas();
      console.log("You picked Games!");
      gameDiv.style.display = "grid";
      appDiv.style.display = "none";
      uiCtrl.placeGameImages(games);
    }
  });
})(uiController);
