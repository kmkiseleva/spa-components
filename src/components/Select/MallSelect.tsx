/* eslint-disable react-hooks/exhaustive-deps */
import React, { FC, useState, useRef, useEffect } from 'react';
import { useOnClickOutside } from '../../hooks/useOnClickOutside';
import { IMallSelect } from './IMallSelect';
import './MallSelect.css';

const MallSelect: FC<IMallSelect> = ({
  _id,
  options,
  currentOption,
  setCurrentOption,
  classes,
  placeholder,
  placeholderColor = '#777',
  required = false,
  isAttemptFormSubmit = false,
  errorColor = '#e15554',
  focusColor = '#2f80ed',
  width = '240px',
  borderStyle = 'solid',
  borderWidth = '2px',
  borderColor = '#000',
  minHeight = '56px',
  boxShadow = '0px 8px 8px rgba(0, 0, 0, 0.25)',
  boxShadowHover = 'none',
  optionsShadow = '0px 8px 8px rgba(0, 0, 0, 0.08)',
}): JSX.Element => {
  const [isShowVariants, setIsShowVariants] = useState(false);
  const ref = useRef(null);
  const [hover, setHover] = useState(false);

  const handleClickOutside = () => {
    setIsShowVariants(false);
  };

  useOnClickOutside(ref, handleClickOutside);

  const closeByButton = (evt: KeyboardEvent) => {
    if (evt.key === 'Escape' || evt.key === 'Esc') {
      setIsShowVariants(false);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', closeByButton, false);
    return () => {
      document.removeEventListener('keydown', closeByButton, false);
    };
  }, []);

  const handleChooseVariant = (variant: string) => {
    setCurrentOption(variant);
    setIsShowVariants(false);
  };

  const [isSendingError, setIsSendingError] = useState(!!currentOption);

  useEffect(() => {
    if (required && isAttemptFormSubmit && !currentOption) {
      setIsSendingError(true);
    } else {
      setIsSendingError(false);
    }
  }, [isAttemptFormSubmit, currentOption]);

  return (
    <div
      id={_id}
      className={classes ? `mall-select ${classes}` : `mall-select`}
      style={{ width: width }}
    >
      <button
        className={`mall-select__current-variant ${isShowVariants && 'menu-is-open'}`}
        style={{
          borderStyle: borderStyle,
          borderWidth: borderWidth,
          borderColor: `${isSendingError ? errorColor : borderColor}`,
          outlineColor: focusColor,
          minHeight: minHeight,
          boxShadow: hover ? boxShadowHover : boxShadow,
          width: width,
        }}
        type="button"
        onClick={(evt) => {
          evt.stopPropagation();
          setIsShowVariants(!isShowVariants);
        }}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
      >
        {currentOption ? (
          <span>{currentOption}</span>
        ) : (
          <span style={{ color: `${placeholderColor}` }}>{placeholder}</span>
        )}
      </button>
      {isShowVariants && (
        <ul
          className="mall-select__variants-list"
          style={{ boxShadow: optionsShadow, width: width }}
          ref={ref}
        >
          {options.map((option) => (
            <li
              className="mall-select__variants-item"
              key={option}
            >
              <button
                type="button"
                onClick={() => handleChooseVariant(option)}
                style={{ outlineColor: focusColor }}
              >
                {option}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default MallSelect;
