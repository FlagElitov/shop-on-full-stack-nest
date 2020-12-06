import axios from "axios";
import { call, put, takeEvery } from "redux-saga/effects";
import {
  REQUEST_ITEMS,
  itemsLoading,
  itemsSuccess,
  itemsFail,
} from "../action/ItemsAction";
const takeEveryUp: any = takeEvery;
export function* sagaWatcher() {
  yield takeEveryUp(REQUEST_ITEMS, sagaWorker);
}

function* sagaWorker() {
  try {
    yield put(itemsLoading());
    const payload = yield call(axios.get, `http://localhost:3005/products`);
    yield put(itemsSuccess(payload.data));
  } catch (e) {
    yield put(itemsFail());
  }
}
