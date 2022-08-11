using System;
using System.Collections.Generic;
using System.Globalization;
using System.Linq;
using System.Threading;
using System.Web;
using System.Web.Mvc;
using System.Web.Script.Serialization;
using System.Web.Security;

namespace Factur2020.Helpers
{
    public static class ApplicationHelper
    {
        public static string clearSpecialCharsFromModel(object model)
        {
            var jsonModelToFixed = new JavaScriptSerializer().Serialize(model);
            jsonModelToFixed = jsonModelToFixed.Replace("\\u0026LT;", "\\u003c");
            jsonModelToFixed = jsonModelToFixed.Replace("&LT;", "\\u003c");
            return jsonModelToFixed;
        }

        public static void RefreshUICulture(string currentCulture)
        {
            if (currentCulture != null)
            {
                Thread.CurrentThread.CurrentUICulture = CultureInfo.CreateSpecificCulture(currentCulture);
                Thread.CurrentThread.CurrentCulture = new CultureInfo(currentCulture);
            }
        }

        public static void RedirectUnAuthorized(ActionExecutingContext filterContext)
        {
            FormsAuthentication.SignOut();
            var urlHelper = new UrlHelper(filterContext.RequestContext);
            var returnUrl = urlHelper.Action(filterContext.ActionDescriptor.ActionName, filterContext.ActionDescriptor.ControllerDescriptor.ControllerName);
            filterContext.Result = new RedirectResult(urlHelper.Action("Login", "Home"));
        }

    }
}