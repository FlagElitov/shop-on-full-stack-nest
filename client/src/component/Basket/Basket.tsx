import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { initialStateCard } from "../../redux/reducers/CardReducers";
import { RootStore } from "../../redux/redux-store";

const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const state: initialStateCard = useSelector(
    (state: RootStore) => state.cardR
  );
  console.log(state);
  return <div>Корзина</div>;
};

export default Basket;
