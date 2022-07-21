import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallPlusIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', _id, rotate = 0 }) => {
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
        d="M11 11V5H13V11H19V13H13V19H11V13H5V11H11Z"
        fill={color}
      />
    </svg>
  );
};

export default MallPlusIcon;
