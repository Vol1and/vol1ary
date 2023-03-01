import React from "react";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {DatePicker} from "antd";
import {DATE_FORMAT} from "@/config/base.config";
import BIcon from "../BIcon/BIcon";

interface Props <T extends FieldValues>  extends UseControllerProps<T>
{
    dateFormat?: string
    placeholder?: string
}


const BDatePicker = <T extends FieldValues>({dateFormat = DATE_FORMAT, placeholder = "Выберите дату",  ...props}: Props<T>) => {
    const {field} = useController(props);

    return (
        <div className="relative">

            <div className="b-label">
                {placeholder}
            </div>
            <DatePicker
            data-testid="date-picker"
            className="b-datepicker"
            defaultValue={field.value}
            {...field}
            format={dateFormat}
            placeholder={placeholder}
            suffixIcon={<BIcon name={'calendar'}/>}
        />
        </div>
    )
}

export default BDatePicker;
