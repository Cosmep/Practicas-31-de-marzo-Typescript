 
/*
Practica 7: Funciones con Parámetros Rest
Escribe una función crearListaDeCompra que tome un número indefinido de argumentos de tipo string que representan los artículos de la lista de compra. La función debe devolver un objeto que contenga los artículos como propiedades con valores booleanos que indiquen si el artículo ha sido comprado (inicialmente false para todos).
*/

function crearListaDeCompra(...articulos: string[]): { [articulo: string]: boolean } {
    const ListaDeCompra: { [articulo: string]: boolean } = {};
    for (const articulo of articulos) {
        ListaDeCompra[articulo] = false;
    }
    return ListaDeCompra;

}

const lista = crearListaDeCompra('pan', 'arroz', 'carne', 'pezcado');
console.log(lista);

export { };
