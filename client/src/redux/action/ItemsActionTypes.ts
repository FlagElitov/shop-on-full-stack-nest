import {
  ITEMS_FAIL,
  ITEMS_LOADING,
  ITEMS_SUCCESS,
  REQUEST_ITEMS,
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

export type ItemsDispatchTypes = ItemsLoading | ItemsFail | ItemsSuccess;
