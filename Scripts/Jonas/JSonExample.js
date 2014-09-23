$(function () {
    var strPersona = '{"nombre":"juan","edad": 45, "esMayorDeEdad": true, "calificaciones": [10, 9, 8.6] }';//json es un string que representa un objeto. un objeto representado en texto, esta serializado.
    var objPersona = $.parseJSON(strPersona);//para convertir de string a un objeto de javascript

    //var promedio = 
    var suma=0;
    for (var i = 0; i < objPersona.calificaciones.length; i++) {
        suma += objPersona.calificaciones[i];
    }
    var promedio = suma / 3;
    alert(objPersona.nombre + " tiene promedio de " + promedio);

    var jsonPersonas = '[{"nombre":"juan"},{"nombre":"pedro"},{"nombre":"loLA"}]';//string.
    var objetoPersonas = $.parseJSON(jsonPersonas);//el string se convierte a objetos de java script.
    for (var i = 0; i < objetoPersonas.length; i++) {//se trabaja sobre el objeto de javascript.
        alert(objetoPersonas[i].nombre);
    }


    var empleado = {
        nombre: "juan",
        salario: 100,
        diasTrabajados: [1, 2, 3, 4, 5],
        mayorDeEdad: true
    };
    var strEmpleado = JSON.stringify(empleado);
    alert(strEmpleado);
    //JSON.stringify(j);


    $.each(objetoPersonas, function (index, persona) {//each es como un foreach, se le pasa el array, luego una funcion que tiene el index que es la [i] y cada elemento en la lista.
        alert(persona.nombre);
    });


    //delegado o callback es la variable que guarda un método, en este caso: despertar y dormir.
    function Persona(despertar, dormir) {
        despertar();
        alert("trabaja");
        dormir();
    }

    var p = new Persona(function () {
        alert("tender mi cama");
    }, function () {
        alert("destender mi cama");
    });


})