// variables
let nombres = [];



//función para agregar nombres
function agregarAmigo () {
   let agregarAmigo = document.getElementById("amigo")
   let nombreAgregado = agregarAmigo.value.trim();
   
   if (nombreAgregado === '') {
    alert('Por favor, inserte un nombre')
   } else {
    nombres.push(nombreAgregado);
    actualizarLista();
    console.log(nombres);
    agregarAmigo.value= '';
    }
}   

//función para actualizar la lista 
function actualizarLista() {
    let listaActualizada = document.getElementById("listaAmigos");
    listaActualizada.innerHTML = '';
    for (let nombre of nombres) {
        let lista = document.createElement('li');
        lista.textContent = nombre;
        listaActualizada.appendChild(lista);
    }
}

//función para sorteo aleatorio
function sortearAmigo() {
    if (nombres.length < 2) {
        alert('Por favor introducir dos o mas nombres')
    } else {
         let amigoAleatorio = Math.floor(Math.random()*nombres.length);
         let amigoSorteado = nombres[amigoAleatorio];
         let resultadoFinal = document.getElementById('resultado').innerHTML = "El amigo secreto es: " + amigoSorteado
         console.log(amigoSorteado)
        }
    }
    