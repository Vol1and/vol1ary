import {render, screen, fireEvent, renderHook} from '@testing-library/react';
import BTextarea from "./BTextarea";
import {Control, useForm, UseFormReturn} from "react-hook-form";


interface FormValues {
    name: string
}

describe('BTextarea', () =>{
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

    test('renders textarea', () => {
        render(<BTextarea control={control} name='name' />);
        const textarea = screen.getByTestId('textarea');
        expect(textarea).toBeInTheDocument();
    });
    test('displays placeholder', () => {
        render(<BTextarea  control={control} name='name' placeholder='bruh man' />);
        const textarea = screen.getByPlaceholderText('bruh man');
        expect(textarea).toBeInTheDocument();
    });
    test('changes passed modelValue', () => {
        render(<BTextarea  control={control} name='name' />);
        const textarea = screen.getByTestId('textarea');

        fireEvent.change(textarea, { target: { value: 'Сергей' } });

        expect(form.getValues('name')).toBe('Сергей');
    });
})

