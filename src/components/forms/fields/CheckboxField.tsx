
interface RadioFieldTypes {
    fieldData: { value: string, cBoxName: string }[]
}


const RadioField = ({ fieldData }: RadioFieldTypes): JSX.Element => {
    return (
        <div className="form-group">
            {
                fieldData.map((data): JSX.Element => (
                    <div className="flex vertical-flex-align">
                        <input type="radio" className={data.cBoxName} name={data.cBoxName} value={data.value} />
                        <label htmlFor={data.cBoxName}>{data.value}</label>
                    </div>
                ))
            }

        </div>

    )
}

export default RadioField