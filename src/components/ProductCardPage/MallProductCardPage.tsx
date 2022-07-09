import React, { FC, useState } from "react";
import "./MallProductCardPage.css";
import { IMallProductCardPage } from "./IMallProductCardPage";
import MallProductCardHeader from "./MallProductCardHeader";
import MallProductCardGallery from "./MallProductCardGallery";
import MallProductCardDescription from "./MallProductCardDescription";
import heart from "../../assets/icon-heart.svg";
import compare from "../../assets/icon-compare.svg";
import minus from "../../assets/minus.svg";
import plus from "../../assets/plus.svg";

const MallProductCardPage: FC<IMallProductCardPage> = ({
  title,
  description,
  characteristics,
  actualPrice,
  oldPrice,
  oldPriceValue,
  labelNew,
  productSizes,
  productColors,
  available,
  cartButtonBackground,
  onClickFavoritesButton,
  onClickCompareButton,
  onClickSizeButton,
  onClickColorButton,
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
    <div className="mall-product-card__block">
      <MallProductCardHeader title={title} />
      <div className="mall-product-card">
        <MallProductCardGallery />

        <div className="mall-product-card__details">
          <div className="mall-details-top__buttons">
            <button onClick={onClickFavoritesButton}>
              <img src={heart} alt="icon" /> Избранное
            </button>
            <button onClick={onClickCompareButton}>
              <img src={compare} alt="icon" /> Сравнить
            </button>
          </div>
          {labelNew && <div className="mall-details__label">Новинка</div>}
          <div className="mall-details__size">
            <h3>Размер</h3>
            <div className="mall-size__buttons">
              {productSizes.map((size, index) => (
                <button key={index} onClick={() => onClickSizeButton(size)}>
                  {size}
                </button>
              ))}
            </div>
          </div>
          <div className="mall-details__color">
            <h3>Цвет</h3>
            <div className="mall-color__buttons">
              {productColors.map((color, index) => (
                <button
                  key={index}
                  onClick={() => onClickColorButton(color.value)}
                >
                  <span style={{ backgroundColor: color.value }}></span>
                  {color.name}
                </button>
              ))}
            </div>
            <div className="mall-available__label">
              В наличии <span>{available} шт</span>
            </div>
            <div className="mall-prices">
              <span className="mall-prices__actual">{actualPrice} &#8381;</span>
              {oldPrice && (
                <span className="mall-prices__old">
                  {oldPriceValue} &#8381;
                </span>
              )}
            </div>
            <div className="mall-cart__block">
              <button
                className="mall-cart__counter"
                onClick={() => decrementHandler(value)}
              >
                <img src={minus} alt="minus" />
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
                <img src={plus} alt="plus" />
              </button>
              <button
                style={{ background: cartButtonBackground }}
                className="mall-cart__button"
                onClick={() => onClickCartButton(value)}
              >
                В корзину
              </button>
            </div>
          </div>
        </div>
      </div>

      <MallProductCardDescription
        description={description}
        characteristics={characteristics}
      />
    </div>
  );
};

export default MallProductCardPage;
