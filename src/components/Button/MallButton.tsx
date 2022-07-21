import React, { FC, useState } from 'react';
import { IMallButton } from './IMallButton';
import './MallButton.css';

const MallButton: FC<IMallButton> = ({
  children,
  _id,
  minWidth = 'auto',
  backgroundColor,
  backgroundColorHover,
  color,
  colorHover,
  boxShadow = 'none',
  boxShadowHover = 'none',
  textShadow = 'none',
  textShadowHover = 'none',
  borderStyle = 'none',
  borderWidth = '1px',
  borderColor,
  borderRadius = '0',
  title = '',
  disabled = false,
  onClick,
  classes = '',
  type,
}) => {
  const [hover, setHover] = useState(false);
  const stylesSetting = {
    backgroundColor: hover ? backgroundColorHover : backgroundColor,
    color: hover ? colorHover : color,
    boxShadow: hover ? boxShadowHover : boxShadow,
    textShadow: hover ? textShadowHover : textShadow,
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    borderColor: borderColor,
    borderRadius: borderRadius,
    minWidth: minWidth,
  };

  return (
    <button
      id={_id}
      className={classes ? `mall-button ${classes}` : `mall-button`}
      style={stylesSetting}
      disabled={disabled}
      title={title}
      onClick={onClick}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      type={type}
    >
      {children}
    </button>
  );
};

export default MallButton;
