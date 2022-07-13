import React, { FC, useState } from 'react';
import MallProductCardCounter from '../ProductCardCounter/MallProductCardCounter';
import { IMallProductCardLong } from './IMallProductCardLong';
import './MallProductCardLong.css';

const MallProductCardLong: FC<IMallProductCardLong> = ({
  cardTitle = 'Диван Лени Textile Rustic',
  articul = 'P94M-LJ4K',
  showImage = true,
  image,
  currentColor = { name: 'Красный', value: 'red' },
  currentSize = 'Большой',
  actualPrice = '17050',
  oldPrice = true,
  oldPriceValue = '21990',
  showEconomy = true,
  availableCount = '2',
  accentColor = '#0364ed',
  accentSecondaryColor = '#fbcd56',
  textMainColor = '#000000',
  textSecondaryColor = '#8a8a8a',
  margin = '50px auto',
  borderWidth = '1px',
  borderColor = '#e9e9e9',
  borderRadius = '8px',
  background = '#ffffff',
  onClickFavoritesButton,
  onClickDeleteButton,
  onClickCartButton,
}) => {
  const [active, setActive] = useState(true);
  const economy = Number(oldPriceValue) - Number(actualPrice);

  return (
    <div
      className="mall-card-long__block"
      style={{
        margin: margin,
        borderWidth: borderWidth,
        borderColor: borderColor,
        borderRadius: borderRadius,
        background: background,
      }}
      onMouseOver={() => setActive(true)}
      onFocus={() => setActive(true)}
      onMouseOut={() => setActive(false)}
      onBlur={() => setActive(false)}
    >
      {showImage && (
        <div className="mall-card-long__image">
          <img
            src={image}
            alt="product"
          />
        </div>
      )}

      <div className="mall-card-long__middle">
        <h3
          className="mall-card-long__title"
          style={{ color: textMainColor }}
        >
          {cardTitle}
        </h3>
        <div
          className="mall-card-long__art"
          style={{ color: textSecondaryColor }}
        >
          Артикул {articul}
        </div>
        <div className="mall-card-long__chars">
          <div className="mall-card-long__color">
            <span style={{ backgroundColor: currentColor.value }}></span> {currentColor.name}
          </div>

          <div className="mall-card-long__size">{currentSize}</div>
        </div>

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
                  fill="#8a8a8a"
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
                  fill="#8a8a8a"
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
          {oldPrice && (
            <span
              className="mall-prices-long__old"
              style={{ color: textSecondaryColor }}
            >
              {oldPriceValue} &#8381;
            </span>
          )}
        </div>
        {showEconomy && (
          <div
            className="mall-card-long__economy"
            style={{ color: textSecondaryColor }}
          >
            Экономия
            <span style={{ background: accentSecondaryColor }}>{economy} &#8381;</span>
          </div>
        )}
        <div className="mall-card-long__counter-block">
          {availableCount === '1' ? (
            <span>1 штука</span>
          ) : (
            <MallProductCardCounter
              accentColor={accentColor}
              onClickCartButton={onClickCartButton}
              showCartButton={false}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default MallProductCardLong;
