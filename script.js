const semestres = [
  {
    nombre: "Semestre 1", color: "rojo", materias: [
      "Física I", "Álgebra I", "Cálculo I", "Dibujo Técnico", "Química General"
    ]
  },
  {
    nombre: "Semestre 2", color: "azul", materias: [
      "Física II", "Cálculo II", "Álgebra II", "Métodos Numéricos I", "Dibujo Mecánico"
    ]
  },
  {
    nombre: "Semestre 3", color: "rojo", materias: [
      "Física III", "Ecuaciones Diferenciales I", "Variable Compleja", "Mecánica Técnica",
      "Mecánica de Fluidos I", "Termodinámica Técnica"
    ]
  },
  {
    nombre: "Semestre 4", color: "azul", materias: [
      "Circuitos Eléctricos I", "Electrónica I", "Transformadas Integrales",
      "Mecánica de Fabricación", "Mecánica de Materiales I"
    ]
  },
  {
    nombre: "Semestre 5", color: "rojo", materias: [
      "Circuitos Eléctricos II", "Control de la Calidad", "Transferencia de Calor",
      "Máquinas Hidráulicas y Neumáticas", "Elementos de Máquinas I", "Instalaciones Electromecánicas"
    ]
  },
  {
    nombre: "Semestre 6", color: "azul", materias: [
      "Sistemas de Control I", "Máquinas Eléctricas I", "Mediciones Eléctricas",
      "Elementos de Máquinas II", "Máquinas Térmicas I",
      "Electiva 1 (Sociales, Humanísticas y Complementarias)",
      "Costos Industriales", "Organización Industrial y Presupuestos"
    ]
  },
  {
    nombre: "Semestre 7", color: "rojo", materias: [
      "Electrónica Digital I", "Sistemas de Control II", "Máquinas Eléctricas II",
      "Instalaciones Eléctricas II", "Máquinas Térmicas II",
      "Electiva 2 (Especialidad: Ingeniería Eléctrica)",
      "Líneas de Transmisión", "Electrónica de Potencia II", "Sistemas de Distribución"
    ]
  },
  {
    nombre: "Semestre 8", color: "azul", materias: [
      "Automática I", "Preparación y Evaluación de Proyectos",
      "Ingeniería de Mantenimiento", "Refrigeración y Aire Acondicionado",
      "Prácticas en la Industria I", "Ingeniería Automotriz"
    ]
  },
  {
    nombre: "Semestre 9", color: "blanco", materias: [
      "Centrales Eléctricas", "Subestaciones Eléctricas", "Máquinas de Elevación y Transporte",
      "Prácticas en la Industria II", "Graduación I",
      "Electiva 3 (Especialidad: Ingeniería Mecánica)",
      "Diseño de Máquinas", "Automatización Hidráulica y Neumática",
      "Manufactura Integrada por Computadora", "Mantenimiento Predictivo", "Tribología"
    ]
  },
  {
    nombre: "Semestre 10", color: "blanco", materias: [
      "Graduación II"
    ]
  }
];

// Crear los elementos en HTML
const contenedor = document.getElementById("malla");

semestres.forEach((sem, i) => {
  const div = document.createElement("div");
  div.className = `semestre ${sem.color}`;
  div.innerHTML = `
    <strong>${sem.nombre}</strong>
    <div class="materias" id="materias${i}">
      <ul>${sem.materias.map(m => `<li>${m}</li>`).join("")}</ul>
    </div>
  `;

  div.addEventListener("click", () => {
    const lista = document.getElementById(`materias${i}`);
    lista.style.display = lista.style.display === "block" ? "none" : "block";
  });

  contenedor.appendChild(div);
});
