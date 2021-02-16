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
    rsvp: "../images/Rsvp.png",
    breakout: "../images/Breakout.png",
    battleship: "../images/battleship.png",
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

    placeOnAppGrid(image, filePath) {
      const html = `<a class="project-link" href="${filePath}"><canvas class="project-blocks" id="apps"><img class="thumbnail" src=${image} alt=${filePath}/></canvas></a>`;
      document
        .querySelector(domElements.appDiv)
        .insertAdjacentHTML("beforeend", html);
    },

    placeOnGameGrid(image, filePath) {
      const html = `<a class="project-link" href="${filePath}"><canvas class="project-blocks" id="games"><img class="thumbnail" src=${image} alt=${filePath}/></canvas></a>`;
      document
        .querySelector(domElements.gameDiv)
        .insertAdjacentHTML("beforeend", html);
    },

    resetCanvas() {
      domElements.projectDisplay.innerHTML = "";
      console.log('reset!');
    },
    }
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
      appDiv.style.border = "1px solid rgb(13, 48, 122)";
      appDiv.style.display = "grid";
      gameDiv.style.display = "none";
      for (const app in appSelector) {
        for (const image in appImageSelector) {
          uiCtrl.placeOnAppGrid(image, app);
          let appContext = document.querySelector("#apps").getContext("2d");
          // console.log(appContext)
          image.onload = () => {
            appContext.drawImage(image, 20, 10, 1300, 1300, 0, 0, 300, 336)
          }
        }
      }
    } else {
      uiCtrl.resetCanvas();
      console.log("You picked Games!");
      gameDiv.style.border = "1px solid rgb(46, 65, 105)";
      gameDiv.style.display = "grid";
      appDiv.style.display = "none";
      for (const game in gameSelector) {
        for (const image in gameImageSelector) {
          uiCtrl.placeOnGameGrid(image, game);
          let gameContext = document.querySelector("#games").getContext("2d");
          // console.log(appContext)
          image.onload = () => {
            gameContext.drawImage(image, 20, 10, 1300, 1300, 0, 0, 300, 336)
          }
        }
      }
    }
  });
})(projectInfo, uiController);
