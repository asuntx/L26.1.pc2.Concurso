import { I_vAspirante } from "../interfaces/I_vAspirante.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";

export default class Cl_cAspirante {
  private vista: I_vAspirante;
  private callback!: (aspirante: Cl_mAspirante | null) => void;
  constructor(vista: I_vAspirante) {
    this.vista = vista;
    this.vista.onCancelar(() => this.btCancelarOnClick());
    this.vista.onAceptar(() => this.btAceptarOnClick());
  }

  solicitarAspirante(callback: (aspirante: Cl_mAspirante | null) => void) {
    this.callback = callback;
    this.vista.mostrar();
  }

  private btCancelarOnClick() {
    this.callback(null);
    this.vista.ocultar();
  }

  private btAceptarOnClick() {
    this.callback(
      new Cl_mAspirante({
        nombre: this.vista.nombre,
        apellido: this.vista.apellido,
        cedula: this.vista.cedula,
        sexo: this.vista.sexo,
        fechaNac: this.vista.fechaNac,
        puntosIA: this.vista.puntosIA,
        puntosPrep: this.vista.puntosPrep,
        puntosDiplomas: this.vista.puntosDiplomas,
      }),
    );
    this.vista.ocultar();
  }
}