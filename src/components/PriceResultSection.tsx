import { useAppSelector } from "../app/store/hooks";
import { currencyFormatter } from "../utils/currency";
import {
  getPriceWithMarkup,
  getProductCostAndShipment,
  getVatInclusive,
} from "../utils/productCalculations";

const PriceResultSection = () => {
  const data = useAppSelector((state) => state.pscascReducer.object);

  return (
    <div>
      <h2>Calculation Result</h2>
      <p>Product Cost: {currencyFormatter(data.productCost)}</p>
      <p>Other Taxs: {data.otherTaxesPercentage}%</p>
      <p>VAT: {data.taxRate}%</p>
      <br />
      <p>
        Product Cost with Shipment:{" "}
        {currencyFormatter(
          getProductCostAndShipment(
            data.productCost,
            data.shipmentCost,
            data.shipmentNumberOfItems
          )
        )}
      </p>
      <p>
        Vatable Sales ({data.markupPercentage}% Markup):{" "}
        {currencyFormatter(
          getPriceWithMarkup(
            getProductCostAndShipment(
              data.productCost,
              data.shipmentCost,
              data.shipmentNumberOfItems
            ),
            data.markupPercentage
          )
        )}
      </p>

      <p>
        Vat Inclusive:{" "}
        {currencyFormatter(
          getVatInclusive(
            getPriceWithMarkup(
              getProductCostAndShipment(
                data.productCost,
                data.shipmentCost,
                data.shipmentNumberOfItems
              ),
              data.markupPercentage
            ),
            data.taxRate
          )
        )}
      </p>
    </div>
  );
};

export default PriceResultSection;
