import "./App.css";
import MallProductCard from "./components/ProductCard/MallProductCard";

function App() {
  return (
    <div className="App">
      <MallProductCard
        description="Компактный диван «Каир» с универсальным углом гармонично впишется в
            любой современный или сдержанный классический интерьер. Эта модель
            представлена в практичной и износостойкой обивке из рогожки.
            Особенностью дивана является отсутствие подлокотников, что
            значительно увеличивает площадь посадочных мест, которых в данной
            модели предусмотрено три."
      />
    </div>
  );
}

export default App;
