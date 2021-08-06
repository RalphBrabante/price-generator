import React, { useState } from "react"
import { preventDeafult } from "../../utils/preventDefault"
import Button from "../buttons/Button"
import RadioField from "./fields/CheckboxField"
import InputField from "./fields/InputField"


interface FormDataState {
    productCost?: number,
    shipmentCost?: number,
    shipmentNumberOfItems?: number
    taxRate: number
    otherTaxesPercentage: number
}

const ProductCostAndShipmentCostForm = () => {

    const [formData, setFormData] = useState({
        productCost: undefined,
        shipmentCost: undefined,
        shipmentNumberOfItems: undefined,
        taxRate: 12
    } as FormDataState)

    const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState): FormDataState => {
            return {
                ...prevState,
                [e.target.name]: parseInt(e.target.value)
            }
        })
    }



    return (
        <form onSubmit={preventDeafult} className="pcasc-form">
            <InputField fieldClass="product-cost" fieldType="number" fieldName="productCost" changeHandler={changeHandler} fieldValue={formData.productCost} fieldPlaceholder="Product Cost" />
            <InputField fieldClass="shipment-cost" fieldType="number" fieldName="shipmentCost" changeHandler={changeHandler} fieldValue={formData.shipmentCost} fieldPlaceholder="Shipment Cost" />
            <InputField fieldClass="shipment-number-of-items" fieldType="number" fieldName="shipmentNumberOfItems" changeHandler={changeHandler} fieldValue={formData.shipmentNumberOfItems} fieldPlaceholder="Shipment Item Quantity" />
            <RadioField fieldData={[{ cBoxName: 'taxType', value: "Vatable" }, { cBoxName: 'taxType', value: "Non-vatable" }]} />
            <Button btnClass="primary stretch-width" btnText="Calculate" />
        </form>

    )
}

export default ProductCostAndShipmentCostForm