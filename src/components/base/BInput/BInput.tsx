import React from "react";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";

interface Props<T extends FieldValues> extends UseControllerProps<T> {
    disabled?: boolean
    placeholder?: string
}

const BInput = <T extends FieldValues>(props: Props<T>) => {
    const {field} = useController(props);

    return (
        <input
            {...field}
            className={`b-input`}
            disabled={props.disabled}
            placeholder={props.placeholder}
        />
    )
}

BInput.defaultProps = {
    disabled: false,
    placeholder: ''
}

export default BInput;
