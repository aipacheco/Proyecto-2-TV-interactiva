let power = document.getElementById("power")

console.log(power)

let numbers = document.getElementsByClassName("btn-num")
let channels = document.getElementsByClassName("btn-chan")
let volumes = document.getElementsByClassName("btn-vol")
let screen = document.getElementById("screen")


let padNum = Array.from(numbers)

padNum.map(
    button =>{
        button.addEventListener("click", (e) =>{
            console.log(button.id)
        screen.classList.remove(screen.classList[screen.classList.length - 1])
        screen.classList.add("c" + )    
        })
    }
)



