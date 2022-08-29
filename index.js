

let nombre = "Macario";
console.log(nombre);

let apellido = "Valderrama G";
console.log(apellido);

let estudiante = nombre + " " + apellido;
console.log(estudiante);

let  estudianteMayus = estudiante.toUpperCase();
console.log(estudianteMayus);

let estudianteMinus = estudiante.toLowerCase();
console.log(estudianteMinus);

let largo = estudiante.length;
console.log(largo);

let sliceNombre = nombre.slice(0, 1);
console.log(sliceNombre);

let sliceApellido = apellido.slice(11, 12);
console.log(sliceApellido);

let eliminar = estudiante.replaceAll(" ","");
console.log(eliminar);

let texto = estudiante;
console.log(texto.startsWith("Macario"))