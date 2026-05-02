export default class Cl_mPersona {
  private _nombre: string;
  private _apellido: string;
  private _cedula: string;
  private _sexo: string;
  private _fechaNac: string;

  constructor({
    nombre,
    apellido,
    cedula,
    sexo,
    fechaNac,
  }: {
    nombre: string;
    apellido: string;
    cedula: string;
    sexo: string;
    fechaNac: string;
  }) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._cedula = cedula;
    this._sexo = sexo;
    this._fechaNac = fechaNac;
  }

  set nombre(value: string) {
    this._nombre = value;
  }
  get nombre(): string {
    return this._nombre;
  }

  set apellido(value: string) {
    this._apellido = value;
  }
  get apellido(): string {
    return this._apellido;
  }

  set cedula(value: string) {
    this._cedula = value;
  }
  get cedula(): string {
    return this._cedula;
  }

  set sexo(value: string) {
    this._sexo = value;
  }
  get sexo(): string {
    return this._sexo;
  }

  set fechaNac(value: string) {
    this._fechaNac = value;
  }
  get fechaNac(): string {
    return this._fechaNac;
  }

  get edad(): number {
    let hoy = new Date();
    let fechaNac = new Date(this.fechaNac);

    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }

    return edad;
  }
}
