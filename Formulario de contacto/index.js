const btn = document.getElementById('btn');

const generalCodigo = () => {
    const $content = document.getElementById('qrcode');
    const nombre = document.getElementById('nombre').value;
    const ap = document.getElementById('Apellido').value;
    const tl = document.getElementById('telefono').value;
    const dr = document.getElementById('direccion').value;
    const correo = document.getElementById('correo').value;

    $content.innerHTML = "";
    new QRCode($content, {
        text: `Nombre: ${nombre}\n Apellido: ${ap}\nTelefono: ${tl}\nDireccion: ${dr}\nCorreo: ${correo}`,
        width: 300,
        height: 300,
        colorDark: "#000000",
        colorLight: "#ffffff",
        correctLevel: QRCode.CorrectLevel.H
    });
};

btn.addEventListener("click", generalCodigo);
