import { IIndents } from '../../typespaces/interfaces/indents.interface';

export interface IMallSlider extends IIndents {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Массив с картинками
   */
  images: { original: string; thumbnail: string }[];

  /**
   * Показ стрелок
   */
  arrows?: boolean;

  /**
   * Скорость автоматического воспроизведения ms
   */
  autoplaySpeed?: number;

  /**
   * Автоматическое воспроизведение
   */
  autoplay?: boolean;

  /**
   * Показ точек
   */
  dots?: boolean;

  /**
   * Ширина слайда
   */
  width?: string;

  /**
   * Высота слайда
   */
  height?: string;

  /**
   * Акцентный цвет
   */
  accentColor?: string;

  /**
   * Цвет фона слайда
   */
  backgroundColor?: string;

  /**
   * Скругление углов
   */
  borderRadius?: string;

  /**
   * Стрелки навигации
   */
  navigation?: boolean;

  /**
   * Внешние отступы
   */
  margin?: string;

  /**
   * Внутренние отступы
   */
  padding?: string;
}
