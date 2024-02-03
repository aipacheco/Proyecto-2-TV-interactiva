let numbers = document.getElementsByClassName("btn-num")
let channels = document.getElementsByClassName("btn-chan")
let volumes = document.getElementsByClassName("btn-vol")
let screen = document.getElementById("screen")

let encendido = false

let padNum = Array.from(numbers)

let power = document.getElementById("power")

power.addEventListener("click", (e) => {
  if (!encendido) {
    power.classList.remove("btn-danger")
    encendido = true
    //console.log(encendido, "en el boton")
 
      
  } else {
   encendido = false
   console.log(encendido)
    power.classList.add("btn-danger")
    //hacer que la pantalla vuelva a negro
  }
})

