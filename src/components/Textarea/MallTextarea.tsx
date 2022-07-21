import React, { FC, useEffect, useRef, useState } from 'react';
import { IMallTextarea } from './IMallTextarea';
import './MallTextarea.css';

const MallTextarea: FC<IMallTextarea> = ({
  onBlur,
  onChange,
  placeholder,
  value,
  disabled,
  _id,
  required = false,
  name,
  classes,
  width = '100%',
  height = 'auto',
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
  autosize = false,
  rows = 3,
}) => {
  const textareaRef = useRef<HTMLTextAreaElement>(null);
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

  useEffect(() => {
    if (textareaRef && textareaRef.current) {
      textareaRef.current.style.height = 'auto';
      const scrollHeight = textareaRef.current.scrollHeight;
      textareaRef.current.style.height = scrollHeight + 'px';
    }
  }, [value]);

  return (
    <div>
      <textarea
        style={stylesSetting}
        className={classes ? `mall-textarea ${classes}` : `mall-textarea`}
        placeholder={placeholder}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
        disabled={disabled}
        ref={autosize ? textareaRef : null}
        id={_id}
        required={required}
        name={name}
        autoComplete="off"
        rows={rows}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      />
      {error && errorText && <span className={'mall-textarea__error'}>{errorText}</span>}
    </div>
  );
};

export default MallTextarea;
