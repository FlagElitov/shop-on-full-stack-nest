import { dataProduct } from "./ItemsActionTypes";
export const ITEMS_LOADING = "ITEMS_LOADING";
export const ITEMS_FAIL = "ITEMS_FAIL";
export const ITEMS_SUCCESS = "ITEMS_SUCCESS";
export const REQUEST_ITEMS = "REQUEST_ITEMS";
export const SORT_PRICE = "SORT_PRICE";
export const SORT_RATING = "SORT_RATING";
export const FILTER_INPUT = "FILTER_INPUT";

export const itemsLoading = () => ({ type: ITEMS_LOADING });
export const itemsFail = () => ({ type: ITEMS_FAIL });
export const itemsSuccess = (payload: dataProduct) => ({
  type: ITEMS_SUCCESS,
  payload,
});
export const filterInput = (name: string) => ({
  type: FILTER_INPUT,
  payload: name,
});

export const itemsRequest = () => ({ type: REQUEST_ITEMS });
export const itemsSortPrice = () => ({ type: SORT_PRICE });
export const itemsSortRating = () => ({ type: SORT_RATING });
