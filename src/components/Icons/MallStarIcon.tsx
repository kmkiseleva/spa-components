import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallStarIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', fill = false, _id, rotate = 0 }) => {
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
            ? 'M12 18.26L4.947 22.208L6.522 14.28L0.587 8.792L8.614 7.84L12 0.5L15.386 7.84L23.413 8.792L17.478 14.28L19.053 22.208L12 18.26Z'
            : 'M12 18.26L4.947 22.208L6.522 14.28L0.587 8.792L8.614 7.84L12 0.5L15.386 7.84L23.413 8.792L17.478 14.28L19.053 22.208L12 18.26ZM12 15.968L16.247 18.345L15.298 13.572L18.871 10.267L14.038 9.694L12 5.275L9.962 9.695L5.129 10.267L8.702 13.572L7.753 18.345L12 15.968Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default MallStarIcon;
