import React, { FC, useRef } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';
import { IMallSlider } from './IMallSlider';
import './MallSlider.css';
import MallSliderArrow from './arrows/MallSliderArrow';

const MallSlider: FC<IMallSlider> = ({
  images,
  arrows = true,
  accentColor = '#0364ed',
  width,
  height,
  backgroundColor,
  borderRadius,
  autoplaySpeed = 3000,
  autoplay = false,
  margin,
  padding,
  dots,
  navigation = false,
}) => {
  const refImg = useRef<ImageGallery | null>(null);

  const slideStyles = {
    width: width,
    height: height,
    backgroundColor: backgroundColor,
    borderRadius: borderRadius,
  };

  const containerStyles = {
    margin: margin,
    padding: padding,
  };

  const onNext = () => {
    refImg.current?.slideToIndex(refImg.current?.getCurrentIndex() + 1);
  };
  const onPrev = () => {
    refImg.current?.slideToIndex(refImg.current?.getCurrentIndex() - 1);
  };

  return (
    <div style={containerStyles}>
      <div
        className="mall-slider__container"
        style={slideStyles}
      >
        <ImageGallery
          additionalClass="mall-slider"
          showBullets={dots}
          slideDuration={autoplaySpeed}
          showNav={navigation}
          ref={refImg}
          showThumbnails={false}
          autoPlay={autoplay}
          showFullscreenButton={false}
          showPlayButton={false}
          items={images}
        />
      </div>

      {arrows && !navigation && (
        <div className="mall-slider__arrow-container">
          <MallSliderArrow onClick={onPrev} />
          <MallSliderArrow
            fill={accentColor}
            direction="right"
            onClick={onNext}
          />
        </div>
      )}
    </div>
  );
};

export default MallSlider;
