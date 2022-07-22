export interface IMallAddress {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Внутренние отступы
   */
  padding?: string;

  /**
   * Цвет фона
   */
  backgroundColor?: string;

  /**
   * Внешние отступы
   */
  margin?: string;

  /**
   * Основной цвет текста
   */
  textMainColor?: string;

  /**
   * Акцентный цвет
   */
  accentColor?: string;

  /**
   * Закругление углов
   */
  borderRadius?: string;

  /**
   * Массив адресов
   */
  addresses: { name: string; address: string; coordinates: number[] }[];
}
