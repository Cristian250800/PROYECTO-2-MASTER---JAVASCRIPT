/*1.1 Añade un botón a tu html con el id btnToClick y en tu javascript añade el evento click que ejecute un console log con la información del evento del click*/

const boton = document.querySelector("#btnToClick");

boton.addEventListener("click", (ev) => {
  console.log(ev);
  });

//1.2 Añade un evento 'focus' que ejecute un console.log con el valor del input.

const eventoFocus = document.querySelector(".focus")
eventoFocus.addEventListener("focus", (ev) => {
    console.log(ev.target.value)
})

//1.3 Añade un evento 'input' que ejecute un console.log con el valor del input.

const eventoInput = document.querySelector(".value")
eventoInput.addEventListener("input", (ev) => {
    console.log(ev.target.value)
})