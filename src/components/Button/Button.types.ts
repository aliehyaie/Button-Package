import {ButtonHTMLAttributes} from "react";

type ThemeColor = 'primary' | 'secondary'

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    fullWidth?: boolean;
    iconDirection?: 'start' | 'end';
    loading?: boolean;
    rounded?: boolean;
    size?: 'sm' | 'md' | 'lg';
    icon?: string;
    color?: ThemeColor;
    variant?: 'text' | 'contained' | 'outlined' | 'elevation';
}

export type LoadingProps = Required<
    Pick<ButtonProps, 'color' | 'variant' | 'size'>
> &
    Pick<ButtonProps, 'disabled'>;