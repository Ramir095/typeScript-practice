import { useEffect, useReducer } from 'react';

interface AuthState {
  validando: boolean,
  token: string | null,
  username: string,
  nombre: string
};

const initialState: AuthState = {
  validando: true,
  token: null,
  username: '',
  nombre: ''
};

// Usamos types para las acciones ya que será un objeto plano, que no voy a expandir a diferencia de las interfaces
type LoginPayload = {
  username: string,
  nombre: string
}

type AuthAction = 
  | { type: 'logout' }
  | { type: 'login', payload: LoginPayload }

const authReducer = (state: AuthState, action: AuthAction): AuthState => {
  switch (action.type) {
    case 'logout':
      return {
        validando: false,
        token: null,
        username: '',
        nombre: ''
      }
    case 'login':
      const { nombre, username } = action.payload;
      return {
        validando: false,
        token: 'ABC123',
        nombre,
        username,
      }
    default:
      return state;
  }
};

export const Login = () => {

  // Como primer parametro se recibe el state podemos desestructurar las propiedades del estado
  const [{ validando, token, nombre }, dispatch] = useReducer(authReducer, initialState)

  useEffect(() => {
    setTimeout(() => {
      dispatch({ type: 'logout' });
    }, 1500);
  }, []); // En 1.5 segundos se despachará el action con el type: 'logout'

  const login = () => {
    dispatch({
      type: 'login',
      payload: {
        nombre: 'Ramiro',
        username: 'Strider'
      }
    });
  };

  const logout = () => {
    dispatch({
      type: 'logout'
    })
  };

  if( validando ){ // Este codigo se ejecuta cuando la propiedad validando esta en true. Luego de 1,5 segundos cambia al otro codigo
    return (
      <>
        <h3>Login</h3>
        <div className='alert alert-info'>
          Validando...
        </div>
      </>
    )
  }

  return (
    <>
      <h3>Login</h3>
      {
        (token)
        ? <div className='alert alert-success'>Autenticado como: { nombre }</div>
        : <div className='alert alert-danger'>No autenticado</div>
      }

      {
        (token)
        ? <button
          className='btn btn-danger'
          onClick={ logout }
        >
          Logout
        </button>
        : <button
          className='btn btn-primary'
          onClick={ login }
          >
          Login
        </button>
      }
      
    </>
  )
}
