using CNTI365.FACTUR.ENTITY.Response;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace CNTI365.FACTUR.Models
{
    public class modelList
    {
        public List<ResponsePais> listPais { get; set; }
        public List<ResponseMoneda> listMoneda { get; set; }
        public List<ResponseTImpuestos> listTImpuesto { get; set; }
        public List<ResponsePImpuestos> listPImpuestos { get; set; }

        public ResponseRegistroEmpresa msjActivarCuenta { get; set; }



        /********** LISTAR EMPLEADOS *******************/

        public List<ResponseEmpleados> listaEmpleados { get; set; }

        public List<ResponseEmpleados> listarCargos { get; set; }


        /***************** LISTAR PROVEEDORES *///////////////////


        public List<ResponseProveedores> listaProveedores { get; set; }


        /***************** LISTAR DEPARTAMENTOS *///////////////////


        public List<ResponseDepartamentos> listDepart { get; set; }



        /***************/
        public List<ResponseProductos> listProduct { get; set; }

        public List<ResponseProductos> buscarProduct { get; set; }
        public List<ResponseProductos> buscarProductdepart { get; set; }

        public ResponseProductos tmoneda { get; set; }

        public List<ResponseDepartamentos> listadepartamentos { get; set; }


        /************************************/


        public List<ResponsePromociones> listaPromociones { get; set; }
    }
}