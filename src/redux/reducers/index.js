import {combineReducers} from 'redux';
import grid from './grid';
import gameState from './gameState';

//import reducers that you created from the same folder 
export default combineReducers({grid, gameState})