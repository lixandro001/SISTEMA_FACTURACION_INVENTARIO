
$(document).ready(function () {
    $("#divregistrarempleados").hide();
    $("#diveditarempleados").hide();
    $("#divlistaempleados").show();

    $("#lblinicial").html("Empleados");
    
})


$("#newempleado").on("click", function () {

    Post("Empleados/validarCantUsers").done(function (datos) {


        if (datos.dt.response == "ok") {
            $("#lblinicial").html("Nuevo Empleado");
            $("#divregistrarempleados").show();
            $("#divlistaempleados").hide();
           

        } else {
            swal({
                position: 'top-end',
                type: 'error',
                title: "Ya supero la cantidad de usuario a registrar",
                text: 'Contacte con el administrador del sistema o compre una nueva licencia',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            })
        }

    })

})


$("#btnregistrar").on("click", function () {

    let nombre = $("#txtusername").val();
    let dni = $("#txtdni").val();
    let email = $("#txtemail").val();
    let user = $("#txtusuario").val();
    let password = $("#txtcontraseña").val();
    let slcargo = $("#txtcargo").val();

    let ischventas = document.getElementById('chventas').checked;
    let ischclientes = document.getElementById('chclientes').checked;
    let ischcaja = document.getElementById('chcaja').checked;
    let ischcompras = document.getElementById('chcompras').checked;
    let ischproductos = document.getElementById('chproductos').checked;
    let ischinventario = document.getElementById('chinventario').checked;
    let ischproveedores = document.getElementById('chproveedores').checked;
    let ischdashboard = document.getElementById('chdashboard').checked;
    let ischusuarios = document.getElementById('chusuarios').checked;
    let ischempesa = document.getElementById('chempesa').checked;
    let ischconfiguraciones = document.getElementById('chconfiguraciones').checked;


    let ventas = 0;
    let clientes = 0;
    let caja = 0;
    let compras = 0;
    let productos = 0;
    let inventario = 0;
    let proveedores = 0;
    let dashboard = 0;
    let usuarios = 0;
    let empresa = 0;
    let configuraciones = 0;


    if (nombre.trim() == "") {
        $("#msjnombre").html("*Ingrese un nombre de cliente").css("color", "red");
        $("#txtusername").css("border-color", "red");
        $("#txtusername").focus();
    } else if (dni.trim() == "") {
        $("#msjdni").html("*Ingrese el dni del cliente").css("color", "red");
        $("#txtdni").css("border-color", "red");
        $("#txtdni").focus();
    } else if (email.trim() == "") {
        $("#msjemail").html("*Ingrese un email del cliente").css("color", "red");
        $("#txtemail").css("border-color", "red");
        $("#txtemail").focus();
    } else if (!validaEmail(email)) {
        $("#msjemail").html("*Ingrese un email valido").css("color", "red");
        $("#txtemail").css("border-color", "red");
        $("#txtemail").focus();
    } else if (user.trim() == "") {
        $("#msjuser").html("*Ingrese el usuario del cliente").css("color", "red");
        $("#txtusuario").css("border-color", "red");
        $("#txtusuario").focus();

    } else if (password.trim() == "") {
        $("#msjpassword").html("*Ingrese la contraseña del cliente").css("color", "red");
        $("#txtcontraseña").css("border-color", "red");
        $("#txtcontraseña").focus();
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[#@!$%=]/.test(password) || password.length < 8) {
        $("#msjpassword").html("*La contraseña no cumple con los requisitos").css("color", "red");
        $("#txtcontraseña").css("border-color", "red");
        $("#txtcontraseña").focus();
    } else if (slcargo == 0) {
        $("#msjslcargo").html("*Seleccione un cargo").css("color", "red");       
        
    } else if (ischventas || ischclientes || ischcaja || ischcompras
        || ischproductos || ischinventario || ischproveedores || ischdashboard
        || ischusuarios || ischempesa || ischconfiguraciones) {

        if (ischventas) {
            ventas = 1
        }

        if (ischclientes) {
            clientes = 1
        }
        if (ischcaja) {
            caja = 1
        }
        if (ischcompras) {
            compras = 1
        }
        if (ischproductos) {
            productos = 1
        }
        if (ischinventario) {
            inventario = 1
        }
        if (ischproveedores) {
            proveedores = 1
        }
        if (ischdashboard) {
            dashboard = 1
        }
        if (ischusuarios) {
            usuario = 1
        }

        if (ischempesa) {
            empresa = 1
        }

        if (ischconfiguraciones) {
            configuraciones = 1
        }

        let idcargo = document.getElementById("txtcargo");
        let stringcargo = idcargo.options[idcargo.selectedIndex].text;

        var params = new Object();
        params.nombre = nombre;
        params.dni = dni;
        params.email = email;
        params.user = user;
        params.password = password;
        params.slcargo = stringcargo;

        params.ventas = ventas;
        params.clientes = clientes;
        params.caja = caja;
        params.compras = compras;
        params.productos = productos;
        params.inventario = inventario;
        params.proveedor = proveedores;
        params.dashboard = dashboard;
        params.usuarios = usuarios;
        params.empresa = empresa;
        params.configuraciones = configuraciones;

        Post("Empleados/registrarUsuario", params).done(function (data) {

            if (data.dt.response == "ok") {
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: "Usuario registrado correctamente",
                    text: 'Se enviaron las credenciales al correo del usuario',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                },function() {                    
                        window.location = fnBaseURLWeb("Empleados/Empleados");                    
                })
            } else {
                swal({
                    position: 'top-end',
                    type: 'error',
                    title: data.dt.response,
                    text: 'por favor valide lo solicitado o contacte con el administrador',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                })
            }



        })

    } else {
        swal({
            position: 'top-end',
            type: 'error',
            title: "Debe seleccionar almenos un acceso",
            text: 'por favor valide lo solicitado',
            showConfirmButton: true,
            timer: 60000,
            confirmButtonText: 'Cerrar'
        })
    }

})


