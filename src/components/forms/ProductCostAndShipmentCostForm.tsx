

import React, { useState } from "react"
import { preventDeafult } from "../../utils/preventDefault"
import InputField from "./fields/InputField"


interface FormDataState{
    productCost: number
    shipmentCost: number,
    shipmentNumberOfItems: number
}


const ProductCostAndShipmentCostForm = () => {

    const [formData, setFormData] = useState({
        productCost: 0,
        shipmentCost: 0,
        shipmentNumberOfItems:0,
    })

    const changeHandler = (e:React.ChangeEvent<HTMLInputElement>) => {
        setFormData((prevState):FormDataState => {
            return {
                ...prevState,
                [e.target.name]: parseInt(e.target.value)
            }
        })
    }

    
    return (
        <form onSubmit={preventDeafult} className="pcasc-form">
            <InputField fieldClass="product-cost" fieldType="number" fieldName="productCost" changeHandler={changeHandler} fieldValue={formData.productCost} />
            <InputField fieldClass="shipment-cost" fieldType="number" fieldName="shipmentCost" changeHandler={changeHandler} fieldValue={formData.shipmentCost}/>
            <InputField fieldClass="shipment-number-of-items" fieldType="number" fieldName="shipmentNumberOfItems" changeHandler={changeHandler} fieldValue={formData.shipmentCost}/>
            <button>Submit</button>
        </form>
 
    )
}

export default ProductCostAndShipmentCostForm