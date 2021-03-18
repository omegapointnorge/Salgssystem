import { CountTypes } from './actionTypes';
export const getCountState = (store: { count: CountTypes; }) => store.count; // Mulig dette blir feil?: count: CountTypes

export const getMenusOpenState = (store: any) => {
  console.log("store.menusOpenReducer:", store.menusOpenReducer.payload);
  if (store.menusOpenReducer.payload) {
  return store.menusOpenReducer.payload;
  }
  return null;
}

// export const lol2 = "lol2";