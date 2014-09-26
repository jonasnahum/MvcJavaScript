//$(function () { })//evento on document ready.
//$(document).ready(function () { });

function obtenerSaludo() {//metodo que sirve para obtener los valores de la vista y guardarlos en variables
    var url = $("#url").val();//el value de url es @Url.Action("ObtenerSaludo","Ajax")
    var nombre = $("#nombre").val();
    var edad = $("#edad").val();

    var promise = $.ajax({//el promise es un objeto que ejecuta otro thread para obtener lo que este en el action del url. ajax recibe un objeto con la informacion de donde va a traer un resultado del servidor osea el return del accion.
        url: url,
        type: "GET",
        dataType: 'json',
        data: { nombre: nombre, edad: edad }// los parametros que se deben corresponder con los que hay en el accion.nombre:nombre el primero se refiere al action y el segundo a la variable local.
    });

    //var promise = $.ajax({//el promise es un objeto que ejecuta otro thread para obtener lo que este en el action del url. ajax recibe un objeto con la informacion de donde va a traer un resultado del servidor osea el return del accion.
    //    url: url,
    //    type: "POST",//se cambia por post
    //    data: { Nombre: nombre, Edad: edad }//los nombres de las propiedades deben corresponder a las propiedades del modelo.en la carpeta Models.Persona.
    //});

    //var promise = $.get(//el promise es un objeto que ejecuta otro thread para obtener lo que este en el action del url. ajax recibe un objeto con la informacion de donde va a traer un resultado del servidor osea el return del accion.
    //    url,
    //    {nombre: nombre, edad: edad}//estos propiedades son los parametros que se deben corresponder con los que hay en el accion.
    //);

    //var promise = $.post(//el promise es un objeto que ejecuta otro thread para obtener lo que este en el action del url. ajax recibe un objeto con la informacion de donde va a traer un resultado del servidor osea el return del accion.
    //    url,
    //    { Nombre: nombre, Edad: edad }//estos propiedades son los parametros que se deben corresponder con los que hay en el accion y las propiedades en el modelo.
    //);

    //el promise es un thread que tiene tres eventos
    //success/error/complete
    //success se ejecuta cuando todo salió bien
    //error se ejecuta cuando hubo un error
    //complete se ejecuta siempre independientemente del resultado


    promise.success(function (objPersona) {//ahora el return del accion que esta en el url regresa un objeto con propiedades llamado objPersona. se pone entre() porque es un evento success.
        var contenido = "hola " + objPersona.nombre + " " + "tu tienes " + objPersona.edad + " años";
        $("div#content").html("<p>" + contenido +"</p>");//imprimirlo en un div.html remplaza lo que hay adentro del div. y append lo va sumando.
    });

    promise.error(function (a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    });
}

$(function () {//onDocument Ready.
    $("#saludo").click(function () {
        obtenerSaludo();
    });
})