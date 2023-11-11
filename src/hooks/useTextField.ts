import { maskPhone } from "@/helpers/mask";
import { useState } from "react";

interface Props {
    initialValue?: string;
    type?: InputType;
    required?: boolean;
}

export interface InputType {
    regex: RegExp;
    message: string;
    mask: (value: string) => string;
}

export const InputTypes = {
    phone: {
        regex: /^\(\d{2}\) \d{4,5}-?\d{4}$/,
        message: 'Número de telefone inválido',
        mask: maskPhone
    },
}

export function useTextField({initialValue, type, required}: Props) {
    const [value, setValue] = useState(initialValue ?? '');
    const [error, setError] = useState<string | null>(null);

    function onChange({target}: React.ChangeEvent<HTMLInputElement>) {
        if (error) validate(target.value);
        {error && setError(null)}
        if (type && type.mask) {
            setValue(type.mask(target.value));
        } else {
            setValue(target.value);
        }
    }

    function validate(value: string) {
        if (!value && value.length === 0 && required) {
            setError('Preencha um valor');
            return false;
        } else {
            if (type && !type.regex.test(value)) {
                setError(type.message);
                return false;
            } else {
                setError(null);
                return true;
            }
        }
    }
    
    function isValidate(value: string) {
        if (!value && value.length === 0 && required) {
            return false;
        } else {
            if (type && !type.regex.test(value)) {
                return false;
            } else {
                return true;
            }
        }
    }

    return {
        value,
        error,
        setError,
        setValue,
        onChange,
        onBlur: () => validate(value),
        validate: () => validate(value),
        isValid: () => isValidate(value),
        required
    }
}