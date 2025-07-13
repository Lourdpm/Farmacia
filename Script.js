const materias = {
  matematica: [],
  quimica: [],
  icse: [],
  ipc: [],
  "biologia-intro": [],
  "fisica-intro": [],
  "qg-inorganica": ["matematica", "quimica", "icse", "ipc", "biologia-intro", "fisica-intro"],
  "matematica-superior": ["matematica"],
  "anatomia": [],
  "fisica": ["matematica-superior"],
  "biologia-celular": ["anatomia"],
  "qo1": ["qg-inorganica"],
  "qo2": ["qo1"],
  "fisio": ["biologia-celular"],
  "qa": ["qo1", "qg-inorganica", "matematica-superior"],
  "fisicoquimica": ["fisica"],
  "qbiologica": ["biologia-celular", "qo2"],
  "qainstrumental": ["qa"],
  "farmacognosia": ["qbiologica", "qo2", "farmacobotanica"],
  "farmaco1": ["fisio"],
  "farmaco2": ["farmaco1"],
  "farmacoclinica": ["farmaco1", "fisiopatologia", "inmunologia"],
  "farmaciaclinica": ["farmaco1", "fisiopatologia", "inmunologia"],
  "toxicologia": ["qainstrumental", "qa", "qbiologica"],
  "nutricion": ["fisio", "qbiologica"],
  "salud-publica": ["qa", "microbiologia"],
  "pse": [],
  "farmacobotanica": ["biologia-celular"],
  "fisiopatologia": ["fisio"],
  "microbiologia": ["qbiologica"],
  "inmunologia": ["qbiologica"],
  "tecfarma1": ["fisicoquimica"],
  "tecfarma2": ["tecfarma1"],
  "calidad": ["qainstrumental", "tecfarma1"],
  "bromatologia": ["microbiologia", "nutricion"],
  "qmedicinal": ["farmacognosia", "farmaco2"],
  "bioestadistica": ["matematica-superior"],
  "ingles": [],
  "legislacion": [],
  "ppf": ["farmaco1", "microbiologia"],
  "labintegrador": ["matematica", "quimica", "icse", "ipc", "biologia-intro", "fisica-intro"]
};

const aprobadas = new Set();

function actualizarMaterias() {
  for (const id in materias) {
    const boton = document.getElementById(id);
    if (aprobadas.has(id)) {
      boton.classList.add("aprobada");
      boton.disabled = false;
    } else {
      const requisitos = materias[id];
      const habilitada = requisitos.every(req => aprobadas.has(req));
      boton.disabled = !habilitada;
    }
  }
}

document.querySelectorAll(".materia").forEach(boton => {
  boton.addEventListener("click", () => {
    const id = boton.id;
    if (!aprobadas.has(id)) {
      aprobadas.add(id);
      boton.classList.add("aprobada");
      actualizarMaterias();
    }
  });
});
