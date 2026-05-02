import { I_vConcurso } from "../interfaces/I_vConcurso.js";

export default class Cl_vConcurso implements I_vConcurso {
  private btNuevoAspirante: HTMLButtonElement;
  private lblAspiranteContratar: HTMLElement;
  private lblListaAspirantes: HTMLElement;
  private lblPromedioEdad: HTMLElement;
  private lblPuntosSubTotal: HTMLElement;

  constructor() {
    this.btNuevoAspirante = document.getElementById("btNuevoAspirante") as HTMLButtonElement;
    this.lblAspiranteContratar = document.getElementById("lblAspiranteContratar") as HTMLElement;
    this.lblListaAspirantes = document.getElementById("lblListaAspirantes") as HTMLElement;
    this.lblPromedioEdad = document.getElementById("lblPromedioEdad") as HTMLElement;
    this.lblPuntosSubTotal = document.getElementById("lblPuntosSubTotal") as HTMLElement;
  }

  onNuevoAspirante(callback: () => void): void {
    this.btNuevoAspirante.onclick = (e) => {
      e.preventDefault();
      callback();
    };
  }

  reportar({ 
    aspiranteContratar, 
    listado, 
    promedioEdad,
    totalPuntosSubTotal
  }: { 
    aspiranteContratar: string; 
    listado: string; 
    promedioEdad: number;
    totalPuntosSubTotal: number;
  }): void {
    this.lblAspiranteContratar.innerHTML = aspiranteContratar || "Esperando datos...";
    this.lblPromedioEdad.innerHTML = promedioEdad.toFixed(2);
    this.lblListaAspirantes.innerHTML = listado;
    this.lblPuntosSubTotal.innerHTML = totalPuntosSubTotal.toString();
  }
}