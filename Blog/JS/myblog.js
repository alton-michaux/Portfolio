/*===============================================*/

/*animate side menu*/

//variables to select side menu items and button
const sideBar = document.getElementById("sidebar");
const toggleButton = document.getElementById("btn");

//variable to select project grid
const projectGrid = document.getElementsByClassName("project-grid");

/*Side menu button*/
sideBar.addEventListener("click", () => {
  sideBar.classList.toggle("active");
});

toggleButton.addEventListener("click", () => {
  toggleButton.classList.toggle("active");
});

/*===============================================*/