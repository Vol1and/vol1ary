import {FieldValues, useController, UseControllerProps} from "react-hook-form";
import {InputHTMLAttributes} from "react";


interface Props<T extends FieldValues> extends UseControllerProps<T> {
    disabled?: boolean
    label?: string
}

const BCheckbox = <T extends FieldValues>(props: Props<T>) => {

    const {field} = useController(props);

    return (
        <div className="flex gap-12 items-center">
            <input
                type="checkbox"
                checked={!!field.value}
                {...field}
            />
            <div className="t-p2">{props.label}</div>
        </div>
    )
}

export default BCheckbox;
