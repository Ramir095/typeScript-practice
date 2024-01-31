import { useState } from 'react';

// Queremos que este CustomHook sea generico (que acepte cualquier tipo de valor) el valor no tendra un typado definido, este podrá cambiar
export const useForm = <T extends Object>( formulario: T ) => { // Determino que el estado es una extension de un objeto
  
  const [state, setState] = useState(formulario);

  const handleChange = (value: string, campo: keyof T) => { // campo es una key de T, una propiedad del objeto generico T y las propiedades que tenemos son las misma que ponemos a la hora de usar el customHook. En este caso son "email" y "password"
    setState({
      ...state,
      [campo]: value
    })
  };
  
  return {
    ...state,
    formulario: state,
    handleChange
  }
}
