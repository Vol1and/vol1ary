import {FieldValues, useController, UseControllerProps} from "react-hook-form";


interface Props<T extends FieldValues> extends UseControllerProps<T> {
    disabled?: boolean
    label?: string
}

const BCheckbox = <T extends FieldValues>(props: Props<T>) => {

    const {field} = useController(props);

    return (
        <div onClick={() => field.onChange(!field.value)} className="flex gap-12 items-center cursor-pointer">
            <input
                className="cursor-pointer"
                type="checkbox"
                checked={!!field.value}
                {...field}
            />
            <div className="t-p2">{props.label}</div>
        </div>
    )
}

export default BCheckbox;
