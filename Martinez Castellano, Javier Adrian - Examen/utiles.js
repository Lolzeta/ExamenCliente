function mostrarPorPantalla(listaAppWebs){
    let div = document.getElementById('mostrarNuevo');
	div.innerHTML = '';
	if(listaAppWebs.length === 0){
		div.innerHTML = 'No se ha encontrado nada';
	}else{
		listaAppWebs.forEach( appWeb => appWeb.mostrar(div));
	}
}

function incluirApp(appweb){
	let div = document.getElementById('mostrarNuevo');
	appweb.mostrar(div);
}