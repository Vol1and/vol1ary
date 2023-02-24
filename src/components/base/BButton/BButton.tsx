import React, {ButtonHTMLAttributes} from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary' | 'secondary'
    rounded?: boolean
}

const BButton: React.FC<ButtonProps> = ({variant = 'primary', className, rounded= false, ...props }) => {

    const classes = classNames('b-button', {'b-button--rounded': rounded}, { 'b-button--disabled': props.disabled}, `b-button--${variant}`, className);

    return (
        <button className={classes} {...props}>
            {props.children}
        </button>
    )
}

export default BButton;
