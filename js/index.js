const projects = {
  apps: ["weather-app/index.html", "rsvp-app/index.html"],
  games: ["games/breakout.html", "games/battleship.html"],
};

const projectOptions = document
  .getElementById("projects")
  .addEventListener("click", () => {
      for (i = 0; i < projects.length; i++) {
          console.log(projects.length)
        const projectOptions = document.createElement('option')
            projectOptions.innerHTML = projects[i];
      }
    ;
  });
