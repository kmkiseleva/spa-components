import { SyntheticEvent } from 'react';
export interface IMallProductCardLong {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Название товара
   */
  cardTitle: string;

  /**
   * Показать / скрыть изображение товара
   */
  showImage: boolean;

  /**
   * Изображение товара
   */
  image?: string;

  /**
   * Артикул товара
   */
  articul: string;

  /**
   * Текущий цвет товара
   */
  currentColor: { name: string; value: string };

  /**
   * Текущий размер товара
   */
  currentSize: string;

  /**
   * Количество товара в наличии
   */
  availableCount: string;

  /**
   * Актуальная цена товара
   */
  actualPrice: string;

  /**
   * Показать / скрыть старую цену
   */
  oldPrice: boolean;

  /**
   * Старая цена значение
   */
  oldPriceValue?: string;

  /**
   * Показать / скрыть экономию
   */
  showEconomy: boolean;

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
   * Внешний верхний отступ
   */
  marginTop?: string;

  /**
   * Внешний нижний отступ
   */
  marginBottom?: string;

  /**
   * Внешний левый отступ
   */
  marginLeft?: string;

  /**
   * Внешний правый отступ
   */
  marginRight?: string;

  /**
   * Толщина обводки карточки
   */
  borderWidth?: string;

  /**
   * Цвет обводки карточки
   */
  borderColor?: string;

  /**
   * Закругление углов карточки
   */
  borderRadius?: string;

  /**
   * Фон карточки
   */
  background?: string;

  /**
   * Обработчик клика по кнопке Избранное
   */
  onClickFavoritesButton?: (evt?: SyntheticEvent) => void;

  /**
   * Обработчик клика по кнопке Сравнить
   */
  onClickDeleteButton?: (evt?: SyntheticEvent) => void;

  /**
   * Обработчик клика по кнопке корзины
   */
  onClickCartButton: (value: number) => void;
}
