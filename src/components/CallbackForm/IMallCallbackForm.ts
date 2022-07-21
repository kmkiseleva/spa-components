export interface IMallCallbackForm {
  /**
   * Дочерние элементы
   */
  children: React.ReactNode;

  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Ширина формы
   */
  width?: string;

  /**
   * Цвет фона
   */
  backgroundColor: string;

  /**
   * Цвет текста
   */
  color?: string;

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
   * Адрес для отправки формы
   */
  address?: string;

  /**
   * Дополнительные классы, которые можно передать снаружи
   */
  classes?: string;
}
