document.getElementById('btn').addEventListener('click', function() {
    const cedula = document.getElementById('cedula').value.trim();
    const mensaje = verificarCedula(cedula);
    const resultado = document.getElementById('resultado');

    if (mensaje.valida) {
        resultado.textContent = mensaje.texto;
        resultado.style.color = 'green';
    } else {
        resultado.textContent = mensaje.texto;
        resultado.style.color = 'red';
    }
});

function verificarCedula(cedula) {
    if (!/^\d{11}$/.test(cedula)) {
        return { valida: false, texto: "Por favor, ingresa un número de cédula válido." };
    }

    const coeficientes = [1, 2];
    let suma = 0;

    for (let i = 0; i < 10; i++) {
        let num = parseInt(cedula[i]) * coeficientes[i % 2];
        if (num > 9) num = Math.floor(num / 10) + (num % 10);
        suma += num;
    }

    const verificador = parseInt(cedula[10]);
    const calculado = (10 - (suma % 10)) % 10;

    if (verificador === calculado) {
        return { valida: true, texto: ` La cédula ${cedula} es válida.` };
    } else {
        return { valida: false, texto: ` La cédula ${cedula} no es válida.` };
    }
}