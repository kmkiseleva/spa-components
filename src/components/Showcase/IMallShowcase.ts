export interface IMallShowcase {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;
  /**
   * Массив с товарами
   */
  productList: {
    id: string;
    image: string;
    url: string;
    title: string;
    description: string;
    quantity: string;
    price: string;
    old_price: string;
  }[];

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
}
