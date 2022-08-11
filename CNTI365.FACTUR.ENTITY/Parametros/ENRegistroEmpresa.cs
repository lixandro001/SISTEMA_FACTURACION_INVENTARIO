using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNTI365.FACTUR.ENTITY.Parametros
{
    public class ENRegistroEmpresa
    {
        public string razonsocial { get; set; }
        public string ruc { get; set; }
        public string email { get; set; }

        public int idpais { get; set; }
        public int idmoneda { get; set; }
        public string direccion { get; set; }
        public int idimpuesto { get; set; }
        public int idporcentaje { get; set; }
        public int vendeimpuestos { get; set; }
        public string username { get; set; }
        public string usuario { get; set; }
        public string contraseña { get; set; }
        public int cantuser { get; set; }
        public string cargo { get; set; }
        public string filename { get; set; }
        public string proyecto { get; set; }


    }
}
