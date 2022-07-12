

let fomulario1 = document.getElementById("fomulario1")
let usuario = document.getElementById("Inputusuario")
let Password = document.getElementById("InputPassword")
let dinero = document.getElementById("Inputdinero")

let usuarios = []

class Usuarios {
  constructor(usuario, Password, dinero) {
    this.usuario = usuario.toUpperCase()
    this.Password = Password
    this.dinero = dinero
  }
}

fomulario1.onsubmit = (event) => validarFormulario(event)


function validarFormulario(event) {
  event.preventDefault()
  let usuario = Inputusuario.value
  let Password = InputPassword.value
  let dinero = Inputdinero.value

  let cuenta = new Usuarios(usuario, Password, dinero)
  usuarios.push(cuenta)
  console.log(usuarios)
  fomulario1.reset()
}



let formulario2 = document.getElementById("formulario2")
let nombre = document.getElementById("Inputnombre")
let tipo = document.getElementById("Inputtipo")
let precio = document.getElementById("Inputprecio")
let temporada = document.getElementById("Inputtemporada")

let productos = []

class Producto {
  constructor(nombre, tipo, precio, temporada,) {
    this.nombre = nombre.toUpperCase()
    this.tipo = tipo
    this.precio = precio
    this.temporada = temporada
  }
}

fomulario2.onsubmit = (event) => validarFormulario2(event)


function validarFormulario2(event) {
  event.preventDefault()
  let nombre = Inputnombre.value
  let tipo = Inputtipo.value
  let precio = Inputprecio.value
  let temporada = Inputtemporada.value
  

  let producto = new Producto(nombre, tipo, precio, temporada)
  productos.push(producto)
  console.log(productos)
  formulario2.reset()
}

