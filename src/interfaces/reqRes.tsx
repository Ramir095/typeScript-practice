// Para genera las interfaces usamos la extension PASTE JSON AS CODE.
//   L__ Para usarla: 1) Copiamos los datos que queremos typar
//                    2) F2
//                    3) Buscamos "Paste JSON as Code"
//                    4) Elegimos el tipo de dato, para cual lenguaje
//                    5) Escribimos el nombre del primer nivel y listo!

export interface ReqResListado {
  page:        number;
  per_page:    number;
  total:       number;
  total_pages: number;
  data:        Usuario[];
  support:     Support;
}

export interface Usuario {
  id:         number;
  email:      string;
  first_name: string;
  last_name:  string;
  avatar:     string;
}

export interface Support {
  url:  string;
  text: string;
}
