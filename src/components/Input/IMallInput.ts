import React, { ChangeEvent } from 'react';

export interface IMallInput {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Тип вводимых данных
   */
  type?: 'text' | 'password' | 'time' | 'email' | 'number' | 'tel';

  /**
   * Значение поля
   */
  value: string | number;

  /**
   * Подсказка внутри поля формы
   */
  placeholder?: string;

  /**
   * Ширина поля ввода
   */
  width?: string;

  /**
   * Высота поля ввода
   */
  height?: string;

  /**
   * Внутренние отступы
   */
  padding?: string;

  /**
   * Тип границы и ее наличие
   */
  borderStyle?: 'solid' | 'dotted' | 'dashed' | 'double' | 'none';

  /**
   * Цвет границы (требует наличие границы)
   */
  borderColor?: string;

  /**
   * Толщина границы (требует наличие границы)
   */
  borderWidth?: string;

  /**
   * Закругление краев
   */
  borderRadius?: string;

  /**
   * Тень элемента
   */
  boxShadow?: string | 'none';

  /**
   * Тень элемента при наведении
   */
  boxShadowHover?: string | 'none';

  /**
   * Уникальное имя элемента
   */
  name?: string;

  /**
   * Ссылка на элемент
   */
  ref?: React.InputHTMLAttributes<HTMLInputElement>;

  /**
   * Цвет границ когда элемент в фокусе
   */
  focusColor?: string;

  /**
   * Если ошибка, то цвет границ становится красным если есть границы
   */
  error?: boolean;

  /**
   * Текст ошибки
   */
  errorText?: string;

  /**
   * Регулярное выражение
   */
  pattern?: string;

  /**
   * Является ли поле обязательным для заполнения
   */
  required?: boolean;

  /**
   * Отключение ввода
   */
  disabled?: boolean;

  /**
   * Обработчик используется для обработки пользовательского ввода в режиме реального времени.
   */
  onChange(event: ChangeEvent<HTMLInputElement>): void;

  /**
   * Обработчик используется для обработки элемента при потере фокуса.
   */
  onBlur?(event: ChangeEvent<HTMLInputElement>): void;

  /**
   * Дополнительные классы, которые можно передать снаружи
   */
  classes?: string;
}
