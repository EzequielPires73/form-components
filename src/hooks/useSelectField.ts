import { useState } from 'react';

export interface SelectItemProps {
    id?: number | string;
    name: string;
    enum?: string;
}

interface Props {
    initialValue?: SelectItemProps;
    initialOptions?: Array<SelectItemProps>;
    required?: boolean;
}

export function useSelectField({initialOptions, initialValue, required}: Props) {
    const [input, setInput] = useState('');
    const [value, setValue] = useState<SelectItemProps>(initialValue ?? null);
    const [show, setShow] = useState(false);
    const [options, setOptions] = useState<Array<SelectItemProps>>(initialOptions ?? []);

    function onChange(item?: SelectItemProps) {
        if (item) {
            setInput(item.name);
            setValue(item);
        } else {
            if (value?.name) {
                setInput(item.name);
            }
        }
        setShow(false);
    }

    function clean() {
        setInput('');
        setValue(null);
    }

    function isValidate() {
        if (!value && required) {
            return false;
        } else {
            return true;
        }
    }

    return {
        input, 
        setInput,
        value,
        onChange,
        show,
        setShow,
        options,
        setOptions,
        clean, 
        isValidate
    }
}