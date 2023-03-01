import {render, screen, fireEvent, renderHook} from '@testing-library/react';
import {Control, useForm, UseFormReturn} from "react-hook-form";
import {Dayjs} from "dayjs";
import BTimePicker from "@/components/base/BTimePicker/BTimePicker";
import {DATE_FORMAT} from "@/config/base.config";
import {getDefaultTime} from "@/utils";

interface FormValues {
    date: Dayjs
}

describe('BTimePicker', () =>{
    let control: Control<FormValues, any>;
    let form: UseFormReturn<FormValues, any>;
    beforeEach(() => {
        const {result} = renderHook(() =>  {
            return useForm<FormValues>({
                mode: "onChange",
                values: {

                    date: getDefaultTime()
                }
            });
        })
        //@ts-ignore
        control = result.current.control
        form = result.current
    })

    test('renders datepicker', () => {
        render(<BTimePicker<FormValues> control={control} name={'date'} />);
        const picker = screen.getByTestId('time-picker');
        expect(picker).toBeInTheDocument();
    });
    test('displays placeholder', () => {
        render(<BTimePicker<FormValues> control={control} name={'date'} placeholder='bruh man' />);
        const picker = screen.getByPlaceholderText('bruh man');
        expect(picker).toBeInTheDocument();
    });
    test('changes passed modelValue', () => {
        render(<BTimePicker<FormValues>  control={control} name={'date'} />);
        const picker = screen.getByTestId('time-picker');

        const newDate = getDefaultTime().add(5, 'minutes')

        fireEvent.mouseDown(picker);
        fireEvent.change(picker, { target: { value: newDate.format('HH:mm') } });
        fireEvent.click(document.querySelectorAll(".ant-btn-primary")[0]);

        expect(form.getValues('date').format(DATE_FORMAT)).toBe(newDate.format(DATE_FORMAT));
    });
})

