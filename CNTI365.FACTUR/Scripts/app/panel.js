

function empleados() {

    Post("Empleados/validarAccesoModulo").done(function (datos) {
      
        if (datos.dt == "ok") {
            window.location = fnBaseURLWeb("Empleados/Empleados");               
        } else {
            swal({
                position: 'top-end',
                type: 'error',
                title: "No tiene accesos a este modulo",
                text: 'Contacte con el administrador del sistema',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            })
        }

    })

}


function Compras() {
    Post("Proveedores/validarAccesoModulo").done(function (datos) {

        if (datos.dt == "ok") {
            window.location = fnBaseURLWeb("Proveedores/Proveedores");
        } else {
            swal({
                position: 'top-end',
                type: 'error',
                title: "No tiene accesos a este modulo",
                text: 'Contacte con el administrador del sistema',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            })
        }

    })
}




function proveedores() {

    Post("Proveedores/validarAccesoModulo").done(function (datos) {     
        
        if (datos.dt == "ok") {
            window.location = fnBaseURLWeb("Proveedores/Proveedores");
        } else {
            swal({
                position: 'top-end',
                type: 'error',
                title: "No tiene accesos a este modulo",
                text: 'Contacte con el administrador del sistema',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            })
        }

    })
}

function productos() {

    Post("Productos/validarAccesoModulo").done(function (datos) {
       
        if (datos.dt == "ok") {
            window.location = fnBaseURLWeb("Productos/Productos");
        } else {
            swal({
                position: 'top-end',
                type: 'error',
                title: "No tiene accesos a este modulo",
                text: 'Contacte con el administrador del sistema',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            })
        }

    })

}


function inventario() {

    Post("Inventarios/validarAccesoModulo").done(function (datos) {
        debugger;
        if (datos.dt == "ok") {
            window.location = fnBaseURLWeb("Inventarios/Inventarios");
        } else {
            swal({
                position: 'top-end',
                type: 'error',
                title: "No tiene accesos a este modulo",
                text: 'Contacte con el administrador del sistema',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            })
        }

    })

}