$("#btnvolver").on("click", function () {
    window.location = fnBaseURLWeb("Empleados/Empleados");  
})

$("#txtcargo").on("click", function () {


    let slcargo = $("#txtcargo").val();
    if (slcargo == 0) {
        $("#msjslcargo").html("*Seleccione un cargo").css("color", "red");
        document.getElementById('chventas').checked = false;
    } else {

        if (slcargo == 1) {
            document.getElementById('chventas').checked = true;
        } else {
            document.getElementById('chventas').checked = false;
        }

        $("#msjslcargo").html("").css("color", "");   
    }

});

$("#txtusername").keyup(function () {
    $("#msjnombre").html("").css("color", "red");
    $("#txtusername").css("border-color", "");
})

$("#txtemail").keyup(function () {
    $("#msjemail").html("").css("color", "");
    $("#txtemail").css("border-color", "");
})

$("#txtusuario").keyup(function () {
    $("#msjuser").html("    ").css("color", "");
    $("#txtusuario").css("border-color", "");
})


$("#txtcontraseña").keyup(function () {

    let contraseña = $("#txtcontraseña").val();

    if (contraseña.trim() == "") {
        password.setAttribute('type', 'password');
        $("#faeyeslash").hide();
        $("#faeye").show();
        $("#msjpassword").html("").css("color", "red");
    } else {
        $("#faeye").show();

        if (!/[A-Z]/.test(contraseña)) {
            $("#msjpassword").html("* Debe tener almenos una mayúscula").css("color", "red");
            $("#txtcontraseña").css("border-color", "red");
           
        } else if (!/[a-z]/.test(contraseña)) {
            $("#msjpassword").html("* Debe tener almenos una minuscula").css("color", "red");
            $("#txtcontraseña").css("border-color", "red");
           
        } else if (!/[#@!$%=]/.test(contraseña)) {
            $("#msjpassword").html("* Debe tener almenos un caracter especial").css("color", "red");
            $("#txtcontraseña").css("border-color", "red");
          
        } else if (contraseña.length < 8) {
            $("#msjpassword").html("* Debe tener como minimo 8 caracteres").css("color", "red");
            $("#txtcontraseña").css("border-color", "red");
           
        } else {
            $("#msjpassword").html("").css("color", "");
            $("#txtcontraseña").css("border-color", "");
        }



    }


   
   
})

let password = document.getElementById('txtcontraseña');

$("#faeye").on("click", function () {
    if (password.type === 'password') {

        password.setAttribute('type', 'text');
        $("#faeyeslash").show();
        $("#faeye").hide();

    }

})

$("#faeyeslash").on("click", function () {
    if (password.type === 'text') {

        password.setAttribute('type', 'password');
        $("#faeyeslash").hide();
        $("#faeye").show();

    }

})



/*************************
 ACTIVAR EMPLEADO
 ************************/


$(".tablas").on("click", ".btnactivar", function () {

    let iduser = $(this).attr("Activar");

    swal({
        title: '¿Esta seguro de activar al empleado?',
        text: '¡Si no lo esta puede cancelar la accion!',
        type: 'warning',
        showConfirmButton: true,
        showCancelButton: true,
        ConfirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        CancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, Activar',
        closeOnConfirm: false
    }, function (isConfirm) {
            //debugger;
            if (isConfirm) {
                let params = new Object();
                params.iduser = iduser
                Post("Empleados/activarEmpleado", params).done(function (datos) {
                   
                    if (datos.dt.response == "ok") {

                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: "Se activo al empleado correctamente",
                            text: 'Empleado activado',
                            showConfirmButton: true,
                            timer: 60000,
                            confirmButtonText: 'Cerrar'
                        }, function () {
                            window.location = fnBaseURLWeb("Empleados/Empleados");
                        })


                    } else {
                        swal({
                            position: 'top-end',
                            type: 'error',
                            title: datos.dt.response,
                            text: 'Contacte con el administrador o compre una licencia de usuarios',
                            showConfirmButton: true,
                            timer: 60000,
                            confirmButtonText: 'Cerrar'
                        })
                    }
                })
            }
            
    })

})

