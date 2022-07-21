import { ReactElement } from 'react';

export interface IMallDivider {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Ширина разделителя
   */
  width?: string;

  /**
   * Внешние отступы
   */
  margin?: string;

  /**
   * Вид линии разделителя
   */
  borderStyle?: 'solid' | 'dotted' | 'dashed';

  /**
   * Ширина линии разделителя
   */
  borderWidth?: string;

  /**
   * Цвет линии разделителя
   */
  borderColor?: string;

  /**
   * Основной цвет текста
   */
  textMainColor?: string;

  /**
   * Дочерние компоненты, передаваемые внутрь компонента - текст, иконки.
   */
  children?: ReactElement | string;

  /**
   * Позиционирование дочернего компонента
   */
  textPosition?: 'left' | 'right' | 'center';
}
