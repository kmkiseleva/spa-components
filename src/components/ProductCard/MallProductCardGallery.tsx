import "./MallProductCard.css";
import img from "../../assets/test-img.jpg";
import icon1 from "../../assets/icon-1.png";
import icon2 from "../../assets/icon-2.png";
import icon3 from "../../assets/icon-3.png";

const MallProductCardGallery = () => {
  return (
    <div className="mall-product-card__gallery">
      <div className="mall-small-images">
        <img src={icon1} alt="icon" />
        <img src={icon2} alt="icon" />
        <img src={icon3} alt="icon" />
      </div>
      <div className="mall-product-card__image">
        <img src={img} alt="img" />
      </div>
    </div>
  );
};

export default MallProductCardGallery;