/*************************
   DESACTIVAR EMPLEADO
 ************************/


$(".tablas").on("click", ".btndesactivar", function () {

    let iduser = $(this).attr("Desactivar");

    swal({
        title: '¿Esta seguro de desactivar al empleado?',
        text: '¡Si no lo esta puede cancelar la accion!',
        type: 'warning',
        showConfirmButton: true,
        showCancelButton: true,
        ConfirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        CancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, Desactivar',
        closeOnConfirm: false
    }, function (isConfirm) {
        //debugger;
        if (isConfirm) {
            let params = new Object();
            params.iduser = iduser
            Post("Empleados/desactivarEmpleado", params).done(function (datos) {

                if (datos.dt.response == "ok") {

                    swal({
                        position: 'top-end',
                        type: 'success',
                        title: "Se desactivo al empleado correctamente",
                        text: 'Empleado desactivado',
                        showConfirmButton: true,
                        timer: 60000,
                        confirmButtonText: 'Cerrar'
                    }, function () {
                        window.location = fnBaseURLWeb("Empleados/Empleados");
                    })


                } else {
                    swal({
                        position: 'top-end',
                        type: 'error',
                        title: datos.dt.response,
                        text: 'Contacte con su administrador',
                        showConfirmButton: true,
                        timer: 60000,
                        confirmButtonText: 'Cerrar'
                    })
                }
            })
        }

    })

})

/*************************
   ELIMINAR EMPLEADO
 ************************/

