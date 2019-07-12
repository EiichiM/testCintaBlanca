//if (*condicion*){
//    bloque de codigo en el caso de que se cumplala condicion
// // }else{
//     bloque de codigo en caso de no se cumpla la condicion
// }

// if(condicion){
//     console.log(":D")
// }else {
//     console.log(":C")
// }
// if("computadora" === "Computadora"){
//     console.log("son identicos")
// }else{
//     console.log("Algo anda mal")
// }
// let edad = prompt ("tu fecha de nacimiento")
//     Number(edad)
// let ano =2019 - edad
// console.log(ano)

// if(edad <= 18){
//     console.log("NO PUEDE ENTRAR")
// }else{
//     console.log("ADELANTE")
// }

// let num = prompt("ingresa un numero")
// Number(num)
// if(num % 2 === 0){
//     console.log(num, "Es Par")
// }else{
//     console.log(num, "Es Inpar")
// }

let player1 = prompt("Elige: piedra, papel o tijeras")
let player2 = prompt("Elige: piedra, papel o tijeras")

if(player1 === player2){
    console.log("es un empate")
}else if(player1 === "piedra" && player2 === "tijeras"){
    console.log("Gana Player 1")
}else if(player1 === "tijeras" && player2 === "piedra"){
    console.log("Gana Player 2")
}else if(player1 === "papel" && player2 === "piedra"){
    console.log("Gana Player 1")
}else if(player1 === "piedra" && player2 === "papel"){
    console.log("Gana Player 2")
}else if(player1 === "tijeras" && player2 === "papel"){
    console.log("Gana Player 1")
}else if(player1 === "papel" && player2 === "tijeras"){
    console.log("Gana Player 2")
}else {
    console.log("No entendi")
}