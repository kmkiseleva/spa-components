import React, { FC, useState } from "react";
import "./MallProductCard.css";
import { IMallProductCardDescription } from "./IMallProductCard";
import descriptionIcon from "../../assets/icon-description.svg";
import charsIcon from "../../assets/icon-characteristics.svg";

const MallProductCardDescription: FC<IMallProductCardDescription> = ({
  description,
  characteristics,
}) => {
  const [active, setActive] = useState("description");

  return (
    <>
      <div className="mall-product-card__footer">
        <div className="mall-footer__buttons">
          <button
            className={active === "description" ? "" : "button-disabled"}
            onClick={() => setActive("description")}
          >
            <img src={descriptionIcon} alt="icon" /> Описание товара
          </button>
          <button
            className={active === "char" ? "" : "button-disabled"}
            onClick={() => setActive("chars")}
          >
            <img src={charsIcon} alt="icon" /> Характеристики
          </button>
        </div>
        <div className="mall-footer__description">
          <p
            className={
              active === "description"
                ? "description-active"
                : "description-disabled"
            }
          >
            {description}
          </p>
          <div
            className={active === "description" ? "description-disabled" : ""}
          >
            <table className="table">
              <tbody>
                {characteristics.map((item, index) => (
                  <tr key={index}>
                    <td>{item.name}</td>
                    <td>{item.value}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MallProductCardDescription;
