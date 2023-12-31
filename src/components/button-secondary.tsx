import React from 'react'

interface Props {
    label: string;
    disabled?: boolean;
    Icon?: React.FC
    full?: boolean
}

export function ButtonSecondary({ disabled, label, Icon, full }: Props) {
    return (
        <button disabled={disabled} className={`
            ${full ? 'w-full' : 'w-fit'}
            max-w-[400px] h-12 bg-transparent text-secondary rounded-md font-semibold px-8
            hover:bg-secondary-light hover:shadow-sm 
            active:bg-secondary active:text-white transition-all
            disabled:opacity-50 disabled:bg-transparent disabled:shadow-none disabled:text-secondary
            flex items-center justify-center gap-2
        `}>
            <span className='text-2xl'>
                {Icon && <Icon />}
            </span>
            {label}
        </button>
    )
}