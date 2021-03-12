import { CountState } from './../../common/types';
import { INCREMENT, DECREMENT, CountTypes } from './../actionTypes';

const initialState: CountState = {
  value: 0,
};

export default function countReducer2 (state = initialState, action: CountTypes) { // Må fjerne any herfra, lage typer
  
  switch (action.type) {
    case INCREMENT:
      return +state + 1;
    case DECREMENT:
      return +state - 1;
    default:
      return state;
  }
};

