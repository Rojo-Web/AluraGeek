async function listarProductos() {
    const conexion = await fetch('http://localhost:3001/productos')
    const conexionConvertida = await conexion.json();

    return conexionConvertida
}



//exportamos funciones
export const conexion = {
    listarProductos
}