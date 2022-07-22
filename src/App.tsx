import "./App.css";
import MallAddress from "./components/Address/MallAddress";
import MallContact from "./components/Contact/MallContact";
import MallMenu from "./components/Menu/MallMenu";
import MallFooter from "./components/Footer/MallFooter";
import MallProductCard from "./components/ProductCard/MallProductCard";
import MallProductCardPage from "./components/ProductCardPage/MallProductCardPage";
import MallProductCardLong from "./components/ProductCardLong/MallProductCardLong";

import img from "./assets/img.jpg";
import img2 from "./assets/img-2.jpg";
import img3 from "./assets/1.jpg";
import img4 from "./assets/2.jpg";
import img5 from "./assets/3.jpg";
import img6 from "./assets/4.jpg";
import img7 from "./assets/test-img.jpg";
import mallcms from "./assets/mallcms-logo.png";

function App() {
  return (
    <div className="App">
      {/* <MallMenu
        borderRadius="4px"
        logo={img3}
        logoLink="#"
        accentColor="#0364ed"
        textMainColor="#000"
        textSecondaryColor="#8a8a8a"
        navigationData={[
          { url: "#", title: "Акции" },
          { url: "#", title: "Новинки" },
          { url: "#", title: "Одежда" },
          { url: "#", title: "Мебель" },
          { url: "#", title: "Бытовая техника" },
          { url: "#", title: "Спортивные товары" },
          { url: "#", title: "Косметика" },
        ]}
        search={true}
        login={true}
        basket={true}
        phone="88005550011"
        onSearch={() => {}}
        onLogin={() => {}}
        onBasket={() => {}}
      />

      <MallFooter
        padding="0 16px"
        phone="8 800 555-00-11"
        logo={mallcms}
        menuFontSize="15px"
        accentColor="#0364ed"
        textMainColor="#000"
        textSecondaryColor="#8a8a8a"
        backgroundSecondaryColor="#f5f5f6"
        phoneFontSize="15px"
        vk="#"
        ok="#"
        instagram="#"
        twitter="#"
        telegram="#"
        youtube="#"
        facebook="#"
        social={true}
        companyName="2022 @ OOO The Company Name"
        menuList={[
          { url: "#", title: "Каталог" },
          { url: "#", title: "О компании" },
          { url: "#", title: "Контакты" },
          { url: "#", title: "Доставка" },
          { url: "#", title: "Оплата" },
          { url: "#", title: "Личный кабинет" },
        ]}
        privacy_policy="#"
        public_offer="#"
        constructor_url="#"
      /> */}

      {/* <MallAddress
        padding="48px 0 0"
        margin="0 auto 48px auto"
        backgroundColor="transparent"
        textMainColor="#000"
        accentColor="#0364ed"
        borderRadius="25px"
        addresses={[
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
        ]}
      /> */}

      {/* <MallContact
        padding="0"
        margin="0 auto"
        backgroundColor="transparent"
        fontSize="15px"
        textMainColor="#000"
        accentColor="#0364ed"
        contactTitle="Отдел маркетинга"
        phone="88002342213"
        email="marketing@mallcms.ru"
      />
      <MallContact
        padding="0"
        margin="0 auto"
        backgroundColor="transparent"
        fontSize="15px"
        textMainColor="#000"
        accentColor="#0364ed"
        contactTitle="Отдел маркетинга"
        phone="88002342213"
        email="marketing@mallcms.ru"
      />
      <MallContact
        padding="0"
        margin="0 auto"
        backgroundColor="transparent"
        fontSize="15px"
        textMainColor="#000"
        accentColor="#0364ed"
        contactTitle="Отдел маркетинга"
        phone="88002342213"
        email="marketing@mallcms.ru"
      /> */}

      {/* <MallProductCardLong
        cardTitle="Диван Лени Textile Rustic"
        showImage={true}
        image={img7}
        // image="https://mall-cms.storage.yandexcloud.net/common/images/2e65f9b9-7aa8-40bc-99f9-915ed72897b0.svg"
        articul="P94M-LJ4K"
        currentColor={{ name: "Красный", value: "red" }}
        currentSize="Большой"
        actualPrice="17050"
        oldPrice={true}
        oldPriceValue="21990"
        showEconomy={true}
        availableCount="2"
        accentColor="#0364ed"
        accentSecondaryColor="#fbcd56"
        textMainColor="#000000"
        textSecondaryColor="#8a8a8a"
        borderWidth="1px"
        borderColor="#e9e9e9"
        borderRadius="8px"
        background="#ffffff"
        onClickFavoritesButton={() => console.log("Favorites")}
        onClickDeleteButton={() => console.log("Delete")}
        onClickCartButton={() => console.log("Add To Cart")}
      /> */}

      <MallProductCard
        cardTitle="Диван Лени Textile Rustic"
        image={img7}
        articul="P94M-LJ4K"
        labels={true}
        labelsValues={[
          { name: "new", value: "Новинка" },
          { name: "discount", value: "50%" },
          { name: "hit", value: "Хит" },
        ]}
        actualPrice="17050"
        oldPriceValue="21990"
        available={true}
        availableCount="2"
        cartButton="small"
        accentColor="#0364ED"
        accentSecondaryColor="#3BB273"
        backgroundColor="#fff"
        textMainColor="#000000"
        textSecondaryColor="#8A8A8A"
        onClickFavoritesButton={() => console.log("Favorites")}
        onClickCompareButton={() => console.log("Compare")}
        onClickCartButton={() => console.log("Add To Cart")}
      />

      {/* <MallProductCardPage
        title="Диван Лени Textile Rustic"
        description="Компактный диван «Каир» с универсальным углом гармонично впишется в
            любой современный или сдержанный классический интерьер. Эта модель
            представлена в практичной и износостойкой обивке из рогожки.
            Особенностью дивана является отсутствие подлокотников, что
            значительно увеличивает площадь посадочных мест, которых в данной
            модели предусмотрено три."
        characteristics={[
          { name: "Ткань", value: "Хлопок" },
          { name: "Вес", value: "50 кг" },
          { name: "Раскладной", value: "-" },
          { name: "Ширина", value: "150 см" },
          { name: "Глубина", value: "80 см" },
        ]}
        actualPrice="17 050"
        oldPriceValue="21 990"
        labels={true}
        labelsValues={[
          { name: "new", value: "Новинка" },
          { name: "discount", value: "50%" },
          { name: "hit", value: "Хит" },
        ]}
        productSizes={["Большой", "Маленький", "Средний"]}
        productColors={[
          { name: "Красный", value: "red" },
          { name: "Крабовый", value: "pink" },
          { name: "Зеленый", value: "green" },
        ]}
        available={true}
        availableCount="2"
        accentColor="#0364ed"
        accentSecondaryColor="#3bb273"
        textMainColor="#000000"
        textSecondaryColor="#8a8a8a"
        margin="16px"
        onClickFavoritesButton={() => console.log("Favorites")}
        onClickCompareButton={() => console.log("Compare")}
        onClickSizeButton={(value) => console.log(value)}
        onClickColorButton={(value) => console.log(value)}
        onClickCartButton={(value) => console.log(value)}
      /> */}
    </div>
  );
}

export default App;
