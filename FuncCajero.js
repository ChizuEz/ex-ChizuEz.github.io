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

function Consultar() {
  var SaldoMali = cuentas[0].saldo
  document.getElementById("C1").value=(SaldoMali + 0)
}


function Depositar() {
  var CantidadIng = parseInt(document.getElementById("Cant").value)
  var SaldoMali = cuentas[0].saldo
  document.getElementById("C1").value=(CantidadIng + SaldoMali)
}

function Retirar() {
  var CantidadRet = parseInt(document.getElementById("Cant2").value)
  var SaldoMali = cuentas[0].saldo
  document.getElementById("C1").value=(SaldoMali - CantidadRet)
}