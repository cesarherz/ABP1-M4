var proyecto;

function agregarTrabajador() {
    var nombreProyecto = document.getElementById("nombreProyecto").value;
    var nombreTrabajador = document.getElementById("nombreTrabajador").value;
    var rutTrabajador = document.getElementById("rutTrabajador").value;
    var cargoTrabajador = document.getElementById("cargoTrabajador").value;

    if (!proyecto) {
        proyecto = new Proyecto(nombre_proyecto);
    }

    var nuevoTrabajador = new Trabajador(nombreTrabajador, rutTrabajador, cargoTrabajador);
    proyecto.agregarTrabajador(nuevoTrabajador);

    mostrarTrabajadores();
}

function mostrarTrabajadores() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; 

    var trabajadores = proyecto.trabajadores;
    for (var i = 0; i < trabajadores.length; i++) {
        resultadoDiv.innerHTML += "Nombre: " + trabajadores[i].getNombre() + "<br>";
        resultadoDiv.innerHTML += "RUT: " + trabajadores[i].getRut() + "<br>";
        resultadoDiv.innerHTML += "Cargo: " + trabajadores[i].getCargo() + "<br>";
        resultadoDiv.innerHTML += "<hr>";
    }
}
