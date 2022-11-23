function join(arreglo) {

    let valor = ""

    for (let i = 0; i < arreglo.length; i++) {

        if (i < arreglo.length - 1) {
            valor += arreglo[i].concat(" ")
        } else {
            valor += arreglo[i]
        }
    }
    return '"' + valor + '"'

}

console.log(join(["Hola", "Mundo"]))
console.log(join(["Make", "It", "Real"]))
console.log(join([]))