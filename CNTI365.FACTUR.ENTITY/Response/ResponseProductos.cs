using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNTI365.FACTUR.ENTITY.Response
{
    public class ResponseProductos
    {
        public int idproducto { get; set; }
        public int tipo1 { get; set; }
        public string tipo { get; set; }
        public string codbarra { get; set; }
        public string depart { get; set; }
        public string desc { get; set; }
        public string tproduct { get; set; }

        public decimal pcosto { get; set; }
        public decimal ganancia { get; set; }

        public decimal pventa { get; set; }
        public decimal pmayoreo { get; set; }

        public int apartir { get; set; }
        public int sldepart { get; set; }
        public int existen { get; set; }
        public int minexisten { get; set; }
        public string fvenci { get; set; }
        public int faplica { get; set; }
        public string rucempresa { get; set; }

        public string response { get; set; }

        public int status { get; set; }

        public int row { get; set; }

        public string Moneda { get; set; }

        public int sevende { get; set; }
        public int iddepartamento { get; set; }
        public string departamento { get; set; }


        public string precioventa { get; set; }

    }
}
