import { dummyBoard } from '../dummy/dummy';

export const manageBoardsReducerState = {board: []};

export function manageBoardsReducer(state, action) {
  switch (action.type) {
    case 'GET_BOARD':
      return {
          ...state,
          board: dummyBoard,
        };
    case 'UPDATE_BOARD_SETTINGS':
      return {
          ...state,
          board: action.payload,
        };
    default:
      throw new Error();
  }
}