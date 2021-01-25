const projects = {
  apps: ["weather.html", "rsvpApp.html"],
  games: ["breakout.html", "battleship.html"],
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
