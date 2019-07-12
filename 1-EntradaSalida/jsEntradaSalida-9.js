/*Debemos lograr tomar el importe por ID ,
transformarlo a entero (parseInt), luego
mostrar el importe con un aumento del 10 %
en el cuadro de texto "RESULTADO".*/
function mostrarAumento()
{
    var sueldo;
    var porcentaje;
    var aumento;
    
        sueldo = document.getElementById("sueldo").value;
            sueldo = parseInt(sueldo);

        porcentaje=((10*sueldo)/100);
            parseInt(porcentaje);

        aumento = (porcentaje+sueldo); 
        document.getElementById("resultado").value = aumento;



}
