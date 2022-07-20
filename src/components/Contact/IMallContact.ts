export interface IMallContact {
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
   * Размер текста
   */
  fontSize?: string;

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
   * Название контакта
   */
  contactTitle: string;

  /**
   * Номер телефона
   */
  phone?: string;

  /**
   * Адрес почты
   */
  email?: string;
}
