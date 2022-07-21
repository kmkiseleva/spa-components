import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallDoubleArrowIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', fill = false, _id, rotate = 0 }) => {
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
            ? 'M16 16V12L21 17L16 22V18H4V16H16ZM8 2V5.999L20 6V8H8V12L3 7L8 2Z'
            : 'M16.05 12.05L21 17L16.05 21.95L14.636 20.536L17.172 17.999L4 18V16H17.172L14.636 13.464L16.05 12.05ZM7.95 2.05L9.364 3.464L6.828 6H20V8H6.828L9.364 10.536L7.95 11.95L3 7L7.95 2.05Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default MallDoubleArrowIcon;
