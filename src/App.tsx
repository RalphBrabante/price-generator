import ProductCostAndShipmentCostForm from "./components/forms/ProductCostAndShipmentCostForm";


function App() {
  return (
    <main className="pcasc-app-wrapper">
      <div className="row flex">
        <div className="col col-6">
          <ProductCostAndShipmentCostForm />
        </div>
        <div className="col col-6">
          <p>Results</p>
        </div>
      </div>

    </main>
  );
}

export default App;
