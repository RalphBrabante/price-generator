export const getProductCostAndShipment = (
  productCost: number = 0,
  shipmentCost: number = 0,
  shipmentQty: number = 0
): number => {
  const shipmentCostPerItem = shipmentCost / shipmentQty;

  console.log(shipmentCost / shipmentQty);
  return productCost + shipmentCostPerItem;
};
