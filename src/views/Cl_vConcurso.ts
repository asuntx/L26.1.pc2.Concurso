import { I_vConcurso } from "../interfaces/I_vConcurso.js";

export default class Cl_vConcurso implements I_vConcurso {
  private btNuevoAspirante: HTMLButtonElement;
  private lblAspiranteContratar: HTMLElement;
  private lblMejorPuntaje: HTMLElement;
  private lblListaAspirantes: HTMLElement;
  private lblPesoPromedio: HTMLElement; 

  constructor() {
    this.btNuevoAspirante = document.getElementById("main_btNuevoAspirante") as HTMLButtonElement;
    this.lblAspiranteContratar = document.getElementById("main_lblAspiranteContratar") as HTMLElement;
    this.lblMejorPuntaje = document.getElementById("main_lblMejorPuntaje") as HTMLElement;
    this.lblListaAspirantes = document.getElementById("main_listaAspirantes") as HTMLElement;
    this.lblPesoPromedio = document.getElementById("main_lblPesoPromedio") as HTMLElement; // <--- Inicialización
  }

  onNuevoAspirante(callback: () => void): void {
    this.btNuevoAspirante.onclick = (e) => {
      e.preventDefault();
      callback();
    };
  }

  reportar({ 
    aspiranteContratar, 
    mejorPuntaje, 
    listado, 
    pesoPromedio 
  }: { 
    aspiranteContratar: string; 
    mejorPuntaje: number; 
    listado: string; 
    pesoPromedio: number; 
  }): void {
    this.lblAspiranteContratar.innerHTML = aspiranteContratar || "Esperando datos...";
    this.lblMejorPuntaje.innerHTML = mejorPuntaje.toFixed(2);
    
    if (this.lblPesoPromedio) {
        this.lblPesoPromedio.innerHTML = `${pesoPromedio.toFixed(2)}`;
    }

    
    if (this.lblListaAspirantes) {
        this.lblListaAspirantes.innerHTML = listado;
    }
  }
}