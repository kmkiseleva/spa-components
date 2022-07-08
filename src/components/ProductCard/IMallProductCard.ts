export type Description = {description: string};
export type ProductColors = {name: string; value: string};

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
   * Массив цветов
   */
  productColors: ProductColors[];
 
  // /**
  //   * Кнопка корзины (цвет фона кнопки)
  //   */
  // buttonBackground: string;

  // /**
  //   * Кнопка корзины (закругление углов кнопки)
  //   */
  // buttonBorderRadius: string;

  //  /**
  //   * Кнопка корзины (цвет текста кнопки)
  //   */
  // buttonColor: string;

  /**
   * Обработчик клика по кнопке корзины
   */
    //  onClickCartButton?: (evt?: SyntheticEvent) => void;

  /**
   * Внешние отступы
   */
  margin?: string;
}
