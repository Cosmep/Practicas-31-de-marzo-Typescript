
/*
Practica 6: Funciones con Parámetros Opcionales y Predeterminados.
Escribe una función crearPerfilDeUsuario que tome tres parámetros: nombre (tipo string), edad (tipo number), y pais (tipo string, opcional con valor predeterminado "No especificado"). La función debe devolver un objeto que represente el perfil del usuario.
*/

interface PerfilDeUsuario {
    nombre: string;
    edad: number;
    pais: string;
}

function crearPerfilDeUsuario(nombre: string, edad: number, pais: string = "No especificado"): PerfilDeUsuario {
    const perfil: PerfilDeUsuario = {
        nombre: nombre,
        edad: edad,
        pais: pais
    };
    return perfil;
}

const perfilDeUsuario: PerfilDeUsuario = crearPerfilDeUsuario("Cosme", 42, "Santo Domingo");
console.log(perfilDeUsuario);

 export {}