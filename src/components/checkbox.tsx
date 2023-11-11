import { useState } from 'react'
import { FiCheck } from 'react-icons/fi'

export function Checkbox() {
    const [state, setState] = useState(false);

    return (
        <div className="flex items-center gap-2">
            <button className={`
                w-7 h-7 border rounded-md flex items-center justify-center text-primary
                ${state ? 'border-primary text-primary' : 'border-zinc-300'}
                hover:shadow-md transition-all
            `} onClick={() => setState(!state)}>
                {state && <FiCheck size={20} />}
            </button>
            <label onClick={() => setState(!state)} className='cursor-pointer text-base font-medium'>CheckBox</label>
        </div>
    )
}