$(".tablas").on("click", ".btneliminar", function () {

    let iduser = $(this).attr("Eliminar");

    swal({
        title: '¿Esta seguro de eliminar al empleado?',
        text: '¡Si no lo esta puede cancelar la accion!',
        type: 'warning',
        showConfirmButton: true,
        showCancelButton: true,
        ConfirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        CancelButtonText: 'Cancelar',
        confirmButtonText: 'Si, Eliminar',
        closeOnConfirm: false
    }, function (isConfirm) {
        //debugger;
        if (isConfirm) {
            let params = new Object();
            params.iduser = iduser
            Post("Empleados/eliminarEmpleado", params).done(function (datos) {

                if (datos.dt.response == "ok") {

                    swal({
                        position: 'top-end',
                        type: 'success',
                        title: "Se elimino al empleado correctamente",
                        text: 'Empleado eliminado',
                        showConfirmButton: true,
                        timer: 60000,
                        confirmButtonText: 'Cerrar'
                    }, function () {
                        window.location = fnBaseURLWeb("Empleados/Empleados");
                    })


                } else {
                    swal({
                        position: 'top-end',
                        type: 'error',
                        title: datos.dt.response,
                        text: 'Contacte con su administrador',
                        showConfirmButton: true,
                        timer: 60000,
                        confirmButtonText: 'Cerrar'
                    })
                }
            })
        }

    })

})


/*************************
   EDITAR EMPLEADO
 ************************/

$(".tablas").on("click", ".btneditar", function () {

    let iduser = $(this).attr("editar");

    let params = new Object()
    params.iduser = iduser;
    Post("Empleados/obteditarEmpleado", params).done(function (datos) {

        if (datos.dt.response == "ok") {
            $("#lblinicial").html("Editar Empleado");

            $("#divregistrarempleados").hide();
            $("#diveditarempleados").show();
            $("#divlistaempleados").hide();

            $("#txtiduser").val(datos.dt.iduser);
            $("#txteditusername").val(datos.dt.username);
            $("#txteditdni").val(datos.dt.dni);
            $("#txteditemail").val(datos.dt.email);
            $("#txteditusuario").val(datos.dt.user);

            $("#obt").append("<option value=" + datos.dt.idcargo + ">" + datos.dt.cargo + "</option");

            if (datos.dt.ventas == 1) {
                document.getElementById('editchventas').checked = true;
            }
            if (datos.dt.clientes == 1) {
                document.getElementById('editchclientes').checked = true;
            }
            if (datos.dt.caja == 1) {
                document.getElementById('editchcaja').checked = true;
            }
            if (datos.dt.compras == 1) {
                document.getElementById('editchcompras').checked = true;
            }
            if (datos.dt.productos == 1) {
                document.getElementById('editchproductos').checked = true;
            }
            if (datos.dt.inventario == 1) {
                document.getElementById('editchinventario').checked = true;
            }
            if (datos.dt.proveedor == 1) {
                document.getElementById('editchproveedores').checked = true;
            }
            if (datos.dt.dashboard == 1) {
                document.getElementById('editchdashboard').checked = true;
            }
            if (datos.dt.usuario == 1) {
                document.getElementById('editchusuarios').checked = true;
            }
            if (datos.dt.empresa == 1) {
                document.getElementById('editchempesa').checked = true;
            }
            if (datos.dt.configuraciones == 1) {
                document.getElementById('editchconfiguraciones').checked = true;
            }


        } else {
            swal({
                position: 'top-end',
                type: 'error',
                title: datos.dt.response,
                text: 'Contacte con el creador del sistema',
                showConfirmButton: true,
                timer: 60000,
                confirmButtonText: 'Cerrar'
            })
        }
    })



})


$("#btneditpass").on("click", function () {

    if ($("#txteditcontraseña").prop('disabled') == true) {

        $("#txteditcontraseña").prop('disabled', false);
        $("#txteditcontraseña").val("");
    } else {
        $("#txteditcontraseña").prop('disabled', true);
        $("#txteditcontraseña").val("**********************************");
    }
    
   
})


