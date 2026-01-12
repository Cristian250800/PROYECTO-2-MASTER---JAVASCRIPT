//Completa esta función para que, al recibir dos números por argumento, te devuelva por consola el más alto de los dos.
function greaterNumber(numberOne , numberTwo) {
  if ( numberOne > numberTwo) {
    console.log(`El número ${numberOne} es mayor que ${numberTwo}`)
  } else {
     console.log(`El número ${numberTwo} es mayor que ${numberOne}`)
  }
}


greaterNumber(5,50);