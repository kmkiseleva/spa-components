import React, { FC, useState } from 'react';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import './MallShowcase.css';
import MallProductCard from '../ProductCard/MallProductCard';
import { IMallShowcase } from './IMallShowcase';

const MallShowcase: FC<IMallShowcase> = ({
  productList,
  accentColor = '#0364ed',
  accentSecondaryColor = '#3bb273',
  textMainColor = '#000000',
  textSecondaryColor = '#8a8a8a',
}) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 750 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 750, min: 0 },
      items: 1,
    },
  };

  const [windowSize, setWindowSize] = useState(window.innerWidth);
  window.addEventListener('resize', () => setWindowSize(window.innerWidth));

  return (
    <Carousel
      draggable
      responsive={responsive}
      swipeable
      infinite={true}
      centerMode={windowSize > 541}
      autoPlaySpeed={1000}
      keyBoardControl={true}
      transitionDuration={500}
      containerClass="showcase-container"
      removeArrowOnDeviceType={['mobile']}
      itemClass="carousel-item-padding-20-px"
    >
      {productList.map((item) => (
        <MallProductCard
          key={item.id}
          image={item.url}
          actualPrice={item.price}
          articul={item.description}
          available
          availableCount={item.quantity}
          cartButton="none"
          labels
          labelsValues={[]}
          onClickCartButton={() => {}}
          cardTitle={item.title}
          accentColor={accentColor}
          accentSecondaryColor={accentSecondaryColor}
          textMainColor={textMainColor}
          textSecondaryColor={textSecondaryColor}
        />
      ))}
    </Carousel>
  );
};

export default MallShowcase;
