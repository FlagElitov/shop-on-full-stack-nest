import { CardDispatchTypes } from "./../action/CardActionTypes";

import { dataProduct } from "../action/ItemsActionTypes";
import { ADD_CARD, REMOVE_CARD } from "../action/CardAction";
export interface initialStateCard {
  items: dataProduct[];
}

const initialState: initialStateCard = {
  items: [],
};

const CardReducers = (
  state: initialStateCard = initialState,
  action: CardDispatchTypes
) => {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        items: [state.items, action.payload],
      };

    case REMOVE_CARD:
      return {
        ...state,
        items: [state.items.filter((items) => items.id != action.payload)],
      };

    default:
      return state;
  }
};

export default CardReducers;
