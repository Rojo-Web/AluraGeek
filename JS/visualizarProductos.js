export default function crearTarjeta(titulo, precio, url, id) {
    const tarjeta = document.createElement("div");
    tarjeta.className = "product";
    tarjeta.innerHTML = `
    <div>
                        <img src="${url}" alt="producto">
                        <p  class="idProducto">${id}</p>
                        <h3>${titulo}</h3>
                        <div class="details">
                            <p class="price">$ ${precio},00</p>
                            <button class="delete-product"><img src="assets\\basura.png" alt="basura"></button>
                        </div>
                    </div>
    `;
    return tarjeta;
}