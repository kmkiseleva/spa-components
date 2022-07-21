export interface IMallPagination {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Количество элементов на странице
   */
  pageSize: number;

  /**
   * Общее количество элементов
   */
  totalElements: number;

  /**
   * Текущая страница
   */
  currentPage: number;

  /**
   * Количество страниц отображаемых перед и после активной страницы
   */
  siblingCount?: number;

  /**
   * Стрелки следующей и предыдущей страницы
   */
  showArrows?: boolean;

  /**
   * Рамка при наведении на стрелки
   */
  hoverArrow?: boolean;

  /**
   * Рамка при наведении на страницу
   */
  hoverPages?: boolean;

  /**
   * Акцентный цвет
   */
  accentColor?: string;

  /**
   * Основной цвет текста
   */
  textMainColor?: string;

  /**
   * Функция которая возвращает нажатую страницу
   */
  onPageChange: (arg: number) => void;
}
