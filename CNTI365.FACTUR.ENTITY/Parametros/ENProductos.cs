using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNTI365.FACTUR.ENTITY.Parametros
{
    public class ENProductos
    {
        public int idproducto { get; set; }
        public int tipo { get; set; }
        public string codbarra { get; set; }

        public string desc { get; set; }
        public int tproduct { get; set; }

        public string pcosto { get; set; }
        public string ganancia { get; set; }

        public decimal pventa { get; set; }
        public decimal pmayoreo { get; set; }

        public int apartir { get; set; }
        public int sldepart { get; set; }
        public int existen { get; set; }
        public int minexisten { get; set; }
        public string fvenci { get; set; }
        public int faplica { get; set; }
        public string rucempresa { get; set; }


        public string buscarp { get; set; }
        public int slbuscar { get; set; }

        public string datos { get; set; }
        public string letra { get; set; }

    }
}
