


let power = document.getElementById("power")

let encendido = false
power.addEventListener("click" ,(e)=>{
    power.classList.remove("btn-danger")
    encendido = true
    console.log(encendido, "en el boton")
    encendido ? padNum.map(
        button =>{
            button.addEventListener("click", (e) =>{
                console.log(button.id)
            screen.classList.remove(screen.classList[screen.classList.length - 1])
            screen.classList.add("c" + e.target.id.slice(-1))    
            })
        }
    )
    : null

})

console.log(encendido)

let numbers = document.getElementsByClassName("btn-num")
let channels = document.getElementsByClassName("btn-chan")
let volumes = document.getElementsByClassName("btn-vol")
let screen = document.getElementById("screen")


let padNum = Array.from(numbers)

// encendido ? padNum.map(
//     button =>{
//         button.addEventListener("click", (e) =>{
//             console.log(button.id)
//         screen.classList.remove(screen.classList[screen.classList.length - 1])
//         screen.classList.add("c" + e.target.id.slice(-1))    
//         })
//     }
// )
// : null

