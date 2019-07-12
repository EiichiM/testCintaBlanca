// let etiqueta = document.getElementById("etiqueta")
// console.log(etiqueta)
// let text = document.getElementById("text")
// console.log(text)
// let boton = document.getElementById("boton")
// console.log(boton)
// let input = document.getElementById("input")
// console.log(input)
// let text2 = document.getElementById("text2")
// console.log(text2)

// const cambiar = () => {

//     etiqueta.innerHTML = "Es un nuevo saludo"
//     text.innerHTML = "New text"

// }

// const texto = () => {

//     let usuario = input.value
//     text2.innerHTML = usuario

// }

// boton.addEventListener("click", texto)
// boton.addEventListener("click", cambiar)


// // boton.addEventListener("click", cambiar)

// // const pass = () => {
// //     let contraseña = prompt("escribe tu contraseña")
// //     let resultado = (" ")
// //     const passw = ("gatitos13")
// //     if (contraseña === passw) {
// //         resultado = ("Bienvenido")
// //         console.log("correcto")
// //         return resultado
// //     } else (resultado = ("vuelve a intetarlo"))

// //     return resultado
// // }
// // pass()

let nombre = document.getElementById("name")
let telefono = document.getElementById("num")
let pizza = document.getElementById("piz")
// console.log(nombre, telefono, pizza)
let p = document.getElementById("contenido") 
let p2 = document.getElementById("contenido2") 
let p3 = document.getElementById("contenido3") 
let card= document.getElementById("card")
let bonton = document.getElementById("click")
const ingresa = () => {
    
    let text= nombre.value
    let text1= pizza.value
    let text2= telefono.value
    let res= text1.toUpperCase()
    p.innerHTML=text
    // p2.innerHTML=text1
    p3.innerHTML=text2
    card.classList.remove("desaparecer")
    if(res === "SI" ){
        let resutado= ":)"
        p2.innerHTML= resutado
    }else if(res === "NO"){
        let resultado2 = ":("
        p2.innerHTML = resultado2
    } else (p2.innerHTML === "NO ES LO QUE PEDI")
}
bonton.addEventListener("click", ingresa);

