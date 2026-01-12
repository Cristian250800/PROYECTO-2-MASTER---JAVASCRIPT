/*Valores únicos: Crea una función que reciba por parámetro un array y compruebe si existen elementos duplicados, 
en caso que existan los elimina para retornar un array sin los elementos duplicados.
Pista: puedes generar un nuevo array y devolverlo.
Puedes usar este array para probar tu función:*/

const duplicates = [
  'sushi',
  'pizza',
  'burger',
  'potatoe',
  'pasta',
  'ice-cream',
  'pizza',
  'chicken',
  'onion rings',
  'pasta',
  'soda'
];

function removeDuplicates(list) {
    const unico = [];
    for (const i of list) {
        if(!unico.includes(i)){
            unico.push(i)
        }
    }
    console.log(unico)
}

removeDuplicates(duplicates);