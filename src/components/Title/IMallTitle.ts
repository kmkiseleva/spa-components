import { IFont } from '../../typespaces/interfaces/font.interface';
import { IBaseStyles } from '../../typespaces/interfaces/baseStyles.interface';
import { IIndents } from '../../typespaces/interfaces/indents.interface';

export interface IMallTitle extends IFont, IBaseStyles, IIndents {
  /**
   * Уровень заголовка
   */
  level?: number;
}
