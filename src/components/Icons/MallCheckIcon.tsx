import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallCheckIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', _id, rotate = 0 }) => {
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
        d="M10 15.172L19.192 5.979L20.607 7.393L10 18L3.636 11.636L5.05 10.222L10 15.172Z"
        fill={color}
      />
    </svg>
  );
};

export default MallCheckIcon;
