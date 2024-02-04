let numbers = document.getElementsByClassName("btn-num")
let channels = document.getElementsByClassName("btn-chan")
let volumes = document.getElementsByClassName("btn-vol")
let screen = document.getElementById("screen")
let power = document.getElementById("power")

let encendido = false

let padNum = Array.from(numbers)



power.addEventListener("click", (e) => {
  if (!encendido) {
    power.classList.remove("btn-danger")
    power.classList.add("btn-success")
    encendido = true
    screen.classList.add("c1")
  } else {
    encendido = false
    console.log(encendido)
    power.classList.add("btn-danger")
    screen.classList.remove(screen.classList[screen.classList.length - 1])
    screen.classList.add("c0")
  }
})

padNum.map((button) => {
  button.addEventListener("click", (e) => {
    if (encendido == true) {
      screen.classList.remove(screen.classList[screen.classList.length - 1])
      screen.classList.add("c" + e.target.id.slice(-1))
    }
  })
})
