import { conexion } from "./conexion.js";

export default function crearTarjeta(titulo, precio, url, id) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "product";
    tarjeta.id = `${id}`;
    tarjeta.innerHTML = `
    <div>
                        <img src="${url}" alt="producto">
                        <p  class="idProducto">${id}</p>
                        <h3>${titulo}</h3>
                        <div class="details">
                            <p class="price">$ ${precio},00</p>
                            <button class="delete-product" id="btnBorrar"><img src="assets\\basura.png" alt="basura"></button>
                        </div>
                    </div>
    `;
    //Añadimos el evento de eliminar un producto a traves del incono 
    const deleteButton = tarjeta.querySelector(".delete-product");
    deleteButton.addEventListener("click", () => {
        conexion.eliminarProducto(id)
            .then(() => {
                tarjeta.remove();
            })
            .catch(err => console.log(err));
    });
    return tarjeta;
}