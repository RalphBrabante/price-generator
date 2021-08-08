export const getProductCostAndShipment = (
  productCost: number = 0,
  shipmentCost: number = 0,
  shipmentQty: number = 0
): number => {
  const shipmentCostPerItem = shipmentCost / shipmentQty;

  return productCost + shipmentCostPerItem;
};

export const getPriceWithMarkup = (
  productCostAndShipment: number = 0,
  markupPercentage: number = 0
): number => {
  return productCostAndShipment * (1 + markupPercentage / 100);
};
