var proyecto;

// Función para validar el formulario
function validarFormulario(event) {
        event.preventDefault();
        
    var nombreProyecto = document.getElementById("nombreProyecto").value.trim();
    var nombreTrabajador = document.getElementById("nombreTrabajador").value.trim();
    var rutTrabajador = document.getElementById("rutTrabajador").value.trim();
    var cargoTrabajador = document.getElementById("cargoTrabajador").value.trim();

    if (nombreProyecto === "") {
        alert("El nombre del proyecto es obligatorio.");
        return false;
    }

    if (nombreTrabajador === "") {
        alert("El nombre del trabajador es obligatorio.");
        return false;
    }

    if (!validarRut(rutTrabajador)) {
        alert("El RUT ingresado no es válido.");
        return false;
    }

    if (cargoTrabajador === "") {
        alert("El cargo del trabajador es obligatorio.");
        return false;
    }

    agregarTrabajador();
    return false; // Prevenir que el formulario se envíe de manera convencional
}

// Función para validar el RUT (ejemplo simple)
function validarRut(rut) {
    var regexRut = /^[0-9]+-[0-9kK]{1}$/; // Formato básico "12345678-9"
    return regexRut.test(rut);
}

// Función para agregar un trabajador al proyecto
function agregarTrabajador() {
    var nombreProyecto = document.getElementById("nombreProyecto").value.trim();
    var nombreTrabajador = document.getElementById("nombreTrabajador").value.trim();
    var rutTrabajador = document.getElementById("rutTrabajador").value.trim();
    var cargoTrabajador = document.getElementById("cargoTrabajador").value.trim();

    if (!proyecto) {
        proyecto = new Proyecto(nombreProyecto);
    }

    var nuevoTrabajador = new Trabajador(nombreTrabajador, rutTrabajador, cargoTrabajador);
    proyecto.agregarTrabajador(nuevoTrabajador);

    mostrarTrabajadores();
}

// Función para mostrar todos los trabajadores del proyecto
function mostrarTrabajadores() {
    var resultadoDiv = document.getElementById("resultado");
    resultadoDiv.innerHTML = ""; // Limpiar contenido anterior

    var trabajadores = proyecto.trabajadores;
    for (var i = 0; i < trabajadores.length; i++) {
        resultadoDiv.innerHTML += "Nombre: " + trabajadores[i].getNombre() + "<br>";
        resultadoDiv.innerHTML += "RUT: " + trabajadores[i].getRut() + "<br>";
        resultadoDiv.innerHTML += "Cargo: " + trabajadores[i].getCargo() + "<br>";
        resultadoDiv.innerHTML += "<hr>";
    }
}
