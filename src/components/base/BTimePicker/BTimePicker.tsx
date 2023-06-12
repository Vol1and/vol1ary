import React from "react";
import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {TimePicker} from "antd";
import BIcon from "../BIcon/BIcon";

interface Props<T extends FieldValues> extends UseControllerProps<T> {
    timeFormat?: string
    placeholder?: string
}


const BTimePicker = <T extends FieldValues>({timeFormat = 'HH:mm',placeholder = "Выберите время", ...props}: Props<T>) => {
    const {field} = useController(props);

    return (
        <div className="relative">
            <div className={`b-label ${field.value && `b-label--active`}`}>
                {placeholder}
            </div>
            <TimePicker
                data-testid="time-picker"
                className="b-datepicker"
                defaultValue={field.value}
                {...field}
                format={timeFormat}
                placeholder={placeholder}
                suffixIcon={<BIcon name={'faCalendar'}/>}
            />
        </div>
    )
}

export default BTimePicker;
