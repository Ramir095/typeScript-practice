import { useCounter } from "../hooks/useCounter"

export const ContadorConHook = () => {
  const { valor, acumular } = useCounter();

  return (
    <>
      <h3>Contador con hook: <small>{ valor } </small></h3>
      <button 
        className='btn btn-primary'
        onClick={() => acumular(1)}
      >
        +1
      </button>
      &nbsp; {/* Codigo para generar un espacio entre ambos elementos */}
      <button 
        className='btn btn-primary'
        onClick={() => acumular(-1)}
      >
        -1
      </button>
    </>
  )
}
