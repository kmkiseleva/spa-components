import React, { SyntheticEvent } from 'react';

export interface IMallButton {
  /**
   * Дочерние компоненты, передаваемые внутрь кнопки - текст, иконки.
   */
  children: React.ReactNode;

  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Минимальная ширина кнопки
   */
  minWidth?: string;

  /**
   * Цвет кнопки
   */
  backgroundColor: string;

  /**
   * Цвет кнопки при наведении указателя на кнопку
   */
  backgroundColorHover?: string;

  /**
   * Цвет текста
   */
  color?: string;

  /**
   * Цвет текста при наведении указателя на кнопку
   */
  colorHover?: string;

  /**
   * Тень кнопки
   */
  boxShadow?: string | 'none';

  /**
   * Тень элемента при наведении
   */
  boxShadowHover?: string | 'none';

  /**
   * Тень текста
   */
  textShadow?: string | 'none';

  /**
   * Тень текста при наведении
   */
  textShadowHover?: string | 'none';

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
   * Подсказка при наведении на кнопку
   */
  title?: string;

  /**
   * Тип кнопки
   */
  type?: 'button' | 'reset' | 'submit';

  /**
   * Активна кнопка или нет
   */
  disabled?: boolean;

  /**
   * Обработчик клика по кнопке
   */
  onClick?: (evt?: SyntheticEvent) => void;

  /**
   * Дополнительные классы, которые можно передать снаружи
   */
  classes?: string;
}
