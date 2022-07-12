import { SyntheticEvent } from 'react';
export interface IMallProductCardLong {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Название товара
   */
  title: string;

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
   onClickDeleteButton?: (evt?: SyntheticEvent) => void;

  /**
   * Обработчик клика по кнопке корзины
   */
   onClickCartButton: (value: number) => void;
}
