import React, {ButtonHTMLAttributes} from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement>{
    variant?: 'primary' | 'secondary'

}

const BButton: React.FC<ButtonProps> = ({variant = 'primary', className, ...props  }) => {

    const classes = classNames('b-button', { 'b-button--disabled': props.disabled}, `b-button--${variant}`, className);

    return (
        <button className={classes} {...props}>
            {props.children}
        </button>
    )
}

export default BButton;
