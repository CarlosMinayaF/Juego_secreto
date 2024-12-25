/*
Crea una función que devuelva la suma de todos los elementos en una lista.
Crea una función que devuelva la posición en la lista donde se encuentra un elemento pasado como parámetro, o -1 si no existe en la lista.
Crea una función que reciba dos listas de números del mismo tamaño y devuelva una nueva lista con la suma de los elementos uno a uno.
Crea una función que reciba una lista de números y devuelva una nueva lista con el cuadrado de cada número.

*/

function encontrarIndiceElemento(lista, elemento) {
  for (let i = 0; i < lista.length; i++) {
    if (lista[i] == elemento) {
      return i; // Retorna el índice del elemento encontrado
      }
  }
  return -1; // Retorna -1 si el elemento no se encuentra en la lista
}

let numeros = [15, 8, 25, 5, 12];
encontrarIndiceElemento(numeros,12);