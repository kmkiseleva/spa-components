import { IBorder } from '../../typespaces/interfaces/border.interface';
import { IIndents } from '../../typespaces/interfaces/indents.interface';
import { IBackground } from '../../typespaces/interfaces/background.interface';
import { IBaseStyles } from '../../typespaces/interfaces/baseStyles.interface';

export interface IMallStrip extends IBorder, IIndents, IBackground, IBaseStyles {}
