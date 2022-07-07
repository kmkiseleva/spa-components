export type BreadcrumbsData = { url: string; name: string };

export interface IMallProductCard {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Краткое описание (on/off)
   */
  shortDescription: boolean;

  /**
   * Старая цена (on/off)
   */
  oldPrice: boolean;

  /**
   * Лейбл  (on/off)
   */
  label: boolean;

  /**
   * Артикул (on/off)
   */
  art: boolean;

  /**
   * Цвет фона
   */
  backgroundColor: string;

  /**
   * Тип границы и ее наличие
   */
  borderStyle?: 'solid' | 'dotted' | 'dashed' | 'double' | 'none';

  /**
    * Толщина границы. Требует заданный borderStyle!
    */
  borderWidth?: string;
 
  /**
    * Цвет границы. Требует заданный borderStyle!
    */
  borderColor?: string;
 
  /**
    * Закругление краев
    */
  borderRadius?: string;

  /**
    * Кнопка корзины (ширина кнопки)
    */
  buttonWidth: string;

  /**
    * Кнопка корзины (высота кнопки)
    */
  buttonHeight: string;

  /**
    * Кнопка корзины (цвет фона кнопки)
    */
  buttonBackground: string;

  /**
    * Кнопка корзины (закругление углов кнопки)
    */
  buttonBorderRadius: string;

   /**
    * Кнопка корзины (цвет текста кнопки)
    */
  buttonColor: string;

  /**
   * Внешние отступы
   */
  margin?: string;
}
