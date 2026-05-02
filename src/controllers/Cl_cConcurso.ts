import { I_vConcurso } from "../interfaces/I_vConcurso.js";
import Cl_mConcurso from "../models/Cl_mConcurso.js";
import Cl_cAspirante from "./Cl_cAspirante.js";

export default class Cl_cConcurso {
  private mConcurso: Cl_mConcurso;
  private vConcurso: I_vConcurso;
  private cAspirante: Cl_cAspirante;

  constructor(
    mConcurso: Cl_mConcurso,
    vConcurso: I_vConcurso,
    cAspirante: Cl_cAspirante,
  ) {
    this.mConcurso = mConcurso;
    this.vConcurso = vConcurso;
    this.cAspirante = cAspirante;
    this.vConcurso.onNuevoAspirante(() => this.procesarAspirante());
  }

  private procesarAspirante() {
    this.cAspirante.solicitarAspirante((aspirante) => {
      if (aspirante !== null) {
        this.mConcurso.procesarAspirante(aspirante);
        this.vConcurso.reportar({
            aspiranteContratar: `${this.mConcurso.nombreContratar} (${this.mConcurso.mejorPuntaje} puntos)`,
            listado:`${aspirante.nombre} ${aspirante.apellido} - Puntaje: ${aspirante.puntaje}\n`,
            promedioEdad: this.mConcurso.promedioEdad,
            totalPuntosSubTotal: this.mConcurso.totalPuntosSubTotal
            
        })
    }
  });
}
}
