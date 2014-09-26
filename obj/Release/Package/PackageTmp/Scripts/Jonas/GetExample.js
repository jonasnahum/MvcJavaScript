//$(function () { })//evento on document ready.
//$(document).ready(function () { });//es lo mismo que hacerle wrapper a document. y llamar su evento ready.

function obtenerSaludo() {//un metodo llamado obtenerSaludo.
    var url = $("#url").val();//el value de #url es un action saludoHtml y controler ajax. se guarda en variable privada url.
    var promise = $.ajax({//el promise es un objeto que ejecuta otro thread para obtener lo que este en el action del url. ajax recibe un objeto con la informacion de donde va a traer un resultado del servidor.
        url: url,
        type: "GET"
    });

    //el promise es un thread que tiene tres eventos
    //success/error/complete
    //success se ejecuta cuando todo salió bien
    //error se ejecuta cuando hubo un error
    //complete se ejecuta siempre independientemente del resultado

    promise.success(function (resultado) {//resultado es lo que viene del servidor una vez que termina el thread y es exitoso. es un evento.trae el return del accion. que se corresponde a la url que se le paso originalmente. a partir de(function es un delegado.
        $("div#content").append(resultado);//div#content es un div.
    });

    promise.error(function (a, b, c) {
        console.log(a);
        console.log(b);
        console.log(c);
    });
}

$(function () {//este es el OndocumentReady Event.
    $("#saludo").click(function () {//si le dan click al boton #saludo.
        obtenerSaludo();//se ejecuta el metodo obtenerSaludo.
    });
})