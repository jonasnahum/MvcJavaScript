$(function () {
    var strPersona = '{"nombre":"juan","edad": 45, "esMayorDeEdad": true, "calificaciones": [10, 9, 8.6] }';//json es un string que representa un objeto. un objeto representado en texto, esta serializado. en este caso el json tiene varios tipos de datos. hasta un array.
    var objPersona = $.parseJSON(strPersona);//para convertir de string a un objeto de javascript

    //var promedio = 
    var suma=0;//variable externa del for para que no la vaya iterando.
    for (var i = 0; i < objPersona.calificaciones.length; i++) {//en js si existe el for. el length en minuscula.
        suma += objPersona.calificaciones[i];//esto es igual a suma=suma+objPersona.calificaciones[i];
    }
    var promedio = suma / 3;
    alert(objPersona.nombre + " tiene promedio de " + promedio);

    var jsonPersonas = '[{"nombre":"juan"},{"nombre":"pedro"},{"nombre":"loLA"}]';//string que representa un array con varios objetos dentro.
    var objetoPersonas = $.parseJSON(jsonPersonas);//el string se convierte a objetos de java script.
    for (var i = 0; i < objetoPersonas.length; i++) {//se trabaja sobre el objeto de javascript.
        alert(objetoPersonas[i].nombre);
    }


    var empleado = {//se crea un objeto de javascript y se guarda en variable empleado.
        nombre: "juan",
        salario: 100,
        diasTrabajados: [1, 2, 3, 4, 5],
        mayorDeEdad: true
    };
    var strEmpleado = JSON.stringify(empleado);//ahora el objeto de java script se convierte a json, a string.
    alert(strEmpleado);
    //JSON.stringify(j);


    $.each(objetoPersonas, function (index, persona) {//each es como un foreach, se le pasa el array, luego una funcion que tiene el index que es la [i] y cada elemento en la lista.
        alert(persona.nombre);//lo que va iterar por cada elemento de la lista.
    });


    //delegado o callback es la variable que guarda un método, en este caso: despertar y dormir son dos parametros que reciben cada uno un metodo. asi, despertar y dormir en si son dos metodos que se guardan internamente en una variable.
    function Persona(despertar, dormir) {//es una clase que recibe 2 metodos. y los ejecuta.
        despertar();
        alert("trabaja");
        dormir();
    }

    var p = new Persona(function () {//se crea un instacia de Persona que en su constructor recibe 2 metodos, y se le mandan.
        alert("tender mi cama");
    }, function () {
        alert("destender mi cama");
    });


})