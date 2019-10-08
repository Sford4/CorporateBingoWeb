import { dummyBoard } from '../dummy/dummy';

export const playReducerState = {board: dummyBoard};

export function playReducer(state, action) {
  switch (action.type) {
    case 'UPDATE_TASK':
      const board = playReducerState.board;
      return {
        board: {
          ...board, 
          squares: board.squares.map((square, index) => {
              if(square._id === action.payload._id){
                return action.payload;
              }
              return square;
            }
          )}
        };
    default:
      throw new Error();
  }
}