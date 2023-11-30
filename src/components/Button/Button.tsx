import React, {FC} from 'react';
import {ButtonProps} from "./Button.types";
const Button:FC<ButtonProps> = ({text,type,onClick}) => {
    return (
        <div>
            {text}
        </div>
    );
};

export default Button;