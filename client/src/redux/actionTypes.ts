export const INCREMENT = "INCREMENT";
interface IncrementAction {
  type: typeof INCREMENT;
}
export const DECREMENT = "DECREMENT";
interface DecrementAction {
  type: typeof DECREMENT;
}

export type CountTypes = IncrementAction | DecrementAction;

// contextMenu.ts
export const SET_TRUE = "SET_TRUE";
interface SetTrueAction {
  type: typeof SET_TRUE;
}
export const SET_FALSE = "SET_FALSE";
interface SetFalseAction {
  type: typeof SET_FALSE;
}

export type ContextMenuTypes = SetTrueAction | SetFalseAction;

export interface ContextMenuState {
  type: ContextMenuTypes;
  payload: boolean;
}

export const SET_MENUS_OPEN = "SET_MENUS_OPEN";

export type MenusOpenTypes = typeof SET_MENUS_OPEN;

// export interface MenusOpenState {
//   type: MenusOpenTypes;
//   payload: boolean;
// }
