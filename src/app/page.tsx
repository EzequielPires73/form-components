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
  const city = useSelectField({
    initialOptions: items,
    required: true
  });
  const district = useSelectField({
    initialOptions: items,
    required: true
  });

  return (
    <main className='w-screen h-screen flex items-center justify-center flex-col gap-4 p-4'>
      <Image src={'/logo.svg'} alt='' width={290} height={39} />
      <div className='grid grid-cols-2 gap-8 w-[800px]'>
        <form className='mt-8 w-full flex items-center justify-center flex-col gap-4' onSubmit={e => e.preventDefault()}>
          <TextField
            label='Nome'
            type='text'
            placeholder='Digite seu nome completo'
            {...name}
          />
          <TextField
            label='Telefone'
            type='text'
            placeholder='Digite seu telefone'
            LeftIcon={FiPhone}
            {...phone}
          />
          <TextField
            label='Email'
            type='mail'
            placeholder='Digite seu email'
            LeftIcon={FiMail}
            {...email}
          />
          <TextField
            label='Senha'
            type='password'
            placeholder='Digite sua senha'
            LeftIcon={FiLock}
            RightIcon={FiEyeOff}
            {...password}
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
            disabled={!password.isValid() || !name.isValid() || !phone.isValid() || !email.isValid() || !state.isValidate() || !city.isValidate() || !district.isValidate()}
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
            disabled={!password.isValid() || !name.isValid() || !phone.isValid() || !email.isValid() || !state.isValidate() || !city.isValidate() || !district.isValidate()}
          />
        </form>
        <form className='mt-8 w-full flex flex-col gap-4' onSubmit={e => e.preventDefault()}>
          <SelectField
            label='Estado'
            placeholder='Selecione um estado'
            {...state}
          />
          <SelectField
            label='Cidade'
            placeholder='Selecione uma cidade'
            {...city}
          />
          <SelectField
            label='Bairro'
            placeholder='Selecione um bairro'
            {...district}
          />
          <Checkbox />
          <Radiobox />
        </form>
      </div>
    </main>
  )
}
