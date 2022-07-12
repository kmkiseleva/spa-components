import React, { FC, useState } from "react";
import { IMallProductCardLong } from "./IMallProductCardLong";
import "./MallProductCardLong.css";

import testImg from "../../assets/test-img.jpg";

const MallProductCardLong: FC<IMallProductCardLong> = ({
  title = "Диван Лени Textile Rustic",
  articul = "P94M-LJ4K",
  image,
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
  cartButton = "small",
  accentColor = "#0364ed",
  accentSecondaryColor = "#3bb273",
  textMainColor = "#000000",
  textSecondaryColor = "#8a8a8a",
  margin = "50px auto",
  onClickFavoritesButton,
  onClickDeleteButton,
  onClickCartButton,
}) => {
  const [active, setActive] = useState(true);

  return (
    <div
      className="mall-card-long__block"
      style={{ margin: margin }}
      onMouseOver={() => setActive(true)}
      onFocus={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onBlur={() => setActive(false)}
    >
      <div className="mall-card-long__image">
        <img src={testImg} alt="product" />
      </div>

      <div className="mall-card-long__middle">
        <h3 className="mall-card-long__title" style={{ color: textMainColor }}>
          {title}
        </h3>
        <div
          className="mall-card-long__art"
          style={{ color: textSecondaryColor }}
        >
          Артикул {articul}
        </div>
        <div className="mall-card-long__chars">f</div>
        {active && (
          <div className="mall-card-long__on-off-block">
            <button
              onClick={onClickFavoritesButton}
              title="Избранное"
              style={{ color: textSecondaryColor }}
            >
              <svg
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill={textSecondaryColor}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9.99967 0C12.025 0 13.6663 1.66667 13.6663 4C13.6663 8.66667 8.66634 11.3333 6.99967 12.3333C5.33301 11.3333 0.333008 8.66667 0.333008 4C0.333008 1.66667 1.99967 0 3.99967 0C5.23967 0 6.33301 0.666667 6.99967 1.33333C7.66634 0.666667 8.75968 0 9.99967 0ZM7.62234 10.4027C8.20967 10.032 8.73967 9.66333 9.23567 9.26867C11.223 7.68867 12.333 5.962 12.333 4C12.333 2.42667 11.3083 1.33333 9.99967 1.33333C9.28234 1.33333 8.50634 1.71333 7.94234 2.276L6.99967 3.21867L6.05701 2.276C5.49301 1.71333 4.71701 1.33333 3.99967 1.33333C2.70634 1.33333 1.66634 2.43733 1.66634 4C1.66634 5.96267 2.77701 7.68867 4.76301 9.26867C5.25968 9.66333 5.78967 10.032 6.37701 10.402C6.57634 10.528 6.77367 10.6487 6.99967 10.7833C7.22567 10.6487 7.42301 10.528 7.62234 10.4027Z"
                  fill="#8A8A8A"
                />
              </svg>
              Избранное
            </button>
            <button
              onClick={onClickDeleteButton}
              title="Удалить"
              style={{ color: textSecondaryColor }}
            >
              <svg
                width="14"
                height="14"
                viewBox="0 0 14 14"
                fill={textSecondaryColor}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M10.333 2.99998H13.6663V4.33331H12.333V13C12.333 13.1768 12.2628 13.3464 12.1377 13.4714C12.0127 13.5964 11.8432 13.6666 11.6663 13.6666H2.33301C2.1562 13.6666 1.98663 13.5964 1.8616 13.4714C1.73658 13.3464 1.66634 13.1768 1.66634 13V4.33331H0.333008V2.99998H3.66634V0.99998C3.66634 0.823169 3.73658 0.653599 3.8616 0.528575C3.98663 0.403551 4.1562 0.333313 4.33301 0.333313H9.66634C9.84315 0.333313 10.0127 0.403551 10.1377 0.528575C10.2628 0.653599 10.333 0.823169 10.333 0.99998V2.99998ZM10.9997 4.33331H2.99967V12.3333H10.9997V4.33331ZM4.99967 1.66665V2.99998H8.99967V1.66665H4.99967Z"
                  fill="#8A8A8A"
                />
              </svg>
              Удалить
            </button>
          </div>
        )}
      </div>
      
      <div className="mall-card-long__third-block">
        <div
          className="mall-card-long__prices"
          style={{ color: textMainColor }}
        >
          <span>{actualPrice} &#8381;</span>
          {oldPriceValue && (
            <span
              className="mall-prices-long__old"
              style={{ color: textSecondaryColor }}
            >
              {oldPriceValue} &#8381;
            </span>
          )}
        </div>
      </div>

      {/* <div className="mall-card__labels">
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
            <button onClick={onClickCompareButton} title="Сравнить">
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill={textSecondaryColor}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 10H2.5V19H0.5V10ZM16.5 6H18.5V19H16.5V6ZM8.5 0H10.5V19H8.5V0Z" />
              </svg>
            </button>

            <button onClick={onClickFavoritesButton} title="Избранное">
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill={textSecondaryColor}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0C18.038 0 20.5 2.5 20.5 6C20.5 13 13 17 10.5 18.5C8 17 0.5 13 0.5 6C0.5 2.5 3 0 6 0C7.86 0 9.5 1 10.5 2C11.5 1 13.14 0 15 0ZM11.434 15.604C12.315 15.048 13.11 14.495 13.854 13.903C16.835 11.533 18.5 8.943 18.5 6C18.5 3.64 16.963 2 15 2C13.924 2 12.76 2.57 11.914 3.414L10.5 4.828L9.086 3.414C8.24 2.57 7.076 2 6 2C4.06 2 2.5 3.656 2.5 6C2.5 8.944 4.166 11.533 7.145 13.903C7.89 14.495 8.685 15.048 9.566 15.603C9.865 15.792 10.161 15.973 10.5 16.175C10.839 15.973 11.135 15.792 11.434 15.604Z" />
              </svg>
            </button>
          </div>
        )}
      </div> */}

      {/* {available && (
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
        {oldPriceValue && (
          <span
            className="mall-prices__old"
            style={{ color: textSecondaryColor }}
          >
            {oldPriceValue} &#8381;
          </span>
        )}
      </div>
      <div className="mall-card__button">
        {cartButton === "none" ? (
          ""
        ) : cartButton === "big" ? (
          <button
            className="mall-button__long"
            style={{ color: accentColor, borderColor: accentColor }}
            onClick={onClickCartButton}
          >
            В корзину
          </button>
        ) : (
          <button
            className="mall-button__icon"
            onClick={onClickCartButton}
            title="В корзину"
          >
            <svg
              width="46"
              height="46"
              viewBox="0 0 46 46"
              fill={accentColor}
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M0 4C0 1.79086 1.79086 0 4 0H42C44.2091 0 46 1.79086 46 4V42C46 44.2091 44.2091 46 42 46H4C1.79086 46 0 44.2091 0 42V4Z" />
              <path
                d="M18 19V17C18 15.6739 18.5268 14.4021 19.4645 13.4645C20.4021 12.5268 21.6739 12 23 12C24.3261 12 25.5979 12.5268 26.5355 13.4645C27.4732 14.4021 28 15.6739 28 17V19H31C31.2652 19 31.5196 19.1054 31.7071 19.2929C31.8946 19.4804 32 19.7348 32 20V32C32 32.2652 31.8946 32.5196 31.7071 32.7071C31.5196 32.8946 31.2652 33 31 33H15C14.7348 33 14.4804 32.8946 14.2929 32.7071C14.1054 32.5196 14 32.2652 14 32V20C14 19.7348 14.1054 19.4804 14.2929 19.2929C14.4804 19.1054 14.7348 19 15 19H18ZM18 21H16V31H30V21H28V23H26V21H20V23H18V21ZM20 19H26V17C26 16.2044 25.6839 15.4413 25.1213 14.8787C24.5587 14.3161 23.7956 14 23 14C22.2044 14 21.4413 14.3161 20.8787 14.8787C20.3161 15.4413 20 16.2044 20 17V19Z"
                fill="white"
              />
            </svg>
          </button>
        )}
      </div> */}
    </div>
  );
};

export default MallProductCardLong;
