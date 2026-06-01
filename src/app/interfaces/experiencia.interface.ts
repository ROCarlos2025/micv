export interface Experiencia {
  titulo: string;
  periodo: string;
  cargo: string;
  tecnologiasResumen: string;
  descripcionGeneral: string;
  bullets: string[];
  tecnologiasFinales: string;
  icono: string;
  logo?: string;
}

export interface Experiencias {
  [key: string]: Experiencia;
}
