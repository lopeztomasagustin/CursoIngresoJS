function mostrar()
{

	var flag = 0;
	var numero;
	var maximo;
	var minimo;
	var seguir;

	// declarar variables
	
do{

	numero = parseInt(prompt("Ingrese unnumero:"));

if(numero > maximo || flag == 0 ) {
	maximo = numero;

}

if (numero < minimo || flag == 0 ) {
	minimo = numero;
	flag = 1;
} 

seguir = prompt("Quiere ingresar otro numero?");
}




while(seguir == "si");


document.getElementById("maximo").value = maximo;
document.getElementById("minimo").value = minimo;




}//FIN DE LA FUNCIÓN