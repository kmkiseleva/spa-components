import React, { FC } from 'react';
import './MallSliderArrow.css';

type PropTypes = {
  fill?: string;
  direction?: 'up' | 'down' | 'left' | 'right';
  classes?: string;
  onClick?: () => void;
};

const MallSliderArrow: FC<PropTypes> = ({ fill, direction, onClick }) => {
  const transform = () => {
    switch (direction) {
      case 'down':
        return 'rotate(-90 24 24)';
      case 'left':
        return 'rotate(0 24 24)';
      case 'right':
        return 'rotate(180 24 24)';
      case 'up':
        return 'rotate(90 24 24)';
      default:
        return 'rotate(0 24 24)';
    }
  };
  return (
    <button
      onClick={onClick}
      className="mall-slider__arrow-button"
    >
      <div>
        <svg
          viewBox="0 0 48 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="48"
            height="48"
            rx="24"
            fill={fill || '#4299FF'}
          />
          <path
            transform={transform()}
            d="M19.828 23.0002H32V25.0002H19.828L25.192 30.3642L23.778 31.7782L16 24.0002L23.778 16.2222L25.192 17.6362L19.828 23.0002Z"
            fill="white"
          />
        </svg>
      </div>
    </button>
  );
};

export default MallSliderArrow;
