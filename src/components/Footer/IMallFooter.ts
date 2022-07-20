export interface IMallFooter {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Внутренние отступы
   */
  padding?: string;

  /**
   * Номер телефона
   */
  phone?: string;

  /**
   * Ссылка на логотип
   */
  logo?: string;

  /**
   * Размер шрифта в меню
   */
  menuFontSize?: string;

  /**
   * Акцентный цвет
   */
  accentColor?: string;

  /**
   * Цвет фона (второстепенный)
   */
  backgroundSecondaryColor?: string;

  /**
   * Основной цвет текста
   */
  textMainColor?: string;

  /**
   * Второстепенный цвет текста
   */
  textSecondaryColor?: string;

  /**
   * Размер шрифта телефона
   */
  phoneFontSize?: string;

  /**
   * Ссылка на facebook
   */
  facebook?: string;

  /**
   * Ссылка на vk
   */
  vk?: string;

  /**
   * Ссылка на ok
   */
  ok?: string;

  /**
   * Ссылка на instagram
   */
  instagram?: string;

  /**
   * Ссылка на twitter
   */
  twitter?: string;

  /**
   * Ссылка на telegram
   */
  telegram?: string;

  /**
   * Ссылка на youtube
   */
  youtube?: string;

  /**
   * Показывать / скрывать иконки социальных сетей
   */
  social?: boolean;

  /**
   * Название компании
   */
  companyName?: string;

  /**
   * Список меню со ссылками для навигации
   */
  menuList?: { url: string; title: string }[];

  /**
   * Ссылка на политику конфиденциальности
   */
  privacy_policy?: string;

  /**
   * Ссылка на публичную оферту
   */
  public_offer?: string;

  /**
   * Ссылка на конструктор
   */
  constructor_url?: string;
}
