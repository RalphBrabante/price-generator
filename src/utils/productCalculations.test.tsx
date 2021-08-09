import { getProductCostAndShipment, getPriceWithMarkup, getVatInclusive } from "./productCalculations";

describe("Product Calculation Module", () => {
  test("getProductCostAndShipment()", () => {
    const value = getProductCostAndShipment(500, 100, 10);
    expect(value).toEqual(510);
  });
  
  test("getPriceWithMarkup()", () => {
    const value = getPriceWithMarkup(500,100);
    expect(value).toEqual(1000);
  });

  test("getVatInclusive()", () => {
    const value = getVatInclusive(500,12);
    expect(value).toEqual(560);
  });
});
