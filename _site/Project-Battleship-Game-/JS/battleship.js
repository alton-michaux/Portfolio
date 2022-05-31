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

const battleship = () => {
    //assign name variables
  let p1 = prompt("What is your name P1?");
  let p2 = prompt("What is your name P2?");
    //assign winner variable
  let winner;
    //declare grid variable for p1
  let p1Grid = createGrid(4);
    //call function for random ship placement on p1 grid
  placeCharacters(1, p1Grid, 4);
    //declare grid variable for p2
  let p2Grid = createGrid(4);
    //call function for random ship placement on p2 grid
  placeCharacters(1, p2Grid, 4);

  //initialize players object
  const players = [
    {
      name: p1,
      shipCount: 4,
      gameBoard: p1Grid, //set up 2D array to make 4x4 grid
    },
    {
      name: p2,
      shipCount: 4,
      gameBoard: p2Grid,
    },
  ];

  //setup functions

  //1. create function that takes a size parameter to create a grid
  function createGrid(size) {
    let grid = [];
    for (i = 0; i < size; i++) {
      grid[i] = [];
      for (j = 0; j < size; j++) {
        grid[i][j] = " 0 ";
      }
    }
    //return grid value
    console.log(grid)
    return grid;
  }

  //2. create a function to generate random coordinates for ships and place them as 1's on the grid
  function placeCharacters(c, grid, max) {
    for (i = 0; i < max; i++) {
      console.log(i)
      let randX = Math.floor(Math.random()* 4);
      let randY = Math.floor(Math.random()* 4);
      console.log(randX, randY)
      if (grid[randX][randY] !== " 1 ") {
        grid[randX][randY] = ` ${c} `;
      } 
    //   if (grid[randX][randY] === " 1 ") {
    //     i --;
    //     console.log(i);
    //   }
    }
  }

  //3. create a strike function to pass coordinates through opponent grid
  function strike(objV, player, opPlayer) {
    let x = parseInt(
      prompt(
        `${objV[player].name} choose an X coordinate to strike ${objV[opPlayer].name}'s battleship (0-3).`
      )
    );
    let y = parseInt(
      prompt(
        `${objV[player].name} choose a Y coordinate to strike ${objV[opPlayer].name}'s battleship (0-3).`
      )
    );
    if (objV[opPlayer].gameBoard[x][y] == " 1 ") {
      alert(
        `Direct hit ${objV[player].name}! You sank ${
          objV[opPlayer].name
        }'s battleship. They have ${
          objV[opPlayer].shipCount - 1
        } battleships left`
      );
      objV[opPlayer].gameBoard[x][y] = " ! ";
      objV[opPlayer].shipCount--;
      return true
    } else if (
      objV[opPlayer].gameBoard[x][y] == " - " ||
      objV[opPlayer].gameBoard[x][y] == " ! "
    ) {
      alert(`That spot has already been hit!`);
      return false
    } else {
      alert(`You missed! ${objV[opPlayer].name}'s ships are evading you!`);
      objV[opPlayer].gameBoard[x][y] = " - ";
      return false
    } 
}

  //4. create function to start gameplay
  function start(objV, player, opPlayer) {
    while (objV[player].shipCount > 0 && objV[opPlayer].shipCount > 0) {
      let attack = strike(objV, player, opPlayer);
      if (attack === false) {
        attack = strike(objV, opPlayer, player);
      } 
    }
    if (objV[player].shipCount === 0) {
      winner = objV[opPlayer].name;
    } else {
      if (objV[opPlayer].shipCount === 0) {
        winner = objV[player].name;
      }
      return winner;
  }
}

  //call function to start the game
  start(players, 0, 1);

  return `The winner is ${winner}!`
};

const gameResult = battleship();

htmlTarget = document.getElementById("result");
htmlTarget.innerHTML = gameResult;