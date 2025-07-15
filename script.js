const materias = [
  {
    id: "fisica1",
    nombre: "Física I",
    requisitos: [],
    semestre: 1,
    color: "rojo"
  },
  {
    id: "fisica2",
    nombre: "Física II",
    requisitos: ["fisica1"],
    semestre: 2,
    color: "azul"
  },
  {
    id: "fisica3",
    nombre: "Física III",
    requisitos: ["fisica2"],
    semestre: 3,
    color: "rojo"
  },
  {
    id: "mecanica_fluidos",
    nombre: "Mecánica de Fluidos I",
    requisitos: ["fisica2"],
    semestre: 3,
    color: "rojo"
  }
];

const grid = document.getElementById("malla");

function crearMalla() {
  const semestresUnicos = [...new Set(materias.map(m => m.semestre))];
  semestresUnicos.forEach(sem => {
    const div = document.createElement("div");
    div.className = `semestre ${materias.find(m => m.semestre === sem).color}`;
    div.innerHTML = `<strong>Semestre ${sem}</strong><div class="materias" id="sem${sem}"></div>`;
    grid.appendChild(div);
  });

  materias.forEach(m => {
    const btn = document.createElement("button");
    btn.textContent = m.nombre;
    btn.className = "materia-btn";
    btn.dataset.id = m.id;

    btn.addEventListener("click", () => {
      document.querySelectorAll(".materia-btn").forEach(b => {
        if (b.dataset.dependeDe === m.id) {
          b.classList.add("resaltado");
        }
      });
    });

    const container = document.getElementById(`sem${m.semestre}`);
    container.appendChild(btn);
  });

  // Marcar qué botones dependen de quién
  materias.forEach(m => {
    m.requisitos.forEach(req => {
      const boton = document.querySelector(`.materia-btn[data-id="${m.id}"]`);
      if (boton) boton.dataset.dependeDe = req;
    });
  });
}

crearMalla();
btn.classList.add("aprobada");
btn.disabled = true;
