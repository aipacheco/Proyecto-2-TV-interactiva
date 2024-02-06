//variables del html que se van a usar
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
let volumen = document.getElementById("volume")
let netflix = document.getElementById("netflix")
let time = document.getElementById("time")

//variables booleanas para usar en interruptores
let encendido = false
let muteado = false
let netflixAndChill = false

//variable para manejar los diferentes timeouts y que no se pisen entre ellos
let timeout
let timeout

//convertimos numbers en un array para trabajar en el
let padNum = Array.from(numbers)

//función para añadir un 0 en los minutos del 1 al 9
const ADD_ZERO = (i) => {
  if (i < 10) {
    i = "0" + i
  }
  return i
}

//función para crear la hora actual
const HORA_ACTUAL = () => {
  let fecha = new Date()
  let hora = fecha.getHours()
  let minutos = ADD_ZERO(fecha.getMinutes())
  let resultado = `${hora}:${minutos}`
  return resultado
}

//eventos para el botón On/Off
power.addEventListener("click", (e) => {
  if (!encendido) {
    screen.classList.add("intro")
    power.classList.remove("btn-danger")
    power.classList.add("btn-success")
    //se setea un timeout para que la intro se vea 2 segundos y se anida otro dentro para que se elimine la info del canal a los 5 segundos
    setTimeout(() => {
      encendido = true
      time.innerHTML = HORA_ACTUAL()
      screen.classList.remove("intro")
      screen.classList.add("c1")
      canalActual.innerHTML = 1
      canalActual.classList.remove("hidden")
      time.classList.remove("hidden")
      setTimeout(() => {
        time.classList.add("hidden")
        canalActual.classList.add("hidden")
      }, 5000)
    }, 2000)
  } else {
    encendido = false
    power.classList.add("btn-danger")
    canalActual.classList.add("hidden")
    mutear.classList.add("hidden")
    time.classList.add("hidden")
    screen.classList.remove("netflix")
    screen.classList.remove(screen.classList[screen.classList.length - 1])
    screen.classList.add("c0")
    volumen.classList.add("hidden")
  }
})


//eventos para los botones numéricos
padNum.map((button) => {
  button.addEventListener("click", (e) => {
    if (encendido) {
      netflixAndChill = false
      screen.classList.remove("netflix")
      clearTimeout(timeout)
      canalActual.classList.remove("hidden")
      screen.classList.remove(screen.classList[screen.classList.length - 1])
      screen.classList.add("c" + e.target.id.slice(-1))
      canalActual.innerHTML = e.target.id.slice(-1)
      time.innerHTML = HORA_ACTUAL()
      time.classList.remove("hidden")
      timeout = setTimeout(() => {
        canalActual.classList.add("hidden")
        time.classList.add("hidden")
      }, 5000)
    }
  })
})

//eventos para el botón de mute
mute.addEventListener("click", (e) => {
  if (encendido) {
    if (!muteado) {
      mutear.classList.remove("hidden")
      muteado = true
      volumen.classList.add("hidden")
    } else {
      mutear.classList.add("hidden")
      muteado = false
    }
  }
})

//eventos para el botón de canal +
chanUp.addEventListener("click", (e) => {
  if (encendido && !netflixAndChill) {
    clearTimeout(timeout)
    canalActual.classList.remove("hidden")
    time.innerHTML = HORA_ACTUAL()
    time.classList.remove("hidden")
    let canalViejo = parseInt(canalActual.innerHTML)
    let canalArriba = canalViejo + 1
    timeout = setTimeout(() => {
      canalActual.classList.add("hidden")
      time.classList.add("hidden")
    }, 5000)

    if (canalArriba <= 9) {
      screen.classList.remove("c" + canalViejo)
      screen.classList.add("c" + canalArriba)
      canalActual.innerHTML = canalArriba
    } else {
      canalArriba = 1
      screen.classList.remove("c" + canalViejo)
      screen.classList.add("c" + canalArriba)
      canalActual.innerHTML = canalArriba
    }
  }
})

//eventos para el botón de canal -
chanDown.addEventListener("click", (e) => {
  if (encendido && !netflixAndChill) {
    clearTimeout(timeout)
    canalActual.classList.remove("hidden")
    time.innerHTML = HORA_ACTUAL()
    time.classList.remove("hidden")
    let canalAnterior = parseInt(canalActual.innerHTML)
    let canalAbajo = canalAnterior - 1
    timeout = setTimeout(() => {
      canalActual.classList.add("hidden")
      time.classList.add("hidden")
    }, 5000)

    if (canalAbajo >= 1) {
      screen.classList.remove("c" + canalAnterior)
      screen.classList.add("c" + canalAbajo)
      canalActual.innerHTML = canalAbajo
    } else {
      canalAbajo = 9
      screen.classList.remove("c" + canalAnterior)
      screen.classList.add("c" + canalAbajo)
      canalActual.innerHTML = canalAbajo
    }
  }
})

//eventos para el botón de volumen +
volUp.addEventListener("click", (e) => {
  let volumenActual = parseInt(volumen.innerHTML)
  if (encendido && !muteado) {
    if (volumenActual >= 1 && volumenActual < 30) {
      clearTimeout(timeout)
      volumen.classList.remove("hidden")
      volumenActual += 1
      volumen.innerHTML = volumenActual
      timeout = setTimeout(() => {
        volumen.classList.add("hidden")
      }, 5000)
    }
  } else if (encendido && muteado) {
    muteado = false
    mutear.classList.add("hidden")
    if (volumenActual >= 0 && volumenActual < 30) {
      clearTimeout(timeout)
      volumen.classList.remove("hidden")
      volumenActual += 1
      volumen.innerHTML = volumenActual
      timeout = setTimeout(() => {
        volumen.classList.add("hidden")
      }, 5000)
    }
  }
})

//eventos para el botón de volumen -
volDown.addEventListener("click", (e) => {
  if (encendido && !muteado) {
    clearTimeout(timeout)
    let volumenAhora = parseInt(volumen.innerHTML)
    if (volumenAhora <= 30 && volumenAhora >= 1) {
      volumen.classList.remove("hidden")
      volumenAhora -= 1
      volumen.innerHTML = volumenAhora
      timeout = setTimeout(() => {
        volumen.classList.add("hidden")
      }, 5000)
    }
    if (volumenAhora == 0) {
      mutear.classList.remove("hidden")
      muteado = true
    }
  }
})

//eventos para el botón de netflix
netflix.addEventListener("click", (e) => {
  if (encendido) {
    time.innerHTML = HORA_ACTUAL()
    time.classList.remove("hidden")
    setTimeout(() => {
      time.classList.add("hidden")
    }, 5000)
    canalActual.classList.add("hidden")
    screen.classList.add("netflix")
    netflixAndChill = true
  }
})
