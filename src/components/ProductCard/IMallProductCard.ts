import { SyntheticEvent } from 'react';

export type Description = {description: string};
export type ProductColors = {name: string; value: string};

export interface IMallProductCard {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Внешние отступы карточки товара
   */
  margin?: string;

  /**
   * Название товара
   */
  title: string;

  /**
   * Описание карточки товара
   */
  description: string;

  /**
   * Актуальная цена товара
   */
  actualPrice: string; 

  /**
   * Старая цена (on/off)
   */
  oldPrice: boolean;

  /**
   * Старая цена значение
   */
  oldPriceValue: string;

  /**
   * Лейбл новинки  (on/off)
   */
  labelNew: boolean;

  /**
   * Массив цветов товара
   */
  productColors: ProductColors[];

  /**
   * Количество товара в наличии
   */
  available: string;
 
  /**
    * Кнопка корзины (цвет фона кнопки)
    */
  cartButtonBackground: string;

  /**
   * Обработчик клика по кнопке Избранное
   */
  onClickFavoritesButton?: (evt?: SyntheticEvent) => void;

  /**
   * Обработчик клика по кнопке Избранное
   */
  onClickCompareButton?: (evt?: SyntheticEvent) => void;

  /**
   * Обработчик клика по кнопке корзины
   */
  onClickCartButton?: (evt?: SyntheticEvent) => void;
}
