export const InputRequeridScheme = `const name = useTextField({
    initialValue: '',
    required: true
});
  
<TextField
    label='Input Obrigatório'
    type='text'
    placeholder='Digite seu nome completo'
    {...name}
/>
  `
export const InputIconScheme = `const email = useTextField({
    initialValue: '',
    required: true
});
  
<TextField
    label='Input com Icone'
    type='mail'
    placeholder='Digite seu email'
    LeftIcon={FiMail}
    {...email}
/>
  `
export const InputMaskScheme = `const phone = useTextField({
    initialValue: '',
    type: InputTypes.phone,
    required: true
});
  
<TextField
    label='Input com mascára'
    type='text'
    placeholder='Digite seu telefone'
    LeftIcon={FiPhone}
    {...phone}
/>
  `
export const InputPasswordScheme = `const password = useTextField({
    initialValue: '',
    required: true
});
  
<TextField
    label='Input de senha'
    type='password'
    placeholder='Digite sua senha'
    LeftIcon={FiLock}
    {...password}
/>
  `
export const SelectScheme = `const state = useSelectField({
    initialOptions: items,
    required: true
});
  
<SelectField
    label='Estado'
    placeholder='Selecione um estado'
    {...state}
/>
  `