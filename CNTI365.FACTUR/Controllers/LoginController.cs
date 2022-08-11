using CNTI365.FACTUR.BUSINESS;
using CNTI365.FACTUR.ENTITY.Encrypt;
using CNTI365.FACTUR.ENTITY.Parametros;
using CNTI365.FACTUR.ENTITY.Response;
using CNTI365.FACTUR.WEB.Helpers;
using System.Web.Mvc;

namespace CNTI365.FACTUR.Controllers
{
    public class LoginController : Controller
    {

        private BULogin bulogin;

        public LoginController()
        {
            bulogin = new BULogin();
        }


        [HttpPost]
        public ActionResult Acceder(ENLogin paramss)
        {
            var clave = Encrypt.GetSHA256(paramss.pass);
            paramss.pass = clave;

            var rpt = bulogin.Acceder(paramss);
            Session.Set(GlobalKey.CurrentUser, rpt);
            SetCurrenUser(rpt);

            return Json(new { dt = rpt });
        }


        protected void SetCurrenUser(ResponseLogin login)
        {
            Session["Username"] = login;
        }

    }
}
