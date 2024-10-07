// REQUERIMIENTO 01
// Ejercicio 8
var numero = -8;

// Caso de Error con Let
// if (numero < 0) {
//     let va = numero * -1
// } else {
//     let va = numero
// }
// console.log(va);
// Fin de Error con Let

// Caso de Error con Const
// if (numero < 0) {
//     const va = numero * -1
// } else {
//     const va = numero
// }
// console.log(va);
// Fin de Error con Const

// Caso de Éxito con Var
// console.log("Mostrar", va);
// if (numero < 0) {
//     var va = numero * -1
// } else {
//     var va = numero
// }
// console.log(va);
// Fin de Éxito con Var

// Caso de Éxito con Var
// function valorAbsoluto(){
//     if (numero < 0) {
//         var va = numero * -1
//     } else {
//         var va = numero
//     }
// }
// console.log("va", va);
// Fin de Éxito con Var


// REQUERIMIENTO 02
// Crear una función utilizando el formato tradicional con la palabra clave function, y luego
// volver a escribirla utilizando la sintaxis de función de flecha, y guardando la declaración
// dentro de una variable. La función debe recibir, al menos, dos argumentos.

// Opción con formato tradicional
// function mostrarPositivos(n1, n2) {
//     if (n1 > 0 && n2 > 0) {
//         return "Número01: "+n1+" Número02: "+n2;
//     } else {
//         return "Ambos números deben ser positivos"
//     }
// }

// Primera opción con formato flecha o Arrow Function
// const mostrarPositivos = (n1, n2) => {
//     if (n1 > 0 && n2 > 0) {
//         return "Número01: "+n1+" Número02: "+n2;
//     } else {
//         return "Ambos números deben ser positivos"
//     }
// }

// Segunda opción con formato flecha o Arrow Function
// const mostrarPositivos = (n1, n2) => (n1 > 0 && n2 > 0) ? "Número01: "+n1+" Número02: "+n2 : "Ambos números deben ser positivos"

// let num01 = 6;
// let num02 = 9;
// console.log(mostrarPositivos(num01, num02))


// REQUERIMIENTO 03
// Crear una función similar a la del ejercicio, utilizando esta vez un objeto con
// características de algún animal, que contenga, al menos, cinco pares de llave - valor.
// Utilizar template literals para escribir un texto empleando los valores del objeto, y
// Destructuring para definir los valores del objeto dentro de la función.

const datosAnimal = ({especie, raza, color}) => {
    return {
        especie,
        raza,
        color,
        descripcion: `Especie: ${especie}, Raza: ${raza}, Color; ${color}`
    }
}

const animal = {
    especie : "Perro",
    raza : "Pastor Alemán",
    color : "Negro",
    anios : 2,
    tamanio : "Grande"
}
console.log(datosAnimal(animal))