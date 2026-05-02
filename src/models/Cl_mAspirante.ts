import Cl_mPersona from "./Cl_mPersona.js";

export default class Cl_mAspirante extends Cl_mPersona {
  private _puntosIA: number;
  private _puntosPrep: number;
  private _puntosDiplomas: number;

  constructor({
    nombre,
    apellido,
    cedula,
    sexo,
    fechaNac,
    puntosIA,
    puntosPrep,
    puntosDiplomas,
  }: {
    nombre: string;
    apellido: string;
    cedula: string;
    sexo: string;
    fechaNac: string;
    puntosIA: number;
    puntosPrep: number;
    puntosDiplomas: number;
  }) {
    super({ nombre, apellido, cedula, sexo, fechaNac });

    this._puntosIA = puntosIA;
    this._puntosPrep = puntosPrep;
    this._puntosDiplomas = puntosDiplomas;
  }

  set puntosIA(value: number) {
    this._puntosIA = value;
  }
  get puntosIA(): number {
    return this._puntosIA;
  }

  set puntosPrep(value: number) {
    this._puntosPrep = value;
  }
  get puntosPrep(): number {
    return this._puntosPrep;
  }

  set puntosDiplomas(value: number) {
    this._puntosDiplomas = value;
  }
  get puntosDiplomas(): number {
    return this._puntosDiplomas;
  }

  get puntosEdad(): number {
    if (this.edad < 30) return 10;
    if (this.edad < 40) return 5;
    return 0;
  }

  get puntosSubTotal(): number {
    return (
      this._puntosIA + this._puntosPrep + this._puntosDiplomas + this.puntosEdad
    );
  }

  get puntaje(): number {
    if (this.puntosSubTotal >= 30) return 30;
    return this.puntosSubTotal;
  }
}
