import { conexion } from "./conexion.js";
import crearTarjeta from "./visualizarProductos.js";


const lista = document.querySelector("[data-lista]");

async function listarProductos() {
    try {
        const api = await conexion.listarProductos();
        api.forEach((product) =>
            lista.appendChild(
                crearTarjeta(product.titulo, product.precio, product.url)
            )
        );
    } catch {
        lista.innerHTML = "Hubo un error en la conexion [*_*]"
    }
}

listarProductos();