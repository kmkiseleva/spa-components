export interface IMallProductCardCounter {
  /**
   * Акцентный цвет
   */
  accentColor?: string;

  /**
   * Показывать / скрывать кнопку корзины (on / off)
   */
   showCartButton: boolean;
  /**
   * Обработчик клика по кнопке корзины
   */
  onClickCartButton: (value: number) => void;
}
