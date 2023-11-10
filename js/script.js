 // Aquí tu código
const boton = document.getElementById('agregar');
const lista = document.getElementById('lista')

 boton.addEventListener('click',function() {
   let input = prompt("Añadir elemento a la lista: ");
   let inputX = document.createElement('li');
   inputX.innerText = input;
   lista.appendChild(inputX);
})
