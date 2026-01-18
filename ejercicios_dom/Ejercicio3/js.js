/*1.1 Basandote en el array siguiente, crea una lista ul > li dinámicamente en el html que imprima cada uno de los paises.*/

const countries = ['Japón', 'Nicaragua', 'Suiza', 'Australia', 'Venezuela'];
const ul = document.createElement("ul")

for (let i = 0; i < countries.length; i++) {
    const li = document.createElement("li")
    li.textContent = `${countries[i]}`  
    ul.appendChild(li)    
}
document.body.appendChild(ul)

//1.2 Elimina el elemento que tenga la clase .fn-remove-me.

const eliminar = document.querySelectorAll(".fn-remove-me")
eliminar.forEach( element =>{
    element.remove();
})

/*1.3 Utiliza el array para crear dinamicamente una lista ul > li de elementos en el div de html con el atributo data-function="printHere".*/

const cars = ['Mazda 6', 'Ford fiesta', 'Audi A4', 'Toyota corola'];
const ul2 = document.createElement("ul")
const div = document.querySelector('div[data-function="printHere"]')
cars.forEach(element => {
    const li = document.createElement("li");
    li.textContent = element;
    ul2.appendChild(li)
})
div.appendChild(ul2)

/*1.4 Crea dinamicamente en el html una serie de divs que contenga un elemento h4 para el titulo y otro elemento img para la imagen.*/

const countries2 = [
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=1'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=2'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=3'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=4'},
	{title: 'Random title', imgUrl: 'https://picsum.photos/300/200?random=5'}
];
for (let i = 0; i < countries2.length; i++) {
    const div2 = document.createElement("div")
    const h4 = document.createElement("h4")
    const image = document.createElement("img")
    h4.textContent = countries2[i].title
    image.src = countries2[i].imgUrl
    div2.appendChild(h4)
    div2.appendChild(image)
    document.body.appendChild(div2)
}

/*1.5 Basandote en el ejercicio anterior. Crea un botón que elimine el último elemento de la serie de divs.*/

const boton = document.createElement("button")
boton.textContent = `Borrar`
document.body.appendChild(boton)

boton.addEventListener("click", () =>{
    const divs = document.querySelectorAll("div")
    const lastDiv = divs[divs.length-1]
    lastDiv.remove();
});

/*1.6 Basandote en el ejercicio anterior. Crea un botón para cada uno de los divs que elimine ese mismo elemento del html.*/

const div3 = document.querySelectorAll("div");

div3.forEach(element => {
  const boton2 = document.createElement("button");
  boton2.textContent = "Eliminar div";

  boton2.addEventListener("click", () => {
    element.remove();
  });

  element.appendChild(boton2);
});