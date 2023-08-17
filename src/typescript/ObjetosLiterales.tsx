// Para que typeScript sepa como va a lucir el objeto persona (ose que tipos de datos seran sus propiedades) usaremos INTERFACE

interface Persona {
  nombreCompleto: string,
  edad: number
  direccion: Direccion // Cuando dentro del objeto hay otro objeto, lo idea es hacer un interface separado y luego asociar esa interface a la propiedad que le corresponde
}
// Habrà ocasiones en las que las ponga en archivos independientes y otras en las que las coloquemos en el mismo componente cuando quiera definir los atributos que recibe el componente

interface Direccion {
  pais: string,
  casaNo: number
}

export const ObjetosLiterales = () => {

  const persona: Persona = {
    nombreCompleto: 'Ramiro',
    edad: 28,
    direccion: {
      pais: 'Suiza',
      casaNo: 615
    }
  }

  return (
    <>
      <h3>Objetos Literales</h3>
      <code>
        <pre>
          { JSON.stringify(persona, null, 2) }
        </pre>
      </code>
    </>
  )
}
