import { SORT_PRICE, SORT_RATING } from "./../action/ItemsAction";
import {
  ITEMS_FAIL,
  ITEMS_LOADING,
  ITEMS_SUCCESS,
} from "../action/ItemsAction";
import { ItemsDispatchTypes, dataProduct } from "../action/ItemsActionTypes";
export interface initialStateT {
  loading: boolean;
  faile: boolean;
  items?: dataProduct[];
}

const initialState: initialStateT = {
  loading: false,
  faile: false,
};

const ItemsReducer = (
  state: initialStateT = initialState,
  action: ItemsDispatchTypes
) => {
  switch (action.type) {
    case ITEMS_LOADING:
      return {
        ...state,
        faile: false,
        loading: true,
      };

    case ITEMS_FAIL:
      return {
        ...state,
        loading: false,
        faile: true,
      };

    case ITEMS_SUCCESS:
      return {
        ...state,
        loading: false,
        items: action.payload,
      };
    case SORT_PRICE:
      return {
        ...state,
        items: state.items!.sort((a, b) => b.price - a.price),
      };
    case SORT_RATING:
      return {
        ...state,
        items: state.items!.sort((a, b) => b.rating - a.rating),
      };

    default:
      return state;
  }
};

export default ItemsReducer;
