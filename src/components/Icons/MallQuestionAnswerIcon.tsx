import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallQuestionAnswerIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', fill = false, _id, rotate = 0 }) => {
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
            ? 'M8 18H18.237L20 19.385V9H21C21.2652 9 21.5196 9.10536 21.7071 9.29289C21.8946 9.48043 22 9.73478 22 10V23.5L17.545 20H9C8.73478 20 8.48043 19.8946 8.29289 19.7071C8.10536 19.5196 8 19.2652 8 19V18ZM5.455 16L1 19.5V4C1 3.73478 1.10536 3.48043 1.29289 3.29289C1.48043 3.10536 1.73478 3 2 3H17C17.2652 3 17.5196 3.10536 17.7071 3.29289C17.8946 3.48043 18 3.73478 18 4V16H5.455Z'
            : 'M5.455 15L1 18.5V3C1 2.73478 1.10536 2.48043 1.29289 2.29289C1.48043 2.10536 1.73478 2 2 2H17C17.2652 2 17.5196 2.10536 17.7071 2.29289C17.8946 2.48043 18 2.73478 18 3V15H5.455ZM4.763 13H16V4H3V14.385L4.763 13ZM8 17H18.237L20 18.385V8H21C21.2652 8 21.5196 8.10536 21.7071 8.29289C21.8946 8.48043 22 8.73478 22 9V22.5L17.545 19H9C8.73478 19 8.48043 18.8946 8.29289 18.7071C8.10536 18.5196 8 18.2652 8 18V17Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default MallQuestionAnswerIcon;
