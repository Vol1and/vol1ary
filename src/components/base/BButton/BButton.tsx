import React, {useMemo} from "react";

interface Props {
    children?: React.ReactNode;
    disabled?: boolean
    variant?: 'primary' | 'secondary'
}

const BButton: React.FC<Props> = ({children, disabled = false, variant = 'primary'}) => {

    const isDisabled = useMemo(() => {
        return `${disabled ? 'bbutton--disabled': ''}`
        }, [disabled]);


    const buttonVariant = useMemo(() => {
        return `bbutton--${variant}`
    }, [variant]);


    return (
        <button className={`bbutton ${isDisabled} ${buttonVariant}`} disabled={disabled} >
            {children}
        </button>
    )
}

export default BButton;
