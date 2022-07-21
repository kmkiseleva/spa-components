import React, { FC } from 'react';
import { IMallTitle } from './IMallTitle';
import './MallTitle.css';

const MallTitle: FC<IMallTitle> = ({
  color = '#000',
  margin = '0',
  textAlign = 'center',
  padding,
  children,
  level = 1,
  fontFamily,
  fontSize = 'medium',
  fontStyle = 'normal',
  fontWeight = 'normal',
  lineHeight = 'normal',
  classes,
}) => {
  const stylesSetting = {
    color: color,
    margin: margin,
    padding: padding,
    textAlign: textAlign,
    fontFamily: fontFamily,
    fontStyle: fontStyle,
    fontWeight: fontWeight,
    lineHeight: lineHeight,
    fontSize: fontSize,
  };

  switch (level) {
    case 2:
      return (
        <h2
          className={classes ? `mall-title ${classes}` : `mall-title`}
          style={stylesSetting}
        >
          {children}
        </h2>
      );
    case 3:
      return (
        <h3
          className={classes ? `mall-title ${classes}` : `mall-title`}
          style={stylesSetting}
        >
          {children}
        </h3>
      );
    case 4:
      return (
        <h4
          className={classes ? `mall-title ${classes}` : `mall-title`}
          style={stylesSetting}
        >
          {children}
        </h4>
      );
    default:
      return (
        <h1
          className={classes ? `mall-title ${classes}` : `mall-title`}
          style={stylesSetting}
        >
          {children}
        </h1>
      );
  }
};

export default MallTitle;
