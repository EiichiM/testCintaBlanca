// let nombre = prompt ("Ingresa tu nombre")
// let cumpreaños = prompt ("Tu cumpleaños")
// let correo = prompt (" Ingresa tu correo")

// console.log(nombre)
// console.log(cumpreaños)
// console.log(correo)

// let num1= prompt( "Ingresa tu fecha")
// let num2= 2019

// let edad = num2 - num1
// console.log(edad)


// let nacimiento = prompt ("ingresa tu año de nacimiento")
// Number(nacimiento)
// let edad =2019 - nacimiento
// console.log(edad)

// variables tipo arreglo
// let arreglo = [ "perro", "gato", "Rana"]

// let persona = ["nombre", "correo", "telefono" ]
// Number(telefono)

// let zoo = ["perro", "gato", "jirafa", "rana", "cebra", "obeja", "panda", "leon", "tortuga", "pez"]

// console.log(zoo[5], zoo[9])

// zoo.pop()

// zoo[9]= "pajaro"

// zoo.push("tigre","tiburon")

// zoo.slice

// console.log(zoo)

// let numeros = [1,2,3,4,5,6]
// console.log(numeros)

// numeros.splice(0,1)
// console.log(numeros)

// let objeto = {
//     nombre: "eiichi",
//     direccion: "portales",
//     musica: "pop",
//     telefono: "5527322661",
//     libros: ["La biblia", "el codigo D"],
//     peliculas: {
//         terror: "Anabelle"
//         accion:["rp","hp"]
//     }


// }
// console.log(objeto)

let objeto = {
    Nombre:"Peter",
    Direccion:"Mexico",
    Correo:"tlamt@gmail.com",
    Telefono:"5527322661",
    viajes: {
        internacionales: ["bancog", "isrrael", "pakistan"
        ],
        nacionales: ["silao", "lagunilla", "la chingada"
        ]
    },
    musica: ["hip-hop", "rap", "pop"],
    peliculas:{
        terror:["Anabelle", "Conojuro", "exsorcista"],
        accion:["rp", "hp"],
        Romance:["the notebook", "tu y yo", "la pasion de cristo"],
    },

}

console.log(objeto.peliculas.Romance[2])
console.log(objeto.viajes.nacionales[2])
console.log(objeto.musica[2])