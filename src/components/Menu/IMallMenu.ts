export interface IMallMenu {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Ссылка на логотип
   */
  logo?: string;

  /**
   * Ссылка для перехода по клику на логотип
   */
  logoLink?: string;

  /**
   * Массив с сылками и названием элементов меню
   */
  navigation?: { url: string; title: string }[];

  /**
   * Показывать ли поиск
   */
  search?: boolean;

  /**
   * Показывать ли кнопку входа
   */
  login?: boolean;

  /**
   * Показывать ли корзину
   */
  basket?: boolean;

  /**
   * Телефон
   */
  phone?: string;

  /**
   * Акцентный цвет
   */
  accentColor?: string;

  /**
   * Основной цвет текста
   */
  textMainColor?: string;

  /**
   * Второстепенный цвет текста
   */
  textSecondaryColor?: string;

  /**
   * Скругление углов
   */
  borderRadius?: string;

  /**
   * Метод для поиска
   */
  onSearch?: () => void;

  /**
   * Метод для входа выхода
   */
  onLogin?: () => void;

  /**
   * Метод для перехода в корзину
   */
  onBasket?: () => void;
}
