let numbers = document.getElementsByClassName("btn-num")
let channels = document.getElementsByClassName("btn-chan")
let volumes = document.getElementsByClassName("btn-vol")
let screen = document.getElementById("screen")

let encendido = false

let padNum = Array.from(numbers)

let power = document.getElementById("power")

power.addEventListener("click", (e) => {
  if (!encendido) {
    //let encendido = false
    power.classList.remove("btn-danger")
    encendido = true
    //console.log(encendido, "en el boton")
    encendido
      ? padNum.map((button) => {
          button.addEventListener("click", (e) => {
            console.log(button.id)
            screen.classList.remove(
              screen.classList[screen.classList.length - 1]
            )
            screen.classList.add("c" + e.target.id.slice(-1))
          })
        })
      : console.log("no debería cambiar de canal")
  } else {
    encendido = false
    power.classList.add("btn-danger")
    //hacer que la pantalla vuelva a negro
  }
})

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
