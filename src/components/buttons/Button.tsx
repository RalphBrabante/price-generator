import { MouseEventHandler } from "react";


interface ButtonTypes {
    btnClass?: string;
    btnText: string;
    clickHandler?: MouseEventHandler<HTMLButtonElement>;
}

const Button = ({ btnClass, btnText, clickHandler }: ButtonTypes): JSX.Element => {
    return (
        <button className={"btn btn-" + btnClass} onClick={clickHandler} >{btnText}</button>
    )
}

export default Button;