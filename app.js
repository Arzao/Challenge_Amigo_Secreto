
let amigosIngresados = [];

//La siguiente función nos permite seleccionar un elemento HTML y editar su contenido.
function asignarElementoTexto (elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
}

//La siguiente función nos permite agregar las condiciones iniciales para comenzar nuestro juego.
function condicionesIniciales () {
    asignarElementoTexto("h1", "Bienvenido al juego del Amigo Secreto!");
    asignarElementoTexto("h2", "Por favor, ingresa el nombre de tus amigos.");
}
condicionesIniciales();

//La siguiente función nos permite tener el input de texto limpio al finalizar cada intento.
function limpiarInput() {
    let caja = document.getElementById("amigo");
    caja.value = "";
}

//La siguiente función nos permite verificiar si los nombres ingresados son válidos o no son válidos.
function agregarAmigos () {
    let agregarAmigo = document.getElementById("amigo").value;
    if (agregarAmigo === "") {
        alert("Por favor, ingresa un nombre.")
    } else {
        amigosIngresados.push(agregarAmigo);
        limpiarInput();
        actualizarListaAmigos();
    }
}

//La siguiente función nos permite actualizar la lista de amigos.
function actualizarListaAmigos() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";
    for (let amigo of amigosIngresados) {
        let item = document.createElement("li");
        item.textContent = amigo;
        lista.appendChild(item);
    }
}

//La siguiente función nos permite sortear el nombre de un amigo.
function sortearAmigo () {
    if (amigosIngresados.length === 0) {
        alert("No hay amigos en la lista para sortear.")
        return;
    } else {
        let indiceAleatorio = Math.floor(Math.random() * amigosIngresados.length);
        let amigoSorteado = amigosIngresados[indiceAleatorio];
        let resultadoElemento = document.getElementById("resultado");
        resultadoElemento.innerHTML = `<li>${amigoSorteado}</li>`;
    }
}

