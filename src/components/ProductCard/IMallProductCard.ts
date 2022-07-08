// export type Characteristics = {name: string; value: string};
// export type ProductCardData = { description: string; characteristics: Characteristics[] };
export type Description = {description: string};

export interface IMallProductCard {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Название товара
   */
  // title: string;

  /**
   * Описание карточки товара
   */
   description: string;

  /**
   * Краткое описание (on/off)
   */
  // shortDescription: boolean;

  // /**
  //  * Старая цена (on/off)
  //  */
  // oldPrice: boolean;

  // /**
  //  * Лейбл  (on/off)
  //  */
  // label: boolean;

  // /**
  //  * Артикул (on/off)
  //  */
  // art: boolean;

  // /**
  //  * Цвет фона
  //  */
  // backgroundColor: string;

  // /**
  //  * Тип границы и ее наличие
  //  */
  // borderStyle?: 'solid' | 'dotted' | 'dashed' | 'double' | 'none';

  // /**
  //   * Толщина границы. Требует заданный borderStyle!
  //   */
  // borderWidth?: string;
 
  // /**
  //   * Цвет границы. Требует заданный borderStyle!
  //   */
  // borderColor?: string;
 
  // /**
  //   * Закругление краев
  //   */
  // borderRadius?: string;

  // /**
  //   * Кнопка корзины (ширина кнопки)
  //   */
  // buttonWidth: string;

  // /**
  //   * Кнопка корзины (высота кнопки)
  //   */
  // buttonHeight: string;

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

  // /**
  //  * Внешние отступы
  //  */
  // margin?: string;
}
