let chartInstance = null;

function generarCampos() {
  const filas = parseInt(document.getElementById('filas').value);
  const columnas = parseInt(document.getElementById('columnas').value);
  const contenedorDatos = document.getElementById('formularioDatos');
  const contenedorNombres = document.getElementById('formularioColumnas');

  contenedorDatos.innerHTML = '';
  contenedorNombres.innerHTML = '';

  if (isNaN(filas) || isNaN(columnas) || filas < 1 || columnas < 1) {
    alert('Indica valores válidos para filas y columnas.');
    return;
  }


  const titulo = document.createElement('h3');
  titulo.textContent = "Nombres de columnas:";
  contenedorNombres.appendChild(titulo);

  for (let j = 0; j < columnas; j++) {
    const input = document.createElement('input');
    input.placeholder = `Nombre columna ${j + 1}`;
    input.name = `nombreCol${j}`;
    input.required = true;
    contenedorNombres.appendChild(input);
  }

  // Crear tabla de entrada de datos
  const tabla = document.createElement('table');
  const header = tabla.insertRow();
  header.innerHTML = '<th>Etiqueta</th>';
  for (let j = 0; j < columnas; j++) {
    header.innerHTML += `<th>Valor ${j + 1}</th>`;
  }

  for (let i = 0; i < filas; i++) {
    const fila = tabla.insertRow();
    fila.innerHTML = `<td><input type="text" name="etiqueta${i}" required></td>`;
    for (let j = 0; j < columnas; j++) {
      fila.innerHTML += `<td><input type="number" name="valor${i}_${j}" required></td>`;
    }
  }

  contenedorDatos.appendChild(tabla);
}

function generarColores(cantidad) {
  const colores = [];
  for (let i = 0; i < cantidad; i++) {
    const r = Math.floor(100 + Math.random() * 155);
    const g = Math.floor(100 + Math.random() * 155);
    const b = Math.floor(100 + Math.random() * 155);
    colores.push(`rgba(${r}, ${g}, ${b}, 0.6)`);
  }
  return colores;
}
function generarGrafico() {
  const filas = parseInt(document.getElementById('filas').value);
  const columnas = parseInt(document.getElementById('columnas').value);
  const tipo = document.getElementById('chartType').value;

  const etiquetas = [];
  const datasets = [];

  // Leer nombres de columnas
  const nombres = [];
  for (let j = 0; j < columnas; j++) {
    const input = document.querySelector(`[name=nombreCol${j}]`);
    const nombre = input ? input.value.trim() : `Columna ${j + 1}`;
    nombres.push(nombre || `Columna ${j + 1}`);
  }

  // Inicializar datasets
  for (let j = 0; j < columnas; j++) {
    datasets.push({
      label: nombres[j],
      data: [],
      backgroundColor: `rgba(${100 + j * 50}, 99, 132, 0.5)`,
      borderColor: `rgba(${100 + j * 50}, 99, 132, 1)`,
      borderWidth: 5
    });
  }

  for (let i = 0; i < filas; i++) {
    const etiqueta = document.querySelector(`[name=etiqueta${i}]`).value.trim();
    if (!etiqueta) {
      alert(`Etiqueta vacía en la fila ${i + 1}`);
      return;
    }
    etiquetas.push(etiqueta);

    for (let j = 0; j < columnas; j++) {
      const valor = parseFloat(document.querySelector(`[name=valor${i}_${j}]`).value);
      datasets[j].data.push(isNaN(valor) ? 0 : valor);
    }
  }

  if (tipo === 'pie' && columnas > 1) {
    alert('El gráfico de pastel solo acepta una columna de datos.');
    return;
  }

  if (chartInstance) chartInstance.destroy();

  const ctx = document.getElementById('myChart').getContext('2d');

  // Si es gráfico tipo 'pie' o 'bar' con 1 columna, asignar colores por etiqueta
  if ((tipo === 'pie') || (tipo === 'bar' && columnas === 1)) {
    const colores = generarColores(etiquetas.length);
    datasets[0].backgroundColor = colores;
    datasets[0].borderColor = colores.map(c => c.replace('0.6', '1'));
  }

  chartInstance = new Chart(ctx, {
    type: tipo,
    data: {
      labels: etiquetas,
      datasets: tipo === 'pie' ? [datasets[0]] : datasets
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: tipo === 'bar' || tipo === 'line' ? {
        y: {
          beginAtZero: true
        }
      } : {}
    }
  });

  // Mostrar JSON en consola
  const json = {
    labels: etiquetas,
    datasets: datasets.map(d => ({ label: d.label, data: d.data }))
  };
  console.log("JSON generado:", JSON.stringify(json, null, 2));
}