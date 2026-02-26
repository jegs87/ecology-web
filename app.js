const questionnaire = [
  {
    key: "sec-residuos-peligrosos",
    category: "Residuos Peligrosos",
    gateOnFirst: true,
    items: [
      { id: "sec-residuos-peligrosos-1", text: "¿Se generan Residuos Peligrosos en el sitio? Respuesta NO APLICA→Pasar a Sustancias Químicas" },
      { id: "sec-residuos-peligrosos-2", text: "¿Se cuenta con el Registro como Generador de Residuos Peligrosos ante SEMARNAT en la categoría correspondiente al sitio o proyecto" },
      { id: "sec-residuos-peligrosos-3", text: "¿Se mantienen actualizadas las bitácoras de entrada y salida de residuos peligrosos, registrando fecha de ingreso, nombre del residuo y cantidad?" },
      { id: "sec-residuos-peligrosos-4", text: "¿Se cuenta con los Manifiestos de Entrega, Transporte y Disposición Final, con firmas y sellos correspondientes y dentro del tiempo legal de retorno?" },
      { id: "sec-residuos-peligrosos-5", text: "¿Las empresas de recolección, transporte y destino cuentan con autorizaciones vigentes de SEMARNAT y/o SCT" },
      { id: "sec-residuos-peligrosos-6", text: "En caso de ser Gran Generador:¿Se tiene Plan de manejo para los RP y está implementado en el área?" },
      { id: "sec-residuos-peligrosos-7", text: "¿Existe almacén temporal de Residuos peligrosos? En caso de ser Micro generador \"No Aplica\"→Pasar a Combustibles,aceites" },
      { id: "sec-residuos-peligrosos-8", text: "¿Los recipientes para RP están en buenas condiciones: cerrados, sin fugas y con llenado controlado?" },
      { id: "sec-residuos-peligrosos-9", text: "¿El almacén temporal de RP tiene techo, piso impermeable, contención, señalización y control de acceso?" },
      { id: "sec-residuos-peligrosos-10", text: "¿El tiempo de almacenamiento de los residuos es menor o igula 6 meses ?" },
      { id: "sec-residuos-peligrosos-11", text: "¿Los recipientes están correctamente etiquetados con el nombre del residuo, su característica y los datos del generador?" },
      { id: "sec-residuos-peligrosos-12", text: "¿Se realiza una segregación adecuada de los residuos?" },
      { id: "sec-residuos-peligrosos-13", text: "¿Se comunica al personal la prohibición de descargar residuos en drenajes, al suelo o realizar combustión in situ?" },
      { id: "sec-residuos-peligrosos-14", text: "¿En el almacén se cuenta con equipo de emergencia: extintores vigentes, lavaojos y kit antiderrames adecuado al tipo de residuos?" },
    ],
  },
  {
    key: "sec-sustancias-quimicas",
    category: "Sustancias químicas",
    gateOnFirst: true,
    items: [
      { id: "sec-sustancias-quimicas-1", text: "¿Existen o almacenan grasas/aceites o sustancias químicas? Respuesta NO APLICA →Pasar a Consumo de agua" },
      { id: "sec-sustancias-quimicas-2", text: "¿Se cuenta con Hojas de Datos de Seguridad (HDS) actualizadas en español para todas las sustancias químicas almacenadas conforme a la NOM‑018‑STPS‑2015?" },
      { id: "sec-sustancias-quimicas-3", text: "¿Todos los recipientes con sustancias químicas están etiquetados y señalizados conforme al Sistema Globalmente Armonizado?" },
      { id: "sec-sustancias-quimicas-4", text: "¿Se cuenta con un inventario actualizado de sustancias químicas que incluya nombre comercial, nombre químico, cantidad máxima almacenada y ubicación?" },
      { id: "sec-sustancias-quimicas-5", text: "¿Se ha realizado el cálculo de cantidades umbral para determinar si el sitio es una actividad altamente riesgosa, conforme a los listados del DOF de sustancias tóxicas e inflamables?" },
      { id: "sec-sustancias-quimicas-6", text: "¿En caso de rebasar los umbralesde reporte ¿se cuenta con el Estudio de Riesgo Ambiental y el Programa de Prevención de Accidentes autorizados ?" },
      { id: "sec-sustancias-quimicas-7", text: "¿El área de almacenamiento cuenta con contención secundaria diques, charolas o pisos impermeables con capacidad para retener el volumen del contenedor mayor?" },
      { id: "sec-sustancias-quimicas-8", text: "¿Se cuenta con kits vigentes para atención de derrames instalados cerca de las áreas de almacenamiento y uso de químicos?" },
      { id: "sec-sustancias-quimicas-9", text: "¿El área de almacenamiento cuenta con contención secundaria diques, charolas o pisos impermeables con capacidad para retener el volumen del contenedor mayor?" },
      { id: "sec-sustancias-quimicas-10", text: "¿El personal que maneja o trasvasa sustancias químicas cuenta con capacitación documentada sobre el uso de EPP específico y los protocolos de respuesta ante derrames?" },
    ],
  },
  {
    key: "sec-consumo-de-agua",
    category: "Consumo de Agua",
    gateOnFirst: false,
    items: [
      { id: "sec-consumo-de-agua-1", text: "¿Se cuenta con Título de Concesión vigente de CONAGUA para la explotación, uso o aprovechamiento de aguas nacionales, o en su ausencia, con contratos de suministro y recibos de pago actualizados del organismo operador local?" },
      { id: "sec-consumo-de-agua-2", text: "En caso de abastecimiento mediante pipas ¿Se cuenta con copias de los Títulos de Concesión de los pozos y los registros de remisión del volumen entregado?" },
      { id: "sec-consumo-de-agua-3", text: "¿Se cuenta con comprobantes del pago oportuno de derechos por el uso o aprovechamiento de aguas nacionales?" },
      { id: "sec-consumo-de-agua-4", text: "¿Existe un programa documentado de inspección y mantenimiento para prevenir fugas en redes y sistemas de almacenamiento?" },
      { id: "sec-consumo-de-agua-5", text: "¿Se han instalado dispositivos o tecnologías de ahorro de agua en áreas de uso común y servicios del personal?" },
      { id: "sec-consumo-de-agua-6", text: "¿El personal cuenta con capacitación documentada sobre uso eficiente del agua y el procedimiento para reportar fugas o emergencias hidráulicas?" },
      { id: "sec-consumo-de-agua-7", text: "¿Se revisan periódicamente los KPIs de consumo de agua respecto a los objetivos ambientales establecidos?" },
      { id: "sec-consumo-de-agua-8", text: "¿Los lavados/limpiezas ocurren solo en áreas autorizadas con piso impermeable y trampa para grasas y aceites?" },
    ],
  },
  {
    key: "sec-descarga-de-agua",
    category: "Descarga de agua",
    gateOnFirst: false,
    items: [
      { id: "sec-descarga-de-agua-1", text: "¿Se cuenta con Permiso de Descarga de Aguas Residuales vigente, emitido por CONAGUA o el Municipio, para cada punto de vertido?" },
      { id: "sec-descarga-de-agua-2", text: "¿Se cuenta con informes de análisis de calidad del agua, realizados por un laboratorio acreditado y dentro de la vigencia establecida en el permiso?" },
      { id: "sec-descarga-de-agua-3", text: "¿Los parámetros analizados en las descargas cumplen con los límites máximos permisibles de la NOM‑001‑SEMARNAT (si es cuerpo receptor nacional) o la NOM‑002‑SEMARNAT (si es drenaje urbano), según corresponda?" },
      { id: "sec-descarga-de-agua-4", text: "En sitios con fosas sépticas o sistemas de tratamiento independientes, ¿se cuenta con contratos de recolección y certificados de disposición final emitidos por empresas autorizadas?" },
      { id: "sec-descarga-de-agua-5", text: "¿En talleres o comedores existen trampas de grasa y aceite, y se lleva una bitácora de su limpieza y mantenimiento periódico?" },
      { id: "sec-descarga-de-agua-6", text: "¿Existen barreras físicas o sistemas de contención secundaria en áreas de almacenamiento de químicos o hidrocarburos para evitar que derrames lleguen al drenaje pluvial o sanitario?" },
    ],
  },
  {
    key: "sec-residuos-solidos-urbanos",
    category: "Residuos Sólidos Urbanos",
    gateOnFirst: false,
    items: [
      { id: "sec-residuos-solidos-urbanos-1", text: "¿Existen contratos vigentes con prestadores de recolección de RSU que cuenten con las licencias y permisos municipales requeridos para operar en la zona?" },
      { id: "sec-residuos-solidos-urbanos-2", text: "¿Existe evidencia de que los RSU fueron enviados a un sitio de disposición final autorizado (relleno sanitario)?" },
      { id: "sec-residuos-solidos-urbanos-3", text: "¿Se cuenta con una estación de segregación de residuos claramente señalizada y conforme a la norma técnica local aplicable?" },
      { id: "sec-residuos-solidos-urbanos-4", text: "¿Se cuenta con una bitácora de generación de RSU con registros diarios o semanales de los volúmenes generados?" },
      { id: "sec-residuos-solidos-urbanos-5", text: "¿Se cuenta con evidencia de pláticas de inducción o campañas de sensibilización para personal operativo y subcontratistas sobre el código de colores y la correcta segregación de residuos?" },
    ],
  },
  {
    key: "sec-residuos-de-manejo-especial-rme",
    category: "Residuos de Manejo Especial (RME)",
    gateOnFirst: true,
    items: [
      { id: "sec-residuos-de-manejo-especial-rme-1", text: "¿La generación anual de residuos en el sitio supera las 10 toneladas o está listada en la NOM‑161‑SEMARNAT?Respuesta NO APLICA→Pasar a" },
      { id: "sec-residuos-de-manejo-especial-rme-2", text: "¿Se cuenta con el Registro vigente como Generador de Residuos de Manejo Especial, emitido por la autoridad ambiental estatal correspondiente?" },
      { id: "sec-residuos-de-manejo-especial-rme-3", text: "¿Existe un Plan de Manejo de Residuos de Manejo Especial registrado y autorizado por la Secretaría de Medio Ambiente local?" },
      { id: "sec-residuos-de-manejo-especial-rme-4", text: "¿Existe evidencia documental de que los prestadores de transporte, acopio y disposición final de RME cuentan con autorizaciones estatales vigentes para el tipo de residuo que manejan?" },
      { id: "sec-residuos-de-manejo-especial-rme-5", text: "En proyectos, ¿se cuenta con certificados de disposición final de residuos de construcción y demolición, emitidos por un sitio autorizado, que amparen todo el volumen generado?" },
      { id: "sec-residuos-de-manejo-especial-rme-6", text: "¿Existe un área delimitada y señalizada para el acopio temporal de RME, manteniéndolos separados de los residuos peligrosos y sólidos urbanos?" },
      { id: "sec-residuos-de-manejo-especial-rme-7", text: "¿Se cuenta con una bitácora de generación de RME que registre tipo de residuo, cantidad y fecha de salida?" },
      { id: "sec-residuos-de-manejo-especial-rme-8", text: "¿El personal de almacenes y frentes de obra ha recibido capacitación sobre el Plan de Manejo de RME y los objetivos de reducción de residuos?" },
    ],
  },
  {
    key: "sec-emisiones-a-la-atmosfera",
    category: "Emisiones a la Atmósfera (Fuentes fijas)",
    gateOnFirst: true,
    items: [
      { id: "sec-emisiones-a-la-atmosfera-1", text: "¿Existen fuentes fijas que emiten contaminantes al aire, como humos, gases, vapores o partículas? Respuesta NO APLICA →Pasar a" },
      { id: "sec-emisiones-a-la-atmosfera-2", text: "¿Se cuenta con la Licencia Ambiental Única o la Licencia de Funcionamiento estatal vigente para la operación de todas las fuentes fijas identificadas?" },
      { id: "sec-emisiones-a-la-atmosfera-3", text: "¿Se cuenta con informes de análisis de emisiones en chimenea, realizados por un laboratorio acreditado, que demuestren el cumplimiento con la NOM‑085‑SEMARNAT‑2011 o la NOM‑043‑SEMARNAT‑1993, según corresponda?" },
      { id: "sec-emisiones-a-la-atmosfera-4", text: "¿Se ha presentado la Cédula de Operación Anual (COA) en tiempo, declarando emisiones a la atmósfera?" },
    ],
  },
  {
    key: "sec-emisiones-a-la-atmosfera-movil",
    category: "Emisiones a la Atmósfera (Flota móvil)",
    gateOnFirst: true,
    items: [
      { id: "sec-emisiones-a-la-atmosfera-movil-1", text: "¿El sitio cuenta con vehículos o maquinaria pesada de combustión interna? Respuesta NO APLICA →Pasar a sección Ruido" },
      { id: "sec-emisiones-a-la-atmosfera-movil-2", text: "¿Se cuenta con certificados y hologramas de verificación vehicular vigentes para toda la flota, conforme a la NOM‑041‑SEMARNAT para gasolina y la NOM‑045‑SEMARNAT para diésel?" },
      { id: "sec-emisiones-a-la-atmosfera-movil-3", text: "¿Existen registros de pruebas de opacidad para maquinaria pesada y equipos móviles diésel, que demuestren cumplimiento con los límites de humo establecidos?" },
      { id: "sec-emisiones-a-la-atmosfera-movil-4", text: "¿Se han reportado las emisiones de la flota móvil en la COA o en el RENE cuando superan el umbral de reporte de GEI?" },
      { id: "sec-emisiones-a-la-atmosfera-movil-5", text: "¿Se cuenta con un programa documentado de mantenimiento preventivo para la flota móvil y maquinaria pesada?" },
      { id: "sec-emisiones-a-la-atmosfera-movil-6", text: "¿Existe una bitácora o sistema de registro de consumo de combustible por unidad que permita calcular indicadores de rendimiento e identificar consumos?" },
    ],
  },
  {
    key: "sec-ruido",
    category: "Ruido",
    gateOnFirst: false,
    items: [
      { id: "sec-ruido-1", text: "¿Se cuenta con un estudio de ruido perimetral vigente, realizado conforme a los métodos y según la zona donde se ubica el proyecto u oficina?" },
      { id: "sec-ruido-2", text: "¿Los niveles de presión sonora medidos en el perímetro se mantienen por debajo de los límites máximos establecidos para zonas industriales (68 dB diurno y 65 dB nocturno)?" },
      { id: "sec-ruido-3", text: "¿Se han instalado barreras físicas o pantallas acústicas en frentes de obra o talleres donde las operaciones exceden recurrentemente los niveles de ruido de fondo?" },
      { id: "sec-ruido-4", text: "¿Se cuenta con un mecanismo documentado para atender y registrar quejas por ruido, incluyendo acciones correctivas?" },
    ],
  },
  {
    key: "sec-suelo-subsuelo",
    category: "Suelo-Subsuelo",
    gateOnFirst: false,
    items: [
      { id: "sec-suelo-subsuelo-1", text: "¿En el sitio se realizan actividades de manejo, almacenamiento o trasvase de sustancias químicas, lubricantes o combustibles, o existe maquinaria y vehículos de combustión cuya operación implique riesgo de infiltración por goteo o derrames al terreno?" },
      { id: "sec-suelo-subsuelo-2", text: "¿Existe evidencia de que, en caso de que haber ocurrido un derrame mayor a 1 m3 de materiales o residuos peligrosos, se notificó de inmediato a PROFEPA? Respuesta NO APLICA →Pasar a sección" },
      { id: "sec-suelo-subsuelo-3", text: "¿Se ha verificado mediante estudios de laboratorio acreditados que las concentraciones de hidrocarburos o metales pesados en el suelo cumplen con los límites máximos permisibles de las normas NOM-138-SEMARNAT o NOM-147-SEMARNAT según corresponda?" },
      { id: "sec-suelo-subsuelo-4", text: "¿Se cuenta con informes de caracterización de sitio y, cuando corresponde, con programas de remediación autorizados por SEMARNAT para predios con pasivos ambientales o contaminaciones accidentales?" },
      { id: "sec-suelo-subsuelo-5", text: "¿Se han cumplido las condicionantes de protección del suelo establecidas en la MIA, como el rescate y conservación de la capa fértil en frentes de obra?" },
      { id: "sec-suelo-subsuelo-6", text: "¿Existe un protocolo documentado para la limpieza de suelos afectados por derrames menores, que incluya el uso de absorbentes y la disposición final del material contaminado como residuo peligroso?" },
      { id: "sec-suelo-subsuelo-7", text: "¿Se encuentran delimitadas y protegidas las áreas de excavación y acopio de materiales para evitar procesos de erosión hídrica o eólica?" },
      { id: "sec-suelo-subsuelo-8", text: "¿El personal operativo ha recibido capacitación sobre la prevención de derrames en suelo y el uso adecuado de los kits antiderrames en campo?" },
    ],
  },
  {
    key: "sec-recursos-y-vida-silvestre",
    category: "Recursos y vida silvestre",
    gateOnFirst: true,
    items: [
      { id: "sec-recursos-y-vida-silvestre-1", text: "¿El proyecto se ubica en zonas con vegetación forestal o hábitats de fauna silvestre, o realiza actividades como desmonte, despalme, interacción con especies o uso de productos forestales que deban gestionarse conforme a la normativa ambiental? Respuesta NO APLICA →Pasar a sección" },
      { id: "sec-recursos-y-vida-silvestre-2", text: "¿Se cuenta con la autorización vigente de Cambio de Uso de Suelo en Terrenos Forestales (CUSTF) para las áreas donde se realiza la remoción de vegetación?" },
      { id: "sec-recursos-y-vida-silvestre-3", text: "¿Se cuenta con un inventario de flora y fauna del sitio que identifique especies en categoría de riesgo conforme a la NOM‑059‑SEMARNAT‑2010?" },
      { id: "sec-recursos-y-vida-silvestre-4", text: "¿Se cuenta con facturas, guías o documentos de transporte que acrediten la legal procedencia de la madera, tarimas o productos forestales utilizados, conforme a la Ley General de Desarrollo Forestal Sustentable?" },
      { id: "sec-recursos-y-vida-silvestre-5", text: "Para operaciones aeroportuarias o control de plagas, ¿se cuenta con el registro vigente ante SEMARNAT para realizar actividades de manejo de vida silvestre (como cetrería o control de fauna)?" },
      { id: "sec-recursos-y-vida-silvestre-6", text: "¿Se cuenta con un Programa de Rescate y Reubicación de Flora y Fauna implementado y documentado, con registros de individuos rescatados, sitios de liberación autorizados y tasas de supervivencia?" },
      { id: "sec-recursos-y-vida-silvestre-7", text: "¿Existe una prohibición explícita y comunicada al personal y subcontratistas sobre la caza, captura, alimentación o maltrato de fauna silvestre en el área de influencia del proyecto?" },
      { id: "sec-recursos-y-vida-silvestre-8", text: "¿El personal de frentes de obra ha recibido capacitación técnica sobre el manejo de fauna peligrosa y sobre la importancia de respetar las áreas de exclusión ambiental?" },
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
  autoSkipped: {},
  cursor: -1,
};

function flattenFlow() {
  return questionnaire.flatMap((group) =>
    group.items.map((item, idx) => ({
      ...item,
      category: group.category,
      sectionKey: group.key,
      indexInSection: idx,
      gateOnFirst: group.gateOnFirst,
    })),
  );
}

function start() {
  state.flow = flattenFlow();
  state.answers = {};
  state.autoSkipped = {};
  state.cursor = -1;
  renderStart();
}

function normalize(value = "") {
  return value
    .normalize("NFD")
    .replace(/\p{Diacritic}/gu, "")
    .toLowerCase()
    .trim();
}

function isNoAplica(value) {
  return normalize(value) === "no aplica";
}

function isCumple(value) {
  const normalized = normalize(value);
  return normalized === "cumple" || normalized === "si" || normalized === "sí";
}

function isNoCumple(value) {
  const normalized = normalize(value);
  return normalized === "no cumple" || normalized === "no";
}

function defaultOptions() {
  return ["Cumple", "No cumple", "No aplica"];
}

function visibleFlow() {
  return state.flow.filter((item) => {
    if (!item.gateOnFirst) return true;
    if (item.indexInSection === 0) return true;

    const gateItem = state.flow.find((q) => q.sectionKey === item.sectionKey && q.indexInSection === 0);
    const gateAnswer = gateItem ? state.answers[gateItem.id] : null;
    return !isNoAplica(gateAnswer);
  });
}

function renderStart() {
  app.innerHTML = `
    <section class="card">
      <h1>Inspección Ambiental</h1>
      <p>Cuestionario mobile-first para evaluar cumplimiento y priorizar riesgos ambientales.</p>
      <div class="start-grid">
        <label>Fecha
          <input type="date" id="fecha" value="${state.meta.fecha}" />
        </label>
        <label>Proyecto
          <input type="text" id="proyecto" placeholder="Ej. Subestación Norte" value="${escapeHtml(state.meta.proyecto)}" />
        </label>
        <label>Grupo Cobra / Subcontratista
          <input type="text" id="contratista" placeholder="Empresa responsable" value="${escapeHtml(state.meta.contratista)}" />
        </label>
        <label>Etapa del proyecto
          <input type="text" id="etapa" placeholder="Construcción / Operación" value="${escapeHtml(state.meta.etapa)}" />
        </label>
      </div>
      <div class="actions">
        <button class="btn-primary" id="begin">Comenzar inspección</button>
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
      saveAnswer(item, value);
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

function saveAnswer(item, value) {
  state.answers[item.id] = value;

  if (item.gateOnFirst && item.indexInSection === 0) {
    const sectionItems = state.flow.filter((q) => q.sectionKey === item.sectionKey && q.indexInSection > 0);

    if (isNoAplica(value)) {
      sectionItems.forEach((q) => {
        state.answers[q.id] = "No aplica";
        state.autoSkipped[q.id] = true;
      });
    } else {
      sectionItems.forEach((q) => {
        if (state.autoSkipped[q.id]) {
          delete state.answers[q.id];
          delete state.autoSkipped[q.id];
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
  if (pct >= 60) return { label: "Crítico", color: "#c8472b" };
  if (pct >= 35) return { label: "Alto", color: "#d47b19" };
  if (pct >= 15) return { label: "Medio", color: "#c3a10d" };
  return { label: "Bajo", color: "#258a57" };
}

function getCategoryStats() {
  return questionnaire.map((group) => {
    let cumple = 0;
    let noCumple = 0;
    let evaluables = 0;

    group.items.forEach((item) => {
      const answer = state.answers[item.id];
      if (!answer || isNoAplica(answer)) return;
      evaluables += 1;
      if (isCumple(answer)) cumple += 1;
      if (isNoCumple(answer)) noCumple += 1;
    });

    const riskPct = evaluables === 0 ? 0 : Math.round((noCumple / evaluables) * 100);
    const compliancePct = evaluables === 0 ? 0 : Math.round((cumple / evaluables) * 100);

    return {
      category: group.category,
      cumple,
      noCumple,
      evaluables,
      riskPct,
      compliancePct,
      ...riskLevel(riskPct),
    };
  });
}

function renderSummary() {
  const stats = getCategoryStats();
  const totalPoints = stats.reduce((sum, s) => sum + s.cumple, 0);
  const totalEvaluables = stats.reduce((sum, s) => sum + s.evaluables, 0);
  const compliance = totalEvaluables === 0 ? 0 : Math.round((totalPoints / totalEvaluables) * 100);

  const topRisks = stats
    .filter((s) => s.evaluables > 0)
    .sort((a, b) => b.riskPct - a.riskPct)
    .slice(0, 3);

  app.innerHTML = `
    <section class="card">
      <h1>Resultado de inspección</h1>
      <p>${escapeHtml(state.meta.proyecto || "Proyecto sin nombre")} | ${escapeHtml(state.meta.fecha)}</p>
      <div class="score">
        <span>Puntuación final (1 punto por cada pregunta en CUMPLE)</span>
        <strong>${totalPoints} / ${totalEvaluables}</strong>
        <p class="text-small">Cumplimiento total: ${compliance}%</p>
      </div>
      <h2 style="margin-top:1rem">Riesgos ambientales más altos</h2>
      <div class="risk-list">
        ${
          topRisks.length
            ? topRisks
                .map(
                  (s) => `
              <article class="risk-item">
                <div class="risk-item-top">
                  <span class="risk-name">${escapeHtml(s.category)}</span>
                  <span class="risk-level" style="color:${s.color}">${s.label}</span>
                </div>
                <div class="bar"><div style="width:${s.riskPct}%; background:${s.color}"></div></div>
                <p class="text-small">${s.noCumple}/${s.evaluables} en no cumplimiento (${s.riskPct}%)</p>
              </article>
            `,
                )
                .join("")
            : '<p class="text-small">No hay riesgos calculables (todo marcado como No aplica).</p>'
        }
      </div>
      <div class="actions">
        <button class="btn-ghost" id="restart">Nueva inspección</button>
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
