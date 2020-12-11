import { createStore, combineReducers, applyMiddleware } from "redux";
import createSagaMiddleware from "redux-saga";
import ItemsReducer from "./reducers/ItemsReducers";
import { composeWithDevTools } from "redux-devtools-extension";
import { sagaWatcher } from "./saga/itemsSaga";
import CardReducers from "./reducers/CardReducers";

const saga = createSagaMiddleware();
const reducers = combineReducers({
  itemsR: ItemsReducer,
  cardR: CardReducers,
});

const store = createStore(reducers, composeWithDevTools(applyMiddleware(saga)));
saga.run(sagaWatcher);
export type RootStore = ReturnType<typeof reducers>;

export default store;
