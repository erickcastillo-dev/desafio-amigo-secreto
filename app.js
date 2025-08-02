// variables
let nombres = [];



//funcion para agregar nombres
function agregarAmigo () {
   let nombreAgregado = document.getElementById("amigo").value;
  
   if (nombreAgregado === '') {
    alert('Por favor, inserte un nombre')
   }
    nombres.push(nombreAgregado);
    actualizarLista();
    console.log(nombres);
    document.getElementById("amigo").value= '';
}   

//funcion para actualizar la lista 
function actualizarLista() {
    let listaActualizada = document.getElementById("listaAmigos");
    listaActualizada.innerHTML = '';
    for (let nombre of nombres) {
        let lista = document.createElement('li');
        lista.textContent = nombre;
        listaActualizada.appendChild(lista);
    }
}