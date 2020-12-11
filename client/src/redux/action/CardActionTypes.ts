import { ADD_CARD, REMOVE_CARD } from "./CardAction";
import { dataProduct } from "./ItemsActionTypes";

export interface addCard {
  type: typeof ADD_CARD;
  payload: dataProduct;
}
export interface removeCard {
  type: typeof REMOVE_CARD;
  payload: number;
}

export type CardDispatchTypes = addCard | removeCard;
