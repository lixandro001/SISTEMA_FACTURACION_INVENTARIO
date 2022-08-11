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
    public class BUProductos
    {


        private Client clients;

        public BUProductos()
        {
            clients = new Client();
        }

        public ResponseProductos calcularPventaSinImpuestos(ENProductos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseProductos>(clients.Post<ENProductos>("Productos/calcularPventaSinImpuestos", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public List<ResponseDepartamentos> listDepart(ENDepartamentos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<List<ResponseDepartamentos>>(clients.Post<ENDepartamentos>("Productos/listDepart", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public ResponseProductos guardarProduct(ENProductos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseProductos>(clients.Post<ENProductos>("Productos/guardarProduct", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public List<ResponseProductos> listarProductos(ENProductos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<List<ResponseProductos>>(clients.Post<ENProductos>("Productos/listarProductos", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public List<ResponseProductos> buscarProducto(ENProductos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<List<ResponseProductos>>(clients.Post<ENProductos>("Productos/buscarProducto", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public List<ResponseProductos> buscarProductodepart(ENProductos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<List<ResponseProductos>>(clients.Post<ENProductos>("Productos/buscarProductodepart", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public ResponseProductos eliminarProducto(ENProductos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseProductos>(clients.Post<ENProductos>("Productos/eliminarProducto", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

        public ResponseProductos tmoneda(ENProductos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseProductos>(clients.Post<ENProductos>("Productos/tmoneda", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public ResponseProductos obtEditarProducto(ENProductos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseProductos>(clients.Post<ENProductos>("Productos/obtEditarProducto", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public ResponseProductos editarProduct(ENProductos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<ResponseProductos>(clients.Post<ENProductos>("Productos/editarProduct", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }


        public List<ResponseProductos> obtlistaProducto(ENProductos paramss, string token)
        {
            try
            {
                return JsonConvert.DeserializeObject<List<ResponseProductos>>(clients.Post<ENProductos>("Productos/obtlistaProducto", paramss, token));
            }
            catch (Exception ex)
            {

                throw ex;
            }
        }

    }
}
