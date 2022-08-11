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
    public class BUDepartamentos
    {

        private Client clients;

        public BUDepartamentos()
        {
            clients = new Client();
        }


        public ResponseDepartamentos guardarDepartamento(ENDepartamentos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseDepartamentos>(clients.Post<ENDepartamentos>("Departamentos/guardarDepartamento", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public List<ResponseDepartamentos> listadepartamentos(ENDepartamentos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<List<ResponseDepartamentos>>(clients.Post<ENDepartamentos>("Departamentos/listadepartamentos", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public ResponseDepartamentos eliminarDepartamento(ENDepartamentos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseDepartamentos>(clients.Post<ENDepartamentos>("Departamentos/eliminarDepartamento", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public ResponseDepartamentos obtEditarDepartamento(ENDepartamentos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseDepartamentos>(clients.Post<ENDepartamentos>("Departamentos/obtEditarDepartamento", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public ResponseDepartamentos editarDepartamento(ENDepartamentos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseDepartamentos>(clients.Post<ENDepartamentos>("Departamentos/editarDepartamento", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }



    }
}
