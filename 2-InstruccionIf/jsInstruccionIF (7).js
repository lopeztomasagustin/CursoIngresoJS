function mostrar()
{
//tomo la edad  
    var edad;
    var estadocivil;

        edad = document.getElementById("edad").value;
            parseInt (edad)
        
        estadocivil = document.getElementById("estadoCivil").value;

        if (edad < 18 )            
            {
                if (estadocivil != "Soltero" )
                    {
                    alert ("Es muy pequeño para NO ser soltero");
                    }
            }



	


}//FIN DE LA FUNCIÓN