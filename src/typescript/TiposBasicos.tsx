export const TiposBasicos = () => {
  
  const nombre: string = 'Ramiro';
  const edad: number = 28;
  const bolean: boolean = true;

  // const poderes: Array<string> = ['Volar', ' Velocidad', 'Invisibilidad'];
  const poderes: string[] = ['Volar', ' Velocidad', 'Invisibilidad'];

  return (
    <>
      <div>Tipos básicos</div>
      { nombre }, { edad }, { bolean ? 'Activo' : 'No activo' }
      <br />
      { poderes.join(', ') }
    </>
  )
}
