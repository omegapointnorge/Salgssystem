import { SET_MENUS_OPEN } from './actionTypes';
export const setMenusOpen = (menusOpen: boolean) => ({
  type: SET_MENUS_OPEN,
  payload: menusOpen
});