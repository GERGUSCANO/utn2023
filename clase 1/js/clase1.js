function actualizarEstado() {
    var estadoSelect = document.getElementById("estado");
    var estadoValue = estadoSelect.options[estadoSelect.selectedIndex].value;
    console.log("Estado seleccionado: " + estadoValue);
}
actualizarEstado();