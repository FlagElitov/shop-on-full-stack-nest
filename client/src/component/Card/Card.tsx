import React from "react";
import ButtonComponent from "./Button/Button";

interface CardProps {
  name: string;
  balance: number;
  id: number;
  toggleHandler: (id: number) => void;
}

const Card: React.FC<CardProps> = ({ name, balance, id, toggleHandler }) => {
  return (
    <div className="card">
      <div className="name"> {name}</div>
      <div className="text"> Balance</div>
      <div className="balance">{balance}$</div>

      <div className="button">
        {balance < 100 ? (
          <div className="warning">Нет баланса!</div>
        ) : (
          <ButtonComponent toggleHandler={toggleHandler} id={id} />
        )}
      </div>
    </div>
  );
};

export default Card;
