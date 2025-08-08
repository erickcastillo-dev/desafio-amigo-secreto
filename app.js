// lista de nombres
let nombres = [];


//función para agregar nombres
function agregarAmigo () {
   let inputAmigo = document.getElementById("amigo")
   let nombre = inputAmigo.value.trim();
   
   if (nombre === '') {
    alert('Por favor, inserte un nombre')
   }  else {
       nombres.push(nombre);
       actualizarLista();
       inputAmigo.value= '';
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
         let indiceAleatorio = Math.floor(Math.random()*nombres.length);
         let amigoSorteado = nombres[indiceAleatorio];
         document.getElementById('resultado').innerHTML = "El amigo secreto es: " + amigoSorteado
        }
    }
    