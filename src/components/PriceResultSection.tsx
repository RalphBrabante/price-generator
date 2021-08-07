import { useAppSelector } from "../app/store/hooks"



const PriceResultSection = () => {
    const data = useAppSelector(state => state.pscascReducer.object)
    
    return (
        <div>
            <h2>Calculation Result</h2>
            <p>Product Cost: Php {data.productCost}</p>
            <p>Tax: {data.otherTaxesPercentage}%</p>
        </div>
    )

}

export default PriceResultSection