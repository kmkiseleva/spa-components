import React, { FC } from "react";
import "./MallProductCard.css";
import { IMallProductCard } from "./IMallProductCard";
import compare from "../../assets/icon-compare.svg";
import heart from "../../assets/icon-heart.svg";
import image from "../../assets/test-img.jpg";
import cart from "../../assets/icon-cart.svg";

const MallProductCard: FC<IMallProductCard> = ({
  title = "Диван Лени Textile Rustic",
  articul = "P94M-LJ4K",
  labelNew = true,
  actualPrice = "17050",
  oldPrice = true,
  oldPriceValue = "21990",
  available = true,
  availableCount = "2",
  cartButton = "long",
  onClickFavoritesButton = () => console.log("Favorites"),
  onClickCompareButton = () => console.log("Compare"),
  onClickCartButton = () => console.log("Add To Cart"),
}) => {
  return (
    <div className="mall-card__block">
      <div className="mall-card__labels">
        {labelNew && <p>Новинка</p>}
        <div className="mall-labels__block">
          <button onClick={onClickCompareButton}>
            <img src={compare} alt="icon" />{" "}
          </button>

          <button onClick={onClickFavoritesButton}>
            <img src={heart} alt="icon" />
          </button>
        </div>
      </div>
      <div className="mall-card__image">
        <img src={image} alt="product" />
      </div>
      <h3 className="mall-card__title">{title}</h3>
      <div className="mall-card__art">Артикул {articul}</div>
      {available && (
        <div className="mall-card__available">
          В наличии <span>{availableCount} шт</span>
        </div>
      )}
      <div className="mall-card__prices">
        <span>{actualPrice} &#8381;</span>
        {oldPrice && (
          <span className="mall-prices__old">{oldPriceValue} &#8381;</span>
        )}
      </div>
      <div className="mall-card__button">
        {cartButton === "long" ? (
          <button className="mall-button__long" onClick={onClickCartButton}>
            В корзину
          </button>
        ) : (
          <button className="mall-button__icon" onClick={onClickCartButton}>
            <img src={cart} alt="cart" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MallProductCard;
