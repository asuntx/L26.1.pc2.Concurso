export interface I_vConcurso {
  onNuevoAspirante(callback: () => void): void;

  reportar({
    aspiranteContratar,
    listado,
    promedioEdad,
    totalPuntosSubTotal
  }: {
    aspiranteContratar: string;
    listado: string;
    promedioEdad: number;
    totalPuntosSubTotal: number;
  }): void;
}
