import { TOGGLE, logic } from '../actionTypes';

const initialState = {
  logic: {},
}

export default function (state = initialState, action) {
  switch (action.type) {
    case TOGGLE: {
      //create new object for given grid id (toggle)
      var newGridInfo = {...state.logic[action.payload]}
      newGridInfo.toggled = !newGridInfo.toggled
      //spread operator to copy state but change newGridInfo
      return {
        ...state,
        logic : {
          ...state.logic,
          [action.payload]: newGridInfo
        }
      }
    }
    case logic: {
      return {
        ...state,
        logic: action.payload,
      }
    }
    default: 
      return state
  }
}
