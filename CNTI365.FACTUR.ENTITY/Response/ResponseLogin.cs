using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNTI365.FACTUR.ENTITY.Response
{
    public class ResponseLogin
    {
        public string responsetoken { get; set; }
        public string response { get; set; }
        public int idempleado { get; set; }
        public string username { get; set; }
        public string cargo { get; set; }
        public int cantaccesos { get; set; }
        public string ruc { get; set; }

        public int ventas { get; set; }
        public int clientes { get; set; }
        public int caja { get; set; }
        public int compras { get; set; }
        public int productos { get; set; }
        public int inventario { get; set; }
        public int proveedor { get; set; }
        public int dashboard { get; set; }
        public int usuarios { get; set; }
        public int empresa { get; set; }
        public int configuraciones { get; set; }

        
    }
}
