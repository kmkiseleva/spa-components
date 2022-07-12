import React, { FC } from 'react';
import { IMallProductCardGallery } from './IMallProductCardGallery';
import './MallProductCardGallery.css';

const MallProductCardGallery: FC<IMallProductCardGallery> = ({ icon1, icon2, icon3, img }) => {
  return (
    <div className="mall-product-card__gallery">
      <div className="mall-small-images">
        <img
          src={icon1}
          alt="icon"
        />
        <img
          src={icon2}
          alt="icon"
        />
        <img
          src={icon3}
          alt="icon"
        />
      </div>
      <div className="mall-product-card__image">
        <img
          src={img}
          alt="img"
        />
      </div>
    </div>
  );
};

export default MallProductCardGallery;
