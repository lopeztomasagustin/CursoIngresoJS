/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resulto por medio de "ALERT"
ej.: "la Resta es 750"*/ 
function sumar()
{	
    var nro1;
    var nro2;
    var resultado;

    nro1 = document.getElementById("numeroUno").value;
    nro2 = document.getElementById("numeroDos").value;

    nro1 = parseInt (nro1);
    nro2 = parseInt (nro2);

    
    resultado = (nro1 + nro2);

    alert (resultado); 

}

function restar()
{
    nro1 = document.getElementById("numeroUno").value;
    nro2 = document.getElementById("numeroDos").value;

    nro1 = parseInt (nro1);
    nro2 = parseInt (nro2);
    resultado = (nro1 - nro2);

    alert (resultado); 


	
}

function multiplicar()
{ 
    
    nro1 = document.getElementById("numeroUno").value;
    nro2 = document.getElementById("numeroDos").value;

    nro1 = parseInt (nro1);
    nro2 = parseInt (nro2);
    resultado = (nro1 * nro2);

    alert (resultado); 
	
}

function dividir()
{
    nro1 = document.getElementById("numeroUno").value;
    nro2 = document.getElementById("numeroDos").value;

    nro1 = parseInt (nro1);
    nro2 = parseInt (nro2);
    resultado = (nro1 / nro2);

    alert (resultado); 
	
}

