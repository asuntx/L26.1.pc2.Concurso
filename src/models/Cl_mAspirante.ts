import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAspirante extends Cl_mPersona {
  private _indiceA: number;
  private _preparador: number;
  private _diploma: number;

  constructor({
    nombre,
    apellido,
    cedula,
    sexo,
    fechaNacimiento,
    peso,
    indiceA,
    preparador,
    diploma,
  }: {
    nombre: string;
    apellido: string;
    cedula: string;
    sexo: string;
    fechaNacimiento: string;
    peso: number;
    indiceA: number;
    preparador: number;
    diploma: number;
  }) {
    super({ nombre, apellido, cedula, sexo, fechaNacimiento, peso });

    this._indiceA = indiceA;
    this._preparador = preparador;
    this._diploma = diploma;
  }

  set indiceA(value: number) {
    this._indiceA = value;
  }
  get indiceA(): number {
    return this._indiceA;
  }

  set preparador(value: number) {
    this._preparador = value;
  }
  get preparador(): number {
    return this._preparador;
  }

  set diploma(value: number) {
    this._diploma = value;
  }
  get diploma(): number {
    return this._diploma;
  }

  get puntosPorEdad(): number {
    const e = this.edad();
    if (e < 30) return 10;
    if (e < 40) return 5;
    return 0;
  }

  get puntajeTotal(): number {
    let total =
      this._indiceA + this._diploma + this._preparador + this.puntosPorEdad;
    return total > 30 ? 30 : total;
  }
}
