using CNTI365.FACTUR.CLIENTS;
using CNTI365.FACTUR.ENTITY.Parametros;
using CNTI365.FACTUR.ENTITY.Response;
using Newtonsoft.Json;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace CNTI365.FACTUR.BUSINESS
{
    public class BUInventario
    {
        private Client clients;

        public BUInventario()
        {
            clients = new Client();
        }


        public ResponseInventario AgregarInventario(ENInventario paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseInventario>(clients.Post<ENInventario>("Inventarios/AgregarInventario", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

    }
}
