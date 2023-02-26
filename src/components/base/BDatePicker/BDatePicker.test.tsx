import {render, screen, fireEvent, renderHook} from '@testing-library/react';
import {Control, useForm, UseFormReturn} from "react-hook-form";
import dayjs, {Dayjs} from "dayjs";
import BDatePicker from "@/components/base/BDatePicker/BDatePicker";
import {DATE_FORMAT} from "@/config/base.config";

interface FormValues {
    date: Dayjs
}

describe('BDatePicker', () =>{
    let control: Control<FormValues, any>;
    let form: UseFormReturn<FormValues, any>;
    beforeEach(() => {
        const {result} = renderHook(() =>  {
            return useForm<FormValues>({
                mode: "onChange",
                values: {

                    date: dayjs()
                }
            });
        })
        //@ts-ignore
        control = result.current.control
        form = result.current
    })

    test('renders datepicker', () => {
        render(<BDatePicker<FormValues> control={control} name={'date'} />);
        const picker = screen.getByTestId('date-picker');
        expect(picker).toBeInTheDocument();
    });
    test('displays placeholder', () => {
        render(<BDatePicker<FormValues> control={control} name={'date'} placeholder='bruh man' />);
        const picker = screen.getByPlaceholderText('bruh man');
        expect(picker).toBeInTheDocument();
    });
    test('changes passed modelValue', () => {
        render(<BDatePicker<FormValues>  control={control} name={'date'} />);
        const picker = screen.getByTestId('date-picker');

        const newDate = dayjs().add(5, 'day')


        fireEvent.mouseDown(picker);
        fireEvent.change(picker, { target: { value: newDate.format(DATE_FORMAT) } });
        fireEvent.click(document.querySelectorAll(".ant-picker-cell-selected")[0]);

        expect(form.getValues('date').format(DATE_FORMAT)).toBe(newDate.format(DATE_FORMAT));
    });
})

