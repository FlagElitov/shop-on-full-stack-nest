import { dataProduct } from "./ItemsActionTypes";

export const ADD_CARD = "ADD_CARD";
export const REMOVE_CARD = "REMOVE_CARD";

export const addCardAC = (obj: dataProduct) => ({
  type: ADD_CARD,
  payload: obj,
});
export const removeCardAC = (id: number) => ({
  type: REMOVE_CARD,
  payload: id,
});
