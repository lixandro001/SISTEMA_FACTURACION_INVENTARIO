using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNTI365.FACTUR.ENTITY.Response
{
   public class ResponsePromociones
    {
        public int row { get; set; }
        public int idpromocion { get; set; }
        public string response { get; set; }
        public int idproducto { get; set; }
        public string nombrePromocion { get; set; }
        public string descProducto { get; set; }
        public string codbarra { get; set; }
        public decimal pventa { get; set; }
        public string pventa1 { get; set; }
        public string finicio { get; set; }
        public string ffin { get; set; }
        public int status { get; set; }

    }
}
