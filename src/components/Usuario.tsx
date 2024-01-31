import { useUsuarios } from '../hooks/useUsuarios';
import { Usuario } from '../interfaces/reqRes';

export const Usuarios = () => {
  const { usuarios, paginaSiguiente, paginaAnterior } = useUsuarios()
  // Si bien recibe el objeto completo como atributo (usuario) podemos desestructurar en el mismo lugar
  const renderItem = ({ id, email, first_name, last_name, avatar }: Usuario ) => {
    return (
      <tr key={ id.toString() }> {/* Es recomendable que el id sea un string */}
        <td>
          <img 
            style={{
              width: 45,
              borderRadius: 100
            }}
            src={ avatar }
            alt={ first_name } />
        </td>
        <td>{ first_name } { last_name }</td>
        <td>{ email }</td>
      </tr>
    )
  };

  return (
    <>
      <h3>Usuarios:</h3>
      <table className='table'>
        <thead>
          <tr>
            <th>Avatar</th>
            <th>Nombre</th>
            <th>Email</th>
          </tr>
        </thead>
        <tbody>
          {
            usuarios.map(renderItem) // Cuando mandamos la unica propiedad como referencia no es necesario aclararlo
          }
        </tbody>
      </table>

      <button
        className='btn btn-primary'
        onClick={ paginaAnterior }
      >
        Anterior
      </button>
      &nbsp;
      <button
        className='btn btn-primary'
        onClick={ paginaSiguiente }
      >
        Siguiente
      </button>
    </>
  )
}