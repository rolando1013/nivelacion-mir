const pedro = {
    nombre: "Pedro Perez",
    edad: 30,
    activo: true,
    hobbies: ["programar", "squash", "piano"]
}
pedro.estatura = 1.8
delete pedro.activo
    // console.log(pedro)

for (const key in pedro) {
    result = key.concat(":", pedro[key]);
    console.log(result);
}

pedro.saluda = function saluda() {
    console.log("Hola, me llamo " + this.nombre)
}
pedro.saluda()
    // console.log(pedro)