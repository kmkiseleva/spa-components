import { SyntheticEvent } from 'react';

export type Labels = { name: string; value: string };
export interface IMallProductCard {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Название товара
   */
  cardTitle: string;

  /**
   * Изображение товара
   */
  image?: string;

  /**
   * Артикул товара
   */
  articul: string;

  /**
   * Лейблы (on/off)
   */
  labels: boolean;

  /**
   * Лейблы (значения)
   */
  labelsValues: Labels[];

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
   * Старая цена значение
   */
  oldPriceValue?: string;

  /**
   * Кнопка корзины (длинная / иконка)
   */
  cartButton: 'none' | 'big' | 'small';

  /**
   * Акцентный цвет
   */
  accentColor?: string;

  /**
   * Акцентный дополнительный цвет
   */
  accentSecondaryColor?: string;

  /**
   * Фон карточки
   */
  backgroundColor?: string;

  /**
   * Основной цвет текста
   */
  textMainColor?: string;

  /**
   * Второстепенный цвет текста
   */
  textSecondaryColor?: string;

  /**
   * Внешние отступы
   */
  margin?: string;

  /**
   * Внутренние отступы
   */
  padding?: string;

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
