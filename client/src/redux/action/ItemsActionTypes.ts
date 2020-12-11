import {
  FILTER_INPUT,
  ITEMS_FAIL,
  ITEMS_LOADING,
  ITEMS_SUCCESS,
  REQUEST_ITEMS,
  SORT_PRICE,
  SORT_RATING,
} from "./ItemsAction";

export interface dataProduct {
  title: string;
  price: number;
  image: string;
  rating: number;
  company: string;
}

export interface ItemsLoading {
  type: typeof ITEMS_LOADING;
}
export interface ItemsFail {
  type: typeof ITEMS_FAIL;
}
export interface ItemsSuccess {
  type: typeof ITEMS_SUCCESS;
  payload: dataProduct;
}
export interface RequestItems {
  type: typeof REQUEST_ITEMS;
}
export interface itemsSortPrice {
  type: typeof SORT_PRICE;
}
export interface itemsSortRating {
  type: typeof SORT_RATING;
}
export interface InputFilters {
  type: typeof FILTER_INPUT;
  payload: string;
}

export type ItemsDispatchTypes =
  | ItemsLoading
  | ItemsFail
  | ItemsSuccess
  | itemsSortPrice
  | itemsSortRating
  | InputFilters;
