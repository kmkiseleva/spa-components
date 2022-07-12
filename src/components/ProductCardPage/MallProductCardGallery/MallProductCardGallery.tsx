import React, { FC } from "react";
import { IMallProductCardGallery } from "./IMallProductCardGallery";
import "./MallProductCardGallery.css";

import icon11 from "../../../assets/icon-1.png";
import icon22 from "../../../assets/icon-2.png";
import icon33 from "../../../assets/icon-3.png";
import img1 from "../../../assets/test-img.jpg";

const MallProductCardGallery: FC<IMallProductCardGallery> = ({
  icon1,
  icon2,
  icon3,
  img,
}) => {
  return (
    <div className="mall-product-card__gallery">
      <div className="mall-small-images">
        <img src={icon11} alt="icon" />
        <img src={icon22} alt="icon" />
        <img src={icon33} alt="icon" />
      </div>
      <div className="mall-product-card__image">
        <img src={img1} alt="img" />
      </div>
    </div>
  );
};

export default MallProductCardGallery;
