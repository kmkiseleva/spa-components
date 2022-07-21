import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallArrowIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', fill = false, _id, rotate = 0 }) => {
  return (
    <svg
      transform={`rotate(${rotate})`}
      id={_id}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d={
          fill
            ? 'M12 13V20L4 12L12 4V11H20V13H12Z'
            : 'M7.828 11H20V13H7.828L13.192 18.364L11.778 19.778L4 12L11.778 4.222L13.192 5.636L7.828 11Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default MallArrowIcon;
