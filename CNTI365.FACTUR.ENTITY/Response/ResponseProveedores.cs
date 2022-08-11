using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNTI365.FACTUR.ENTITY.Response
{
    public class ResponseProveedores
    {
        public string response {get;set;}

        public int idprov { get; set; }
        public string ruc { get; set; }
        public string razonsocial { get; set; }
        public string telefono { get; set; }
        public string email { get; set; }
        public string direccion { get; set; }

        public int status { get; set; }
    }
}
