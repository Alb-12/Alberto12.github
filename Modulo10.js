function verificarNumero(numero) {
    const digitos = numero.toString().split('').reverse().map(Number);
    let suma = 0;
    
    for (let i = 0; i < digitos.length; i++) {
        if (i % 2 !== 0) {
            let duplicado = digitos[i] * 2;
            if (duplicado >= 10) {
                suma += duplicado - 9; 
            } else {
                suma += duplicado;
            }
        } else {
            suma += digitos[i];
        }
    }

  
    return suma % 10 === 0;
}
/*Verificando que el numero sea correcto*/
const numeroUsuario = prompt("Por favor, ingresa el número para verificar:");

if (numeroUsuario !== null) {
    const numero = parseInt(numeroUsuario); 
    if (!isNaN(numero)) {
        const esValido = verificarNumero(numero);
        alert(`El número ${numero} es ${esValido ? 'válido' : 'inválido'}.`);
    } else {
        alert("Por favor, ingresa un número válido.");
    }
}