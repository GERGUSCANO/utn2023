//PROBANDO VARIAS MANERAS DE HACER
/*function actualizarEstado() {
    var estadoSelect = document.getElementById("estado");
    var estadoValue = estadoSelect.options[estadoSelect.selectedIndex].value;
    console.log("Estado seleccionado: " + estadoValue);
}
actualizarEstado();*/

//LOS PROFESORES PREFIEREN ESTA MANERA 
/*const selectStatus = document.getElementById('estado');
const estadoSeleccionado = document.getElementById('estadoSeleccionado');

selectStatus.addEventListener('change', (e) => {
    estadoSeleccionado.value = e.target.value;
})*/
//ENTIENDO ESTA MANERA
function cambiarEstado(){
    const select= document.getElementById('estado');
    const estadoSeleccionado=document.getElementById('estadoSeleccionado');
    const opcionSeleccionada=select.value;

    estadoSeleccionado.textContent = opcionSeleccionada;

}