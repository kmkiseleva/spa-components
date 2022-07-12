import React, { FC } from 'react';
import MallProductCardHeader from './MallProductCardHeader/MallProductCardHeader';
import MallProductCardGallery from './MallProductCardGallery/MallProductCardGallery';
import MallProductCardLabel from './MallProductCardLabel/MallProductCardLabel';
import MallProductCardCounter from './IMallProductCardCounter/MallProductCardCounter';
import MallProductCardDescription from './MallProductCardDescription/MallProductCardDescription';
import { IMallProductCardPage } from './IMallProductCardPage';
import './MallProductCardPage.css';

const MallProductCardPage: FC<IMallProductCardPage> = ({
  title = 'Диван Лени Textile Rustic',
  description = 'Компактный диван «Каир» с универсальным углом гармонично впишется в любой современный или сдержанный классический интерьер. Эта модель представлена в практичной и износостойкой обивке из рогожки. Особенностью дивана является отсутствие подлокотников, что значительно увеличивает площадь посадочных мест, которых в данной модели предусмотрено три.',
  icon1,
  icon2,
  icon3,
  img,
  characteristics,
  actualPrice = '17 050',
  oldPriceValue = '21 990',
  labels = true,
  labelsValues = [
    { name: 'new', value: 'Новинка' },
    { name: 'discount', value: '50%' },
    { name: 'hit', value: 'Хит' },
  ],
  productSizes = ['Большой', 'Маленький', 'Средний'],
  productColors = [
    { name: 'Красный', value: 'red' },
    { name: 'Крабовый', value: 'pink' },
    { name: 'Зеленый', value: 'green' },
  ],
  available = true,
  availableCount = '2',
  accentColor = '#0364ed',
  accentSecondaryColor = '#3bb273',
  textMainColor = '#000000',
  textSecondaryColor = '#8a8a8a',
  margin = '32px auto',
  onClickFavoritesButton,
  onClickCompareButton,
  onClickSizeButton,
  onClickColorButton,
  onClickCartButton,
}) => {
  return (
    <div
      className="mall-product-card__block"
      style={{ margin: margin, color: textMainColor }}
    >
      <MallProductCardHeader title={title} />
      <div className="mall-product-card">
        <MallProductCardGallery
          icon1={icon1}
          icon2={icon2}
          icon3={icon3}
          img={img}
        />

        <div className="mall-product-card__details">
          <div className="mall-details-top__buttons">
            <button onClick={onClickFavoritesButton}>
              <svg
                width="21"
                height="19"
                viewBox="0 0 21 19"
                fill={textSecondaryColor}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M15 0C18.038 0 20.5 2.5 20.5 6C20.5 13 13 17 10.5 18.5C8 17 0.5 13 0.5 6C0.5 2.5 3 0 6 0C7.86 0 9.5 1 10.5 2C11.5 1 13.14 0 15 0ZM11.434 15.604C12.315 15.048 13.11 14.495 13.854 13.903C16.835 11.533 18.5 8.943 18.5 6C18.5 3.64 16.963 2 15 2C13.924 2 12.76 2.57 11.914 3.414L10.5 4.828L9.086 3.414C8.24 2.57 7.076 2 6 2C4.06 2 2.5 3.656 2.5 6C2.5 8.944 4.166 11.533 7.145 13.903C7.89 14.495 8.685 15.048 9.566 15.603C9.865 15.792 10.161 15.973 10.5 16.175C10.839 15.973 11.135 15.792 11.434 15.604Z" />
              </svg>
              Избранное
            </button>
            <button onClick={onClickCompareButton}>
              <svg
                width="19"
                height="19"
                viewBox="0 0 19 19"
                fill={textSecondaryColor}
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0.5 10H2.5V19H0.5V10ZM16.5 6H18.5V19H16.5V6ZM8.5 0H10.5V19H8.5V0Z" />
              </svg>
              Сравнить
            </button>
          </div>

          <div className="mall-details__labels-block">
            {labels &&
              labelsValues.map((label, index) => (
                <MallProductCardLabel
                  key={index}
                  label={label}
                />
              ))}
          </div>

          <div className="mall-details__size">
            <h3>Размер</h3>
            <div className="mall-size__buttons">
              {productSizes.map((size, index) => (
                <button
                  key={index}
                  onClick={() => onClickSizeButton(size)}
                >
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
            {available && (
              <div
                className="mall-available__label"
                style={{ color: accentSecondaryColor }}
              >
                В наличии
                <span style={{ color: textSecondaryColor }}>{availableCount} шт</span>
              </div>
            )}
            <div className="mall-prices">
              <span
                className="mall-prices__actual"
                style={{ color: textMainColor }}
              >
                {actualPrice} &#8381;
              </span>
              {oldPriceValue && (
                <span
                  className="mall-prices__old"
                  style={{ color: textSecondaryColor }}
                >
                  {oldPriceValue} &#8381;
                </span>
              )}
            </div>
          </div>

          <MallProductCardCounter
            accentColor={accentColor}
            onClickCartButton={onClickCartButton}
          />
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
