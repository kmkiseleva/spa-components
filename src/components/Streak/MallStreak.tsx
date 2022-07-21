import React, { FC } from 'react';
import { IMallStreak } from './IMallStreak';
import './MallStreak.css';

const MallStreak: FC<IMallStreak> = ({
  backgroundColor,
  backgroundUrl,
  backgroundPosition,
  borderColor = 'black',
  borderRadius,
  borderStyle = 'none',
  borderWidth,
  margin,
  minHeight = '300px',
  backgroundRepeat = 'no-repeat',
  backgroundSize = 'contain',
  width,
  classes,
  textAlign = 'center',
  accentColor = '#0364ed',
  textMainColor = '#fff',
  buttonText,
  headingText,
  text,
  showButton = true,
  fontSize,
  paddingTop = '40px',
  paddingRight = '70px',
  paddingBottom = '40px',
  paddingLeft = '70px',
  buttonFontSize = '16px',
}) => {
  const stylesSetting = {
    backgroundColor: backgroundColor,
    backgroundPosition: backgroundPosition,
    borderColor: borderColor,
    borderRadius: borderRadius,
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    margin: margin,
    minHeight: minHeight,
    backgroundRepeat: backgroundRepeat,
    backgroundSize: backgroundSize,
    width: width,
    fontSize: fontSize,
    textAlign: textAlign,
    color: textMainColor,
    paddingBottom: paddingBottom,
    paddingLeft: paddingLeft,
    paddingRight: paddingRight,
    paddingTop: paddingTop,
  };

  const buttonStyle = {
    backgroundColor: accentColor,
    color: textMainColor,
    fontSize: buttonFontSize,
  };

  return (
    <div
      className={classes ? `mall-streak  ${classes}` : `mall-streak `}
      style={stylesSetting}
    >
      {backgroundUrl && (
        <img
          className="mall-streak__background"
          src={backgroundUrl}
          alt="Фоновая картинка"
        />
      )}
      <div className="mall-streak__content">
        {headingText && (
          <h1
            style={{ color: textMainColor }}
            className="mall-streak__title"
          >
            {headingText}
          </h1>
        )}
        {text && (
          <p
            style={{ color: textMainColor, fontSize: fontSize }}
            className="mall-streak__paragraph"
          >
            {text}
          </p>
        )}
        {buttonText && showButton && (
          <button
            style={buttonStyle}
            className="mall-streak__button"
          >
            {buttonText}
          </button>
        )}
      </div>
    </div>
  );
};

export default MallStreak;
