//create model game board and add to state on load up
import {getNeighbors} from './getNeighbors'

//creating game board
var shuffle = function (array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * i);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
}

export function createGameBoard (size = 10, mineCount = 10) {
// function createGameBoard (size = 10, mineCount = 2) {
  var mines = []
  // var minesNeighbors = {}

  var board = {};
  for (var i = 0; i < Math.pow(size,2); i++) {
    var grid = {
      toggled: false,
      mine: false,
      mineNeighbor: 0
    }
    board[i] = grid;
    mines.push(i);
  }
  //shuffe mines and select the first mineCount qty 
  mines = shuffle(mines);
  mines = mines.slice(0,mineCount)

  //Find the neighbors to the mine using helper function
  mines.forEach((loc) => {
    board[loc].mine = !board[loc].mine
    var neighbors = getNeighbors(loc, size);
    //add to mine neighbor count if grid is neighbor to mine
    neighbors.forEach((mineNeigh => {
      if (board[mineNeigh]) {
        board[mineNeigh].mineNeighbor++;
      }
      // if (minesNeighbors[mineNeigh]) {
      //   minesNeighbors[mineNeigh]++;
      // } else {
      //   minesNeighbors[mineNeigh] = 1;
      // }
    }))
  })
  return board
}

//generate 10 random numbers with bombs on them


//

//Run tests
// gameBoard();
// store.dispatch(toggle());