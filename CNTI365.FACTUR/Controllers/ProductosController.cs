using CNTI365.FACTUR.BUSINESS;
using CNTI365.FACTUR.CLIENTS;
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
    public class ProductosController : Controller
    {

        private BUProductos buproduc;
        private modelList model;

        public ProductosController()
        {
            buproduc = new BUProductos();
            model = new modelList();
        }

        // GET: Productos
        public ActionResult Productos()
        {
            var session = Session.GetCurrentUser();

            if (session != null)
            {

                if (session.productos == 1 | session.cargo == "superadmin")
                {

                    ENDepartamentos paramss = new ENDepartamentos();
                    ENProductos paramss1 = new ENProductos();
                    var token = session.responsetoken;
                    paramss1.rucempresa = session.ruc;

                    model.listDepart = buproduc.listDepart(paramss, token);
                    model.listProduct = buproduc.listarProductos(paramss1, token);
                    model.tmoneda = buproduc.tmoneda(paramss1, token);

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
                if (session.productos == 1)
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
        public ActionResult calcularPventaSinImpuestos(ENProductos paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;


            var rpt = buproduc.calcularPventaSinImpuestos(paramss, token);
            return Json(new { dt = rpt });
        }

        [HttpPost]
        public ActionResult calculoPrecios(ENProductos paramss)
        {
            if (paramss.pmayoreo > paramss.pventa)
            {
                var rpt = "error";
                return Json(new { dt = rpt });
            }
            else
            {
                var rpt = "ok";
                return Json(new { dt = rpt });
            }
            
        }

        [HttpPost]
        public ActionResult guardarProduct(ENProductos paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;


            var rpt = buproduc.guardarProduct(paramss, token);
            return Json(new { dt = rpt });
        }


        [HttpPost]
        public ActionResult buscarProducto(ENProductos paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;


            model.buscarProduct = buproduc.buscarProducto(paramss, token);
            return Json(new { dt = model.buscarProduct, total = model.buscarProduct.Count() });
        }


        [HttpPost]
        public ActionResult buscarProductodepart(ENProductos paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;


            model.buscarProductdepart = buproduc.buscarProductodepart(paramss, token);
            return Json(new { dt = model.buscarProductdepart, total = model.buscarProductdepart.Count() });
        }



        [HttpPost]
        public ActionResult eliminarProducto(ENProductos paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;


            var rpt = buproduc.eliminarProducto(paramss, token);
            return Json(new { dt = rpt });
        }


        [HttpPost]
        public ActionResult obtEditarProducto(ENProductos paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;

            ResponseProductos rpt = new ResponseProductos();

            string idproductos = paramss.datos;
            String[] strlist = idproductos.Split('|');
            var count = strlist.Count() - 1;

            if (count == 1)
            {
                rpt = buproduc.obtEditarProducto(paramss, token);
                return Json(new { dt = rpt });
            }
            else
            {
                rpt.response = "Error";
                return Json(new { dt = rpt });
            }

            
        }


        [HttpPost]
        public ActionResult editarProduct(ENProductos paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;


            var rpt = buproduc.editarProduct(paramss, token);
            return Json(new { dt = rpt });
        }


        [HttpPost]
        public JsonResult obtlistaProducto(string letra)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;

            ENProductos paramss = new ENProductos();
            paramss.rucempresa = session.ruc;
            paramss.letra = letra;
            return Json(buproduc.obtlistaProducto(paramss, token), JsonRequestBehavior.AllowGet);
        }


        [HttpPost]
        public JsonResult obtlistaProducto_cod(ENProductos paramss)
        {
            var session = Session.GetCurrentUser();
            var token = session.responsetoken;
            paramss.rucempresa = session.ruc;
            paramss.letra = paramss.codbarra;

            var rpt = buproduc.obtlistaProducto(paramss, token);
            return Json(new { dt = rpt });

            
        }





    }
}