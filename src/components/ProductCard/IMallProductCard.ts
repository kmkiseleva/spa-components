import { SyntheticEvent } from 'react';
export interface IMallProductCard {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

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
   * Массив размеров товара
   */
  productSizes: string[];

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
   * Обработчик клика по кнопке размера
   */
  onClickSizeButton: (value: string) => void;

  /**
   * Обработчик клика по кнопке цвета
   */
  onClickColorButton: (value: string) => void;

  /**
   * Обработчик клика по кнопке корзины
   */
  onClickCartButton: (value: number) => void;
}
