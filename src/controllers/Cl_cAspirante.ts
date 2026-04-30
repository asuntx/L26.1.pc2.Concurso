import { I_vAspirante } from "../interfaces/I_vAspirante.js";
import Cl_mAspirante from "../models/Cl_mAspirante.js";

export default class Cl_cAspirante {
  private vista: I_vAspirante;

  constructor(vista: I_vAspirante) {
    this.vista = vista;
  }

  solicitarAspirante(callback: (aspirante: Cl_mAspirante | null) => void) {
    this.vista.mostrar();

    this.vista.onAceptar(() => {
      const nuevoAspirante = new Cl_mAspirante({
        nombre: this.vista.nombre,
        apellido: this.vista.apellido,
        cedula: this.vista.cedula,
        sexo: this.vista.sexo,
        fechaNacimiento: this.vista.fechaNacimiento,
        peso: this.vista.peso,
        indiceA: this.vista.indiceA,
        preparador: this.vista.preparador,
        diploma: this.vista.diploma,
      });

      this.vista.ocultar();
      callback(nuevoAspirante);
    });

    this.vista.onCancelar(() => {
      this.vista.ocultar();
      callback(null);
    });
  }
}
