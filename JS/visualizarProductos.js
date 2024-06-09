import { conexion } from "./conexion.js";


export default function crearTarjeta(titulo, precio, url) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "product";
    tarjeta.innerHTML = `
    <div>
                        <img src="${url}" alt="producto">
                        <h3>${titulo}</h3>
                        <div class="details">
                            <p class="price">$ ${precio},00</p>
                            <button class="delete-product"><img src="assets\\basura.png" alt="basura"></button>
                        </div>
                    </div>
    `;
    return tarjeta;
}