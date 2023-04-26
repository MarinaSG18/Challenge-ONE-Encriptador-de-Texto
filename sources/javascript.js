var btnEncriptar = document.getElementById("botonEncriptar");
var btnDesencriptar = document.getElementById("botonDesencriptar");
var nuevoTexto = document.getElementById("textoEncotrado");
var mensaje = document.getElementById("mensajeEntrada");

let nuevaCadena = "";
let cadenaOriginal = "";

function habilitar() {
    document.getElementById("caja-imagen").style.display = "none";
    document.getElementById("caja-texto").style.display = "inline";
    document.getElementById("caja-boton").style.display = "inline";
}

function cambiarTexto() {
    
    let texto = mensaje.value;
    
    if (texto == "") {
        alert("Ingresa algun mensaje");
    }
    else {
        const encriptar = { 'a':'ai', 'e': 'enter', 'i': 'imes', 'o': 'ober', 'u': 'ufat' };
        let regex = /[aeiou]/gm;
        nuevaCadena = [].map.call(texto, function cambio(letra) {

            letra = letra.replace(regex, function(vocal) { return encriptar[vocal] });
            return letra;

        }).join("");

        nuevoTexto.innerHTML = nuevaCadena;
        document.getElementById("mensajeEntrada").value = "";
        habilitar(); 
    }
}

function textOriginal() {
    const desencriptar = { 'ai': 'a', 'enter': 'e', 'imes': 'i', 'ober': 'o', 'ufat': 'u' };
    let regex = /(ai)|(enter)|(imes)|(ober)|(ufat)/gm;
    let textoEncriptado = mensaje.value;
    if (textoEncriptado == "") {
        alert("Ingresa algún mensaje");
    }
    else {
        cadenaOriginal = textoEncriptado.replace(regex, function(nVocal) { return desencriptar[nVocal] });
        nuevoTexto.innerHTML = cadenaOriginal;
        document.getElementById("mensajeEntrada").value = "";
        habilitar();   
    }  
}

function copiar() {
    let copyText = document.querySelector("#textoEncotrado");
    copyText.select();
    document.execCommand("copy");
}

function eliminarDiacriticos(cadena) {
    return cadena.normalize('NFD').replace(/([^n\u0300-\u036f]|n(?!\u0303(?![\u0300-\u036f])))[\u0300-\u036f]+/gi,"$1").normalize();
}

function modificarTexto() {
    mensaje.value = mensaje.value.toLowerCase();
    mensaje.value = eliminarDiacriticos(mensaje.value);
}

document.querySelector("#botonCopiar").addEventListener("click", copiar);

mensaje.onkeyup = modificarTexto;

btnEncriptar.onclick = cambiarTexto;

btnDesencriptar.onclick = textOriginal;

