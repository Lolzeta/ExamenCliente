$(document).ready(
    function(){
        eventoNombreApp();
        eventoTemaApp();
        eventoLenguajeApp();
        eventoDNI();
        eventoCodigo();
        eventoTerminos();
        escondido();
        botonPulsado();
    }
)

function validarNombreApp(){
    let resultado = false;
    let regex = new RegExp(/^([A-Z]+)$/,"g");
    let nombre = $('#nombreApp');
    if(regex.test(nombre.val())){
        resultado = true;
    }
    return resultado;
}



function validarTema(){
    let resultado = false;
    let selection = $('#temaApp').val();
    if(selection!==""){
        resultado = true;
    }
    return resultado;
}

function validarLenguaje(){
    let resultado = false;
    let lenguaje = $('#lenguajeApp');
    let regex = new RegExp(/^([#a-zA-Z0-9]+)$/,"g")
    if(regex.test(lenguaje.val())){
        resultado = true;
    }
    return resultado;
}

function validarHoras(){
    let resultado = false;
    let horas = parseInt($('#horasApp').val());
    if(horas > 200 && horas < 1000 && Number.isInteger(horas)){
        resultado = true;
    }
    return resultado;
} 

function validarNombreDesVacio(){
    let resultado = true;
    let nombreDes = $('#nombreDesarrollador').val();
    if(nombreDes===''){
        resultado = false;
    }
    return resultado;
}

function validarApellDesVacio(){
    let resultado = true;
    let apellidoDes = $('#apellidoDesarrollador').val();
    if(apellidoDes===''){
        resultado = false;
    }
    return resultado;
}

function validarPrimeraLetraNom(){
    let resultado = false;
    let nombreDes = $('#nombreDesarrollador').val();
    let regex = new RegExp(/^[A-Z]([a-z]+)$/,"g")
    if(regex.test(nombreDes)){
        resultado = true;
    }
    return resultado;
}

function validarPrimeraLetraApell(){
    let resultado = false;
    let apellidoDes = $('#apellidoDesarrollador').val();
    let regex = new RegExp(/^[A-Z]([a-z]+)$/,"g")
    if(regex.test(apellidoDes)){
        resultado = true;
    }
    return resultado;
}

function validarApellidoYNombreIguales(){
    let resultado = true;
    let apellidoDes = $('#apellidoDesarrollador').val();
    let nombreDes = $('#nombreDesarrollador').val();
    if(apellidoDes===nombreDes){
        resultado = false;
    }
    return resultado;
} 

function validarDNI(){
    let resultado = false;
    let dniDes = $('#dniDesarrollador').val();
    let regex = new RegExp(/^([0-9]{8})[A-Z]$/,"g");
    if(regex.test(dniDes)){
        resultado = true;
    }
    return resultado;
}

function validarCodigo(){
    let resultado = false;
    let codigo = $('#codigoApp').val();
    let regex = new RegExp(/^([0-9A-F]{6})(-){1}([0-9]{1})([A-Z]{1})$/,"g");
    if(regex.test(codigo)){
        resultado = true;
    }
    return resultado;
}

function validarTerminos(){
    let resultado = false;
    let terminos = $('#aceptarTerminos');
    if(terminos.prop("checked")){
        resultado = true;
    }
    return resultado;
}

function eventoNombreApp(){
    let nombre = $('#nombreApp');
    nombre.keyup(function(){
        if(validarNombreApp()){
            nombre.css("border","solid green 2px");
            nombre.next().text("")
        } else{
            nombre.css("border","solid red 2px");
            nombre.next().text("El nombre debe de ser totalmente en mayuscula")
        }
    });
}

function eventoTemaApp(){
    let tema = $('#temaApp');
    tema.change(function(){
        if(validarTema()){
            tema.css("border","solid green 2px");
            tema.next().text("")
        } else{
            tema.css("border","solid red 2px");
            tema.next().text("El tema no puede estar vacio")
        }
    });
}

function eventoLenguajeApp(){
    let lenguaje = $('#lenguajeApp');
    lenguaje.focusout(function(){
        if(validarLenguaje()){
            lenguaje.css("border","solid green 2px");
            lenguaje.next().text("")
        } else{
            lenguaje.css("border","solid red 2px");
            lenguaje.next().text("El lenguaje solo acepta #, numeros o letras");
        }
    });
}

function eventoDNI(){
    let dni = $('#dniDesarrollador');
    dni.change(function(){
        if(validarDNI()){
            dni.css("border","solid green 2px");
            dni.next().text("")
        } else{
            dni.css("border","solid red 2px");
            dni.next().text("El DNI tiene que tener 8 numeros y una letra al final");
        }
    });
}

function eventoCodigo(){
    let codigo = $('#codigoApp');
    codigo.focusout(function(){
        if(validarCodigo()){
            codigo.css("border","solid green 2px");
            codigo.next().text("")
        } else{
            codigo.css("border","solid red 2px");
            codigo.next().text("El codigo debe de tener 6 hexadecimales, un guion, el primer numero del DNI y la letra. Por ejemplo: FABADA-3D");
        }
    });
}

function eventoTerminos(){
    let terminos = $("#aceptarTerminos");
    terminos.click(function(){
        if(validarTerminos()){
            terminos.css("border","solid green 2px");
            terminos.next().text("")
        } else{
            terminos.css("border","solid red 2px");
            terminos.next().text("Debe aceptar los terminos");
        }
    });
}

function escondido(){
    $(".lds-hourglass").hide();
}

function mostrarCarga(){
    $(".lds-hourglass").show(500, escondido);
}

function botonPulsado(){
    let botonPulsado = $('#enviarForm');
    botonPulsado.click(function(event){
        event.preventDefault();
        if(validarNombreApp() && validarTema() && validarLenguaje() && validarHoras() && validarNombreDesVacio() && validarApellDesVacio() && validarPrimeraLetraNom() && validarPrimeraLetraApell() && validarApellidoYNombreIguales() && validarDNI() && validarCodigo() && validarTerminos()){
            mostrarCarga();
            todoOk();
            crearAppWeb();
        }
        else{
            mostrarCarga();
            lanzarErrores();
        }
    });
}

function todoOk(){
    let nombre = $('#nombreApp');
    let tema = $('#temaApp');
    let lenguaje = $('#lenguajeApp');
    let horas = $('#horasApp');
    let nombreDes = $('#nombreDesarrollador');
    let apellidoDes = $('#apellidoDesarrollador');
    let dni = $('#dniDesarrollador');
    let codigo = $('#codigoApp');
    let terminos = $('#aceptarTerminos');

    nombre.css("border","solid green 2px");
    nombre.next().text("");

    tema.css("border","solid green 2px");
    tema.next().text("");

    lenguaje.css("border","solid green 2px");
    lenguaje.next().text("");

    horas.css("border","solid green 2px");
    horas.next().text("");

    nombreDes.css("border","solid green 2px");
    nombreDes.next().text("");
    
    apellidoDes.css("border","solid green 2px");
    apellidoDes.next().text("");

    dni.css("border","solid green 2px");
    dni.next().text("");

    codigo.css("border","solid green 2px");
    codigo.next().text("");

    terminos.css("border","solid green 2px");
    terminos.next().text("");
}

function lanzarErrores(){
    let nombre = $('#nombreApp');
    let tema = $('#temaApp');
    let lenguaje = $('#lenguajeApp');
    let horas = $('#horasApp');
    let nombreDes = $('#nombreDesarrollador');
    let apellidoDes = $('#apellidoDesarrollador');
    let dni = $('#dniDesarrollador');
    let codigo = $('#codigoApp');
    let terminos = $('#aceptarTerminos');
    

    if(validarNombreApp()){
        nombre.css("border","solid green 2px");
        nombre.next().text("")
    } else{
        nombre.css("border","solid red 2px");
        nombre.next().text("El nombre debe de ser totalmente en mayuscula")
    } 
    
    if(validarTema()){
            tema.css("border","solid green 2px");
            tema.next().text("")
    } else{
            tema.css("border","solid red 2px");
            tema.next().text("El tema no puede estar vacio")
    }

    if(validarLenguaje()){
        lenguaje.css("border","solid green 2px");
        lenguaje.next().text("")
    } else{
        lenguaje.css("border","solid red 2px");
        lenguaje.next().text("El lenguaje solo acepta #, numeros o letras");
    }
    if(validarHoras()){
        horas.css("border","solid green 2px");
        horas.next().text("")
    } else{
        horas.css("border","solid red 2px");
        horas.next().text("Las horas no pueden ser inferior a 200 horas, ni superior a 1000 horas, ademas de no poder ser decimal");
    }

    if(validarNombreDesVacio()){
        nombreDes.css("border","solid green 2px");
        nombreDes.next().text("")
    } else{
        nombreDes.css("border","solid red 2px");
        nombreDes.next().text("El nombre no puede estar vacio");
    }

    if(validarApellDesVacio()){
        apellidoDes.css("border","solid green 2px");
        apellidoDes.next().text("")
    } else{
        apellidoDes.css("border","solid red 2px");
        apellidoDes.next().text("El apellido no puede estar vacio");
    }

    if(validarPrimeraLetraNom()){
        nombreDes.css("border","solid green 2px");
        nombreDes.next().text("")
    } else{
        nombreDes.css("border","solid red 2px");
        nombreDes.next().text("La primera letra del nombre debe de ser mayuscula");
    }

    if(validarPrimeraLetraApell()){
        apellidoDes.css("border","solid green 2px");
        apellidoDes.next().text("")
    } else{
        apellidoDes.css("border","solid red 2px");
        apellidoDes.next().text("La primera letra del apellido debe de ser mayuscula");
    }
    
    if(validarApellidoYNombreIguales()){
        apellidoDes.css("border","solid green 2px");
        apellidoDes.next().text("")
    } else{
        apellidoDes.css("border","solid red 2px");
        apellidoDes.next().text("El nombre y el apellido no pueden ser iguales");
    }

    if(validarDNI()){
        dni.css("border","solid green 2px");
        dni.next().text("")
    } else{
        dni.css("border","solid red 2px");
        dni.next().text("El DNI tiene que tener 8 numeros y una letra al final");
    }

    if(validarCodigo()){
        codigo.css("border","solid green 2px");
        codigo.next().text("")
    } else{
        codigo.css("border","solid red 2px");
        codigo.next().text("El codigo debe de tener 6 hexadecimales, un guion, el primer numero del DNI y la letra. Por ejemplo: FABADA-3D");
    }

    if(validarTerminos()){
        terminos.css("border","solid green 2px");
        terminos.next().text("")
    } else{
        terminos.css("border","solid red 2px");
        terminos.next().text("Debe aceptar los terminos");
    }
}

function crearAppWeb(){
    let nombre = $('#nombreApp').val();
    let tema = $('#temaApp').val();
    let lenguaje = $('#lenguajeApp').val();
    let horas = $('#horasApp').val();
    let nombreDes = $('#nombreDesarrollador').val();
    let apellidoDes = $('#apellidoDesarrollador').val();
    let dni = $('#dniDesarrollador').val();
    let codigo = $('#codigoApp').val();
    desarrollador = new Desarrollador(nombreDes,apellidoDes,dni);
    appWeb = new AppWeb(nombre,tema,lenguaje,horas,codigo,desarrollador);
    incluirApp(appWeb);
}

