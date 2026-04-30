import Cl_mAspirante from "./models/Cl_mAspirante.js";
import Cl_mConcurso from "./models/Cl_mConcurso.js";

const aspirantesData: [
  string,
  string,
  string,
  string,
  string,
  number,
  number,
  number,
  number,
][] = [
  ["Kedwin", "Garrido", "111", "M", "2007-02-06", 75, 8, 2, 3],
  ["Sebastian", "Figueroa", "222", "M", "2007-03-12", 70, 15, 4, 1],
  ["Thiany", "Mendoza", "333", "F", "1950-10-11", 62, 22, 1, 1],
  ["Rachel", "Medina", "444", "F", "1967-02-10", 65, 18, 5, 4],
  ["Manuel", "Figueroa", "555", "M", "2005-05-20", 80, 10, 3, 2],
  ["Everth", "Owkin", "666", "M", "1998-12-15", 85, 11, 0, 0],
  ["Jonathan", "Querales", "777", "M", "2006-08-30", 72, 6, 2, 1],
  ["Diana", "Pena", "888", "F", "2004-01-12", 58, 8, 1, 10],
  ["Darwin", "Olmedo", "999", "M", "1985-06-25", 78, 25, 1, 2],
  ["Jessica", "Contreras", "123", "F", "2007-11-05", 55, 7, 5, 4],
  ["Isai", "Parra", "321", "M", "2000-03-14", 74, 10, 2, 0],
  ["Lionel", "Cristiano", "546", "M", "1992-09-18", 82, 11, 2, 2],
];

const concurso = new Cl_mConcurso();
let acumuladoR2 = "";

for (let i = 0; i < aspirantesData.length; i++) {
  const d = aspirantesData[i];

  const aspirante = new Cl_mAspirante({
    nombre: d[0],
    apellido: d[1],
    cedula: d[2],
    sexo: d[3],
    fechaNacimiento: d[4],
    peso: d[5],
    indiceA: d[6],
    preparador: d[7],
    diploma: d[8],
  });

  const puntos = concurso.procesarAspirante(aspirante);
  const info = `${aspirante.nombre} ${aspirante.apellido}: ${puntos.toFixed(0)} pts`;
  acumuladoR2 = acumuladoR2 === "" ? info : `${acumuladoR2}, ${info}`;
}

let lblAspiranteContratar = document.getElementById("lblAspiranteContratar");
let lblMejorPuntaje = document.getElementById("lblMejorPuntaje");
let lblListaAspirantes = document.getElementById("lblListaAspirantes");
let lblPesoPromedio = document.getElementById("lblPesoPromedio");

if (
  lblAspiranteContratar &&
  lblMejorPuntaje &&
  lblListaAspirantes &&
  lblPesoPromedio
) {
  lblAspiranteContratar.innerHTML = concurso.nombreContratar();
  lblMejorPuntaje.innerHTML = concurso.mejorPuntaje().toFixed(2);

  lblListaAspirantes.innerHTML = acumuladoR2;

  lblPesoPromedio.innerHTML = `${concurso.pesoPromedio().toFixed(2)} kg`;
}

export default concurso;
