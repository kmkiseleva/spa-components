export type BreadcrumbsData = { url: string; name: string };

export interface IMallBreadcrumbs {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Массив с названиями и ссылками хлебных крошек
   */
  breadcrumbsData: BreadcrumbsData[];

  /**
   * Расположение (слева, по центру, справа)
   */
  position: 'left' | 'center' | 'right';

  /**
   * Разделитель между крошками (/, -, >)
   */
  separator: '/' | '-' | '>';

  /**
   * Размер текста
   */
  fontSize?: string;

  /**
   * Внешние отступы
   */
  margin?: string;

  /**
   * Второстепенный цвет текста
   */
  textSecondaryColor?: string;
}
