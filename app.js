const questionnaire = [
  {
    category: "Residuos Peligrosos",
    items: [
      {
        id: "rp-1",
        text: "Se generan residuos peligrosos en el sitio?",
        options: ["Si", "No"],
      },
      {
        id: "rp-2",
        text: "La empresa cuenta con registro vigente como generador de residuos peligrosos?",
      },
      {
        id: "rp-3",
        text: "Existe almacen temporal de residuos peligrosos? (si es microgenerador: No aplica)",
      },
      {
        id: "rp-4",
        text: "El almacen temporal tiene techo, piso impermeable, contencion, senalizacion y control de acceso?",
      },
      {
        id: "rp-5",
        text: "Los recipientes estan en buen estado: cerrados, sin fugas y con llenado controlado?",
      },
      {
        id: "rp-6",
        text: "Los recipientes estan etiquetados con nombre, caracteristica, fecha y datos del generador?",
      },
      {
        id: "rp-7",
        text: "Existe segregacion adecuada de residuos?",
      },
      {
        id: "rp-8",
        text: "El almacenamiento es menor o igual a 6 meses?",
      },
      {
        id: "rp-9",
        text: "Se mantiene actualizada la bitacora de entradas/salidas/cantidades/destino?",
      },
      {
        id: "rp-10",
        text: "Si es gran generador: existe e implementa plan de manejo?",
      },
      {
        id: "rp-11",
        text: "Las empresas de transporte y destino final tienen autorizaciones vigentes?",
      },
      {
        id: "rp-12",
        text: "Se comunica prohibicion de disponer residuos en drenaje/suelo o por combustion in situ?",
      },
    ],
  },
  {
    category: "Combustibles, aceites, grasas y quimicos",
    items: [
      {
        id: "cagq-1",
        text: "Combustibles y aceites se almacenan con contencion y superficie impermeable?",
      },
      { id: "cagq-2", text: "Existen spill kits completos, accesibles y senalizados?" },
      {
        id: "cagq-3",
        text: "Los trasvases se hacen con embudo y control de goteos, evitando derrames?",
      },
      {
        id: "cagq-4",
        text: "Las HDS estan disponibles y comunicadas al personal?",
      },
      {
        id: "cagq-5",
        text: "El personal tiene capacitacion vigente en manejo de quimicos y respuesta a derrames?",
      },
    ],
  },
  {
    category: "Agua y descargas",
    items: [
      { id: "ayd-1", text: "Se cumple la prohibicion de verter liquidos a drenajes pluviales?" },
      {
        id: "ayd-2",
        text: "Los lavados y limpiezas ocurren solo en areas autorizadas con piso impermeable y trampa para grasas/aceites?",
      },
    ],
  },
];

const app = document.getElementById("app");

const state = {
  meta: {
    fecha: new Date().toISOString().slice(0, 10),
    proyecto: "",
    contratista: "",
    etapa: "",
  },
  flow: [],
  answers: {},
  cursor: -1,
};

function flattenFlow() {
  return questionnaire.flatMap((group) =>
    group.items.map((item) => ({ ...item, category: group.category })),
  );
}

function start() {
  state.flow = flattenFlow();
  state.answers = {};
  state.cursor = -1;
  renderStart();
}

function visibleFlow() {
  if (state.answers["rp-1"] === "No") {
    return state.flow.filter((item) => item.id === "rp-1" || !item.id.startsWith("rp-"));
  }
  return state.flow;
}

function renderStart() {
  app.innerHTML = `
    <section class="card">
      <h1>Inspeccion Ambiental</h1>
      <p>Cuestionario mobile-first para identificar incumplimientos y priorizar riesgos.</p>
      <div class="start-grid">
        <label>Fecha
          <input type="date" id="fecha" value="${state.meta.fecha}" />
        </label>
        <label>Proyecto
          <input type="text" id="proyecto" placeholder="Ej. Subestacion Norte" value="${escapeHtml(state.meta.proyecto)}" />
        </label>
        <label>Grupo Cobra / Subcontratista
          <input type="text" id="contratista" placeholder="Empresa responsable" value="${escapeHtml(state.meta.contratista)}" />
        </label>
        <label>Etapa del proyecto
          <input type="text" id="etapa" placeholder="Construccion / Operacion" value="${escapeHtml(state.meta.etapa)}" />
        </label>
      </div>
      <div class="actions">
        <button class="btn-primary" id="begin">Comenzar inspeccion</button>
      </div>
    </section>
  `;

  document.getElementById("begin").addEventListener("click", () => {
    state.meta.fecha = document.getElementById("fecha").value || state.meta.fecha;
    state.meta.proyecto = document.getElementById("proyecto").value.trim();
    state.meta.contratista = document.getElementById("contratista").value.trim();
    state.meta.etapa = document.getElementById("etapa").value.trim();
    state.cursor = 0;
    renderQuestion();
  });
}

function defaultOptions(item) {
  if (item.options) return item.options;
  return ["Cumple", "No cumple", "No aplica"];
}