$("#btneditvolver").on("click", function () {
    window.location = fnBaseURLWeb("Empleados/Empleados"); 
})

$("#btneditar").on("click", function () {
    debugger;

    let iduser = $("#txtiduser").val();
    let nombre = $("#txteditusername").val();
    let dni = $("#txteditdni").val();
    let email = $("#txteditemail").val();
    let user = $("#txteditusuario").val();
    let password = "0";
    if ($("#txteditcontraseña").prop('disabled') == false) {
         password = $("#txteditcontraseña").val();
    } 

    let slcargo = $("#txteditcargo").val();

    let ischventas = document.getElementById('editchventas').checked;
    let ischclientes = document.getElementById('editchclientes').checked;
    let ischcaja = document.getElementById('editchcaja').checked;
    let ischcompras = document.getElementById('editchcompras').checked;
    let ischproductos = document.getElementById('editchproductos').checked;
    let ischinventario = document.getElementById('editchinventario').checked;
    let ischproveedores = document.getElementById('editchproveedores').checked;
    let ischdashboard = document.getElementById('editchdashboard').checked;
    let ischusuarios = document.getElementById('editchusuarios').checked;
    let ischempesa = document.getElementById('editchempesa').checked;
    let ischconfiguraciones = document.getElementById('editchconfiguraciones').checked;


    let ventas = 0;
    let clientes = 0;
    let caja = 0;
    let compras = 0;
    let productos = 0;
    let inventario = 0;
    let proveedores = 0;
    let dashboard = 0;
    let usuarios = 0;
    let empresa = 0;
    let configuraciones = 0;


    if (nombre.trim() == "") {
        $("#msjeditnombre").html("*Ingrese un nombre de cliente").css("color", "red");
        $("#txteditusername").css("border-color", "red");
        $("#txteditusername").focus();
    } else if (dni.trim() == "") {
        $("#msjeditdni").html("*Ingrese el dni del cliente").css("color", "red");
        $("#txteditdni").css("border-color", "red");
        $("#txteditdni").focus();
    } else if (email.trim() == "") {
        $("#msjeditemail").html("*Ingrese un email del cliente").css("color", "red");
        $("#txtediteditemail").css("border-color", "red");
        $("#txteditemail").focus();
    } else if (!validaEmail(email)) {
        $("#msjeditemail").html("*Ingrese un email valido").css("color", "red");
        $("#txteditemail").css("border-color", "red");
        $("#txteditemail").focus();
    } else if (user.trim() == "") {
        $("#msjedituser").html("*Ingrese el usuario del cliente").css("color", "red");
        $("#txteditusuario").css("border-color", "red");
        $("#txteditusuario").focus();

    } else if ($("#txteditcontraseña").prop('disabled') == false) {
        if (password.trim() == "") {
            $("#msjeditpassword").html("*Ingrese la contraseña del cliente").css("color", "red");
            $("#txteditcontraseña").css("border-color", "red");
            $("#txteditcontraseña").focus();
            return false;
        } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[#@!$%=]/.test(password) || password.length < 8) {
            $("#msjeditpassword").html("*La contraseña no cumple con los requisitos").css("color", "red");
            $("#txteditcontraseña").css("border-color", "red");
            $("#txteditcontraseña").focus();
            return false;
        }
    }

    if (slcargo == 0) {
        $("#msjeditslcargo").html("*Seleccione un cargo").css("color", "red");

    } else if (ischventas || ischclientes || ischcaja || ischcompras
        || ischproductos || ischinventario || ischproveedores || ischdashboard
        || ischusuarios || ischempesa || ischconfiguraciones) {

        if (ischventas) {
            ventas = 1
        }

        if (ischclientes) {
            clientes = 1
        }
        if (ischcaja) {
            caja = 1
        }
        if (ischcompras) {
            compras = 1
        }
        if (ischproductos) {
            productos = 1
        }
        if (ischinventario) {
            inventario = 1
        }
        if (ischproveedores) {
            proveedores = 1
        }
        if (ischdashboard) {
            dashboard = 1
        }
        if (ischusuarios) {
            usuario = 1
        }

        if (ischempesa) {
            empresa = 1
        }

        if (ischconfiguraciones) {
            configuraciones = 1
        }

        let idcargo = document.getElementById("txteditcargo");
        let stringcargo = idcargo.options[idcargo.selectedIndex].text;

        var params = new Object();
        params.iduser = iduser;
        params.nombre = nombre;
        params.dni = dni;
        params.email = email;
        params.user = user;
        params.password = password;
        params.slcargo = stringcargo;

        params.ventas = ventas;
        params.clientes = clientes;
        params.caja = caja;
        params.compras = compras;
        params.productos = productos;
        params.inventario = inventario;
        params.proveedor = proveedores;
        params.dashboard = dashboard;
        params.usuarios = usuarios;
        params.empresa = empresa;
        params.configuraciones = configuraciones;

        Post("Empleados/editarEmpleado", params).done(function (data) {

            if (data.dt.response == "ok") {
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: "Usuario editado correctamente",
                    text: 'Avisar al empleado si se cambio la contraseña',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                }, function () {
                    window.location = fnBaseURLWeb("Empleados/Empleados");
                })
            } else {
                swal({
                    position: 'top-end',
                    type: 'error',
                    title: data.dt.response,
                    text: 'por favor valide lo solicitado o contacte con el administrador',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                })
            }



        })

    } else {
        swal({
            position: 'top-end',
            type: 'error',
            title: "Debe seleccionar almenos un acceso",
            text: 'por favor valide lo solicitado',
            showConfirmButton: true,
            timer: 60000,
            confirmButtonText: 'Cerrar'
        })
    }





})



 $("#txteditcontraseña").keyup(function () {

        let contraseña = $("#txteditcontraseña").val();

        if (contraseña.trim() == "") {
            password.setAttribute('type', 'password');
            $("#faeyeslashedit").hide();
            $("#faeyeedit").show();
            $("#msjeditpassword").html("").css("color", "red");
        } else {
            $("#faeye").show();

            if (!/[A-Z]/.test(contraseña)) {
                $("#msjeditpassword").html("* Debe tener almenos una mayúscula").css("color", "red");
                $("#txteditcontraseña").css("border-color", "red");

            } else if (!/[a-z]/.test(contraseña)) {
                $("#msjeditpassword").html("* Debe tener almenos una minuscula").css("color", "red");
                $("#txteditcontraseña").css("border-color", "red");

            } else if (!/[#@!$%=]/.test(contraseña)) {
                $("#msjeditpassword").html("* Debe tener almenos un caracter especial").css("color", "red");
                $("#txteditcontraseña").css("border-color", "red");

            } else if (contraseña.length < 8) {
                $("#msjeditpassword").html("* Debe tener como minimo 8 caracteres").css("color", "red");
                $("#txteditcontraseña").css("border-color", "red");

            } else {
                $("#msjeditpassword").html("").css("color", "");
                $("#txteditcontraseña").css("border-color", "");
            }



        }




    })

let passwordedit = document.getElementById('txteditcontraseña');

$("#faeyeedit").on("click", function () {
    if (passwordedit.type === 'password') {

        passwordedit.setAttribute('type', 'text');
        $("#faeyeslashedit").show();
        $("#faeyeedit").hide();

    }

})

$("#faeyeslashedit").on("click", function () {
    if (passwordedit.type === 'text') {

        passwordedit.setAttribute('type', 'password');
        $("#faeyeslashedit").hide();
        $("#faeyeedit").show();

    }

})

$("#cerrarModulo").on("click", function () {
    window.location = fnBaseURLWeb("Panel/Panel"); 
})