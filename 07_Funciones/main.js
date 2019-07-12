// function suma (a,b){
//     console.log(a + b)
// }
// suma()

// function resta (a,b){
//     return a - b
// }
// console.log(resta(resta(65,76),96))
// let a= prompt( "Ingresa el lado de tu cuadrado")

// function cuadrado (a){
//     return a * a
// }
// console.log(cuadrado(a))

// Otra forma de hacerlo JS6

// const area = (a) =>{
//     return a*a
// }

// console.log(area(9))

// const areat = () =>{
//     let a= prompt ("Define tu artura")
//     let b= prompt ("Define tu base")
//     return b*a /2
// }
// console.log(areat())

const operacion = () => {
    let a= prompt("define un valor");
    let b= prompt("define un valor");
    let c= prompt("define un valor");
    let d= prompt("define un valor");
    let e= prompt("define un valor");
    return ((a+b)-(c-d)) * e
}
console.log(operacion)