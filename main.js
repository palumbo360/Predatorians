

class item{
    constructor(nombre, tipo, precio, temporada, Pj) {
    this.nombre = nombre;
    this.tipo = tipo;
    this.precio = precio;
    this.temporada = temporada;
    this.Pj = Pj;

   
  }
}


function agregarItem(){
  let numeroItem = parseInt(prompt("cuantos items vas a ingresar"))
  let items = []

  for (let index = 0; index < numeroItem; index++){
    let nombre = prompt("ingrese nombre de item")
    let tipo = prompt("ingrese tipo de item : \n skynArma \n skynPj \n skynCaballo \n objetos \n cajasDeArtilleria")
    let precio = parseInt(prompt("ingrese precio en soberanos"))
    let temporada = parseInt(prompt("ingrese numero de temporada \n1 \n2 \n3 \n4"))
    let pj = String(prompt("ingrse si el item es usado por el pj \nverdadero \nfalso"))


    let itemAIngresar= new item(nombre, tipo, precio, temporada, pj)
    items.push(itemAIngresar)
  }
  console.log(items)
}

function main(){
  agregarItem()
}

main()