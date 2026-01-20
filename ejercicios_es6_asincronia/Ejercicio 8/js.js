/*Accederemos a los datos de una API pública de Game Of Thrones, queremos un select con todos los nombres de los personajes para que cuando un usuario seleccione un nombre salga su imagen en el medio de la página, algo así:

Para obtener los datos con los que jugar necesitaremos estudiar la documentación de la API y buscar la url necesaria para los datos que queramos, para este paso os pedimos que de verdad os esforcéis buscándola en la documentación, queremos la url que me traiga los datos de todos los personajes de GOT, sin embargo, en la slide siguiente tendréis la url directa de esos datos.

URL de la documentación (para que indaguéis): https://thronesapi.com/

Esta sería la URL final (la que deberéis utilizar para vuestra petición):

https://thronesapi.com/api/v2/Characters*/ 

document.addEventListener("DOMContentLoaded", () => {
    const apiURL = "https://thronesapi.com/api/v2/Characters";
    const select = document.getElementById("character-list");
    const image = document.querySelector(".character-image");
    let personajes = [];

    fetch(apiURL)
        .then(response => response.json())
        .then(data => {
            personajes = data;

            data.forEach(character => {
                const opcion = document.createElement("option");
                opcion.value = character.id;
                opcion.textContent = character.fullName;
                select.appendChild(opcion);
            });

            select.addEventListener("change", () => {
                const IdPersonaje = parseInt(select.value);
                const personajeSeleccionado = personajes.find(char => char.id === IdPersonaje);

                if (personajeSeleccionado) {
                    image.src = personajeSeleccionado.imageUrl;
                    image.alt = personajeSeleccionado.fullName;
                } else {
                    image.src = "";
                    image.alt = "Error";
                }
            });
        })
        .catch(error => {
            console.error("Error al obtener datos", error);
        });
});
