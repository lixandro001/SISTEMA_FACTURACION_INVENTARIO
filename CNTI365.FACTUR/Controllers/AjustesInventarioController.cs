using CNTI365.FACTUR.BUSINESS;
using CNTI365.FACTUR.WEB.Helpers;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CNTI365.FACTUR.Controllers
{
    public class AjustesInventarioController : Controller
    {
        private BUInventario buinvent;

        public AjustesInventarioController()
        {
            buinvent = new BUInventario();
        }



        // GET: Inventarios
        public ActionResult AjustesInventario()
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
    }
}