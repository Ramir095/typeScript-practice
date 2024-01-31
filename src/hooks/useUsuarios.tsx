import { useEffect, useRef, useState } from 'react';
import { reqResApi } from '../api/reqRes';
import { Usuario, ReqResListado } from '../interfaces/reqRes';

export const useUsuarios = () => {

  const [usuarios, setUsuarios] = useState<Usuario[]>([]); //  Le pasamos la interface correspondiente USUARIO
  const paginaRef = useRef(1); // El useRef es igual al useState pero no vuelve a recargar la pagina. Lo usamos porque en este caso no necesitamos volver a cargar el html, solo necesitamos cambiar los valores  

  useEffect(() => {
    // llamado al API
    cargarUsuarios();
}, []);

  const cargarUsuarios = async() => {
    const resp = await reqResApi.get<ReqResListado>('/users', { // Le pasamos la interface correspondiente REQRESLISTADO
      params: {
        page: paginaRef.current
      } 
    }); // paginaRef hace referencia al objeto y el current es referencia a su valor (osea 1)
    // Para cambiar de pagina debemos pasarle el numero de la pagina como parametro, para hacerlo debemos mandar como segundo argumento un objeto de configuracion. Dentro del objeto pasamos el params que necesitamos que se aplique, en este paso seria el 'page'

    if( resp.data.data.length > 0 ){
      setUsuarios( resp.data.data );
    } else {
      paginaRef.current--; // cuando avancemos a una pagina que no exista (como la pagina 3) esto bajará el número
      alert('No hay registros');
    };
  };  

  const paginaAnterior = () => {
    if( paginaRef.current > 1) {  
      paginaRef.current--;
      cargarUsuarios();
    };
  };

  const paginaSiguiente = () => {
    paginaRef.current++;
    cargarUsuarios();
  };

  return {
    usuarios,
    paginaAnterior,
    paginaSiguiente
  }
}
