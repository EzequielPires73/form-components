import React from 'react'

interface Props {
    label: string;
    disabled?: boolean;
    Icon?: React.FC
}

export function ButtonPrimary({ disabled, label, Icon }: Props) {
    return (
        <button disabled={disabled} className={`
            w-full max-w-[400px] h-12 bg-primary text-white rounded-md font-semibold
            hover:bg-primary-hover hover:shadow-md 
            active:bg-primary-active transition-all
            disabled:opacity-50 disabled:bg-primary disabled:shadow-none
            flex items-center justify-center gap-2
        `}>
            <span className='text-2xl'>
                {Icon && <Icon />}
            </span>
            {label}
        </button>
    )
}