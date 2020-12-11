import { ADD_CARD, REMOVE_CARD } from "./CardAction";

export interface addCard {
  type: typeof ADD_CARD;
  payload: number;
}
export interface removeCard {
  type: typeof REMOVE_CARD;
  payload: number;
}

export type CardDispatchTypes = addCard | removeCard;
