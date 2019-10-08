import { dummyBoard } from '../dummy/dummy';

export const userReducerState = {
    user: {
        id: 1,
        email: 'spenceraford@gmail.com',
        username: 'Spencer',
    }
};

export function userReducer(state, action) {
  switch (action.type) {
    case 'LOGIN':
      return {
        user: action.payload
      };
    default:
      throw new Error();
  }
}