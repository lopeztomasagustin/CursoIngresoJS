function mostrar()
{


	var positivo = 0;
	var negativo = 1;
	var numero;
    var seguir;
	var contadorNegativo = 0;
	
do 
{

numero = parseInt(prompt("Ingrese un numero:"));
acumulador = acumulador + numero;
seguir = prompt("Quiere ingresar otro numero");

}
while (seguir == "si");





document.getElementById('suma').value=positivo;
document.getElementById('producto').value=negativo;

}//FIN DE LA FUNCIÓN