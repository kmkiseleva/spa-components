import React, { FC, useState } from "react";
import "./MallProductCard.css";
import { IMallProductCard } from "./IMallProductCard";
import compare from "../../assets/icon-compare.svg";
import heart from "../../assets/icon-heart.svg";
import image from "../../assets/test-img.jpg";
import cart from "../../assets/icon-cart.svg";

const MallProductCard: FC<IMallProductCard> = ({
  title = "Диван Лени Textile Rustic",
  articul = "P94M-LJ4K",
  labels = true,
  labelsValues = [
    { name: "new", value: "Новинка" },
    { name: "discount", value: "50%" },
    { name: "hit", value: "Хит" },
  ],
  actualPrice = "17050",
  oldPrice = true,
  oldPriceValue = "21990",
  available = true,
  availableCount = "2",
  cartButton = "button",
  onClickFavoritesButton = () => console.log("Favorites"),
  onClickCompareButton = () => console.log("Compare"),
  onClickCartButton = () => console.log("Add To Cart"),
}) => {
  const [active, setActive] = useState(false);

  return (
    <div
      className="mall-card__block"
      onMouseOver={() => setActive(true)}
      onMouseOut={() => setActive(false)}
    >
      <div className="mall-card__labels">
        {labelsValues.map((label, index) => (
          <p
            key={index}
            className={
              label.name === "new"
                ? "labels__new"
                : label.name === "discount"
                ? "labels__discount"
                : "labels__hit"
            }
          >
            {label.value}
          </p>
        ))}

        {active && (
          <div className="mall-labels__block">
            <button onClick={onClickCompareButton}>
              <img src={compare} alt="icon" />{" "}
            </button>

            <button onClick={onClickFavoritesButton}>
              <img src={heart} alt="icon" />
            </button>
          </div>
        )}
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
        {cartButton === "button" ? (
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
