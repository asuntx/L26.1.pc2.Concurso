export default class Cl_mPersona {
  private _nombre: string;
  private _apellido: string;
  private _cedula: string;
  private _sexo: string;
  private _fechaNacimiento: string;
  private _peso: number;

  constructor({
    nombre,
    apellido,
    cedula,
    sexo,
    fechaNacimiento,
    peso,
  }: {
    nombre: string;
    apellido: string;
    cedula: string;
    sexo: string;
    fechaNacimiento: string;
    peso: number;
  }) {
    this._nombre = nombre;
    this._apellido = apellido;
    this._cedula = cedula;
    this._sexo = sexo;
    this._fechaNacimiento = fechaNacimiento;
    this._peso = peso;
  }

  set peso(value: number) {
    this._peso = value;
  }
  get peso(): number {
    return this._peso;
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

  set fechaNacimiento(value: string) {
    this._fechaNacimiento = value;
  }
  get fechaNacimiento(): string {
    return this._fechaNacimiento;
  }

  // Dentro de Cl_mPersona.ts
  edad(): number {
    let hoy = new Date();
    let fechaNac = new Date(this.fechaNacimiento);

    let edad = hoy.getFullYear() - fechaNac.getFullYear();
    let mes = hoy.getMonth() - fechaNac.getMonth();

    if (mes < 0 || (mes === 0 && hoy.getDate() < fechaNac.getDate())) {
      edad--;
    }

    return edad;
  }
}
