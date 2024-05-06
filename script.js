const form = document.getElementById("item-form");
const listaElementos = document.getElementById("LEON");

// Manejador de evento para el envío del formulario
form.addEventListener("submit", function (event) {
    event.preventDefault(); // Evita que la página se recargue

    // Obtiene los valores de los campos de entrada
    const nombreProducto = document.getElementById("nombre-producto").value;
    const precio = parseFloat(document.getElementById("precio").value);
    const cantidad = parseInt(document.getElementById("cantidad").value);

    // Crea un elemento de lista y muestra la información
    const elementoLista = document.createElement("li");
    elementoLista.textContent = `Producto: ${nombreProducto}, Precio: $${precio}, Cantidad: ${cantidad}`;

    // Agrega el elemento de lista al div
    listaElementos.appendChild(elementoLista);

    // Limpia los campos del formulario
    document.getElementById("nombre-producto").value = "";
    document.getElementById("precio").value = "1200.0";
    document.getElementById("cantidad").value = "";
});