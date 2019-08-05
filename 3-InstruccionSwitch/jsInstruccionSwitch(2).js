function mostrar()
{
//tomo la edad  
var mes = document.getElementById('mes').value;

switch (mes)
{
    case "Enero":
    case "Febrero":
    case "Marzo":
    case "Abril":
    case "Mayo":
    case "Junio":
        alert ("Falta para el iniverno");
    break;

    case "Julio":
    case "Agosto":
        alert ("Estamos en invierno")
    break;

    case "Septiembre":
    case "Octubre":
    case "Noviembre":
    case "Diciembre":
        alert ("Ya paso el frio fierita!!!!")
    break;
    
}




}//FIN DE LA FUNCIÓN