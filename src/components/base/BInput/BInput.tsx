import React, {forwardRef, InputHTMLAttributes} from "react";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";

interface Props <T extends FieldValues> extends Omit<InputHTMLAttributes<HTMLInputElement>,'defaultValue' | 'name'>,
    UseControllerProps<T>
{
    disabled?: boolean
    placeholder?: string
}

const BInput = <T extends FieldValues>(props: Props<T>) => {
    const {field} = useController(props);

    return (
        <div className={`b-input-group`}>
            <input
            {...field}
            {...props}
            className={`b-input`}
        />
        </div>
    )
}

BInput.defaultProps = {
    placeholder: ''
}

export default BInput;
