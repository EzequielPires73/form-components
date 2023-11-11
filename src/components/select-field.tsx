'use client'

import { useState } from 'react'
import { SelectItemProps } from '@/hooks/useSelectField'
import { FiChevronDown, FiX } from 'react-icons/fi'

interface Props {
    placeholder: string;
    show: boolean;
    setShow: (value: boolean) => void;
    label: string;
    onChange: (value?: SelectItemProps) => void;
    input: string;
    setInput: (value?: string) => void;
    value: SelectItemProps;
    clean?: () => void;
    options: SelectItemProps[];
}

export function SelectField({ input, label, onChange, setInput, setShow, show, value, placeholder, options, clean }: Props) {
    const [focus, setFocus] = useState(false);

    return (
        <>
            {show && <div className='fixed top-0 left-0 right-0 bottom-0' onClick={() => setShow(false)}></div>}
            <div className='w-full max-w-[400px] flex flex-col gap-2 relative'>
                <label htmlFor="" className='text-base font-medium'>{label}</label>
                <div className={`
                    w-full h-12 border rounded-md flex items-center px-3 bg-white transition-colors
                    ${focus && 'border-primary'}
                `}>
                    <input
                        type="text"
                        onFocus={() => {
                            setShow(true)
                            setFocus(true)
                        }}
                        onBlur={() => {
                            setFocus(false)
                        }}
                        placeholder={placeholder ?? 'Selecione uma opção'}
                        value={input}
                        onChange={e => setInput(e.target.value)}
                        className="h-full w-full flex-1 outline-none"
                    />
                    {value && <button className='w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center transition-colors' onClick={clean}><FiX /></button>}
                    <button className='w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center transition-colors' onClick={() => setShow(!show)}><FiChevronDown /></button>
                </div>
                {show &&
                    <div className='p-3 bg-white rounded-md shadow-md h-fit max-h-[264px] overflow-auto absolute left-0 right-0 top-[100%] flex flex-col gap-1 z-40'>
                        {
                            options.filter(item => item.name.includes(input)).map(item => (
                                <button key={item.id} className={`
                                py-2 px-3 rounded-md flex items-center hover:bg-zinc-100
                                ${value?.id == item.id && 'bg-primary-light hover:bg-primary-light font-medium text-primary'}
                            `} onClick={() => onChange(item)}>{item.name}</button>
                            ))
                        }
                        {options.length == 0 || options.filter(item => item.name.includes(input)).length == 0 && <span className={`py-2 px-3 rounded-md flex items-center bg-zinc-100`}>Nenhuma opção para selecionar</span>}
                    </div>
                }
            </div>
        </>
    )
}