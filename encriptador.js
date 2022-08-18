let botonEncriptar = document.getElementById('btn-encriptar')
let botonDesencriptar = document.getElementById('btn-desencriptar')
let botonCopiar = document.getElementById('btn-copiar')
let botonAdaptar = document.getElementById('btn-adaptar')
let panelUno = document.getElementById('panel-uno') 
let panelDos = document.getElementById('panel-dos')

function ocultar(){ //oculta la seccion derecha y muestra el texto encriptado
    panelUno.classList.add('oculto')
    panelDos.classList.remove('oculto')
}

function validarChar(cadena){ //valida si contiene Mayusculas o Acentos
    let patron= /[A-Z]/g;

    for (let i = 0; i < cadena.length; i++) {
        if(cadena.match(patron) || cadena[i] == 'á' || cadena[i] == 'é' || cadena[i] == 'í' || cadena[i] == 'ó' || cadena[i] == 'ú'){
            return true
        }
    }
    return false
}

function encriptar(){
    let campoTexto = document.getElementById('campo-texto');
    let msjEncriptado = document.getElementById('msj-encriptado')
    
    texto = campoTexto.value

    if(texto == ''){
        swal('Atención!!!', 'Primero debes ingresar un texto.', 'error')
    }
    else if(validarChar(texto)){
        swal('Atención!!!', 'Sólo se permiten letras minúsculas y sin acentos.', 'error')
    }
    else{
        ocultar()
        let resultado = ''

        for (let index = 0; index < texto.length; index++) {
            if(texto[index] == 'a'){
                resultado += 'ai'
            }
            else if(texto[index] == 'e'){
                resultado += 'enter'
            }
            else if(texto[index] == 'i'){
                resultado += 'imes'
            }
            else if(texto[index] == 'o'){
                resultado += 'ober'
            }
            else if(texto[index] == 'u'){
                resultado += 'ufat'
            }
            else{
                resultado += texto[index]
            }
        }

    msjEncriptado.textContent = resultado
    }
    
}

function desencriptar(){
    let campoTexto = document.getElementById('campo-texto');
    let msjEncriptado = document.getElementById('msj-encriptado')

    texto = campoTexto.value

    if(texto == ''){
        swal('Atención!!!', 'Primero debes ingresar un texto.', 'error')
    }
    else if(validarChar(texto)){
        swal('Atención!!!', 'Sólo se permiten letras minúsculas y sin acentos.', 'error')
    }
    else{
        ocultar()
        texto = texto.replaceAll('ai','a')
        texto = texto.replaceAll('enter','e')
        texto = texto.replaceAll('imes','i')
        texto = texto.replaceAll('ober','o')
        texto = texto.replaceAll('ufat','u')

        msjEncriptado.textContent = texto
    }
}

function copiar(){
    let mensaje = document.getElementById('msj-encriptado')
    let campoTexto = document.getElementById('campo-texto');

    mensaje.focus()
    document.execCommand('selectAll')
    document.execCommand('copy')

    campoTexto.value = ''
    campoTexto.focus()
}

function adaptar(){ //Adapta el texto ingresado para que no contenga mayusculas ni palabras con acento
    let campoTexto = document.getElementById('campo-texto');
    texto = campoTexto.value

    if(texto == ''){
        swal('Atención!!!', 'Primero debes ingresar un texto.', 'error')
    }
    else{
        texto = texto.toLowerCase()
        texto = texto.replaceAll('á','a').replaceAll('é','e').replaceAll('í','i').replaceAll('ó','o').replaceAll('ú','u')

        campoTexto.value = texto
        swal('Muy Bien!!!', 'Su texto ha sido adaptado para contener sólo letras minúsculas y sin acentos.', 'success')
    }
}

botonEncriptar.addEventListener('click',encriptar)
botonDesencriptar.addEventListener('click',desencriptar)
botonCopiar.addEventListener('click',copiar)
botonAdaptar.addEventListener('click',adaptar)


/*
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/