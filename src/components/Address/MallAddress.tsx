import React, { FC, useState } from "react";
import { YMaps, Map, FullscreenControl, Placemark } from "react-yandex-maps";
import { IMallAddress } from "./IMallAddress";
import "./MallAddress.css";

const MallAddress: FC<IMallAddress> = ({
  padding = "48px 0 0",
  margin = "0 auto 48px auto",
  backgroundColor = "transparent",
  textMainColor = "#000",
  accentColor = "#0364ed",
  borderRadius = "8px",
  addresses = [
    {
      name: "Центральный офис",
      address: "Екатеринбург, ул. Ленина, 52, офис 16",
      coordinates: [56.839848, 60.624981],
    },
    {
      name: "Магазин на Ленина",
      address: "Екатеринбург, ул. Ленина, 156",
      coordinates: [56.839513, 60.612404],
    },
    {
      name: "Магазин на Восточной",
      address: "Екатеринбург, ул. Восточная, 21б",
      coordinates: [56.828005, 60.638545],
    },
    {
      name: "Сервисный центр",
      address: "Екатеринбург, ул. Комсомольская, 1",
      coordinates: [56.856914, 60.654347],
    },
  ],
}) => {
  const styleSettings = {
    padding: padding,
    margin: margin,
    background: backgroundColor,
    color: textMainColor,
  };
  const [active, setActive] = useState(0);
  const onClickAddressHandler = (index: number) => {
    setActive(index);
  };

  return (
    <YMaps>
      <div className="mall-address__container" style={styleSettings}>
        <div className="mall-address__row">
          {addresses.map((item, index) => (
            <div
              key={index}
              className="mall-address__item"
              style={
                active === index
                  ? { border: "2px solid", borderColor: accentColor }
                  : { border: "1px solid #e9e9e9" }
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
          <Map
            state={{
              center: addresses[active].coordinates,
              zoom: 15,
            }}
            width="100%"
            height="100%"
          >
            <FullscreenControl options={{ float: "left" }} />
            <Placemark geometry={addresses[active].coordinates} />
          </Map>
        </div>
      </div>
    </YMaps>
  );
};

export default MallAddress;
