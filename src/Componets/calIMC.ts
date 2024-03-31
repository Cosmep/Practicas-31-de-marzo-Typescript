/*Practica 4: Funciones Tradicionales.
Escribe una función calcularIMC que tome dos parámetros: peso en kilogramos (tipo number) y altura en metros (tipo number). La función debe calcular el Índice de Masa Corporal (IMC) y devolver una cadena que indique la categoría de peso según el IMC calculado.
*/

function calcular_IMC(peso: number, altura: number): number {
    const masa_corpoal: number = peso / (altura * altura);
    return masa_corpoal;
}

const peso: number = 79; 
const altura: number = 1.3716; 

const masa_corpoal: number = calcular_IMC(peso, altura);
console.log("Tu Masa Corporal (IMC) es: " + masa_corpoal.toFixed(2));

    

/*
Practica 5: Funciones Anónimas y Arrow Functions.
Convierte la función calcularIMC en una arrow function y asigna la función anónima resultante a una variable llamada calcularIMCArrow.
*/

const calcularIMCArrow = (peso2: number, altura2: number): number => {
    const imc: number = peso2 / (altura2 * altura2);
    return imc;
};

const peso2: number = 79; 
const altura2: number = 1.3716; 
const imc: number = calcularIMCArrow(peso2, altura2);
console.log("Tu Masa Corporal (IMCArrow) es " + imc.toFixed(2));




 export {}