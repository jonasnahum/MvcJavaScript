function escribirLog(texto) {//un metodo que a diferencia de c#, se escribe con minuscula.sirve para agregar texto a al div que esta en html.
    var div = $("#eventosLog");//se hace wrapper a quien tenga el Id eventosLog en el doc Html, que en este caso es un div vacio, este wrapper se guarda en la variable div.

    if (div.html() != "") {//los objetos wrapper tiene metodo html que regresa un texto con el contenido. en este caso si tiene algo, entra el if.
        div.append("<br />");//agregar linea en blanco
    }
    div.append(texto);//agregar texto a div.
}


$(function () {
    escribirLog("OnDocumentReady llamado");//el evento de cuando se carga la pagina, se escribe en el div.

    var boton = $("input:button");//se le hace wrapper al input de typo button y se guarda en variable boton.
    boton.click(function () {//click es un metodo y un evento que recibe un delegado el cual es el handler.
        escribirLog("OnClick llamado");//este es el handler, cuando se dispara el evento, se escribe OnClick en el div.
    });

    var mouseListener = $("div.mouseListener");//que sea div y que tenga la clase mouseListener. se hace wrapper a div.mouseListener y se guarda en la variable mouseListener.
    mouseListener.mousemove(function (e) {
        var x = e.pageX;
        var y = e.pageY;
        $("input[name='x']").val(x);//buscar el input, cuya propiedad name=x y asignarle el valor de la variable x.
        $("input[name='y']").val(y);
    });

})

$( "li" ).hover(//aplicar a todos los li.
function() {
    $( this ).append( $( "<span> PRIMER NOMBRE</span>" ) );//Primer NOMBRE SE ESCRIBE CUANDO UNO HACE POINT.
}, function() {
    $( this ).find( "span:last" ).remove();//se deja de ver PRIMER NOMBRE CUANDO UNO SALE DEL POINT.
}
);
    $( "li.fade" ).hover(function() {//a todos los li cuya clase sea fade.
        $( this ).fadeOut( 100 );//parpadear...
        $( this ).fadeIn( 500 );
    });


