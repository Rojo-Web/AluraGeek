import { conexion } from "./conexion.js";
import crearTarjeta from "./visualizarProductos.js";

//Listar
const lista = document.querySelector("[data-lista]");

async function listarProductos() {
    try {
        const api = await conexion.listarProductos();
        api.forEach((product) =>
            lista.appendChild(
                crearTarjeta(product.titulo, product.precio, product.url, product.id),

            )
        );
    } catch {
        lista.innerHTML = "Hubo un error en la conexion [*_*]"
    }
}

listarProductos();


//Enviar productos a creacion
const formulario = document.querySelector("[data-formulario]")

async function enviarProducto(event) {
    event.preventDefault();

    const titulo = document.querySelector("[data-titulo]").value;
    const url = document.querySelector("[data-url]").value;
    const precio = document.querySelector("[data-precio]").value;

    try {
        await conexion.crearProducto(titulo, precio, url);
        location.reload()
    } catch (e) {
        alert(e)
    }
}


formulario.addEventListener("submit", event => enviarProducto(event))


//Eliminar producto
// const productContainer = document.getElementById('product-container');
// // const botonBasura = document.querySelector("products")
// console.log(productContainer);

// async function eliminarEnvioProducto(evento) {

//     const id = evento.target.closest(".product-card").dataset.id;

//     try {
//         await conexion.eliminarProducto(id);
//         location.reload()
//     } catch (e) {
//         alert(e)
//     }
// }


// botonBasura.addEventListener("click", eliminarEnvioProducto)



// productContainer.addEventListener('click', async function(evento) {
//     if (evento.target.classList.contains('btnBorrar')) {
//         const productCard = evento.target.closest('.product');
//         console.log(productCard);
//         const id = productCard.dataset.id;
//         console.log(id);

//         try {
//             await conexion.eliminarProducto(id); // Asegúrate de definir esta función
//             productCard.remove(); // Eliminar la tarjeta de producto del DOM
//         } catch (e) {
//             alert(e);
//         }
//     }
// });