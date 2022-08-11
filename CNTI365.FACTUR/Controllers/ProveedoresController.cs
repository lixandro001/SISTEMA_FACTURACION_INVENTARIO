using CNTI365.FACTUR.BUSINESS;
using CNTI365.FACTUR.ENTITY.Parametros;
using CNTI365.FACTUR.Models;
using CNTI365.FACTUR.WEB.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CNTI365.FACTUR.Controllers
{
    public class ProveedoresController : Controller
    {

        private BUProveedores buprov;
        private modelList model;

        public ProveedoresController()
        {
            buprov = new BUProveedores();
            model = new modelList();
        }


        // GET: Proveedores
        public ActionResult Proveedores(ENProveedores paramss)
        {
            var session = Session.GetCurrentUser();

            if (session != null)
            {

                if (session.proveedor == 1 | session.cargo == "superadmin")
                {

                    var token = session.responsetoken;
                    paramss.rucempresa = session.ruc;

                    model.listaProveedores = buprov.listarProveedores(paramss, token);

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
                if (session.proveedor == 1)
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
        public ActionResult registrarProv(ENProveedores paramss)
        {
            var user = Session.GetCurrentUser();
            var token = user.responsetoken;
            paramss.rucempresa = user.ruc;

            var rpt = buprov.registrarProv(paramss, token);

            return Json(new { dt = rpt });
        }


        [HttpPost]
        public ActionResult activarProveedor(ENProveedores paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;

            var rpt = buprov.activarProveedor(paramss, token);
            return Json(new { dt = rpt });
        }

        [HttpPost]
        public ActionResult desactivarProveedor(ENProveedores paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;

            var rpt = buprov.desactivarProveedor(paramss, token);
            return Json(new { dt = rpt });
        }

        [HttpPost]
        public ActionResult eliminarProveedor(ENProveedores paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;

            var rpt = buprov.eliminarProveedor(paramss, token);
            return Json(new { dt = rpt });
        }

        [HttpPost]
        public ActionResult obteditarProveedor(ENProveedores paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
                     

            var rpt = buprov.obteditarProveedor(paramss, token);
            return Json(new { dt = rpt });
        }


        [HttpPost]
        public ActionResult editarProv(ENProveedores paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;

            var rpt = buprov.editarProv(paramss, token);
            return Json(new { dt = rpt });
        }

        
    }
}
