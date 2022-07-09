import React, { FC } from "react";
import "./MallProductCard.css";
import { IMallProductCard } from "./IMallProductCard";
import compare from "../../assets/icon-compare.svg";
import heart from "../../assets/icon-heart.svg";
import image from "../../assets/test-img.jpg";

const MallProductCard = () => {
  return (
    <div className="mall-card__block">
      <div className="mall-card__labels">
        <p>Новинка</p>
        <div className="mall-labels__block">
          <img src={compare} alt="icon" />
          <img src={heart} alt="icon" />
        </div>
      </div>
      <div className="mall-card__image">
        <img src={image} alt="product" />
      </div>
      <h3 className="mall-card__title">Диван Лени Textile Rustic</h3>
      <div className="mall-card__art">Артикул P94M-LJ4K</div>
      <div className="mall-card__available">
        В наличии <span>2 шт</span>
      </div>
      <div className="mall-card__prices">
        <span>17 050 &#8381;</span>
        <span className="mall-prices__old">21 990 &#8381;</span>
      </div>
    </div>
  );
};

export default MallProductCard;
