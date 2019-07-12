function mostrar()
{
//tomo la edad  
    var edad

        edad = document.getElementById("edad").value;
        parseInt (edad)

            if (edad >= 18) 
                {
                    alert ("Es mayor de edad");
                }

            if (edad <= 12)
            {
                alert ("Es un niño");
            }

            if (edad >=13 && edad <= 17)
                {
                    alert ("Es un adolescente");
                }

}//FIN DE LA FUNCIÓN