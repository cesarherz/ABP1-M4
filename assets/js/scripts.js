function Trabajador(nombre, rut, cargo) {
    this.nombre = nombre;
    this.rut = rut;
    this.cargo = cargo;
}

Trabajador.prototype.getNombre = function() {
    return this.nombre;
};

Trabajador.prototype.setNombre = function(nombre) {
    this.nombre = nombre;
};

Trabajador.prototype.getRut = function() {
    return this.rut;
};

Trabajador.prototype.setRut = function(rut) {
    this.rut = rut;
};

Trabajador.prototype.getCargo = function() {
    return this.cargo;
};

Trabajador.prototype.setCargo = function(cargo) {
    this.cargo = cargo;
};

function Proyecto(nombreProyecto) {
    this.nombreProyecto = nombreProyecto;
    this.trabajadores = [];
}

Proyecto.prototype.agregarTrabajador = function(trabajador) {
    this.trabajadores.push(trabajador);
};

Proyecto.prototype.buscarTrabajadorPorNombre = function(nombre) {
    for (var i = 0; i < this.trabajadores.length; i++) {
        if (this.trabajadores[i].getNombre() === nombre) {
            return this.trabajadores[i];
        }
    }
    return null; 
};

Proyecto.prototype.mostrarTodosLosTrabajadores = function() {
    for (var i = 0; i < this.trabajadores.length; i++) {
        console.log("Nombre: " + this.trabajadores[i].getNombre());
        console.log("RUT: " + this.trabajadores[i].getRut());
        console.log("Cargo: " + this.trabajadores[i].getCargo());
        console.log("-----------");
    }
};

var proyecto = new Proyecto("Construcción de Edificio Central");
var trabajador1 = new Trabajador("Juan Pérez", "12345678-9", "Ingeniero");
var trabajador2 = new Trabajador("María López", "98765432-1", "Arquitecta");

proyecto.agregarTrabajador(trabajador1);
proyecto.agregarTrabajador(trabajador2);

var trabajadorEncontrado = proyecto.buscarTrabajadorPorNombre("María López");
if (trabajadorEncontrado !== null) {
    console.log("Trabajador encontrado: " + trabajadorEncontrado.getNombre());
} else {
    console.log("Trabajador no encontrado");
}

proyecto.mostrarTodosLosTrabajadores();
