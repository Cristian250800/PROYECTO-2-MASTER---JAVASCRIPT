/*Crea una función llamada swap que reciba un array y dos parametros que sean indices del array.
La función deberá intercambiar la posición de los valores de los indices que hayamos enviado 
como parametro. Es decir, intercambiar el lugar de un elemento por otro dentro del array.
Retorna el array resultante.*/


const fantasticFour = [
  "La antorcha humana",
  "Mr. Fantástico",
  "La mujer invisible",
  "La cosa",
];

function swap(array, num1, num2){
    let valor = array[num1];
    array[num1] = array[num2]
    array[num2] = valor
    return array
}
console.log(swap(fantasticFour, 1,3))