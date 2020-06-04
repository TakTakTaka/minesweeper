import { toggle, mapGrids, gameState} from '../actions'

// const dispatch = useDispatch();


//write function that returns an action to use... Hook will be taken care of in the component
// <StyledTd className="grid" key={`${gridId}`} onClick={() => dispatch(toggle(gridInfo[gridId]))}>

// var idEx = 15; 
// var toggledGridEx = { toggled: false, mine: false, mineNeighbor: 3 }

export var toggleClick = (id, toggledGrid, dispatch) => {
  if (toggledGrid.mine) {
    console.log('game over')
    dispatch(toggle(id));
    dispatch(gameState());
    // return gameState();
    // return toggle(id);
  } else {
    dispatch(toggle(id));
    // return toggle(id);
  }
}

//onClick handler
//See if toggled piece will explode mine
  //if mine exists, game is over... dispatch game over
  //if it doesn't, dispatch toggling the piece


  //CAN ONLY USE HOOKS INSIDE function components!!!!