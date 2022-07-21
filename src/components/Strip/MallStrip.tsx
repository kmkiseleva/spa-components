import React, { FC } from 'react';
import { IMallStrip } from './IMallStrip';
import './MallStrip.css';

const MallStrip: FC<IMallStrip> = ({
  backgroundColor,
  backgroundUrl,
  backgroundPosition,
  borderColor = 'black',
  borderRadius,
  borderStyle,
  borderWidth,
  margin = '16px 0',
  minHeight = '300px',
  backgroundRepeat = 'no-repeat',
  padding,
  backgroundSize = 'contain',
  width,
  children,
  classes,
}) => {
  const stylesSetting = {
    backgroundColor: backgroundColor,
    backgroundPosition: backgroundPosition,
    borderColor: borderColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    margin: margin,
    padding: padding,
    minHeight: minHeight,
    backgroundImage: `url(${backgroundUrl})`,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    width: width,
  };

  return (
    <div
      className={classes ? `mall-strip ${classes}` : `mall-strip`}
      style={stylesSetting}
    >
      {children}
    </div>
  );
};

export default MallStrip;
