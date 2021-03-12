import { CountState } from './../../common/types';
import { INCREMENT, DECREMENT, CountTypes } from './../actionTypes';

const initialState: CountState = {
  value: 0,
};

export default function countReducer (state = initialState, action: CountTypes) { 
  switch (action.type) {
    case INCREMENT:
      return Object.assign({}, state, {
        value: state.value +1
      })
    case DECREMENT:
      return Object.assign({}, state, {
        value: state.value -1
      })
    default:
      return state;
  }
};

