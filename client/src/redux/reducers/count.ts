import { CountState } from './../../common/types';
import { INCREMENT, DECREMENT, CountTypes } from './../actionTypes';

const initialState: CountState = {
  value: 0,
};

export default function countReducer (state = initialState, action: CountTypes) { 
  console.log("Kjører countReducer med action: ", action);
  console.log(state);
  switch (action.type) {
    case INCREMENT:
      return 2;
    case DECREMENT:
      return +state - 1;
    default:
      return state;
  }
};

