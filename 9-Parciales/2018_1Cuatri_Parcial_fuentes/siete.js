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
var V6 = 0;


    for (i = 1; i < 6; i++ )
    {

        nota = parseInt(prompt ("Ingrese nota: "));

        while (nota < 0 || nota > 10)
        {
        alert("No es una nota valida");
        nota = parseInt(prompt("Reingrese nota: "));
        }

        sexo = prompt("Ingrese sexo: f o m");

        while (sexo != "f" && sexo != "m")
        {
             alert ("No es un sexo valido");
            sexo = prompt("Reeingrese sexo: f o m");
        }

        if (nota < notaBaja || flag == 0)
             {
            notaBaja = nota;
             sexoBajo = sexo;
            flag = 1;

            }

        if (sexo == "m" && nota >= 6)
        {
            V6++;
        }

    acumulador = nota + acumulador;
    }

    promedio = acumulador / 5;

    alert(" El promedio es: " + promedio + "\n La nota mas baja es: " + notaBaja + "\n Su sexo es: " + sexoBajo + "\n Los varones cuya nota es mayor a 5: " + V6);
}

