import Cl_mAspirante from "./Cl_mAspirante.js";

export default class Cl_mConcurso {
  private mayorPuntaje: number;
  private nombreGanador: string;
  private acPeso: number;
  private contAspirantes: number;

  constructor() {
    this.mayorPuntaje = 0;
    this.nombreGanador = "";
    this.acPeso = 0;
    this.contAspirantes = 0;
  }

  procesarAspirante(a: Cl_mAspirante): number {
    const puntosActuales = a.puntajeTotal;

    if (puntosActuales > this.mayorPuntaje) {
      this.mayorPuntaje = puntosActuales;
      this.nombreGanador = `${a.nombre} ${a.apellido}`;
    }

    this.acPeso += a.peso;
    this.contAspirantes++;

    return puntosActuales;
  }

  pesoPromedio(): number {
    if (this.contAspirantes === 0) return 0;
    return this.acPeso / this.contAspirantes;
  }

  nombreContratar(): string {
    return this.nombreGanador;
  }

  mejorPuntaje(): number {
    return this.mayorPuntaje;
  }
}
