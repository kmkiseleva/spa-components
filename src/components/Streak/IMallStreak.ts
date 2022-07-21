import { IBackground } from './../../typespaces/interfaces/background.interface';
import { IBaseStyles } from './../../typespaces/interfaces/baseStyles.interface';
import { IBorder } from './../../typespaces/interfaces/border.interface';
import { IIndents } from './../../typespaces/interfaces/indents.interface';

export interface IMallStreak extends IBorder, IIndents, IBackground, IBaseStyles {
  /**
   * Положение текста
   */
  textAlign?: 'center' | 'right' | 'left';

  /**
   * Цвет кнопки
   */
  accentColor?: string;

  /**
   * Основной цвет текста
   */
  textMainColor?: string;

  /**
   * Текст кнопки
   */
  buttonText?: string;

  /**
   * Заголовок
   */
  headingText?: string;

  /**
   * Текст
   */
  text?: string;

  /**
   * Показ кнопки
   */
  showButton?: boolean;

  /**
   * Размер шрифта
   */
  fontSize?: string;

  /**
   * Внутренний отступ сверху
   */
  paddingTop?: string;

  /**
   * Внутренний отступ справа
   */
  paddingRight?: string;

  /**
   * Внутренний отступ снизу
   */
  paddingBottom?: string;

  /**
   * Внутренний отступ слева
   */
  paddingLeft?: string;

  /**
   * Размер шрифта кнопки
   */
  buttonFontSize?: string;
}
