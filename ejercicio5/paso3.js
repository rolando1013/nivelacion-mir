function maxIndex(arreglo) {

    if (arreglo.length > 0) {

        let valor = 0;
        let indice = 0

        for (let i = 0; i < arreglo.length; i++) {
            if (valor < arreglo[i]) {
                valor = arreglo[i]
                indice = i
            }
        }
        return indice
    } else {
        return -1
    }
}
console.log(maxIndex([1, 3, 2]))
console.log(maxIndex([10, 9, 8, 7, 6, 5, 4]))
console.log(maxIndex([]))