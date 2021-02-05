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

/*draw project images on canvas*/

//declare image variables
const image = new Image() 
image.src="images/dinner-and-drinks.jpg"
image.alt="RSVP App"

const image2 = new Image() 
image2.src="images/breakout.jpg"
image2.alt="Classic 'Breakout' Game"

const image3 = new Image() 
image3.src="images/code-small-black-background.jpg"
image3.alt="Spotify Clone App"

const image4 = new Image() 
image4.src="images/battleship.jpg"
image4.alt="Classic Vs 'Battleship' Game"

//create image array to store information for later use in loop
const img = [
  image,
  image2,
  image3,
  image4
]

//loop to place images in all canvases
for (let i = 0; i < img.length; i++) {
  let canvas = document.getElementsByClassName('canvas')[i];
  let myContext = canvas.getContext('2d');
  img[i].onload = () => {
    myContext.drawImage(img[i], 20, 10, 1300, 1300, 0, 0, 300, 336);
  }
}

