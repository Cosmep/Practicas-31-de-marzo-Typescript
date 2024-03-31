/*Practica 8: Desestructuración en TypeScript*/

/*
Ejercicio 1: Desestructuración Básica de Arreglos.

Dado el siguiente arreglo de colores, utiliza la desestructuración para asignar los tres primeros colores a variables individuales y luego imprime estas variables.

const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Morado']; // Desestructura y asigna los tres primeros colores a variables // Imprime las variables.
*/

const colores = ['Rojo', 'Verde', 'Azul', 'Amarillo', 'Morado'];

const [color1, color2, color3] = colores;

console.log(color1); // Rojo
console.log(color2); // Verde
console.log(color3); // Azul


/*
Ejercicio 2: Desestructuración con Omisión de Elementos.

Tienes un arreglo con información sobre un libro. Utiliza la desestructuración para extraer el título y el año de publicación del libro, omitiendo el autor.

const libroInfo = ['Cien años de soledad', 'Gabriel García Márquez', 1967]; // Desestructura y asigna el título y el año a variables, omitiendo el autor // Imprime el título y el año
*/

const libroInfo = ['Cien años de soledad', 'Gabriel García Márquez', 1967];

const [titulo, anio,] = libroInfo

console.log(titulo);
console.log(anio);

/*
Ejercicio 3: Desestructuración de Objetos Anidados.

Dado el siguiente objeto que representa un estudiante, utiliza la desestructuración para extraer el nombre del estudiante y el nombre de la universidad.

const estudiante = { nombre: 'Ana', edad: 22, universidad: { nombre: 'Universidad de Buenos Aires', ciudad: 'Buenos Aires' } }; // Desestructura y asigna el nombre del estudiante y el nombre de la universidad a variables // Imprime el nombre del estudiante y el nombre de la universidad
*/


const estudiante = { nombre: 'Ana', edad: 22, universidad: { nombre: 'Universidad de Buenos Aires', ciudad: 'Buenos Aires' } };

const { nombre: nombreEstudiante, universidad: { nombre: nombreUniversidad } } = estudiante;


console.log("El Nombre de lestudiante es:", nombreEstudiante);
console.log("El Nombre de la universidad:", nombreUniversidad);


/*
Ejercicio 4: Desestructuración en Parámetros de Función.

Escribe una función que acepte un objeto representando un coche y utilice la desestructuración en los parámetros para extraer y imprimir la marca y el modelo del coche.

const coche = { marca: 'Toyota', modelo: 'Corolla', año: 2020 }; // Escribe una función que utilice la desestructuración para extraer la marca y el modelo // Llama a la función con el objeto coche
*/

const coche = { marca: 'Toyota', modelo: 'Corolla', año: 2020 }; 

function marca_modelo({ marca, modelo }) {
    console.log("Marca:", marca);
    console.log("Modelo:", modelo);
}

marca_modelo(coche);

/*
Ejercicio 5: Desestructuración y Renombramiento.

Tienes un objeto que representa una dirección. Utiliza la desestructuración para extraer la calle y la ciudad, pero renombra las variables a nombreCalle y nombreCiudad.

const direccion = { calle: 'Av. Siempre Viva', ciudad: 'Springfield', pais: 'EE.UU.' }; // Desestructura y renombra las variables calle y ciudad a nombreCalle y nombreCiudad // Imprime nombreCalle y nombreCiudad
*/


const direccion = { calle: 'Av. Siempre Viva', ciudad: 'Springfield', pais: 'EE.UU.' };

const { calle: nombreCalle, ciudad: nombreCiudad } = direccion;

console.log("Nombre de la calle:", nombreCalle);
console.log("Nombre de la ciudad:", nombreCiudad);

export { }