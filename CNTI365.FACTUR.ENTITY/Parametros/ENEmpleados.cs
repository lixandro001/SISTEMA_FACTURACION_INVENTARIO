using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNTI365.FACTUR.ENTITY.Parametros
{
    public class ENEmpleados
    {
        public string ruc { get; set; }

        public int iduser { get; set; }

        public string nombre { get; set; }
        public string dni { get; set; }
        public string email { get; set; }
        public string user { get; set; }
        public string password { get; set; }
        public string slcargo { get; set; }

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
