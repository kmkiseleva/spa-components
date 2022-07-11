import React, { FC, useState } from "react";
import { IMallProductCardCounter } from "./IMallProductCardCounter";
import "./MallProductCardCounter.css";

const MallProductCardCounter: FC<IMallProductCardCounter> = ({
  accentColor,
  onClickCartButton,
}) => {
  const [value, setValue] = useState(1);

  const decrementHandler = (value: number) => {
    if (value === 0) return;
    let newValue = value - 1;
    setValue(newValue);
  };

  const incrementHandler = (value: number) => {
    let newValue = value + 1;
    setValue(newValue);
  };

  return (
    <div className="mall-cart__block">
      <button
        className="mall-cart__counter"
        onClick={() => decrementHandler(value)}
      >
        <svg
          width="14"
          height="2"
          viewBox="0 0 14 2"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H14V2H0V0Z" fill="black" />
        </svg>
      </button>
      <input
        className="mall-cart__input"
        type="text"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      />
      <button
        className="mall-cart__counter"
        onClick={() => incrementHandler(value)}
      >
        <svg
          width="14"
          height="14"
          viewBox="0 0 14 14"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M6 6V0H8V6H14V8H8V14H6V8H0V6H6Z" fill="black" />
        </svg>
      </button>
      <button
        style={{ background: accentColor }}
        className="mall-cart__button"
        onClick={() => onClickCartButton(value)}
      >
        В корзину
      </button>
    </div>
  );
};

export default MallProductCardCounter;
