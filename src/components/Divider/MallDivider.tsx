import React, { FC, useEffect, useState } from 'react';
import { IMallDivider } from './IMallDivider';
import './MallDivider.css';

const MallDivider: FC<IMallDivider> = ({
  width = '100%',
  borderColor = '#c2c0c0',
  borderStyle = 'solid',
  borderWidth = '2px',
  margin = '16px 0',
  textPosition,
  textMainColor = '#000',
  children,
}) => {
  const stylesSetting = {
    borderColor: borderColor,
    borderTopWidth: borderWidth,
    borderTopStyle: borderStyle,
  };

  const styleSize = {
    margin: margin,
    width: width,
  };

  const [position, setPosition] = useState({
    left: '100%',
    right: '100%',
  });

  useEffect(() => {
    if (children) {
      switch (textPosition) {
        case 'left':
          setPosition({ left: '100%', right: 'auto' });
          break;
        case 'right':
          setPosition({ left: 'auto', right: '100%' });
          break;
        case 'center':
          setPosition({ left: '100%', right: '100%' });
          break;
      }
    }
  }, [children, textPosition]);

  return children ? (
    <div
      style={styleSize}
      className="mall-divider__text-wrapper"
    >
      <span
        style={{ ...stylesSetting, width: position.right }}
        className="mall-divider__before"
      />
      <span
        className="mall-divider__text"
        style={{ color: textMainColor }}
      >
        {children}
      </span>
      <span
        style={{ ...stylesSetting, width: position.left }}
        className="mall-divider__after"
      />
    </div>
  ) : (
    <div style={{ ...stylesSetting, ...styleSize }} />
  );
};

export default MallDivider;
