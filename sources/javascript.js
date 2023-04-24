
const regexEn_First = /a/g; const regexEn_Second = /e/g; const regexEn_Thirth = /i/g; const regexEn_Forth = /o/g; const regexEn_Fifth = /u/g;
const regexDe_First = /ai/gm; const regexDe_Second = /enter/gm; const regexDe_Thirth = /imes/gm; const regexDe_Forth = /ober/gm; const regexDe_Fifth = /ufat/gm;

var btnEncriptar = document.getElementById("botonEncriptar");
var btnDesencriptar = document.getElementById("botonDesencriptar");
var nuevoTexto = document.getElementById("textoEncotrado");

let nuevaCadena = "";
let cadenaOriginal = "";

function habilitar() {
    document.getElementById("caja-imagen").style.display = "none";
    document.getElementById("caja-texto").style.display = "inline";
    document.getElementById("caja-boton").style.display = "inline";
}

function obtenerTexto() {
    let texto = document.getElementById("mensajeEntrada").value;   
    return texto;
}

function cambiarTexto() {
    
    let texto = obtenerTexto();
    
    if (texto == "") {
        alert("Ingresa algun mensaje");
    }
    else {
  
        nuevaCadena = [].map.call(texto, function e(n) {

            if (n == 'a') { return n.replace(regexEn_First, "ai"); }

            if (n == 'e') { return n.replace(regexEn_Second, "enter"); }  
            
            if (n == 'i') { return n.replace(regexEn_Thirth, "imes"); }

            if (n == 'o') { return n.replace(regexEn_Forth, "ober"); }
            
            if (n == 'u') { return n.replace(regexEn_Fifth,"ufat"); }

            return n
    
        }).join("");
        nuevoTexto.innerHTML = nuevaCadena;
        document.getElementById("mensajeEntrada").value = "";
        habilitar();
        
    }
}

function textOriginal() {

    let textoEncriptado = obtenerTexto();
    if (textoEncriptado == "") {
        alert("Ingresa algún mensaje");
    }
    else {

        cadenaOriginal = textoEncriptado.replace(regexDe_First, "a").replace(regexDe_Second, "e").replace(regexDe_Thirth, "i").replace(regexDe_Forth, "o").replace(regexDe_Fifth, "u");
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

function verificarEntrada(e) {
	if(e.key.match(/[a-z\s]/gm)===null) { e.preventDefault(); }
}
  
document.querySelector("#botonCopiar").addEventListener("click", copiar);

document.getElementById("mensajeEntrada").addEventListener("keydown",verificarEntrada);

btnEncriptar.onclick = cambiarTexto;

btnDesencriptar.onclick = textOriginal;
