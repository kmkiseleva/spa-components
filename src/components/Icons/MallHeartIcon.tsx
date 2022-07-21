import React, { FC } from 'react';
import { IMallIcons } from './IMallIcons';

const MallHeartIcon: FC<IMallIcons> = ({ size = 24, color = '#4399F7', fill = false, _id, rotate = 0 }) => {
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
            ? 'M12.001 4.529C14.35 2.42 17.98 2.49 20.243 4.757C22.505 7.025 22.583 10.637 20.479 12.993L11.999 21.485L3.521 12.993C1.417 10.637 1.496 7.019 3.757 4.757C6.022 2.493 9.645 2.417 12.001 4.529Z'
            : 'M12.001 4.529C14.35 2.42 17.98 2.49 20.243 4.757C22.505 7.025 22.583 10.637 20.479 12.993L11.999 21.485L3.521 12.993C1.417 10.637 1.496 7.019 3.757 4.757C6.022 2.493 9.645 2.417 12.001 4.529ZM18.827 6.17C17.327 4.668 14.907 4.607 13.337 6.017L12.002 7.215L10.666 6.018C9.091 4.606 6.676 4.668 5.172 6.172C3.682 7.662 3.607 10.047 4.98 11.623L12 18.654L19.02 11.624C20.394 10.047 20.319 7.665 18.827 6.17Z'
        }
        fill={color}
      />
    </svg>
  );
};

export default MallHeartIcon;
