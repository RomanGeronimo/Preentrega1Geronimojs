function SolNombre(){
    let NombreIng = prompt("Bienvenido a la academia, Por Favor ingrese su nombre")
    console.log ("Bienvenido " + NombreIng)
}
SolNombre();

let edad = parseInt(prompt("bienvenido  a continuacion ingresa tu edad"))
do{
    if (edad >= 14 && edad < 70  ){
        alert("cumples con la edad para entrenar en la academia")

    }else alert(" por desgracia no cumples con la edad requerida para realizar actividades dentro de la academia,por favor ponte en contacto con el siguiente nro 0000-001(instructora loan)")

}while(edad < 0);