import {render, screen, fireEvent, renderHook} from '@testing-library/react';
import BInput from "./BInput";
import {Control, useForm, UseFormReturn} from "react-hook-form";


interface FormValues {
    name: string
}

describe('BInput', () =>{
    let control: Control<{name: any}, any>;
    let form: UseFormReturn<FormValues, any>;
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

    test('renders input', () => {
        render(<BInput control={control} name='name' />);
        const input = screen.getByPlaceholderText('');
        expect(input).toBeInTheDocument();
    });
    test('displays placeholder', () => {
        render(<BInput  control={control} name='name' placeholder='bruh man' />);
        const input = screen.getByPlaceholderText('bruh man');
        expect(input).toBeInTheDocument();
    });
    test('changes passed modelValue', () => {
        render(<BInput  control={control} name='name' />);
        const input: HTMLInputElement = screen.getByPlaceholderText('');

        fireEvent.change(input, { target: { value: 'Сергей' } });

        expect(form.getValues('name')).toBe('Сергей');
    });
})