function renderQuestion() {
  const flow = visibleFlow();
  if (state.cursor < 0) state.cursor = 0;
  if (state.cursor > flow.length - 1) state.cursor = flow.length - 1;
  const total = flow.length;
  const item = flow[state.cursor];
  const pct = Math.round(((state.cursor + 1) / total) * 100);
  const options = defaultOptions(item);

  app.innerHTML = `
    <section class="card">
      <div class="chip">${escapeHtml(item.category)}</div>
      <div class="progress-wrap">
        <div class="progress-meta">
          <span>Pregunta ${state.cursor + 1} de ${total}</span>
          <span>${pct}%</span>
        </div>
        <div class="progress"><div style="width:${pct}%"></div></div>
      </div>
      <h2 class="question">${escapeHtml(item.text)}</h2>
      <div class="choice-grid" id="choices">
        ${options
          .map(
            (opt) =>
              `<button class="choice" data-value="${escapeHtml(opt)}">${escapeHtml(opt)}</button>`,
          )
          .join("")}
      </div>
      <div class="actions">
        <button class="btn-ghost" id="prev" ${state.cursor === 0 ? "disabled" : ""}>Anterior</button>
      </div>
    </section>
  `;

  document.querySelectorAll(".choice").forEach((btn) => {
    btn.addEventListener("click", () => {
      const value = btn.dataset.value;
      saveAnswer(item.id, value);
      next();
    });
  });

  document.getElementById("prev").addEventListener("click", () => {
    if (state.cursor > 0) {
      state.cursor -= 1;
      renderQuestion();
    }
  });
}

function saveAnswer(id, value) {
  state.answers[id] = value;

  if (id === "rp-1") {
    const hazardousQuestions = state.flow.filter((q) => q.id.startsWith("rp-") && q.id !== "rp-1");
    if (value === "No") {
      hazardousQuestions.forEach((q) => {
        state.answers[q.id] = "No aplica";
      });
    } else {
      hazardousQuestions.forEach((q) => {
        if (state.answers[q.id] === "No aplica") {
          delete state.answers[q.id];
        }
      });
    }
  }
}

function next() {
  const flow = visibleFlow();
  if (state.cursor < flow.length - 1) {
    state.cursor += 1;
    renderQuestion();
  } else {
    renderSummary();
  }
}

function riskLevel(pct) {
  if (pct >= 60) return { label: "Critico", color: "#c8472b" };
  if (pct >= 35) return { label: "Alto", color: "#d47b19" };
  if (pct >= 15) return { label: "Medio", color: "#c3a10d" };
  return { label: "Bajo", color: "#258a57" };
}

function getCategoryStats() {
  return questionnaire.map((group) => {
    let noCumple = 0;
    let evaluables = 0;

    group.items.forEach((item) => {
      const answer = state.answers[item.id];
      if (!answer) return;
      if (answer === "No aplica") return;
      if (item.id === "rp-1") return;
      evaluables += 1;
      if (answer === "No" || answer === "No cumple") noCumple += 1;
    });

    const pct = evaluables === 0 ? 0 : Math.round((noCumple / evaluables) * 100);

    return {
      category: group.category,
      noCumple,
      evaluables,
      pct,
      ...riskLevel(pct),
    };
  });
}

function renderSummary() {
  const stats = getCategoryStats().sort((a, b) => b.pct - a.pct);
  const totalNoCumple = stats.reduce((sum, s) => sum + s.noCumple, 0);
  const totalEvaluables = stats.reduce((sum, s) => sum + s.evaluables, 0);
  const compliance = totalEvaluables === 0 ? 100 : Math.max(0, 100 - Math.round((totalNoCumple / totalEvaluables) * 100));

  app.innerHTML = `
    <section class="card">
      <h1>Resultado de inspeccion</h1>
      <p>${escapeHtml(state.meta.proyecto || "Proyecto sin nombre")} | ${escapeHtml(state.meta.fecha)}</p>
      <div class="score">
        <span>Indice de cumplimiento estimado</span>
        <strong>${compliance}%</strong>
        <p class="text-small">${totalNoCumple} incumplimientos sobre ${totalEvaluables} puntos evaluables.</p>
      </div>
      <h2 style="margin-top:1rem">Riesgos ambientales prioritarios</h2>
      <div class="risk-list">
        ${stats
          .map(
            (s) => `
              <article class="risk-item">
                <div class="risk-item-top">
                  <span class="risk-name">${escapeHtml(s.category)}</span>
                  <span class="risk-level" style="color:${s.color}">${s.label}</span>
                </div>
                <div class="bar"><div style="width:${s.pct}%; background:${s.color}"></div></div>
                <p class="text-small">${s.noCumple}/${s.evaluables} incumplimientos (${s.pct}%)</p>
              </article>
            `,
          )
          .join("")}
      </div>
      <div class="actions">
        <button class="btn-ghost" id="restart">Nueva inspeccion</button>
      </div>
    </section>
  `;

  document.getElementById("restart").addEventListener("click", start);
}

function escapeHtml(str = "") {
  return String(str)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

start();
