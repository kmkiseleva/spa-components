import { ChangeEvent } from 'react';

export interface IMallTextarea {
  /**
   * Айдишник, нужен для внутренней работы конструктора
   */
  _id?: string;

  /**
   * Значение поля
   */
  value: string | number;

  /**
   * Подсказка внутри поля формы
   */
  placeholder?: string;

  /**
   * Ширина кнопки
   */
  width?: string;

  /**
   * Высота кнопки
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
   * Цвет границы (требует наличия границы)
   */
  borderColor?: string;

  /**
   * Толщина границы (требует наличия границы)
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
   * Автоматическое подстраивание высоты (TODO: Требует более подробного описания принципа работы)
   */
  autosize?: boolean;

  /**
   * Высота поля в строках текста
   */
  rows?: number;

  /**
   * Уникальное имя элемента
   */
  name?: string;

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
  onChange(event: ChangeEvent<HTMLTextAreaElement>): void;

  /**
   * Обработчик используется для обработки элемента при потере фокуса.
   */
  onBlur?(event: ChangeEvent<HTMLTextAreaElement>): void;

  /**
   * Дополнительные классы, которые можно передать снаружи
   */
  classes?: string;
}
