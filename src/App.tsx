
import ProductCostAndShipmentCostForm from "./components/forms/ProductCostAndShipmentCostForm";
import PriceResultSection from "./components/PriceResultSection";


function App() {


  return (
    <main className="pcasc-app-wrapper">
      <div className="row flex">
        <div className="col col-6">
          <ProductCostAndShipmentCostForm />
        </div>
        <div className="col col-6">
          <PriceResultSection/>
        </div>
      </div>

    </main>
  );
}

export default App;
