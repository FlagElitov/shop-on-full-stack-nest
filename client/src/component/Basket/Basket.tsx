import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeCardAC } from "../../redux/action/CardAction";
import { initialStateCard } from "../../redux/reducers/CardReducers";
import { RootStore } from "../../redux/redux-store";

const Basket: React.FC = () => {
  const dispatch = useDispatch();
  const cardR: initialStateCard = useSelector(
    (state: RootStore) => state.cardR
  );
  const totalPrice = cardR.card.reduce((total, card) => total + card.price, 0);
  const lengthCard = cardR.card.length;

  console.log(cardR);
  console.log(totalPrice);

  return (
    <>
      <div className="basket__title">Корзина</div>
      <div className="basket__center">
        {cardR.card &&
          cardR.card.map((card) => (
            <div className="basket__card">
              <div>{card.title}</div>
              <div>
                <img
                  height="100"
                  className="basket__img"
                  src={card.image}
                  alt={card.title}
                />
              </div>
              <div>{card.price}$</div>
              <button onClick={() => dispatch(removeCardAC(card._id))}>
                Удалить
              </button>
            </div>
          ))}
        <button className="sending">
          <div className="sending__title">{totalPrice}$</div>
          <div className="sending__count">{lengthCard}шт</div>
        </button>
      </div>
    </>
  );
};

export default Basket;
