const registro = {
  persona: {},
  familiares: [],
  condiciones: [],
  internamientos: []
};

function nextPage(NumeroPagina) {
  document.querySelectorAll('.pagina').forEach(p => p.classList.remove('activa'));

  if (NumeroPagina === 2) {
    registro.persona = {
      nombre: document.getElementById('nombre').value.trim(),
      apellido: document.getElementById('apellido').value.trim(),
      edad: document.getElementById('edad').value.trim()
    };
  } else if (NumeroPagina === 5) {
    document.getElementById('resultado').textContent = JSON.stringify(registro, null, 2);
  }

  document.getElementById(`pagina${NumeroPagina}`).classList.add('activa');
}

function addFamiliar() {
  const nombre = document.getElementById('fNombre').value.trim();
  const parentesco = document.getElementById('fParentesco').value.trim();
  const edad = document.getElementById('fEdad').value.trim();

  if (nombre && parentesco && edad && !isNaN(edad)) {
    registro.familiares.push({ nombre, parentesco, edad });

    const li = document.createElement('li');
    li.textContent = `${nombre} / ${parentesco} / ${edad} anos`;
    document.getElementById('familiaresList').appendChild(li);

    document.getElementById('fNombre').value = '';
    document.getElementById('fParentesco').value = '';
    document.getElementById('fEdad').value = '';
  }
}

function addCondicion() {
  const enfermedad = document.getElementById('enfermedad').value.trim();
  const tiempo = document.getElementById('tiempo').value.trim();

  if (enfermedad && tiempo && !isNaN(tiempo)) {
    registro.condiciones.push({ enfermedad, tiempo });

    const li = document.createElement('li');
    li.textContent = `${enfermedad} - ${tiempo} anos`;
    document.getElementById('ListaCondiciones').appendChild(li);

    document.getElementById('enfermedad').value = '';
    document.getElementById('tiempo').value = '';
  }
}

function addInternamiento() {
  const fecha = document.getElementById('fecha').value;
  const centro = document.getElementById('centroMedico').value.trim();
  const diagnostico = document.getElementById('diagnostico').value.trim();

  if (fecha && centro && diagnostico) {
    registro.internamientos.push({ fecha, centro, diagnostico });

    const li = document.createElement('li');
    li.textContent = `${fecha} - ${centro} - ${diagnostico}`;
    document.getElementById('ListaInternamientos').appendChild(li);

    document.getElementById('fecha').value = '';
    document.getElementById('centroMedico').value = '';
    document.getElementById('diagnostico').value = '';
  }
}

function restartForm() {
  location.reload();
}