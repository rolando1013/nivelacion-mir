function max(arreglo) {

    if (arreglo.length > 0) {

        let valor = 0
        for (let i = 0; i < arreglo.length; i++) {
            if (valor < arreglo[i]) {
                valor = arreglo[i]
            }
        }
        return valor
    }
}
console.log(max([1, 3, 2]))
console.log(max([10, 9, 8, 7, 6, 5, 4]))
console.log(max([]))