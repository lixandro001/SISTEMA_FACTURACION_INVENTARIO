
using CNTI365.FACTUR.ENTITY.Parametros;
using CNTI365.FACTUR.ENTITY.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.SessionState;

namespace CNTI365.FACTUR.WEB.Helpers
{
    public enum GlobalKey
    {
        /// <summary>
        /// The current User
        /// </summary>
        CurrentUser,
        /// <summary>
        /// The current culture
        /// </summary>
        Permissions,
        /// <summary>
        /// The company Index
        /// </summary>
        Exception,
        ///// <summary>
        ///// The Domain index
        ///// </summary>
        //DomainIndex,
        ///// <summary>
        ///// The Language index
        ///// </summary>
        //LanguageIndex
        Typemessage,
        ErrorData
    }

    public static class SessionHelpers
    {
        #region Private

        private static object Get(HttpSessionState Session, String Key)
        {
            return Session[Key];
        }

        private static void Set(HttpSessionState Session, String Key, object Value)
        {
            Session[Key] = Value;
        }

        private static bool Exists(HttpSessionState Session, String Key)
        {
            return Session[Key] != null;
        }

        private static object Get(HttpSessionStateBase Session, String Key)
        {
            return Session[Key];
        }

        private static void Set(HttpSessionStateBase Session, String Key, object Value)
        {
            Session[Key] = Value;
        }

        private static bool Exists(HttpSessionStateBase Session, String Key)
        {
            return Session[Key] != null;
        }

        #endregion

        #region Getters setters GlobalKey

        #region HttpSessionState
        public static object Get(this HttpSessionState Session, GlobalKey Key)
        {
            return Get(Session, Key.ToString());
        }

        public static void Set(this HttpSessionState Session, GlobalKey Key, object Value)
        {
            Set(Session, Key.ToString(), Value);
        }

        public static bool Exists(this HttpSessionState Session, GlobalKey Key)
        {
            return Exists(Session, Key.ToString());
        }


        public static ENLogin GetCurrentUser(this HttpSessionState Session)
        {
            var user = (ENLogin)Session.Get(GlobalKey.CurrentUser);
            return user;
        }
        #endregion

        #region HttpSessionStateBase
        public static object Get(this HttpSessionStateBase Session, GlobalKey Key)
        {
            return Get(Session, Key.ToString());
        }

        public static void Set(this HttpSessionStateBase Session, GlobalKey Key, object Value)
        {
            Set(Session, Key.ToString(), Value);
        }

        public static bool Exists(this HttpSessionStateBase Session, GlobalKey Key)
        {
            return Exists(Session, Key.ToString());
        }


        public static ResponseLogin GetCurrentUser(this HttpSessionStateBase Session)
        {
            var user = (ResponseLogin)Session.Get(GlobalKey.CurrentUser);
            return user;
        }
        #endregion

        #endregion
    }
}