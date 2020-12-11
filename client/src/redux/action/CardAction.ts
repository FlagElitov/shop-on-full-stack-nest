export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

export const addCardAC = (id: number) => ({ type: ADD_CARD, payload: id });
export const removeCardAC = (id: number) => ({
  type: REMOVE_CARD,
  payload: id,
});
