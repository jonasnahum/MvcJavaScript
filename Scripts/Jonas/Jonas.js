
(function () {//function sirve para crear methodos clases, y namespaces. en este caso se crea un namespace
    this.jonas = this.jonas || {};//si existe jonas asignar jonas a jonas,si no, crear uno nvo {}.se declara en namespace, con nombre jonas
    var ns = this.jonas; //ns abreviacion para namespace.la variable publica jonas se guarda en la privada ns. se pone alias ns. solo funciona de manera local. es interno, por ejemplo para el metodo main, ya no existe ns, cuando se manda llamar, cuando se crea si. 

    /*
        // Clase de ejemplo
        ns.MiClase = (function () {
            function MiClase() {
                // this.variablePublica = 0;
                // var variablePrivada = 0;
                // function metodoPrivado(){ ... };
                // MiClase.prototype.metodoPublico = function(){ ... };                        
            }
            return MiClase;
        })();            
    */

    ns.Estilista = (function () {//dentro de ns se declara clase Estilista.
        function Estilista() {//este es el constructor.
                            

            function asignarEstilo(objHtml, estilo, valor) {// que recibe un objeto html y dos parametros mas.
                objHtml.style[estilo] = valor;//.style es una propiedad de los objetos html que a su vez es un diccionario que guarda los diferentes estilos.
            }

            Estilista.prototype.pintarFondo = function (objHtml, color) {//metodo publico.
                asignarEstilo(objHtml, "backgroundColor", color);//se manda llamar un metodo privado.
            }

            Estilista.prototype.ponerBorde = function (objHtml, grosor, tipo, color) {
                var valor = grosor + "px " + tipo + " " + color;
                asignarEstilo(objHtml, "border", valor);
            }
        }

        return Estilista;//es el final de la declaracion de la clase.se cierra la clase.
    })();//() se manda llamar el function del inicio, se cierra el function.


    //esto equivale al main de la c#. lo que va a hacer.
    ns.main = function () {//metodo dentro del ns jonas fuera de la clase Estilista.puede haber un metodo sin clase.
        var persona = document.getElementById("persona");//guarda en var persona un objeto de Html que obtuvo del DOM.
        var estilista = new ns.Estilista();//Se crea una instancia de la clase Estilista con su fully qualifyed name y se le pasa un objeto html al constructor.
        estilista.pintarFondo(persona, "blue");//se manda llamar el metodo publico pintarFondo de la instancia estilista.

        var nombre = document.getElementById("nombre");
        estilista.ponerBorde(nombre, 2, "dashed", "#876abc");
        var edad = document.getElementById("edad");
        estilista.ponerBorde(edad, 3, "solid", "#def345");
        var calificacion = document.getElementById("calificacion");
        estilista.ponerBorde(calificacion, 4, "double", "#ab1234");

    };

}());//cierra el ns.


jonas.main();//aqui se manda llamar el metodo main definido en otro lado y fuera de clase pero dentro del ns jonas.
