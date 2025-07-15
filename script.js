const materias = [
  // ( Aquí está todo el bloque de materias hasta semestre 10, corregido)
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
  { id: "termTec", nombre: "Termodinámica Técnica", requisitos: ["quiGen"], semestre: 3, color: "rojo" },

  { id: "circ1", nombre: "Circuitos Eléctricos I", requisitos: ["alg2"], semestre: 4, color: "azul" },
  { id: "elec1", nombre: "Electrónica I", requisitos: ["fis3"], semestre: 4, color: "azul" },
  { id: "transfInt", nombre: "Transformadas Integrales", requisitos: ["varComp"], semestre: 4, color: "azul" },
  { id: "mecFab", nombre: "Mecánica de Fabricación", requisitos: ["mecTec"], semestre: 4, color: "azul" },
  { id: "mecMat1", nombre: "Mecánica de Materiales I", requisitos: ["mecTec"], semestre: 4, color: "azul" },

  { id: "circ2", nombre: "Circuitos Eléctricos II", requisitos: ["circ1"], semestre: 5, color: "rojo" },
  { id: "calidad", nombre: "Control de la Calidad", requisitos: ["mecFab"], semestre: 5, color: "rojo" },
  { id: "transfCalor", nombre: "Transferencia de Calor", requisitos: ["termTec"], semestre: 5, color: "rojo" },
  { id: "maqHid", nombre: "Máquinas Hidráulicas y Neumáticas", requisitos: ["mecFlu"], semestre: 5, color: "rojo" },
  { id: "elemMaq1", nombre: "Elementos de Máquinas I", requisitos: ["mecMat1"], semestre: 5, color: "rojo" },
  { id: "instElectro", nombre: "Instalaciones Electromecánicas", requisitos: ["circ1"], semestre: 5, color: "rojo" },

  { id: "ctrl1", nombre: "Sistemas de Control I", requisitos: ["transfInt"], semestre: 6, color: "azul" },
  { id: "maqElec1", nombre: "Máquinas Eléctricas I", requisitos: ["circ2"], semestre: 6, color: "azul" },
  { id: "medic", nombre: "Mediciones Eléctricas", requisitos: ["circ2"], semestre: 6, color: "azul" },
  { id: "elemMaq2", nombre: "Elementos de Máquinas II", requisitos: ["elemMaq1"], semestre: 6, color: "azul" },
  { id: "maqTerm1", nombre: "Máquinas Térmicas I", requisitos: ["transfCalor"], semestre: 6, color: "azul" },
  { id: "electiva1", nombre: "Electiva 1 (Sociales)", requisitos: [], semestre: 6, color: "azul" },
  { id: "costos", nombre: "Costos Industriales", requisitos: ["electiva1"], semestre: 6, color: "azul" },
  { id: "orgInd", nombre: "Organización Industrial y Presupuestos", requisitos: ["electiva1"], semestre: 6, color: "azul" },

  { id: "elecDig", nombre: "Electrónica Digital I", requisitos: ["maqElec1"], semestre: 7, color: "rojo" },
  { id: "ctrl2", nombre: "Sistemas de Control II", requisitos: ["ctrl1"], semestre: 7, color: "rojo" },
  { id: "maqElec2", nombre: "Máquinas Eléctricas II", requisitos: ["maqElec1"], semestre: 7, color: "rojo" },
  { id: "instElect2", nombre: "Instalaciones Eléctricas II", requisitos: ["instElectro"], semestre: 7, color: "rojo" },
  { id: "maqTerm2", nombre: "Máquinas Térmicas II", requisitos: ["maqTerm1"], semestre: 7, color: "rojo" },
  { id: "electiva2", nombre: "Electiva 2 (Especialidad Eléctrica)", requisitos: ["maqElec1"], semestre: 7, color: "rojo" },
  { id: "lineas", nombre: "Líneas de Transmisión", requisitos: ["maqElec1"], semestre: 7, color: "rojo" },
  { id: "potencia2", nombre: "Electrónica de Potencia II", requisitos: ["elec1"], semestre: 7, color: "rojo" },
  { id: "dist", nombre: "Sistemas de Distribución", requisitos: ["medic"], semestre: 7, color: "rojo" },

  { id: "auto1", nombre: "Automática I", requisitos: ["elecDig"], semestre: 8, color: "azul" },
  { id: "proy", nombre: "Evaluación de Proyectos", requisitos: ["electiva2"], semestre: 8, color: "azul" },
  { id: "mant", nombre: "Ingeniería de Mantenimiento", requisitos: ["elemMaq2"], semestre: 8, color: "azul" },
  { id: "refrig", nombre: "Refrigeración y Aire Acondicionado", requisitos: ["maqTerm2"], semestre: 8, color: "azul" },
  { id: "autoMot", nombre: "Ingeniería Automotriz", requisitos: ["maqTerm2"], semestre: 8, color: "azul" },
  { id: "pract1", nombre: "Prácticas en la Industria I", requisitos: ["75porciento"], semestre: 8, color: "azul" },

  { id: "cent", nombre: "Centrales Eléctricas", requisitos: ["maqElec2"], semestre: 9, color: "blanco" },
  { id: "subs", nombre: "Subestaciones Eléctricas", requisitos: ["maqElec2"], semestre: 9, color: "blanco" },
  { id: "elev", nombre: "Máquinas de Elevación y Transporte", requisitos: ["mecFab"], semestre: 9, color: "blanco" },
  { id: "pract2", nombre: "Prácticas en la Industria II", requisitos: ["pract1"], semestre: 9, color: "blanco" },
  { id: "grad1", nombre: "Graduación I", requisitos: ["orgInd"], semestre: 9, color: "blanco" },
  { id: "electiva3", nombre: "Electiva 3 (Especialidad Mecánica)", requisitos: ["elev"], semestre: 9, color: "blanco" },
  { id: "disMaq", nombre: "Diseño de Máquinas", requisitos: ["mant"], semestre: 9, color: "blanco" },
  { id: "autoHid", nombre: "Automatización Hidráulica y Neumática", requisitos: ["elec1"], semestre: 9, color: "blanco" },
  { id: "manComp", nombre: "Manufactura por Computadora", requisitos: ["mant"], semestre: 9, color: "blanco" },
  { id: "mantPred", nombre: "Mantenimiento Predictivo", requisitos: ["elev"], semestre: 9, color: "blanco" },
  { id: "tribo", nombre: "Tribología", requisitos: ["elev"], semestre: 9, color: "blanco" },

  { id: "grad2", nombre: "Graduación II", requisitos: ["grad1"], semestre: 10, color: "blanco" }
];

