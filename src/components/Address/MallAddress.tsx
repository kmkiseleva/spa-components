import React, { FC, useState } from 'react';
import { IMallAddress } from './IMallAddress';
import './MallAddress.css';

const MallAddress: FC<IMallAddress> = ({
  padding = '48px 0 0',
  margin = '0 auto 48px auto',
  backgroundColor = 'transparent',
  textMainColor = '#000',
  accentColor = '#0364ed',
  borderRadius = '8px',
  addresses = [
    {
      name: 'Центральный офис',
      address: 'Екатеринбург, ул. Ленина, 52, офис 16',
    },
    { name: 'Магазин на Ленина', address: 'Екатеринбург, ул. Ленина, 156' },
    {
      name: 'Магазин на Восточной',
      address: 'Екатеринбург, ул. Восточная, 21б',
    },
    { name: 'Сервисный центр', address: 'Екатеринбург, ул. Комсомольская, 1' },
  ],
}) => {
  const styleSettings = {
    padding: padding,
    margin: margin,
    background: backgroundColor,
    color: textMainColor,
  };
  const [active, setActive] = useState(1);
  const onClickAddressHandler = (index: number) => {
    setActive(index);
  };

  return (
    <div
      className="mall-address__container"
      style={styleSettings}
    >
      <div className="mall-address__row">
        {addresses.map((item, index) => (
          <div
            key={index}
            className="mall-address__item"
            style={
              active === index ? { border: '2px solid', borderColor: accentColor } : { border: '1px solid #e9e9e9' }
            }
            onClick={() => onClickAddressHandler(index)}
            onKeyDown={() => onClickAddressHandler(index)}
            role="button"
            tabIndex={index}
          >
            <div className="mall-address__item-name">{item.name}</div>
            <div className="mall-address__item-address">{item.address}</div>
          </div>
        ))}
      </div>
      <div
        className="mall-address__map"
        style={{ borderRadius: borderRadius }}
      >
        {/* <img
          src=""
          alt="map"
        /> */}
      </div>
    </div>
  );
};

export default MallAddress;
