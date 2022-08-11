using CNTI365.FACTUR.BUSINESS;
using CNTI365.FACTUR.ENTITY.Parametros;
using CNTI365.FACTUR.WEB.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CNTI365.FACTUR.Controllers
{
    public class InventariosController : Controller
    {

        private BUInventario buinvent;

        public InventariosController()
        {
            buinvent = new BUInventario();
        }



        // GET: Inventarios
        public ActionResult Inventarios()
        {
            var session = Session.GetCurrentUser();

            if (session != null)
            {
                /* Si tienes acceso a productos tambien lo tienes a departamentos */
                if (session.inventario == 1 | session.cargo == "superadmin")
                {
                                      
                    return View();
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
                if (session.inventario == 1)
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
        public ActionResult AgregarInventario(ENInventario paramss)
        {
            var session = Session.GetCurrentUser();
            paramss.rucempresa = session.ruc;
            paramss.idempleado = session.idempleado;
            var token = session.responsetoken;


            var rpt = buinvent.AgregarInventario(paramss , token);

            return Json(new { dt = rpt });
        }


    }
}