export function getNeighbors (id, boardSize=3) {
  //Edge Cases 
  //NO TOP if number 0 > boardsize
  var noUp = (id < boardSize) ? true : false;
  //NO LEFT if number = 0 OR divisible by boardSize
  var noLeft = (id === 0 || id%boardSize === 0) ? true: false;
  //NO RIGHT if number + 1 is divisible by boardSize
  var noRight = ((id + 1)%boardSize === 0) ? true : false;
  //NO BOTTOM if number is between boardsize * boardsize - boardsize
  var noDown = ((id > boardSize * boardSize - boardSize)) ? true : false;

  var neighborLogic = {noUp, noLeft, noRight, noDown}
  
  var neighbors = [];
  // var upLeft = up - 1;
  if (!noUp && !noLeft) {neighbors.push(id - boardSize - 1)}
  // var up = id - boardSize;
  if (!noUp){ neighbors.push(id - boardSize)};
  // var upRight = up + 1;
  if (!noUp && !noRight){ neighbors.push(id - boardSize + 1)};
  // var left
  if (!noLeft){ neighbors.push(id -1)};
  // var right
  if (!noRight){ neighbors.push(id + 1)};
  // var downLeft = down -1;
  if (!noDown && !noLeft){ neighbors.push(id + boardSize - 1)};
  // var down = id + boardSize;
  if (!noDown){ neighbors.push(id + boardSize)};
  // var downRight = down + 1;
  if (!noDown && !noRight){ neighbors.push(id + boardSize + 1)};

  return neighbors;
}
