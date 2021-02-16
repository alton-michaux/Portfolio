//create a controller to store project information for canvas display
const projectInfo = (function () {
  const filePath = {
    spotify: "../Project-Spotify-Playlist-App-/index.html",
    weather: "../Project-Weather-App-/index.html",
    rsvp: "../Project-RSVP-App-/index.html",
    breakout: "../Project-Breakout-Game-/index.html",
    battleship: "../Project-Battleship-Game-/index.html",
  };

  const imagePath = {
    spotify: "../images/spotify.png",
    weather: "../images/weather.png",
    rsvp: "../images/Rsvp",
    breakout: "../images/Breakout.png",
    battleship: "../images/Battleship.png",
  };

  return {
    appSelectors() {
      return {
        spotify: filePath.spotify,
        weather: filePath.weather,
        rsvp: filePath.rsvp,
      };
    },
    gameSelectors() {
      return {
        breakout: filePath.breakout,
        battleship: filePath.battleship,
      };
    },
    appImageSelectors() {
      return {
        spotify: imagePath.spotify,
        weather: imagePath.weather,
        rsvp: imagePath.weather,
      };
    },
    gameImageSelectors() {
      return {
        breakout: imagePath.breakout,
        battleship: imagePath.battleship,
      };
    },
  };
})();

//create a controller to handle dom element selection
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

    placeOnAppGrid(image, projectPath) {
      const html = `<button class="project-blocks"><img src=${image} alt=${projectPath}/>${projectPath}</button>`;
      document
        .querySelector(domElements.appCanvas)
        .insertAdjacentHTML("beforeend", html);
    },

    placeOnGameGrid(image, projectPath) {
        const html = `<button class="project-blocks"><img src=${image} alt=${projectPath}/>${projectPath}</button>`;
        document
          .querySelector(domElements.gameCanvas)
          .insertAdjacentHTML("beforeend", html);
      },
  };
})();

const pageFunctions = (function (proInfo, uiCtrl) {
  //----Information selectors----//
  //create a variable to select app file paths
  const appSelector = proInfo.appSelectors();
  const appImageSelector = proInfo.appImageSelectors();
  //create a variable to select game file paths
  const gameSelector = proInfo.gameSelectors();
  const gameImageSelector = proInfo.gameImageSelectors();

  //---DOM selectors---//
  //create a variable to select dom elements from ui controller
  const domSelector = uiCtrl.domOutputs();
  //select dropdown element
  const dropdownMenu = domSelector.dropdown;
  const appCanvas = domSelector.appCanvas;
  const gameCanvas = domSelector.gameCanvas;
  console.log(appSelector, appImageSelector, gameSelector, gameImageSelector);

  //----Event Listener----//
  dropdownMenu.addEventListener("change", () => {
    const dropdownValue =
      dropdownMenu.options[dropdownMenu.selectedIndex].value;
    // console.log(dropdownValue)
    if (dropdownValue == "Apps") {
      console.log("You picked Apps!");
      appCanvas.style.border = "1px solid rgb(13, 48, 122)";
      appCanvas.style.display = "block";
      gameCanvas.style.display = "none";
      for (const app in appSelector) {
          for (const image in appImageSelector) {
              uiCtrl.placeOnAppGrid(image, app);
          }
      }
    } else {
      console.log("You picked Games!");
      gameCanvas.style.border = "1px solid rgb(46, 65, 105)";
      gameCanvas.style.display = "block";
      appCanvas.style.display = "none";
      for (const game in gameSelector) {
        for (const image in gameImageSelector) {
            uiCtrl.placeOnGameGrid(image, game);
        }
    }
    }
  });
})(projectInfo, uiController);
