/*Debemos lograr tomar Los numeros por ID ,
transformarlos a enteros (parseInt),realizar la operación correcta y 
mostrar el resto entre el dividendo y el divisor.
ej.: "El resto es 0 ."*/
function SacarResto()
{
    var nro1;
    var nro2;
    var resultado

    nro1 = document.getElementById("numeroDividendo").value;
    nro1= parseInt (nro1);

    nro2 = document.getElementById("numeroDivisor").value;
    nro2= parseInt (nro2);
    
    resultado= (nro1 % nro2);

    // resultado= (nro1 % nro2)-no valido por que lo uqe se busca es el resto no la division
    // para sacar el resto se usa %
    
    alert ("El resultado es " + resultado);
	
}