let aprobadas = JSON.parse(localStorage.getItem("materias_aprobadas")) || [];

const contenedor = document.getElementById("malla");
const progresoBox = document.getElementById("progreso");

function actualizarProgreso() {
  const porcentaje = Math.floor((aprobadas.length / materias.length) * 100);
  progresoBox.textContent = `Progreso: ${aprobadas.length} de ${materias.length} materias aprobadas (${porcentaje}%)`;

  if (porcentaje >= 75) {
    const pract1Btn = document.getElementById("pract1");
    if (pract1Btn) pract1Btn.classList.remove("bloqueada");
  }
}

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
    const id = m.id;

    if (btn.classList.contains("aprobada")) {
      btn.classList.remove("aprobada");
      btn.disabled = false;
      aprobadas = aprobadas.filter(x => x !== id);

      materias.forEach(dep => {
        if (dep.requisitos.includes(id)) {
          const depBtn = document.getElementById(dep.id);
          if (depBtn) {
            depBtn.classList.add("bloqueada");
            depBtn.classList.remove("aprobada");
            depBtn.disabled = false;
            aprobadas = aprobadas.filter(x => x !== dep.id);
          }
        }
      });
    } else {
      btn.classList.add("aprobada");
      btn.disabled = true;
      aprobadas.push(id);

      materias.forEach(dep => {
        if (dep.requisitos.includes(id)) {
          const todosCumplidos = dep.requisitos.every(req => aprobadas.includes(req));
          if (todosCumplidos) {
            document.getElementById(dep.id).classList.remove("bloqueada");
          }
        }
      });
    }

    localStorage.setItem("materias_aprobadas", JSON.stringify(aprobadas));
    actualizarProgreso();
  });

  document.getElementById(`sem${m.semestre}`).appendChild(btn);
});

materias.forEach(m => {
  if (m.requisitos.length === 0 || m.requisitos.includes("75porciento")) {
    const btn = document.getElementById(m.id);
    if (m.requisitos.includes("75porciento")) {
      const porcentaje = (aprobadas.length / materias.length) * 100;
      if (porcentaje >= 75) btn.classList.remove("bloqueada");
    } else {
      btn.classList.remove("bloqueada");
    }
  }
});

aprobadas.forEach(id => {
  const btn = document.getElementById(id);
  if (btn) {
    btn.classList.add("aprobada");
    btn.disabled = true;
  }

  materias.forEach(dep => {
    if (dep.requisitos.includes(id)) {
      const todosCumplidos = dep.requisitos.every(req => aprobadas.includes(req));
      if (todosCumplidos) {
        document.getElementById(dep.id).classList.remove("bloqueada");
      }
    }
  });
});

actualizarProgreso();

function reiniciarProgreso() {
  if (confirm("¿Seguro que quieres reiniciar tu progreso?")) {
    localStorage.clear();
    location.reload();
  }
}
