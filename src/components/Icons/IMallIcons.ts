export interface IMallIcons {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Размер иконки
   */
  size?: number;

  /**
   * Цвет иконки
   */
  color?: string;

  /**
   * Заливка
   */
  fill?: boolean;

  /**
   * Поворот иконки
   */
  rotate?: number;
}
