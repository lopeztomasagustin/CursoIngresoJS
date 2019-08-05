function mostrar()
{
var contador = 0;
var acumulador = 0;
var numero;
var seguir = "si";

while (seguir == "si")
{
numero = parseInt(prompt("Ingrese un numero:"));
acumulador = acumulador + numero;
contador++;
seguir = prompt("Quiere ingresar otro numero");
}

document.getElementById("suma").value = acumulador;
document.getElementById("promedio").value = acumulador / contador;
}//FIN DE LA FUNCIÓN