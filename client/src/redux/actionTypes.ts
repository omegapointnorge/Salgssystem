export const INCREMENT = "INCREMENT";
interface IncrementAction {
  type: typeof INCREMENT;
}
export const DECREMENT = "DECREMENT";
interface DecrementAction {
  type: typeof DECREMENT;
}

export type CountTypes = IncrementAction | DecrementAction;
