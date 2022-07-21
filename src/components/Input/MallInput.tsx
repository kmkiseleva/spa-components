import React, { FC, useState } from 'react';
import { IMallInput } from './IMallInput';
import './MallInput.css';

const MallInput: FC<IMallInput> = ({
  onBlur,
  onChange,
  type = 'text',
  placeholder,
  value,
  disabled = false,
  ref,
  _id,
  required = false,
  name,
  classes = '',
  width = '100%',
  height = '48px',
  borderRadius = '0',
  borderColor = '#e0e0e0',
  borderWidth = '2px',
  boxShadow = 'none',
  boxShadowHover = 'none',
  borderStyle = 'solid',
  focusColor = '#2f80ed',
  padding = '10px',
  error = false,
  errorText = 'Текст ошибки',
  pattern,
}) => {
  const [hover, setHover] = useState(false);
  const stylesSetting = {
    borderColor: error ? '#e15554' : borderColor,
    boxShadow: hover ? boxShadowHover : boxShadow,
    borderStyle: borderStyle,
    borderWidth: borderWidth,
    borderRadius: borderRadius,
    width: width,
    height: height,
    padding: padding,
    outlineColor: error ? '#e15554' : focusColor,
  };

  return (
    <div>
      <input
        type={type}
        style={stylesSetting}
        className={classes ? `mall-input ${classes}` : `mall-input`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        ref={() => ref}
        id={_id}
        required={required}
        name={name}
        autoComplete="off"
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        pattern={pattern}
      />
      {error && errorText && <span className={'mall-input__error'}>{errorText}</span>}
    </div>
  );
};

export default MallInput;
