import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'

export function Radiobox() {
    const [state, setState] = useState(false);

    return (
        <div className="flex items-center gap-2">
            <button className={`
                w-7 h-7 border rounded-full flex items-center justify-center
                ${state ? 'border-primary text-primary' : 'border-zinc-300'}
                hover:shadow-md transition-all
            `} onClick={() => setState(!state)}>
                {state && <div className='w-3 h-3 rounded-full bg-primary' />}
            </button>
            <label onClick={() => setState(!state)} className='cursor-pointer text-base font-medium'>Radiobox</label>
        </div>
    )
}