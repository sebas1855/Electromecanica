const materias = [
  { id: "fis1", nombre: "Física I", requisitos: [], semestre: 1, color: "rojo" },
  { id: "alg1", nombre: "Álgebra I", requisitos: [], semestre: 1, color: "rojo" },
  { id: "cal1", nombre: "Cálculo I", requisitos: [], semestre: 1, color: "rojo" },
  { id: "dibTec", nombre: "Dibujo Técnico", requisitos: [], semestre: 1, color: "rojo" },
  { id: "quiGen", nombre: "Química General", requisitos: [], semestre: 1, color: "rojo" },

  { id: "fis2", nombre: "Física II", requisitos: ["fis1"], semestre: 2, color: "azul" },
  { id: "cal2", nombre: "Cálculo II", requisitos: ["cal1"], semestre: 2, color: "azul" },
  { id: "alg2", nombre: "Álgebra II", requisitos: ["alg1"], semestre: 2, color: "azul" },
  { id: "metNum", nombre: "Métodos Numéricos I", requisitos: ["cal1"], semestre: 2, color: "azul" },
  { id: "dibMec", nombre: "Dibujo Mecánico", requisitos: ["dibTec"], semestre: 2, color: "azul" },

  { id: "fis3", nombre: "Física III", requisitos: ["fis2"], semestre: 3, color: "rojo" },
  { id: "ecDif", nombre: "Ecuaciones Diferenciales I", requisitos: ["cal2"], semestre: 3, color: "rojo" },
  { id: "varComp", nombre: "Variable Compleja", requisitos: ["cal2"], semestre: 3, color: "rojo" },
  { id: "mecTec", nombre: "Mecánica Técnica", requisitos: ["fis2"], semestre: 3, color: "rojo" },
  { id: "mecFlu", nombre: "Mecánica de Fluidos I", requisitos: ["fis2"], semestre: 3, color: "rojo" },
  { id: "termTec", nombre: "Termodinámica Técnica", requisitos: ["quiGen"], semestre: 3, color: "rojo" }
];

let aprobadas = [];
const contenedor = document.getElementById("malla");

const semestresUnicos = [...new Set(materias.map(m => m.semestre))];
semestresUnicos.forEach(sem => {
  const bloque = document.createElement("div");
  bloque.className = `semestre ${materias.find(m => m.semestre === sem).color}`;
  bloque.innerHTML = `<strong>Semestre ${sem}</strong><div class="materias" id="sem${sem}"></div>`;
  contenedor.appendChild(bloque);
});

materias.forEach(m => {
  const btn = document.createElement("button");
  btn.textContent = m.nombre;
  btn.className = "materia-btn bloqueada";
  btn.id = m.id;

  btn.addEventListener("click", () => {
    if (btn.classList.contains("bloqueada")) return;

    btn.classList.add("aprobada");
    btn.disabled = true;
    aprobadas.push(m.id);

    materias.forEach(dep => {
      if (dep.requisitos.includes(m.id)) {
        const todosCumplidos = dep.requisitos.every(req => aprobadas.includes(req));
        if (todosCumplidos) {
          document.getElementById(dep.id).classList.remove("bloqueada");
        }
      }
    });
  });

  document.getElementById(`sem${m.semestre}`).appendChild(btn);
});

materias.forEach(m => {
  if (m.requisitos.length === 0) {
    document.getElementById(m.id).classList.remove("bloqueada");
  }
});
