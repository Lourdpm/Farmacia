document.querySelectorAll('.materia').forEach(boton => {
  boton.addEventListener('click', () => {
    if (boton.classList.contains('bloqueada')) return;

    boton.classList.toggle('aprobada');

    actualizarEstadoMaterias();
  });
});

function actualizarEstadoMaterias() {
  document.querySelectorAll('.materia').forEach(materia => {
    const requisitos = materia.dataset.pc?.split(',') || [];
    const aprobadas = Array.from(document.querySelectorAll('.aprobada')).map(b => b.id);

    if (requisitos.length === 0) return;

    const habilitada = requisitos.every(req => aprobadas.includes(req));

    if (habilitada && materia.classList.contains('bloqueada')) {
      materia.classList.remove('bloqueada');
    }

    if (!habilitada && !materia.classList.contains('bloqueada') && !materia.classList.contains('aprobada')) {
      materia.classList.add('bloqueada');
    }
  });
} 
