import React, { FC, useState } from "react";
import "./MallProductCard.css";
import { Description } from "./IMallProductCard";
import descriptionIcon from "../../assets/icon-description.svg";
import charsIcon from "../../assets/icon-characteristics.svg";

const MallProductCardDescription: FC<Description> = ({ description }) => {
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
            className={active === "description" ? "button-disabled" : ""}
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
                <tr>
                  <td>Ткань</td>
                  <td>Хлопок</td>
                </tr>
                <tr>
                  <td>Вес</td>
                  <td>50 кг</td>
                </tr>
                <tr>
                  <td>Раскладной</td>
                  <td>-</td>
                </tr>
                <tr>
                  <td>Ширина</td>
                  <td>150 см</td>
                </tr>
                <tr>
                  <td>Глубина</td>
                  <td>80 см</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
};

export default MallProductCardDescription;
