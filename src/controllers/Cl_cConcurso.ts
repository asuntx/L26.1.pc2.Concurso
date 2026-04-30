import Cl_mConcurso from "../models/Cl_mConcurso.js";
import Cl_cAspirante from "./Cl_cAspirante.js";
import { I_vConcurso } from "../interfaces/I_vConcurso.js";

export default class Cl_cConcurso {
    private mConcurso: Cl_mConcurso;
    private vConcurso: I_vConcurso;
    private cAspirante: Cl_cAspirante;
    private acumuladoR2: string;

    constructor(vConcurso: I_vConcurso, cAspirante: Cl_cAspirante) {
        this.mConcurso = new Cl_mConcurso();
        this.vConcurso = vConcurso;
        this.cAspirante = cAspirante;
        this.acumuladoR2 = ""; 
        this.vConcurso.onNuevoAspirante(() => this.procesarAspirante());
    }


    procesarAspirante() {
        this.cAspirante.solicitarAspirante((aspirante) => {
            if (aspirante) {
                const puntos = this.mConcurso.procesarAspirante(aspirante);
                
                
                const linea = `${aspirante.nombre} ${aspirante.apellido}: ${puntos.toFixed(2)} pts`;
                
                if (this.acumuladoR2 === "") {
                    this.acumuladoR2 = linea;
                } else {
                    this.acumuladoR2 += `, ${linea}`;
                }
                
                this.actualizarVista();
            }
        });
    }

    actualizarVista() {
        
        this.vConcurso.reportar({
            aspiranteContratar: this.mConcurso.nombreContratar(),
            mejorPuntaje: this.mConcurso.mejorPuntaje(),
            listado: this.acumuladoR2,
            pesoPromedio: this.mConcurso.pesoPromedio() 
        });
    }
}