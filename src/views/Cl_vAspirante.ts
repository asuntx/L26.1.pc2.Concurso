import { I_vAspirante } from "../interfaces/I_vAspirante.js";

export default class Cl_vAspirante implements I_vAspirante {
  private vista: HTMLElement;
  private inNombre: HTMLInputElement;
  private inApellido: HTMLInputElement;
  private inCedula: HTMLInputElement;
  private inSexo: HTMLSelectElement;
  private inFechaNacimiento: HTMLInputElement;
  private inPeso: HTMLInputElement; 
  private inIndiceA: HTMLInputElement;
  private inPreparador: HTMLInputElement;
  private inDiploma: HTMLInputElement;
  private btCancelar: HTMLButtonElement;
  private btAceptar: HTMLButtonElement;

  constructor() {
    this.vista = document.getElementById("seccionAspirante") as HTMLElement;
    this.inNombre = document.getElementById("aspirante_inNombre") as HTMLInputElement;
    this.inApellido = document.getElementById("aspirante_inApellido") as HTMLInputElement;
    this.inCedula = document.getElementById("aspirante_inCedula") as HTMLInputElement;
    this.inSexo = document.getElementById("aspirante_inSexo") as HTMLSelectElement;
    this.inFechaNacimiento = document.getElementById("aspirante_inFechaNacimiento") as HTMLInputElement;
    this.inPeso = document.getElementById("aspirante_inPeso") as HTMLInputElement; 
    this.inIndiceA = document.getElementById("aspirante_inIndiceA") as HTMLInputElement;
    this.inPreparador = document.getElementById("aspirante_inPreparador") as HTMLInputElement;
    this.inDiploma = document.getElementById("aspirante_inDiploma") as HTMLInputElement;
    this.btCancelar = document.getElementById("aspirante_btCancelar") as HTMLButtonElement;
    this.btAceptar = document.getElementById("aspirante_btAceptar") as HTMLButtonElement;
  }

  get nombre(): string { return this.inNombre.value.trim(); }
  get apellido(): string { return this.inApellido.value.trim(); }
  get cedula(): string { return this.inCedula.value.trim(); }
  get sexo(): string { return this.inSexo.value; }
  get fechaNacimiento(): string { return this.inFechaNacimiento.value; }
  get peso(): number { return Number(this.inPeso.value) || 0; } 
  get indiceA(): number { return Number(this.inIndiceA.value) || 0; }
  get preparador(): number { return Number(this.inPreparador.value) || 0; }
  get diploma(): number { return Number(this.inDiploma.value) || 0; }

  onAceptar(callback: () => void): void {
    this.btAceptar.onclick = (e) => {
      e.preventDefault(); 
      callback();
    };
  }

  onCancelar(callback: () => void): void {
    this.btCancelar.onclick = (e) => {
      e.preventDefault();
      callback();
    };
  }

  mostrar(): void { 
    if (this.vista) {
      this.vista.hidden = false; 
      this.inNombre.value = "";
      this.inApellido.value = "";
      this.inCedula.value = "";
      this.inFechaNacimiento.value = "";
      this.inPeso.value = ""; 
      this.inIndiceA.value = "";
      this.inPreparador.value = "";
      this.inDiploma.value = "";
      this.inSexo.selectedIndex = 0;
    }
  }

  ocultar(): void { 
    if (this.vista) this.vista.hidden = true; 
  }
}