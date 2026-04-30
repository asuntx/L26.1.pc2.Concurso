export interface I_vConcurso {
  onNuevoAspirante(callback: () => void): void;

  reportar(datos: {
    aspiranteContratar: string;
    mejorPuntaje: number;
    listado: string;
    pesoPromedio: number;
  }): void;
}
