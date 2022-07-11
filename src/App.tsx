import "./App.css";
// import MallProductCard from "./components/ProductCard/MallProductCard";
import MallProductCardPage from "./components/ProductCardPage/MallProductCardPage";

function App() {
  return (
    <div className="App">
      {/* <MallProductCard
        title="Диван Лени Textile Rustic"
        image="https://mall-cms.storage.yandexcloud.net/common/images/2e65f9b9-7aa8-40bc-99f9-915ed72897b0.svg"
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
        textMainColor="#000000"
        textSecondaryColor="#8A8A8A"
        onClickFavoritesButton={() => console.log("Favorites")}
        onClickCompareButton={() => console.log("Compare")}
        onClickCartButton={() => console.log("Add To Cart")}
      /> */}

      <MallProductCardPage
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
        labelNew={true}
        productSizes={["Большой", "Маленький", "Средний"]}
        productColors={[
          { name: "Красный", value: "red" },
          { name: "Крабовый", value: "pink" },
          { name: "Зеленый", value: "green" },
        ]}
        available="2"
        accentColor="#0364ed"
        accentSecondaryColor="#3bb273"
        textMainColor="#000000"
        textSecondaryColor="#8a8a8a"
        margin="32px"
        onClickFavoritesButton={() => console.log("Favorites")}
        onClickCompareButton={() => console.log("Compare")}
        onClickSizeButton={(value) => console.log(value)}
        onClickColorButton={(value) => console.log(value)}
        onClickCartButton={(value) => console.log(value)}
      />
    </div>
  );
}

export default App;
