import { SET_MENUS_OPEN } from "../actionTypes";

interface MenusOpenState {
  payload: boolean;
}

const initialState: MenusOpenState = {
  payload: false
};

export type MenusOpenAction = {
  type: typeof SET_MENUS_OPEN;
  payload: boolean;
};

export default function menusOpenReducer(state = initialState, action: MenusOpenAction) {
  switch (action.type) {
    case SET_MENUS_OPEN:
      // console.log("Initial state:");
      // console.log(state);
      return {
        ...state,
        payload: action.payload
      }
    default:
      return state;
  }
};

