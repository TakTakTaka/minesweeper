import React from 'react';
import {useSelector, useDispatch} from 'react-redux';
import { StyledTd } from "./StyledComponents.js";
import { toggleClick } from '../redux/controller'

export default function Board () {
  var boardSize = 10;
  //create board with size
  const dispatch = useDispatch();
  const gridInfo = useSelector((state) => state.grid.logic);

  var grids = (rowNo, boardSize) => {
    var gridRow = [];
    for (var k = 0; k < boardSize; k ++) {
      let gridId = `${rowNo * boardSize + k}`
      //visual logic for grid here
      //if grid is toggled
      //NEED CASE FOR if bomb
      if (gridInfo[gridId].toggled){
        //if mine show mine instead of toggled
        let gridVisual = `TOG \n${gridInfo[gridId].mineNeighbor}`;
        if (gridInfo[gridId].mine) {
          gridVisual = 'GAME OVER'
        }
					gridRow.push(
						<StyledTd className="grid" key={`${gridId}`}>
							{/* {`TOG \n${gridInfo[gridId].mineNeighbor}`} */}
							{gridVisual}
						</StyledTd>
					);  
      } else {
      //if grid isn't toggled
        gridRow.push(
          //onclick handler, use a controller to return action. Dispatch toggle or end game
          // <StyledTd className="grid" key={`${gridId}`} onClick={() => dispatch(toggleClick(gridId, gridInfo[gridId]))}>
          <StyledTd className="grid" key={`${gridId}`} onClick={() => toggleClick(gridId, gridInfo[gridId], dispatch)}>
            {`${gridId}`}
          </StyledTd>
        )
      }
    }
    return gridRow  
  }

  var rows = [];
  for (var i = 0; i < boardSize; i ++) {
    rows.push(
			<tr className="row" key={`row${i}`}>
				{grids(i, boardSize)}
			</tr>
		);
  }
  
  return (
    <div>
      <table>
        <tbody>
          {rows}
        </tbody>
      </table>
    </div>
  );
}