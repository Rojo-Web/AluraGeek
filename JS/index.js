import { conexion } from "./conexion.js";
import crearTarjeta from "./visualizarProductos.js";

//Listar
const lista = document.querySelector("[data-lista]");

async function listarProductos() {
    try {
        const api = await conexion.listarProductos();
        api.forEach((product) =>
            lista.appendChild(
                crearTarjeta(product.titulo, product.precio, product.url, product.id)
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
const botonBasura = document.querySelector(".delete-product")

async function eliminarEnvioProducto() {


    const id = document.querySelector(".idProducto").value;

    try {
        await conexion.eliminarProducto(id);
        location.reload()
    } catch (e) {
        alert(e)
    }
}


botonBasura.addEventListener("click", (evento) => eliminarEnvioProducto(evento))