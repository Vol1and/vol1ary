import React, {ButtonHTMLAttributes} from "react";
import classNames from "classnames";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: 'primary' | 'secondary'
    rounded?: boolean
    flat?: boolean
    size?: 'xs' | 'sm' | 'md' | 'lg'
}

const BButton: React.FC<ButtonProps> = ({type="button", variant = 'primary', size = 'md', flat = false, className, rounded = false, ...props}) => {

    const classes = classNames(
        'b-button',
        className,
        {'b-button--rounded': rounded},
        {'b-button--flat': flat},
        {'b-button--disabled': props.disabled},
        `b-button--${variant}`,
        `b-button--${size}`
    );

    return (
        <button className={classes} {...props} type={type}>
            {props.children}
        </button>
    )
}

export default BButton;
