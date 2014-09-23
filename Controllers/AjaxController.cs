using MvcJavaScript.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace MvcJavaScript.Controllers
{
    public class AjaxController : Controller
    {
        //
        // GET: /Ajax/

        public ActionResult Index()
        {
            return View();
        }
        public ActionResult GetExample() 
        {
            return View();
        }

        public ActionResult GetExampleParams()
        {
            return View();
        }
        public ContentResult SaludoHtml() //es para regresar nadamas un texto.
        {
            return Content(string.Format("<h1>{0}</h1><p>{1}</p>","hola","Este contenido fue obtenido mediante Ajax"));
        }

        public ActionResult ObtenerSaludo(string nombre, int edad) //recibe dos parametros
        {
            var objetoAnonimo = new { nombre = nombre, edad = edad };
            return Json(objetoAnonimo, JsonRequestBehavior.AllowGet);
        }
        [HttpPost]
        public ActionResult ObtenerSaludo(Persona model)//recibe un modelo
        {
            var objetoAnonimo = new { nombre = model.Nombre, edad = model.Edad };
            return Json(objetoAnonimo, JsonRequestBehavior.AllowGet);
        }
        public ActionResult JSonExample()
        {
            return View();
        }
    }
}
