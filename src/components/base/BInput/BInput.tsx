import React, {useRef, InputHTMLAttributes} from "react";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";

interface Props <T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>,'defaultValue' | 'name'>,
    UseControllerProps<T>
{
    disabled?: boolean
    placeholder?: string
}

const BInput = <T extends FieldValues>(props: Props<T>) => {
    const {field} = useController(props);

    const inputRef = useRef<HTMLInputElement | null>(null);

    return (
        <div className={`b-input-group ${props.className}`} onClick={() => inputRef.current?.focus()}>

            <div className={`b-label ${field.value && `b-label--active`}`}>
                {props.placeholder}
            </div>
                <input
                {...field}
                {...props}
                placeholder=""
                ref={inputRef}
                className={`b-input`}
            />
        </div>
    )
}

BInput.defaultProps = {
    placeholder: ''
}

export default BInput;
