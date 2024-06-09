async function listarProductos() {
    const conexion = await fetch('http://localhost:3001/productos')
    const conexionConvertida = await conexion.json();

    return conexionConvertida
}

async function crearProducto(titulo, precio, url) {
    const conexion = await fetch('http://localhost:3001/productos', {
        method: "POST",
        headers: {
            "Content-type": "application/json"
        },
        body: JSON.stringify({
            titulo: titulo,
            url: url,
            precio: precio
        })
    })
    const conexionConvertida = conexion.json();
    if (!conexion.ok) {
        throw new Error("Succedio un error al enviar el producto");
    }
    return conexionConvertida;
}

async function eliminarProducto(id) {
    const conexion = await fetch(`http://localhost:3001/productos/${id}`, {
        method: "DELETE",
        headers: {
            "Content-type": "application/json"
        }
    })
    conexionConvertida = conexion.json();
    if (!conexion.ok) {
        throw new Error("Ha ocurrido un error al eliminar el producto");
    }
    return conexionConvertida
}

//exportamos funciones
export const conexion = {
    listarProductos,
    crearProducto,
    eliminarProducto
}