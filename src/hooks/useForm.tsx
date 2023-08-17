import { useState } from 'react';

export const useForm = <T extends Object>( formulario: T ) => { // Determino que el estado es una extension del objeto
  
  const [state, setState] = useState(formulario);

  const handleChange = (value: string, campo: keyof T) => { // campo es una key de T
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
