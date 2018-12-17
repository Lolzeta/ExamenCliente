

function mostrarAppWebs(){
    let listaOrdenada = listaAppWebs.sort(compararNombres);
    mostrarPorPantalla(listaOrdenada);
}

function compararNombres(appWebA,appWebB){
    return appWebA.nombre.localeCompare(appWebB.nombre)
}

document.addEventListener('DOMContentLoaded', function(event){
    mostrarAppWebs();
    creacionAppWebsSelection();
})

function creacionAppWebsSelection(){
    let selection = document.getElementById('selectAppWebs');
    for (let i = 0; i < listaAppWebs.length; i++) {
        let opcionNueva = document.createElement('option');
        opcionNueva.value = listaAppWebs[i].id;
        opcionNueva.innerHTML = listaAppWebs[i].nombre;
        selection.append(opcionNueva);
    }
}

function buscarPorNombres(){
    let listaBuscada = [];
    let nombres = document.getElementById('nombres').value.trim();
    for (let i = 0; i < listaAppWebs.length; i++) {
        if(nombres.includes(listaAppWebs[i].nombre.toUpperCase()) || nombres.includes(listaAppWebs[i].desarrollador.nombre.toUpperCase())){
            listaBuscada.push(listaAppWebs[i])
        }
    }
    mostrarPorPantalla(listaBuscada);
}

function devolverSimilar(){
    let listaBuscada = [];
    let appWebId = parseInt(document.getElementById('selectAppWebs').value);
    let appWeb = listaAppWebs.find( x => x.id===appWebId);
    for (let i = 0; i < listaAppWebs.length; i++) {
        if(appWeb.tema===listaAppWebs[i].tema && appWeb.lenguaje===listaAppWebs[i].lenguaje){
            listaBuscada.push(listaAppWebs[i]);
        }
    }
    mostrarPorPantalla(listaBuscada);
}

let enviarSelectAppWebs = document.getElementById('enviarSelectAppWebs');
enviarSelectAppWebs.addEventListener('click',function(event){
    event.preventDefault();
    devolverSimilar();
});

let resetear = document.getElementById('resetear');
resetear.addEventListener('click',function(event){
    event.preventDefault();
    mostrarPorPantalla(listaAppWebs);
});

let buscarNombres = document.getElementById('buscarNombres');
buscarNombres.addEventListener('click',function(event){
    event.preventDefault();
    buscarPorNombres();
})