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
  oldPriceValue = "21990",
  available = true,
  availableCount = "2",
  cartButton = "button",
  accentColor = "#0364ED",
  accentSecondaryColor = "#3BB273",
  textMainColor = "#000000",
  textSecondaryColor = "#8A8A8A",
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
        {labels &&
          labelsValues.map((label, index) => (
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
      <h3 className="mall-card__title" style={{ color: textMainColor }}>
        {title}
      </h3>
      <div className="mall-card__art" style={{ color: textSecondaryColor }}>
        Артикул {articul}
      </div>
      {available && (
        <div
          className="mall-card__available"
          style={{ color: accentSecondaryColor }}
        >
          В наличии{" "}
          <span style={{ color: textSecondaryColor }}>{availableCount} шт</span>
        </div>
      )}
      <div className="mall-card__prices" style={{ color: textMainColor }}>
        <span>{actualPrice} &#8381;</span>
        <span
          className="mall-prices__old"
          style={{ color: textSecondaryColor }}
        >
          {oldPriceValue} &#8381;
        </span>
      </div>
      <div className="mall-card__button">
        {cartButton === "button" ? (
          <button
            className="mall-button__long"
            style={{ color: accentColor, borderColor: accentColor }}
            onClick={onClickCartButton}
          >
            В корзину
          </button>
        ) : (
          <button className="mall-button__icon" onClick={onClickCartButton}>
            <img src={cart} style={{ fill: accentColor }} alt="cart" />
          </button>
        )}
      </div>
    </div>
  );
};

export default MallProductCard;
