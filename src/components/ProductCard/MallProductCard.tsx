import React, { FC, useState } from "react";
// import { IMallProductCard } from "./IMallProductCard";
import "./MallProductCard.css";
import img from "../../assets/test-img.jpg";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";
import heart from "../../assets/icon-heart.svg";
import compare from "../../assets/icon-compare.svg";
import description from "../../assets/icon-description.svg";
import chars from "../../assets/icon-characteristics.svg";

const MallProductCard = () => {
  const [active, setActive] = useState("description");

  const onClickHandler = (e: any) => {
    if (e.target.textContent.trim() === "Описание товара")
      setActive("description");
    if (e.target.textContent.trim() === "Характеристики") setActive("chars");
  };

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
          </div>
        </div>
      </div>
      <div className="mall-product-card__footer">
        <div className="mall-footer__buttons">
          <button
            className={active === "description" ? "" : "button-disabled"}
            onClick={onClickHandler}
          >
            <img src={description} alt="icon" /> Описание товара
          </button>
          <button
            className={active === "description" ? "button-disabled" : ""}
            onClick={onClickHandler}
          >
            <img src={chars} alt="icon" /> Характеристики
          </button>
        </div>
        <div className="mall-footer__description">
          <p
            className={
              active === "description"
                ? "description-active"
                : "description-disabled"
            }
          >
            Компактный диван «Каир» с универсальным углом гармонично впишется в
            любой современный или сдержанный классический интерьер. Эта модель
            представлена в практичной и износостойкой обивке из рогожки.
            Особенностью дивана является отсутствие подлокотников, что
            значительно увеличивает площадь посадочных мест, которых в данной
            модели предусмотрено три.
          </p>
          <div
            className={active === "description" ? "description-disabled" : ""}
          >
            <table className="table">
              <tbody>
                <tr>
                  <td>Ткань</td>
                  <td>Хлопок</td>
                </tr>
                <tr>
                  <td>Вес</td>
                  <td>50 кг</td>
                </tr>
                <tr>
                  <td>Раскладной</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Ширина</td>
                  <td>150 см</td>
                </tr>
                <tr>
                  <td>Глубина</td>
                  <td>80 см</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MallProductCard;
