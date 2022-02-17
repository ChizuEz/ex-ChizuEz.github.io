var cuentas = [
  { nombre: "Mali", saldo: 200 },
  { nombre: "Gera", saldo: 290 },
  { nombre: "Maui", saldo: 67 }
]


function login(form) {
  if (form.c.value == "9245") {
    location="SesionMali.html"
  }else {
    alert("¡Por favor ingrese la contraseña correcta!")
  }
}

function login2(form) {
  if (form.d.value == "0001") {
    location="SesionGera.html"
  }else {
    alert("¡Por favor ingrese la contraseña correcta!")
  }
}

function login3(form) {
  if (form.e.value == "0783") {
    location="SesionMaui.html"
  }else {
    alert("¡Por favor ingrese la contraseña correcta!")
  }
}


//FUNCIONES DE MALI EXCLUSIVAS

function Consultar() {
  var CantidadTotal = parseInt(document.getElementById("C1").value)
  document.getElementById("C1").value=(CantidadTotal)
}


function Depositar() {
  var CantidadIng = parseInt(document.getElementById("Cant").value)
  var CantidadTotal = parseInt(document.getElementById("C1").value)
  var CantidadSuma = CantidadIng + CantidadTotal
  var contador = 0
  while (CantidadSuma <= 990) {
  document.getElementById("C1").value=(CantidadIng + CantidadTotal)
  CantidadTotal.push(contador++)
  }
}

function Retirar() {
  var CantidadRet = parseInt(document.getElementById("Cant2").value)
  var CantidadTotal = parseInt(document.getElementById("C1").value)
  var CantidadResta = CantidadTotal - CantidadRet
  var contador = 0
  while (CantidadResta >= 10) {
  document.getElementById("C1").value=(CantidadTotal - CantidadRet)
  CantidadTotal.push(contador++)
  }
}

//FIN DE LAS FUNCIONES EXCLUSIVAS DE MALI


//FUNCIONES EXCLUSIVAS DE GERA

function Consultar2() {
  var CantidadTotal = parseInt(document.getElementById("C1").value)
  document.getElementById("C1").value=(CantidadTotal)
}


function Depositar2() {
  var CantidadIng = parseInt(document.getElementById("Cant").value)
  var CantidadTotal = parseInt(document.getElementById("C1").value)
  var CantidadSuma = CantidadIng + CantidadTotal
  var contador = 0
  while (CantidadSuma <= 990) {
  document.getElementById("C1").value=(CantidadIng + CantidadTotal)
  CantidadTotal.push(contador++)
  }
}

function Retirar2() {
  var CantidadRet = parseInt(document.getElementById("Cant2").value)
  var CantidadTotal = parseInt(document.getElementById("C1").value)
  var CantidadResta = CantidadTotal - CantidadRet
  var contador = 0
  while (CantidadResta >= 10) {
  document.getElementById("C1").value=(CantidadTotal - CantidadRet)
  CantidadTotal.push(contador++)
  }
}

//FIN DE LAS FUNCIONES EXCLUSIVAS DE GERA

//FUNCIONES EXCLUSIVAS DE MAUI

function Consultar3() {
  var CantidadTotal = parseInt(document.getElementById("C1").value)
  document.getElementById("C1").value=(CantidadTotal)
}


function Depositar3() {
  var CantidadIng = parseInt(document.getElementById("Cant").value)
  var CantidadTotal = parseInt(document.getElementById("C1").value)
  var CantidadSuma = CantidadIng + CantidadTotal
  var contador = 0
  while (CantidadSuma <= 990) {
  document.getElementById("C1").value=(CantidadIng + CantidadTotal)
  CantidadTotal.push(contador++)
  }
}

function Retirar3() {
  var CantidadRet = parseInt(document.getElementById("Cant2").value)
  var CantidadTotal = parseInt(document.getElementById("C1").value)
  var CantidadResta = CantidadTotal - CantidadRet
  var contador = 0
  while (CantidadResta >= 1o0) {
  document.getElementById("C1").value=(CantidadTotal - CantidadRet)
  CantidadTotal.push(contador++)
  }
}
  //FIN DE LAS FUNCIONES EXCLUSIVAS DE MAUI