

interface InputFieldTypes {
    fieldType: string;
    fieldName: string;
    fieldValue?: string | number;
    fieldClass?: string;
    fieldNameDisplay?: string;
    fieldPlaceholder?: string;
    changeHandler?: any;

}


const InputField = ({ fieldType, fieldName, fieldValue, fieldClass, changeHandler, fieldNameDisplay, fieldPlaceholder }: InputFieldTypes): JSX.Element => {
    return (
        <div className="form-group">
            {fieldNameDisplay &&
                <label>{fieldNameDisplay}</label>
            }
            <input className={fieldClass} type={fieldType} name={fieldName} value={fieldValue} onChange={changeHandler} placeholder={fieldPlaceholder} />
        </div>
    )
}

export default InputField