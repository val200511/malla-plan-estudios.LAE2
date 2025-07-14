const materias = [
  // 1ER AÑO
  "1.01 Introducción a las Ciencias Sociales",
  "1.02 Introducción a la Economía",
  "1.03 Introducción a la Administración",
  "1.04 Derecho Const. y Administrativo",
  "1.05 Introducción a la Contabilidad",
  "1.06 Introducción a la Matemática",
  "1.07 Instituciones del Derecho Privado",

  // 2DO AÑO
  "2.08 Administración General",
  "2.09 Tecnología de la Inf. I",
  "2.10 Matemática para Cont. y Adm.",
  "2.11.2 Administración de las Operaciones",
  "2.13.2 Contabilidad para Administradores",
  "2.14.2 Relaciones Laborales y de la Seg. Social",

  // 3ER AÑO
  "3.15.1 Sistemas Administrativos",
  "3.16.1 Sociedades y Asoc. para Adm.",
  "3.17.1 Estadística para Administradores",
  "3.18.1 Sociología para las Organizaciones",
  "3.19.2 Análisis e Interpretación de Estados Cont.",
  "3.20.2 Microeconomía",
  "3.21.2 Tecnología de la Inf. II",
  "3.22.2 Matemática Financiera",

  // 4TO AÑO
  "4.23.1 Inf. para la Competitividad",
  "4.24.1 Plan y Presup.",
  "4.25.1 Metodología de la Inv.",
  "4.26.1 Régimen Tributario de la Empresa",
  "4.27.2 Psicología del Trabajo y de las Org.",
  "4.28.2 Adm. de la Comercialización",
  "4.29.2 Estructura y Polít. Económica Arg.",
  "4.30.2 Taller de Prác. Prof. Mod. I",

  // 5TO AÑO
  "5.31.1 Administración Financiera",
  "5.32.1 Gestión de Recursos Humanos",
  "5.33.1 Asignatura Electiva I",
  "5.34.1 Asignatura Optativa I",
  "5.35.1 Asignatura Optativa II",
  "5.36.1 Seminario: Evl. de Proy. de Inv.",
  "5.38.2 Dirección General",
  "5.39.2 Taller de Prác. Prof. Mod. II",

  // OPTATIVAS (pueden ir en otra sección si querés)
  "Finanzas Públicas",
  "Comercialización Aplicada",
  "Logística y Operaciones",
  "Gestión de los Sistemas de Información",
  "Administración de Organismos del Estado"
];

const malla = document.getElementById("malla");

materias.forEach((nombre) => {
  const div = document.createElement("div");
  div.className = "materia";
  div.innerText = nombre;
  div.onclick = () => {
    if (div.classList.contains("aprobada")) {
      div.classList.remove("aprobada");
      div.classList.add("cursando");
    } else if (div.classList.contains("cursando")) {
      div.classList.remove("cursando");
    } else {
      div.classList.add("aprobada");
    }
  };
  malla.appendChild(div);
});
