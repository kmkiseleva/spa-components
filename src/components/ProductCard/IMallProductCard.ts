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
   * Артикул товара
   */
  articul: string;

  /**
   * Лейбл новинки  (on/off)
   */
  labelNew: boolean;

  /**
   * Количество товара в наличии (on/off)
   */
  available: boolean;

  /**
   * Количество товара в наличии
   */
  availableCount: string;

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
   * Кнопка корзины (длинная / иконка)
   */
  cartButton: "long" | "icon";

  /**
   * Обработчик клика по кнопке Избранное
   */
  onClickFavoritesButton?: (evt?: SyntheticEvent) => void;

  /**
   * Обработчик клика по кнопке Сравнить
   */
  onClickCompareButton?: (evt?: SyntheticEvent) => void;

  /**
   * Обработчик клика по кнопке корзины
   */
  onClickCartButton: (evt?: SyntheticEvent) => void;
}
