import { useForm } from "../hooks/useForm";

export const Formularios = () => {
  const { email, password, formulario, handleChange } = useForm({
    email: 'example@gmail.com',
    password: '123456'
  });
  return (
    <>
      <h3>Formulario</h3>
      <input 
        type='text' 
        className='form-control' 
        placeholder='Email'
        value={ email }
        onChange={({ target }) => handleChange(target.value, 'email')}
      />

      <input 
        type='text' 
        className='form-control' 
        placeholder='Password'
        value={ password }
        onChange={({ target }) => handleChange(target.value, 'password')}
      />

      <code>
        <pre>{ JSON.stringify( formulario, null, 2 ) }</pre>
      </code>
    </>
  );
};
