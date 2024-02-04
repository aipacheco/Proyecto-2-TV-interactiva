let numbers = document.getElementsByClassName("btn-num")
let screen = document.getElementById("screen")
let power = document.getElementById("power")
let volUp = document.getElementById("volUp")
let volDown = document.getElementById("volDown")
let chanUp = document.getElementById("chanUp")
let chanDown = document.getElementById("chanDown")
let canalActual = document.getElementById("canalActual")
let mute = document.getElementById("mute")
let mutear = document.getElementById("mutear")

let encendido = false
let muteado = false

let padNum = Array.from(numbers)

power.addEventListener("click", (e) => {
  if (!encendido) {
    power.classList.remove("btn-danger")
    power.classList.add("btn-success")
    encendido = true
    screen.classList.add("c1")
    canalActual.classList.remove("hidden")
    canalActual.innerHTML = 1
  } else {
    encendido = false
    power.classList.add("btn-danger")
    canalActual.classList.add("hidden")
    mutear.classList.add("hidden")
    screen.classList.remove(screen.classList[screen.classList.length - 1])
    screen.classList.add("c0")
  }
})

padNum.map((button) => {
  button.addEventListener("click", (e) => {
    if (encendido == true) {
      screen.classList.remove(screen.classList[screen.classList.length - 1])
      screen.classList.add("c" + e.target.id.slice(-1))
      canalActual.innerHTML = e.target.id.slice(-1)
    }
  })
})

mute.addEventListener("click" , (e) =>{
  if(encendido == true ){
    mutear.classList.remove("hidden")
    muteado = false
  }
  
})


