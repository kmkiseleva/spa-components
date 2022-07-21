import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallFilterIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', fill = false, _id, rotate = 0 }) => {
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
            ? 'M10 14L4 5V3H20V5L14 14V20L10 22V14Z'
            : 'M14 14V20L10 22V14L4 5V3H20V5L14 14ZM6.404 5L12 13.394L17.596 5H6.404Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default MallFilterIcon;
