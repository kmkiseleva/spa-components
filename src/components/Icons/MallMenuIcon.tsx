import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallMenuIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', _id, rotate = 0 }) => {
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
        d="M3 4H21V6H3V4ZM3 11H21V13H3V11ZM3 18H21V20H3V18Z"
        fill={color}
      />
    </svg>
  );
};

export default MallMenuIcon;
