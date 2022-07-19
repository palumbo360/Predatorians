






let registroUsuario = document.getElementById("registroUsuario")
let usuario = document.getElementById("Inputusuario")
let Password = document.getElementById("InputPassword")
let dinero = document.getElementById("Inputdinero")



let usuarios = []

class Usuarios {
  constructor(usuario, Password, dinero) {
    this.usuario = usuario.toUpperCase()
    this.Password = Password
    this.dinero = parseInt(dinero)
  }
}

registroUsuario.onsubmit = (event) => validarAdmin(event)

  function validarAdmin(event) {
    event.preventDefault()
    let usuario = Inputusuario.value

    if (usuario === "admin")
    window.location.replace("http://127.0.0.1:5500/pages/admin.html");
    
  let Password = InputPassword.value
  let dinero = Inputdinero.value

  let cuenta = new Usuarios(usuario, Password, dinero)
  usuarios.push(cuenta)
  console.log(usuarios)
  registroUsuario.reset()
  localStorage.setItem("cuentaslocal", JSON.stringify(usuarios))
 
  }

  function listarUsuarios() {
    let cuentaslista = localStorage.getItem("cuentaslocal");
    if (cuentaslista !== null) {
      usuarios = JSON.parse(cuentaslista);
    }
  }


let registroItem = document.getElementById("registroItem")
let nombre = document.getElementById("Inputnombre")
let tipo = document.getElementById("Inputtipo")
let precio = document.getElementById("Inputprecio")
let temporada = document.getElementById("Inputtemporada")

let productos = []

class Producto {
  constructor(nombre, tipo, precio, temporada,) {
    this.nombre = nombre.toUpperCase()
    this.tipo = tipo
    this.precio = parseInt(precio)
    this.temporada = temporada
  }
}

registroItem.onsubmit = (event) => validarItem(event)


function validarItem(event) {
  event.preventDefault()
  let nombre = Inputnombre.value
  let tipo = Inputtipo.value
  let precio = Inputprecio.value
  let temporada = Inputtemporada.value
  

  let producto = new Producto(nombre, tipo, precio, temporada)
  productos.push(producto)
  console.log(productos)
  registroItem.reset()
  localStorage.setItem("itemslocal", JSON.stringify(productos))
}


function listarItems() {
  let item = localStorage.getItem("itenslocal");
  if (item !== null) {
    productos = JSON.parse(item);
  }
}
