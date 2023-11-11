import { useState } from 'react';
import { FiEye, FiEyeOff } from 'react-icons/fi';

interface Props {
    id?: string;
    label: string;
    placeholder?: string;
    type: string;
    value: string;
    error: string;
    onBlur: () => void;
    onChange: (e) => void;
    required: boolean;
    LeftIcon?: React.FC,
    rightAction?: () => void;
}

export function TextField({ id, label, type, placeholder, onChange, value, error, onBlur, required, LeftIcon }: Props) {
    const [focus, setFocus] = useState(false);
    const [currentType, setCurrentType] = useState(type ?? 'text');

    return (
        <div className="w-full max-w-[400px] flex flex-col gap-2">
            <label htmlFor={id} className='text-base font-medium'>{label}{required && <span className='text-red-500'> *</span>}</label>
            <div className={`
                w-full h-12 border rounded-md p-3
                flex justify-between items-center gap-2
                ${focus && 'border-primary'}
                ${error && 'border-red-500'}
            `}>
                {LeftIcon &&
                    <span className={`text-xl text-zinc-600`}>
                        <LeftIcon />
                    </span>
                }
                <input
                    id={id}
                    type={currentType}
                    value={value}
                    placeholder={placeholder ?? ''}
                    onChange={onChange}
                    className="h-full w-full flex-1 outline-none"
                    onFocus={() => setFocus(true)}
                    onBlur={() => {
                        setFocus(false)
                        onBlur()
                    }}
                />
                {
                    type == 'password' &&
                    <button className={`text-xl text-zinc-600`} onClick={() => currentType == 'password' ? setCurrentType('text') : setCurrentType('password')}>
                        {currentType == 'password' ? <FiEyeOff size={20} /> : <FiEye size={20} />}
                    </button>
                }
            </div>
            {error && <span className='text-xs text-red-500'>{error}</span>}
        </div>
    )
}