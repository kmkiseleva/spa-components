import { SyntheticEvent } from 'react';

export type Labels = { name: string; value: string };
export type ProductHeader = { title: string };
export type ProductColors = { name: string; value: string };
export type Description = { description: string };
export type Characteristics = { name: string; value: string };

export interface IMallProductCardCounter {
  /**
   * Акцентный цвет
   */
  accentColor?: string;
  /**
   * Обработчик клика по кнопке корзины
   */
  onClickCartButton: (value: number) => void;
}

export interface IMallProductCardDescription {
  /**
   * Описание карточки товара
   */
  description: string;
  characteristics: Characteristics[];
}

export interface IMallProductCardPage {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Название товара
   */
  cardTitle: string;

  /**
   * Изображения для галерии
   */
  icon1?: string;
  icon2?: string;
  icon3?: string;
  img?: string;

  /**
   * Описание карточки товара
   */
  description: string;

  /**
   * Характеристики карточки товара
   */
  characteristics: Characteristics[];

  /**
   * Актуальная цена товара
   */
  actualPrice: string;

  /**
   * Старая цена значение
   */
  oldPriceValue: string;

  /**
   * Лейблы (on/off)
   */
  labels: boolean;

  /**
   * Лейблы (значения)
   */
  labelsValues: Labels[];

  /**
   * Массив размеров товара
   */
  productSizes: string[];

  /**
   * Массив цветов товара
   */
  productColors: ProductColors[];

  /**
   * Количество товара в наличии (on/off)
   */
  available: boolean;

  /**
   * Количество товара в наличии
   */
  availableCount: string;

  /**
   * Акцентный цвет
   */
  accentColor?: string;

  /**
   * Акцентный дополнительный цвет
   */
  accentSecondaryColor?: string;

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
   * Обработчик клика по кнопке Избранное
   */
  onClickFavoritesButton?: (evt?: SyntheticEvent) => void;

  /**
   * Обработчик клика по кнопке Сравнить
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
