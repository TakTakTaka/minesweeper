import { GAMESTATE } from '../actionTypes';

const initialState = {
  status: true
}

export default function (state = initialState, action) {
  switch (action.type) {
    case GAMESTATE: {
      return {
        status: !state.status
        }
      }
    default:
      return state
    }
  }
