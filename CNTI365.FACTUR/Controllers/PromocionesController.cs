using CNTI365.FACTUR.BUSINESS;
using CNTI365.FACTUR.ENTITY.Parametros;
using CNTI365.FACTUR.ENTITY.Response;
using CNTI365.FACTUR.Models;
using CNTI365.FACTUR.WEB.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CNTI365.FACTUR.Controllers
{
    public class PromocionesController : Controller
    {

        private BUPromociones bupromo;
        private modelList model;

        public PromocionesController()
        {
            bupromo = new BUPromociones();
            model = new modelList();
        }

        // GET: Promociones
        public ActionResult Promociones()
        {
            var session = Session.GetCurrentUser();

            if (session != null)
            {
                /* Si tienes acceso a productos tambien lo tienes a departamentos */
                if (session.productos == 1 | session.cargo == "superadmin")
                {
                    ENPromociones paramss = new ENPromociones();
                    paramss.rucempresa = session.ruc;
                    var token = session.responsetoken;

                    model.listaPromociones = bupromo.listaPromociones(paramss, token);


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
        public ActionResult guardarPromocion(ENPromociones paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;


            var rpt = bupromo.guardarPromocion(paramss, token);
            return Json(new { dt = rpt });
        }

        [HttpPost]
        public ActionResult eliminarPromociones(ENPromociones paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;


            var rpt = bupromo.eliminarPromociones(paramss, token);
            return Json(new { dt = rpt });
        }

        [HttpPost]
        public ActionResult obtEditarPromo(ENPromociones paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;

            ResponsePromociones rpt = new ResponsePromociones();

            string idpromo = paramss.datos;
            String[] strlist = idpromo.Split('|');
            var count = strlist.Count() - 1;

            if (count == 1)
            {
                rpt = bupromo.obtEditarPromo(paramss, token);
                return Json(new { dt = rpt });
            }
            else
            {
                rpt.response = "Error";
                return Json(new { dt = rpt });
            }


        }


        [HttpPost]
        public ActionResult editarPromocion(ENPromociones paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;


            var rpt = bupromo.editarPromocion(paramss, token);
            return Json(new { dt = rpt });
        }
        

    }
}