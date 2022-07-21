import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallChevronIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', fill = false, _id, rotate = 0 }) => {
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
          fill ? 'M12 16L6 10H18L12 16Z' : 'M12 13.172L16.95 8.222L18.364 9.636L12 16L5.636 9.636L7.05 8.222L12 13.172Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default MallChevronIcon;
