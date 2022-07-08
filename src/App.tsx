import "./App.css";
import MallProductCard from "./components/ProductCard/MallProductCard";

function App() {
  return (
    <div className="App">
      <MallProductCard
        title="Диван Лени Textile Rustic"
        description="Компактный диван «Каир» с универсальным углом гармонично впишется в
            любой современный или сдержанный классический интерьер. Эта модель
            представлена в практичной и износостойкой обивке из рогожки.
            Особенностью дивана является отсутствие подлокотников, что
            значительно увеличивает площадь посадочных мест, которых в данной
            модели предусмотрено три."
        actualPrice="17 050"
        oldPrice={true}
        oldPriceValue="21 990"
        labelNew={true}
        productColors={[
          { name: "Красный", value: "red" },
          { name: "Крабовый", value: "pink" },
          { name: "Зеленый", value: "green" },
        ]}
        available="2"
        cartButtonBackground="#0364ED"
        onClickCartButton={() => console.log("Cart")}
        margin="32px"
      />
    </div>
  );
}

export default App;
