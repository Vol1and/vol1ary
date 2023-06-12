import React from "react";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {DatePicker} from "antd";
import {DATE_FORMAT} from "@/config/base.config";
import BIcon from "../BIcon/BIcon";

interface Props <T extends FieldValues>  extends UseControllerProps<T>
{
    dateFormat?: string
    placeholder?: string
    readonly? : boolean
    disabled?: boolean
}


const BDatePicker = <T extends FieldValues>({dateFormat = DATE_FORMAT, placeholder = "Выберите дату", readonly, disabled,  ...props}: Props<T>) => {
    const {field} = useController(props);

    return (
        <div className="relative">
            <div className={`b-label ${field.value && `b-label--active`}`}>
                {placeholder}
            </div>
            <DatePicker
            data-testid="date-picker"
            className="b-datepicker"
            defaultValue={field.value}
            {...field}
            disabled={disabled}
            format={dateFormat}
            inputReadOnly
            placeholder={placeholder}
            suffixIcon={<BIcon name={'faCalendar'}/>}
        />
        </div>
    )
}

export default BDatePicker;
