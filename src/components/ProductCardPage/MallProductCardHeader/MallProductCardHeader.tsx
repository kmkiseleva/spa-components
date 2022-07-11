import React, { FC } from "react";
import { ProductHeader } from "./IMallProductCardHeader";
import "./MallProductCardHeader.css";

const MallProductCardHeader: FC<ProductHeader> = ({ title }) => {
  return <h3 className="mall-product-card__title">{title}</h3>;
};

export default MallProductCardHeader;
