import React, {TextareaHTMLAttributes, useRef} from "react";
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

    const inputRef = useRef<HTMLTextAreaElement | null>(null);

    return (
        <div className="w-full relative" onClick={() => inputRef.current?.focus()}>
            <div className={`b-label ${field.value && `b-label--active`}`}>
                {placeholder}
            </div>
            <textarea
                data-testid="textarea"
                {...field}
                {...props}
                ref={inputRef}
                className={classes}
            />
        </div>
    )
}

export default BTextarea;
