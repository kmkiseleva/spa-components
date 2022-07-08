import React, { FC } from "react";
// import { IMallProductCard } from "./IMallProductCard";
import "./MallProductCard.css";
import MallProductCardDescription from "./MallProductCardDescription";
import img from "../../assets/test-img.jpg";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import heart from "../../assets/icon-heart.svg";
import compare from "../../assets/icon-compare.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

const MallProductCard = () => {
  return (
    <>
      <h3 className="mall-product-card__title">Диван Лени Textile Rustic</h3>
      <div className="mall-product-card">
        <div className="mall-small-images">
          <img src={icon1} alt="icon" />
          <img src={icon2} alt="icon" />
          <img src={icon3} alt="icon" />
        </div>
        <div className="mall-product-card__image">
          <img src={img} alt="img" />
        </div>
        <div className="mall-product-card__description">
          <div className="mall-description-top__buttons">
            <button>
              <img src={heart} alt="icon" /> Избранное
            </button>
            <button>
              <img src={compare} alt="icon" /> Сравнить
            </button>
          </div>
          <div className="mall-description__label">Новинка</div>
          <div className="mall-description__size">
            <h3>Размер</h3>
            <div className="mall-size__buttons">
              <button>Большой</button>
              <button>Средний</button>
              <button>Маленький</button>
            </div>
          </div>
          <div className="mall-description__color">
            <h3>Цвет</h3>
            <div className="mall-color__buttons">
              <button>
                <span></span> Красный
              </button>
              <button>
                <span></span>Крабовый
              </button>
              <button>
                <span></span>Зеленый
              </button>
            </div>
            <div className="mall-available__label">
              В наличии <span>2 шт</span>
            </div>
            <div className="mall-prices">
              <span className="mall-prices__actual">17 050 &#8381;</span>
              <span className="mall-prices__old">21 990 &#8381;</span>
            </div>
            <div className="mall-cart__block">
              <button className="mall-cart__counter">
                <img src={minus} alt="minus" />
              </button>
              <input className="mall-cart__input" type="text" value={1} />
              <button className="mall-cart__counter">
                <img src={plus} alt="plus" />
              </button>
              <button className="mall-cart__button">В корзину</button>
            </div>
          </div>
        </div>
      </div>
      <MallProductCardDescription />
    </>
  );
};

export default MallProductCard;
