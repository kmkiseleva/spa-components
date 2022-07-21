import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallShieldCheckIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', fill = false, _id, rotate = 0 }) => {
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
            ? 'M12 1L20.217 2.826C20.674 2.928 21 3.333 21 3.802V13.789C21 15.795 19.997 17.669 18.328 18.781L12 23L5.672 18.781C4.002 17.668 3 15.795 3 13.79V3.802C3 3.333 3.326 2.928 3.783 2.826L12 1ZM16.452 8.222L11.502 13.171L8.674 10.343L7.26 11.757L11.503 16L17.867 9.636L16.452 8.222Z'
            : 'M12 1L20.217 2.826C20.674 2.928 21 3.333 21 3.802V13.789C21 15.795 19.997 17.669 18.328 18.781L12 23L5.672 18.781C4.002 17.668 3 15.795 3 13.79V3.802C3 3.333 3.326 2.928 3.783 2.826L12 1ZM12 3.049L5 4.604V13.789C5 15.126 5.668 16.375 6.781 17.117L12 20.597L17.219 17.117C18.332 16.375 19 15.127 19 13.79V4.604L12 3.049ZM16.452 8.222L17.867 9.636L11.503 16L7.26 11.757L8.674 10.343L11.502 13.171L16.452 8.221V8.222Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default MallShieldCheckIcon;
