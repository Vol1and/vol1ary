import React, {TextareaHTMLAttributes} from "react";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import classNames from "classnames";

interface Props <T extends FieldValues> extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>,'defaultValue' | 'name'>,
    UseControllerProps<T>
{
    disabled?: boolean
    placeholder?: string
}

const BTextarea = <T extends FieldValues>({placeholder = '', className = '', ...props}: Props<T>) => {
    const {field} = useController(props);

    const classes = classNames(className, `b-textarea`)

    return (
        <div className="w-full relative">
            <div className="b-label">
                {placeholder}
            </div>
            <textarea
                data-testid="textarea"
                placeholder={placeholder}
                {...field}
                {...props}
                className={classes}
            />
        </div>
    )
}

export default BTextarea;
