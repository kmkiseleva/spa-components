import React, { FC } from "react";
// import { IMallProductCard } from "./IMallProductCard";
import "./MallProductCard.css";
import img from "../../assets/test-img.jpg";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import heart from "../../assets/icon-heart.svg";
import compare from "../../assets/icon-compare.svg";

const MallProductCard = () => {
  return (
    <>
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
          </div>
        </div>
      </div>
    </>
  );
};

export default MallProductCard;
