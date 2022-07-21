import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallBarChartIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', fill = false, _id, rotate = 0 }) => {
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
            ? 'M3 12H7V21H3V12ZM17 8H21V21H17V8ZM10 2H14V21H10V2Z'
            : 'M3 12H5V21H3V12ZM19 8H21V21H19V8ZM11 2H13V21H11V2Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default MallBarChartIcon;
