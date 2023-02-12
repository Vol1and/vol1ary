import React, {ChangeEvent} from "react";

interface Props {
    disabled?: boolean
    placeholder?: string
    value?: string
    onChange?: (val: string) => void
}

const BInput: React.FC<Props> = ({disabled = false, placeholder= '', onChange, value =''}) => {

    const emitValue = (el: ChangeEvent<HTMLInputElement>) => {
        if(onChange) {
            onChange(el.target.value)
        }
    }

    return (
        <input
            value={value}
            className={`b-input`}
            disabled={disabled}
            placeholder={placeholder}
            onChange={emitValue}
        />
    )
}

export default BInput;
