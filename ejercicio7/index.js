const receta = {

}

receta.nombre = "Sandwich"
receta.ingredientes = []
receta.ingredientes.push({ nombre: "Pan", cantidad: 2 })
receta.ingredientes.push({ nombre: "Queso", cantidad: 1 })
console.log(receta)
console.log(receta.ingredientes[0].nombre)
let resultado = 0

for (let i = 0; i < receta.ingredientes.length; i++) {
    resultado += receta.ingredientes[i].cantidad
}
console.log("Cantidad de ingredientes: " + resultado)