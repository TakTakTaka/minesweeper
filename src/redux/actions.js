import { TOGGLE, logic, GAMESTATE} from './actionTypes';

export const toggle = (id) => ({
  type: TOGGLE,
  payload: id
});

export const mapGrids = (gridMap) => ({
  type: logic,
  payload: gridMap
})

export const gameState = () => ({
  type: GAMESTATE,
})
