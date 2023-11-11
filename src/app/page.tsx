'use client'

import { TextField } from '@/components/text-field'
import { InputTypes, useTextField } from '@/hooks/useTextField'
import { FiPhone, FiLock, FiEye, FiEyeOff, FiMail, FiCheck } from 'react-icons/fi'
import Image from 'next/image'
import { ButtonPrimary } from '@/components/button-primary'
import { SelectField } from '@/components/select-field'
import { SelectItemProps, useSelectField } from '@/hooks/useSelectField'
import { Checkbox } from '@/components/checkbox'
import { Radiobox } from '@/components/radiobox'
import { ButtonSecondary } from '@/components/button-secondary'
import { InputIconScheme, InputMaskScheme, InputPasswordScheme, InputRequeridScheme, SelectScheme } from '@/helpers/schemes'

const items: SelectItemProps[] = [
  {
    id: 1,
    name: 'Opção 1'
  },
  {
    id: 2,
    name: 'Opção 2'
  },
  {
    id: 3,
    name: 'Opção 3'
  },
  {
    id: 4,
    name: 'Opção 4'
  },
  {
    id: 5,
    name: 'Opção 5'
  },
  {
    id: 6,
    name: 'Opção 6'
  },
  {
    id: 7,
    name: 'Opção 7'
  },
  {
    id: 8,
    name: 'Opção 8'
  },
]

export default function Home() {
  const name = useTextField({
    initialValue: '',
    required: true
  });
  const phone = useTextField({
    initialValue: '',
    type: InputTypes.phone,
    required: true
  });
  const password = useTextField({
    initialValue: '',
    required: true
  });
  const email = useTextField({
    initialValue: '',
    required: true
  });
  const state = useSelectField({
    initialOptions: items,
    required: true
  });

  return (
    <main className='w-screen h-auto flex items-center justify-center flex-col gap-4 px-4 py-10'>
      <Image src={'/logo.svg'} alt='' width={290} height={39} />
      <div className='mt-10 grid gap-4 w-[800px]'>
        <div className='p-4 rounded-md border flex flex-col gap-4 mb-4'>
          <h4 className='text-xl font-semibold text-secondary'>Input obrigatório</h4>
          <TextField
            id='name'
            label='Nome'
            type='text'
            placeholder='Digite seu nome completo'
            {...name}
          />
          <pre className='bg-zinc-800 p-2 w-full rounded-md text-white'>
            {InputRequeridScheme}
          </pre>
        </div>
        <div className='p-4 rounded-md border flex flex-col gap-4 mb-4'>
          <h4 className='text-xl font-semibold text-secondary'>Input com mascára</h4>
          <TextField
            id='phone'
            label='Telefone'
            type='text'
            placeholder='Digite seu telefone'
            LeftIcon={FiPhone}
            {...phone}
          />
          <pre className='bg-zinc-800 p-2 w-full rounded-md text-white'>
            {InputMaskScheme}
          </pre>
        </div>
        <div className='p-4 rounded-md border flex flex-col gap-4 mb-4'>
          <h4 className='text-xl font-semibold text-secondary'>Input com Icone</h4>
          <TextField
            id='email'
            label='Email'
            type='mail'
            placeholder='Digite seu email'
            LeftIcon={FiMail}
            {...email}
          />
          <pre className='bg-zinc-800 p-2 w-full rounded-md text-white'>
            {InputIconScheme}
          </pre>
        </div>
        <div className='p-4 rounded-md border flex flex-col gap-4 mb-4'>
          <h4 className='text-xl font-semibold text-secondary'>Input de senha</h4>
          <TextField
            id='password'
            label='Input de senha'
            type='password'
            placeholder='Digite sua senha'
            LeftIcon={FiLock}
            {...password}
          />
          <pre className='bg-zinc-800 p-2 w-full rounded-md text-white'>
            {InputPasswordScheme}
          </pre>
        </div>
        <div className='p-4 rounded-md border flex flex-col gap-4 mb-4'>
          <h4 className='text-xl font-semibold text-secondary'>Butões primários</h4>
          <ButtonPrimary
            label='Button Primary Full'
            full={true}
          />
          <ButtonPrimary
            label='Button Primary'
          />
          <ButtonPrimary
            label='Button Icon'
            Icon={FiCheck}
          />
          <ButtonPrimary
            label='Button Disabled'
            disabled={true}
          />
        </div>
        <div className='p-4 rounded-md border flex flex-col gap-4 mb-4'>
          <h4 className='text-xl font-semibold text-secondary'>Butões secundários</h4>
          <ButtonSecondary
            label='Button Secondary Full'
            full={true}
          />
          <ButtonSecondary
            label='Button Secondary'
          />
          <ButtonSecondary
            label='Button Icon'
            Icon={FiCheck}
          />
          <ButtonSecondary
            label='Button Disabled'
            disabled={true}
          />
        </div>
        <div className='p-4 rounded-md border flex flex-col gap-4 mb-4'>
          <h4 className='text-xl font-semibold text-secondary'>Select</h4>
          <SelectField
            label='Estado'
            placeholder='Selecione um estado'
            {...state}
          />
          <pre className='bg-zinc-800 p-2 w-full rounded-md text-white'>
            {SelectScheme}
          </pre>
        </div>
        <div className='p-4 rounded-md border flex flex-col gap-4 mb-4'>
          <h4 className='text-xl font-semibold text-secondary'>Checks</h4>
          <Checkbox />
          <Radiobox />
        </div>
      </div>
    </main>
  )
}
