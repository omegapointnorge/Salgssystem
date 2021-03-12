import { CountTypes } from './actionTypes';
export const getCountState = (store: { count: CountTypes; }) => store.count; // Mulig dette blir feil?: count: CountTypes

// export const lol2 = "lol2";