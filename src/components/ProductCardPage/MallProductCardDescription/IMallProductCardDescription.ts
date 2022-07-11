export type Characteristics = {name: string; value: string};


export interface IMallProductCardDescription {
  /**
   * Описание карточки товара
   */
  description: string;
  characteristics: Characteristics[]
}