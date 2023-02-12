import React, {useMemo} from "react";

interface Props {
    children?: React.ReactNode;
    disabled?: boolean
    variant?: 'primary' | 'secondary'
}

const BButton: React.FC<Props> = (props) => {

    const isDisabled = useMemo(() => {
        return `${props.disabled ? 'bbutton--disabled': ''}`
        }, [props.disabled]);


    const buttonVariant = useMemo(() => {
        return `bbutton--${props.variant}`
    }, [props.variant]);


    return (
        <button className={`bbutton ${isDisabled} ${buttonVariant}`} disabled={props.disabled} >
            {props.children}
        </button>
    )
}
BButton.defaultProps = {
    disabled: false,
    variant: 'primary'
}

export default BButton;
