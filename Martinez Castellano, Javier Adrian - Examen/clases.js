class AppWeb{
    constructor(nombre, tema, lenguaje, horas, codigo, desarrollador, id){
        this.nombre = nombre;
        this.tema = tema;
        this.lenguaje = lenguaje;
        this.horas = horas;
        this.desarrollador = desarrollador;
        this.codigo = codigo;
        this.id = id;
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set tema(tema){
        this._tema = tema;
    }

    get tema(){
        return this._tema;
    }

    set lenguaje(lenguaje){
        this._lenguaje = lenguaje;
    }

    get lenguaje(){
        return this._lenguaje;
    }

    set horas(horas){
        this._horas = horas;
    }

    get horas(){
        return this._horas;
    }

    set desarrollador(desarrollador){
        this._desarrollador = desarrollador;
    }

    get desarrollador(){
        return this._desarrollador;
    }

    set codigo(codigo){
        this._codigo = codigo;
    }

    get codigo(){
        return this._codigo;
    }

    set id(id){
        this._id = id;
    }

    get id(){
        return this._id;
    }

    mostrar(lugar){
        let bloque = document.createElement('div');
        bloque.className = 'appWeb';
		let nombre = document.createElement('h1');
		nombre.innerHTML = this.nombre; 
        let codigo = document.createElement('a');
        codigo.className = 'negrita';
        codigo.innerHTML = this.codigo;
        let desarrollador = document.createElement('p');
        desarrollador.className = 'cursiva';
        desarrollador.innerHTML = `${this.desarrollador.nombre} ${this.desarrollador.apellido}`;
        let tema = document.createElement('p');
        tema.className = 'azul';
        tema.innerHTML = this.tema;
        let lenguaje = document.createElement('p');
        lenguaje.className = 'naranja';
        lenguaje.innerHTML = this.lenguaje;
        bloque.append(nombre);
        bloque.append(codigo);
        bloque.append(desarrollador);
        bloque.append(tema);
        bloque.append(lenguaje);
		lugar.appendChild(bloque);
    }
}

class Desarrollador{
    constructor(nombre, apellido, dni){
        this.nombre = nombre;
        this.apellido = apellido;
        this.dni = dni;
        this.appWebs = [];
    }

    set nombre(nombre){
        this._nombre = nombre;
    }

    get nombre(){
        return this._nombre;
    }

    set apellido(apellido){
        this._apellido = apellido;
    }

    get apellido(){
        return this._apellido;
    }

    set dni(dni){
        this._dni = dni;
    }

    get dni(){
        return this._dni;
    }

    set appWebs(appWebs){
        this._appWebs = appWebs;
    }

    get appWebs(){
        return this._appWebs;
    }

    addAppWeb(appweb){
        this.appWebs.push(appweb);
    }
    
}