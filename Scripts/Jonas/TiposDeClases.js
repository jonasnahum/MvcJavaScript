var claseAnonima = {//una clase se guarda en la variable llamada claseAnonima, la clase se hace con {}.
    edad: 10,//se separan con coma cada propiedad.
    nombre: "nombre",//todas las propiedades son publicas
    esMenorDeEdad: true,//intuye que es un bool.
    fechaDeNacimiento: new Date(2001, 1),
    imprimirDatos: function () {//un metodo dentro de la clase anonima.
        console.log(this.edad + " " + this.nombre);//console.log, para imprimir en la consola.
    }
};
claseAnonima.imprimirDatos();//se manda llamar facilmente pero no se pueden hacer muchas instancias.

function Persona(nombre, edad, ano, mes) {//una clase con constructor y parametros.es lo [unico que empieza con mayusculas.
    this.edad = edad;
    this.nombre = nombre;
    this.fechaDeNacimiento = new Date(ano, mes);
    this.esMenorDeEdad = this.edad < 18;

    var that = this;//this, que tiene todas las propiedades de esta clase se guarda en var that privada para poder acceder en las llaves anidadas o el metodo.
    this.imprimirDatos = function () {//empieza con this para que sea publica.
        console.log(that.edad, + " " + that.nombre);//aqui se usa that para acceder al this de arriba, si aqui se usara this, se referiria al this que esta entre estas llaves.
    };
}

var persona = new Persona("jonas", 34, 2001, 1);//puede hacer muchas instancias usando el operador new.
persona.imprimirDatos();

//alert(claseAnonima["fechaDeNacimiento"]);//todas las clases se pueden tratar como array no importa si son anonimas, function o array.
//alert(persona["nombre"]);
//alert(this.persona.nombre);//alert esta en el this general, y y las variables dentro de las clases, tambien.

var array = new Array();//se puede hacer una clase con array. esto es una mezcla como entre array y diccionario.
array["edad"] = 20;
array["nombre"] = "pedro";
array["fechaDeNacimiento"] = new Date(2001, 1);
array["imprimirDatos"] = function () {//este es un metodo dentro de la clase array.
    console.log(array.edad + " " + array["nombre"]);
}
array.imprimirDatos();
