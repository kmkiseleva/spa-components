import React, { FC } from 'react';
import { IMallParagraph } from './IMallParagraph';
import './MallParagraph.css';

const MallParagraph: FC<IMallParagraph> = ({
  color = '#000',
  margin = '0',
  textAlign = 'center',
  padding,
  children,
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

  return (
    <p
      className={classes ? `mall-paragraph ${classes}` : `mall-paragraph`}
      style={stylesSetting}
    >
      {children}
    </p>
  );
};

export default MallParagraph;
