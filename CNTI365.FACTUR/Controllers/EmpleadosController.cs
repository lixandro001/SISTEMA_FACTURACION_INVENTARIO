using CNTI365.FACTUR.BUSINESS;
using CNTI365.FACTUR.ENTITY.Encrypt;
using CNTI365.FACTUR.ENTITY.Parametros;
using CNTI365.FACTUR.Models;
using CNTI365.FACTUR.WEB.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Mail;
using System.Web;
using System.Web.Mvc;

namespace CNTI365.FACTUR.Controllers
{
    public class EmpleadosController : Controller
    {

        private BUEmpleados buempleados;
        private modelList model;

        public EmpleadosController()
        {
            buempleados = new BUEmpleados();
            model = new modelList();
        }

        public ActionResult Empleados()
        {
            var session = Session.GetCurrentUser();

            if (session != null)
            {
               
                    if (session.usuarios == 1 | session.cargo == "superadmin")
                    {
                    ENEmpleados paramss = new ENEmpleados();
                    var token = session.responsetoken;
                    paramss.ruc = session.ruc;
                    paramss.slcargo = session.cargo;

                    model.listaEmpleados = buempleados.listaEmpleados(paramss, token);
                    model.listarCargos = buempleados.listarCargos(paramss, token);

                    return View(model);
                    }
                    else
                    {
                        return RedirectToAction("Panel", "Panel");
                    }
            }
            else
            {
                return RedirectToAction("Index", "Home");
            }              
               
            
           
        }

        [HttpPost]
        public ActionResult validarAccesoModulo()
        {
            var session = Session.GetCurrentUser();

            if (session.cargo == "superadmin")
            {
                var rpt = "ok";
                return Json(new { dt = rpt });
            }
            else
            {
                if (session.usuarios == 1)
                {
                    var rpt = "ok";
                    return Json(new { dt = rpt });
                }
                else
                {
                    var rpt = "error";
                    return Json(new { dt = rpt });
                }

            }

        }



        [HttpPost]
        public ActionResult validarCantUsers()
        {
            var session = Session.GetCurrentUser();

            ENEmpleados paramss = new ENEmpleados();

            paramss.ruc = session.ruc;
            var token = session.responsetoken;

            var rpt = buempleados.validarCantUsers(paramss, token);
            return Json(new { dt = rpt });
        }


        [HttpPost]
        public ActionResult registrarUsuario(ENEmpleados paramss)
        {
            var session = Session.GetCurrentUser();

            paramss.ruc = session.ruc;
            var token = session.responsetoken;

            var clave1 = paramss.password;

            var clave = Encrypt.GetSHA256(paramss.password);
            paramss.password = clave;

            var rpt = buempleados.registrarUsuario(paramss, token);

            if (rpt.response ==  "ok")
            {
                string url = string.Format("https://localhost:44326/Home/Index");
                string para = paramss.email;
                string asunto = "Datos de accesos al sistema de facturacón e inventario";
                string mensaje = "<b> SE REGISTRARON LOS ACCESOS PARA INGRESAR AL SISTEMA <b>" + "<br /><br />" +
                    "Estas son sus credenciales de acceso " + "<br /></br />" +
                    "Usuario: " + paramss.user + "<br /> " +
                     "Contraseña: " + clave1 + "<br /> " +
                      "Cargo: " + paramss.slcargo + "<br /><br /> " +
                      "Para poder acceder al sistema por favor ingrese <a href=\"" + url + "\"> aqui</a>" + "<br /><br /> " +
                      "Para obtener una licencia escribenos al correo ventas@cnti365.com";

                MailMessage correo = new MailMessage();
                correo.From = new MailAddress("systemafactur@cnti365.com"); // cambiar el correo por el de ustedes  
                correo.To.Add(para);
                correo.Subject = asunto;
                correo.Body = mensaje;
                correo.IsBodyHtml = true;
                SmtpClient smtp = new SmtpClient("mail.cnti365.com"); //Cambiar por su Smtphost  
                string sCuentaCorreo = "systemafactur@cnti365.com";// cambiar el correo por el de ustedes
                string sPassword = "M@46179378s"; // cambiar el password por el de ustedes
                NetworkCredential credential = new NetworkCredential(sCuentaCorreo, sPassword);
                smtp.UseDefaultCredentials = false;
                smtp.Credentials = credential;
                smtp.Port = 25; // cambiar el puerto por el de ustedes
                smtp.EnableSsl = false; // Esto se cambia a true si lo configuramos con gmail
                smtp.Send(correo);

                return Json(new { dt = rpt });

            }
            else
            {
                return Json(new { dt = rpt });
            }


           
        }


        [HttpPost]
        public ActionResult activarEmpleado(ENEmpleados paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.ruc = session.ruc;

            var rpt = buempleados.activarEmpleado(paramss, token);
            return Json(new { dt = rpt });
        }

        [HttpPost]
        public ActionResult desactivarEmpleado(ENEmpleados paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.ruc = session.ruc;

            var rpt = buempleados.desactivarEmpleado(paramss, token);
            return Json(new { dt = rpt });
        }

        [HttpPost]
        public ActionResult eliminarEmpleado(ENEmpleados paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.ruc = session.ruc;

            var rpt = buempleados.eliminarEmpleado(paramss, token);
            return Json(new { dt = rpt });
        }

        [HttpPost]
        public ActionResult obteditarEmpleado(ENEmpleados paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.ruc = session.ruc;
            paramss.slcargo = session.cargo;

            var rpt = buempleados.obteditarEmpleado(paramss, token);
            return Json(new { dt = rpt });
        }


        [HttpPost]
        public ActionResult editarEmpleado(ENEmpleados paramss)
        {
            var session = Session.GetCurrentUser();

            paramss.ruc = session.ruc;
            var token = session.responsetoken;

            var clave1 = paramss.password;

            if (paramss.password != "0")
            {
                var clave = Encrypt.GetSHA256(paramss.password);
                paramss.password = clave;
            }
           

            var rpt = buempleados.editarEmpleado(paramss, token);

            if (rpt.response == "ok")
            {
               
                return Json(new { dt = rpt });

            }
            else
            {
                return Json(new { dt = rpt });
            }



        }

    }
}
