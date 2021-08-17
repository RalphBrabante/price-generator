import { useEffect } from "react";
import { useAppSelector } from "../app/store/hooks";
import { currencyFormatter } from "../utils/currency";
import {
  getPriceWithMarkup,
  getProductCostAndShipment,
  getVatInclusive,
  getOtherTaxInclusive,
} from "../utils/productCalculations";

const PriceResultSection = () => {
  const data = useAppSelector((state) => state.pscascReducer.object);

  useEffect(() => {}, [data.productCost]);
  return (
    <div>
      <h2>Calculation Result</h2>
      <p>Product Cost: {currencyFormatter(data.productCost)}</p>
      <p>Other Taxs: {data.otherTaxesPercentage}%</p>
      <p>VAT: {data.taxRate}%</p>
      <br />
      <p>Product Cost with Shipment: {currencyFormatter()}</p>
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
        With Other Tax Inclusive (33%)
        {getOtherTaxInclusive(
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
            getOtherTaxInclusive(
              getPriceWithMarkup(
                getProductCostAndShipment(
                  data.productCost,
                  data.shipmentCost,
                  data.shipmentNumberOfItems
                ),
                data.markupPercentage
              )
            ),
            data.taxRate
          )
        )}
      </p>
    </div>
  );
};

export default PriceResultSection;
