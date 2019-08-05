function mostrar()
{
    var numero;
    var letra;
    var cantPares;
    var cantImpares;
    var ceros;
    var negativos;
    var positivos;
    var seguir;
    var numMax;
    var numMin;

    do{
        numero = parseInt(prompt("Ingrese un numero entre -100 y 100"));
        while (!(numero >= -100 && numero <= 100))
            {
                alert("No ingresó un numero valido");
                numero = parseInt(prompt("Reingrese el numero: "));
            }    
        letra = prompt("Ingrese una letra").toLowerCase();
            while (parseInt(letra))
            //while (letra!= ("A" <= letra && "Z" >= letra)||(letra >= "a" && "z" >= letra))
            {
                 switch(letra)
                    {
                    case "a":
                    case "b":
                    case "c":
                    case "d":
                    case "e":
                    case "f":
                    case "g":
                    case "h":
                    case "i":
                    case "j":
                    case "k":
                    case "l":
                    case "m":
                    case "n":
                    case "o":
                    case "p":
                    case "q":
                    case "r":
                    case "s":
                    case "t":
                    case "u":
                    case "v":
                    case "w":
                    case "x":
                    case "y":
                    case "z":
                        break;
                        }
                        letra = prompt ("No ingresó una letra valida").toLowerCase();
                     }
        seguir = prompt("¿Desea Continuar?").toLowerCase();
            while (!(seguir == "s" || seguir == "n"))
                {
                    seguir=prompt("Error. Para continuar S o N:").toLocaleLowerCase();
                }
              
    } while (seguir == "s");

    document.write (letra + "<br>" + (numero)) ;
}
