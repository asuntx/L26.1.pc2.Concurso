import { I_vAspirante } from "../interfaces/I_vAspirante.js";

export default class Cl_vAspirante implements I_vAspirante {
  private vista: HTMLElement;
  private inNombre: HTMLInputElement;
  private inApellido: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private inFechaNac: HTMLInputElement;
  private inPuntosIA: HTMLInputElement;
  private inPuntosPrep: HTMLInputElement;
  private inPuntosDiplomas: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("aspirante") as HTMLElement;
    this.inNombre = document.getElementById(
      "aspirante_inNombre",
    ) as HTMLInputElement;
    this.inApellido = document.getElementById(
      "aspirante_inApellido",
    ) as HTMLInputElement;
    this.inCedula = document.getElementById(
      "aspirante_inCedula",
    ) as HTMLInputElement;
    this.inSexo = document.getElementById(
      "aspirante_inSexo",
    ) as HTMLSelectElement;
    this.inFechaNac = document.getElementById(
      "aspirante_inFechaNac",
    ) as HTMLInputElement;
    this.inPuntosIA = document.getElementById(
      "aspirante_inPuntosIA",
    ) as HTMLInputElement;
    this.inPuntosPrep = document.getElementById(
      "aspirante_inPuntosPrep",
    ) as HTMLInputElement;
    this.inPuntosDiplomas = document.getElementById(
      "aspirante_inPuntosDiplomas",
    ) as HTMLInputElement;
    this.btCancelar = document.getElementById(
      "aspirante_btCancelar",
    ) as HTMLButtonElement;
    this.btAceptar = document.getElementById(
      "aspirante_btAceptar",
    ) as HTMLButtonElement;
  }

  get nombre(): string {
    return this.inNombre.value;
  }
  get apellido(): string {
    return this.inApellido.value;
  }
  get cedula(): string {
    return this.inCedula.value;
  }
  get sexo(): string {
    return this.inSexo.value;
  }
  get fechaNac(): string {
    return this.inFechaNac.value;
  }
  get puntosIA(): number {
    return +this.inPuntosIA.value;
  }
  get puntosPrep(): number {
    return +this.inPuntosPrep.value;
  }
  get puntosDiplomas(): number {
    return +this.inPuntosDiplomas.value;
  }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = callback;
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = callback;
  }

  mostrar(): void {
    this.inNombre.value = "";
    this.inApellido.value = "";
    this.inCedula.value = "";
    this.inFechaNac.value = "";
    this.inPuntosIA.value = "";
    this.inPuntosPrep.value = "";
    this.inPuntosDiplomas.value = "";
    this.inSexo.selectedIndex = 0;
    if (this.vista) this.vista.hidden = false;
  }

  ocultar(): void {
    if (this.vista) this.vista.hidden = true;
  }
}
