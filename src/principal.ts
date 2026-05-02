import Cl_mAspirante from "./models/Cl_mAspirante.js";
import Cl_mConcurso from "./models/Cl_mConcurso.js";

let aspirante1 = new Cl_mAspirante({
    nombre: "Ana",
    apellido: "Gil",
    cedula: "8888",
    sexo: "F",
    fechaNac: "06-15-2001",
    puntosIA: 11,
    puntosPrep: 5,
    puntosDiplomas: 0,
  }),
  aspirante2 = new Cl_mAspirante({
    nombre: "Mery",
    apellido: "Paz",
    cedula: "6666",
    sexo: "F",
    fechaNac: "07-25-1999",
    puntosIA: 4,
    puntosPrep: 0,
    puntosDiplomas: 7,
  }),
  aspirante3 = new Cl_mAspirante({
    nombre: "Juan",
    apellido: "Sanz",
    cedula: "9999",
    sexo: "M",
    fechaNac: "09-20-1980",
    puntosIA: 7,
    puntosPrep: 12,
    puntosDiplomas: 0,
  }),
  aspirante4 = new Cl_mAspirante({
    nombre: "Paty",
    apellido: "Ortiz",
    cedula: "3333",
    sexo: "F",
    fechaNac: "5-14-1970",
    puntosIA: 18,
    puntosPrep: 0,
    puntosDiplomas: 5,
  }),
  aspirante5 = new Cl_mAspirante({
    nombre: "Liz",
    apellido: "Ramos",
    cedula: "2222",
    sexo: "F",
    fechaNac: "01-03-2005",
    puntosIA: 17,
    puntosPrep: 8,
    puntosDiplomas: 5,
  }),
  aspirante6 = new Cl_mAspirante({
    nombre: "Raul",
    apellido: "Méndez",
    cedula: "5555",
    sexo: "M",
    fechaNac: "10-11-1995",
    puntosIA: 7,
    puntosPrep: 15,
    puntosDiplomas: 1,
  }),
  aspirante7 = new Cl_mAspirante({
    nombre: "Tony",
    apellido: "Flores",
    cedula: "7777",
    sexo: "M",
    fechaNac: "08-07-1999",
    puntosIA: 5,
    puntosPrep: 6,
    puntosDiplomas: 7,
  }),
  aspirante8 = new Cl_mAspirante({
    nombre: "Gaby",
    apellido: "López",
    cedula: "1111",
    sexo: "F",
    fechaNac: "07-19-1966",
    puntosIA: 17,
    puntosPrep: 3,
    puntosDiplomas: 6,
  });

const concurso = new Cl_mConcurso();

concurso.procesarAspirante(aspirante1);
concurso.procesarAspirante(aspirante2);
concurso.procesarAspirante(aspirante3);
concurso.procesarAspirante(aspirante4);
concurso.procesarAspirante(aspirante5);
concurso.procesarAspirante(aspirante6);
concurso.procesarAspirante(aspirante7);
concurso.procesarAspirante(aspirante8);

let lblAspiranteContratar = document.getElementById("lblAspiranteContratar"),
lblListaAspirantes = document.getElementById("lblListaAspirantes"),
lblPromedioEdad = document.getElementById("lblPromedioEdad"),
lblPuntosSubTotal = document.getElementById("lblPuntosSubTotal");
if (lblAspiranteContratar && lblListaAspirantes && lblPromedioEdad && lblPuntosSubTotal) {
  lblAspiranteContratar.innerHTML = concurso.nombreContratar;
  lblListaAspirantes.innerHTML = `
${aspirante1.nombre} ${aspirante1.apellido} - Puntaje: ${aspirante1.puntaje}<br>
${aspirante2.nombre} ${aspirante2.apellido} - Puntaje: ${aspirante2.puntaje}<br>
${aspirante3.nombre} ${aspirante3.apellido} - Puntaje: ${aspirante3.puntaje}<br>
${aspirante4.nombre} ${aspirante4.apellido} - Puntaje: ${aspirante4.puntaje}<br>
${aspirante5.nombre} ${aspirante5.apellido} - Puntaje: ${aspirante5.puntaje}<br>
${aspirante6.nombre} ${aspirante6.apellido} - Puntaje: ${aspirante6.puntaje}<br>
${aspirante7.nombre} ${aspirante7.apellido} - Puntaje: ${aspirante7.puntaje}<br>
${aspirante8.nombre} ${aspirante8.apellido} - Puntaje: ${aspirante8.puntaje}
  `;
  lblPromedioEdad.innerHTML = concurso.promedioEdad.toFixed(2);
  lblPuntosSubTotal.innerHTML = concurso.totalPuntosSubTotal.toString();
}

export default concurso;
