import React, {FC} from 'react';
import {ButtonProps} from "./Button.types";
const Button:FC<ButtonProps> = ({text,type,onClick}) => {
    return (
        <button className='text-2xl bg-amber-400 rounded-sm'>
            {text}
        </button>
    );
};

export default Button;