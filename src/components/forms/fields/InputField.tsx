

interface InputFieldTypes {
    fieldType: string;
    fieldName: string;
    fieldValue?: string | number;
    fieldClass?: string;
    fieldNameDisplay?: string;
    changeHandler?: any;
}


const InputField = ({fieldType, fieldName, fieldValue, fieldClass, changeHandler, fieldNameDisplay}:InputFieldTypes):JSX.Element=> {
    return (
        <div className="form-group">
            {fieldNameDisplay &&
                <label>{fieldNameDisplay}</label>
            }
            <input className={fieldClass} type={fieldType} name={fieldName} value={fieldValue} onChange={changeHandler}/>
        </div>
    )
}

export default InputField