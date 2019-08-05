function mostrar()
{
var sexo;
var nota;
var promedio;
var i;
var acumulador = 0;
var notaBaja;
var sexoBajo;
var flag = 0;
var contador = 0;


    for (i = 1; i < 6; i++ )
    {
        nota = parseInt(prompt ("Ingrese nota entre 0/10: "));

        //while (nota < 0 || nota > 10 || isNan(nota))
        while (!(nota >= 0 && nota <= 10))
        {
        alert("No ingresó una nota valida");
        nota = parseInt(prompt("Reingrese la nota: "));
        }

        sexo = prompt("Ingrese sexo:").toLowerCase();
        
        //while (sexo != "f" && sexo != "m")
        //while (! (sexo =="f" || sexo == "m" || sexo == "M" || sexo== "F")
        while (!(sexo == "f" || sexo == "m"))
        {
             alert ("No es un sexo valido");
            sexo = prompt("Reeingrese el sexo:").toLowerCase();
        }
        //if(nota < notaBaja || i==0) sin usar Flag.
        if (nota < notaBaja || flag == 0)
             {
            notaBaja = nota;
             sexoBajo = sexo;
            flag = 1;

            }
        
        if (sexo == "m" && nota >= 6)
        {
            contador++;
        }

        acumulador = nota + acumulador;
    }

    promedio = acumulador / 5;

    
    document.write(" El promedio es: " + promedio + "<br>" +  "La nota mas baja es: " + notaBaja + " y es de sexo: " + sexoBajo + "<br>" + "Los varones cuya nota es mayor a 6: " + contador);
    //alert(" El promedio es: " + promedio + "\n La nota mas baja es: " + notaBaja + " y es de sexo: " + sexoBajo + "\n Los varones cuya nota es mayor a 5: " + V6);
}

