export interface IMallProductCardCounter {
  /**
   * Акцентный цвет
   */
  accentColor?: string;
  /**
   * Обработчик клика по кнопке корзины
   */
  onClickCartButton: (value: number) => void;
}
