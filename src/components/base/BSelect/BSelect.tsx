import React, {SelectHTMLAttributes} from "react";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";

export interface ISelectOption {
    label: string
    value: string | number | readonly string[] | undefined
}

interface Props<T extends FieldValues> extends Omit<SelectHTMLAttributes<HTMLSelectElement>, 'defaultValue' | 'name'>,
    UseControllerProps<T> {
    options: ISelectOption[]
    placeholder?: string
}

const BSelect = <T extends FieldValues>(props: Props<T>) => {
    const {field} = useController(props);

    return (
        <div className={`relative`}>
            <label className="b-label">
                {props.placeholder}
            </label>
            <select
                {...field}
                {...props}
                className={`b-select`}
            >
                {props.options.map((option, idx) => (
                    <option key={idx} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
        </div>
    )
}

BSelect.defaultProps = {
    placeholder: ''
}

export default BSelect;
