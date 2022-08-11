using CNTI365.FACTUR.BUSINESS;
using CNTI365.FACTUR.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace CNTI365.FACTUR.Controllers
{
    public class ActivarCuentaController : Controller
    {
        private modelList model;
        private BURegistroEmpresa buregistroempresa;

        public ActivarCuentaController()
        {
            model = new modelList();
            buregistroempresa = new BURegistroEmpresa();
        }

        [HttpGet]
        public ActionResult ActivarCuenta(string ruc)
        {
            string token = "";
            model.msjActivarCuenta = buregistroempresa.activarCuenta(ruc, token);
            return View(model);
        }

        
    }
}
