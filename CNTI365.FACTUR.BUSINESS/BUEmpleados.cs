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
    public class BUEmpleados
    {
        private Client clients;

        public BUEmpleados()
        {
            clients = new Client();
        }

        public ResponseEmpleados validarCantUsers(ENEmpleados paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseEmpleados>(clients.Post<ENEmpleados>("Empleados/validarCantUsers", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public ResponseEmpleados registrarUsuario(ENEmpleados paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseEmpleados>(clients.Post<ENEmpleados>("Empleados/registrarUsuario", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public List<ResponseEmpleados> listaEmpleados(ENEmpleados paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<List<ResponseEmpleados>>(clients.Post<ENEmpleados>("Empleados/listaEmpleados", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public ResponseEmpleados activarEmpleado(ENEmpleados paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseEmpleados>(clients.Post<ENEmpleados>("Empleados/activarEmpleado", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public ResponseEmpleados desactivarEmpleado(ENEmpleados paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseEmpleados>(clients.Post<ENEmpleados>("Empleados/desactivarEmpleado", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public ResponseEmpleados eliminarEmpleado(ENEmpleados paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseEmpleados>(clients.Post<ENEmpleados>("Empleados/eliminarEmpleado", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public List<ResponseEmpleados> listarCargos(ENEmpleados paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<List<ResponseEmpleados>>(clients.Post<ENEmpleados>("Empleados/listarCargos", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public ResponseEmpleados obteditarEmpleado(ENEmpleados paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseEmpleados>(clients.Post<ENEmpleados>("Empleados/obteditarEmpleado", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public ResponseEmpleados editarEmpleado(ENEmpleados paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseEmpleados>(clients.Post<ENEmpleados>("Empleados/editarEmpleado", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }
    }
}
