import Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_mConcurso {
  private mayorPuntaje: number = 0
  private nombreGanador: string = ""
  private acmEdad: number = 0
  private cntAspirantes: number = 0
  private acmPuntosSubTotal: number = 0

  procesarAspirante(a: Cl_mAspirante): void {
    this.cntAspirantes ++
    this.acmEdad += a.edad
    this.acmPuntosSubTotal += a.puntosSubTotal
    if (a.puntaje > this.mayorPuntaje) {
      this.mayorPuntaje = a.puntaje;
      this.nombreGanador = `${a.nombre} ${a.apellido}`;
    }

  }

  get nombreContratar(): string {
    return this.nombreGanador;
  }

  get mejorPuntaje(): number {
    return this.mayorPuntaje;
  }

  get promedioEdad(): number {
    if (this.cntAspirantes > 0 ) {
      return this.acmEdad / this.cntAspirantes;
    }
    return 0;
  }

  get totalPuntosSubTotal(): number {
    return this.acmPuntosSubTotal;
  }
}
