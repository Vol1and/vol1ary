import {render, screen, fireEvent, renderHook} from '@testing-library/react';
import BSelect, {ISelectOption} from "./BSelect";
import {Control, useForm, UseFormReturn} from "react-hook-form";


interface FormValues {
    name: string
}

describe('BSelect', () => {
    let control: Control<{name: any}, any>;
    let form: UseFormReturn<FormValues, any>;
    const options: ISelectOption[] = [
        {value: '1', label: 'Опция 1'},
        {value: '2', label: 'Опция 2'},
        {value: '3', label: 'Опция 3'},
    ]
    beforeEach(() => {
        const {result} = renderHook(() =>  {
            return useForm<FormValues>({
                mode: "onChange",
                values: {
                    name: ''
                }
            });
        })
        //@ts-ignore
        control = result.current.control
        form = result.current
    })

    test('renders select', () => {
        render(<BSelect options={options} control={control} name='name' />);
        const input = screen.getByPlaceholderText('');
        expect(input).toBeInTheDocument();
    });
    test('displays placeholder', () => {
        render(<BSelect options={options} control={control} name='name' placeholder='bruh man' />);
        const input = screen.getByPlaceholderText('bruh man');
        expect(input).toBeInTheDocument();
    });
    test('changes passed modelValue', () => {
        render(<BSelect options={options} control={control} name='name' />);
        const input: HTMLInputElement = screen.getByPlaceholderText('');

        fireEvent.change(input, { target: { value: '2' } });

        expect(form.getValues('name')).toBe('2');
    });
})

