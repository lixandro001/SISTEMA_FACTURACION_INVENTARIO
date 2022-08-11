
$(document).ready(function () {


    $("#lblinicial").html("Proveedores");
    $(".divnewprovedor").hide();
    $(".diveditprovedor").hide();

})

$("#newproveedor").on("click", function () {

    $("#lblinicial").html("Nuevo proveedor");
    $(".divnewprovedor").show();
    $("#divlistaproveedores").hide();
})

$("#btnregistrar").on("click", function () {
    debugger;
    let ruc = $("#txtpruc").val();
    let razonsocial = $("#txtprazonsocial").val();
    let telefono = $("#txtptelefono").val();
    let email = $("#txtpemail").val();   
    let direccion = $("#txtpdireccion").val();
  
    
    if (ruc.trim() == "") {
        $("#msjruc").html("*Ingrese el ruc del proveedor").css("color", "red");
        $("#txtpruc").css("border-color", "red");
        $("#txtpruc").focus();
    } else if (razonsocial.trim() == "") {
        $("#msjrazonsocial").html("*Ingrese la razon social").css("color", "red");
        $("#txtprazonsocial").css("border-color", "red");
        $("#txtprazonsocial").focus();
    } else if (telefono.trim() == "") {
        $("#msjtelefonos").html("*Ingrese un telefono del proveedor").css("color", "red");
        $("#txtptelefono").css("border-color", "red");
        $("#txtptelefono").focus();
    }else if (email.trim() == "") {
        $("#msjemail").html("*Ingrese un email del cliente").css("color", "red");
        $("#txtpemail").css("border-color", "red");
        $("#txtpemail").focus();
    } else if (!validaEmail(email)) {
        $("#msjemail").html("*Ingrese un email valido").css("color", "red");
        $("#txtpemail").css("border-color", "red");
        $("#txtpemail").focus();
    } else if (direccion.trim() == "") {
        $("#msjdireccion").html("*Ingrese la direccion").css("color", "red");
        $("#txtpdireccion").css("border-color", "red");
        $("#txtpdireccion").focus();
    }  else {


        var params = new Object();
        params.ruc = ruc;
        params.razonsocial = razonsocial;
        params.telefono = telefono;
        params.email = email;
        params.direccion = direccion;

       
        Post("Proveedores/registrarProv", params).done(function (data) {
            debugger;
            if (data.dt.response == "ok") {
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: "Proveedor registrado correctamente",
                    text: 'success',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                }, function () {
                        window.location = fnBaseURLWeb("Proveedores/Proveedores");
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

    } 

})

$("#txtpruc").keyup(function () {
    $("#msjruc").html("").css("color", "red");
    $("#txtpruc").css("border-color", "");
   
})

$("#txtprazonsocial").keyup(function () {
    $("#msjrazonsocial").html("").css("color", "red");
    $("#txtprazonsocial").css("border-color", "");
})

$("#txtptelefono").keyup(function () {
    $("#msjtelefonos").html("").css("color", "red");
    $("#txtptelefono").css("border-color", "");
})

$("#txtpemail").keyup(function () {
    $("#msjemail").html("").css("color", "red");
    $("#txtpemail").css("border-color", "");

})

$("#txtpdireccion").keyup(function () {
    $("#msjdireccion").html("").css("color", "red");
    $("#txtpdireccion").css("border-color", "");

})

$("#btnvolver").on("click", function () {
    window.location = fnBaseURLWeb("Proveedores/Proveedores");
})

$("#cerrarModulo").on("click", function () {
    window.location = fnBaseURLWeb("Panel/Panel");
})


/*************************
 ACTIVAR PROVEEDOR
 ************************/


$(".tablas").on("click", ".btnactivar", function () {

    let idprov = $(this).attr("Activar");

    swal({
        title: '¿Esta seguro de activar al proveedor?',
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
            params.idprov = idprov
            Post("Proveedores/activarProveedor", params).done(function (datos) {

                if (datos.dt.response == "ok") {

                    swal({
                        position: 'top-end',
                        type: 'success',
                        title: "Se activo al proveedor correctamente",
                        text: 'Proveedor activado',
                        showConfirmButton: true,
                        timer: 60000,
                        confirmButtonText: 'Cerrar'
                    }, function () {
                            window.location = fnBaseURLWeb("Proveedores/Proveedores");
                    })


                } else {
                    swal({
                        position: 'top-end',
                        type: 'error',
                        title: datos.dt.response,
                        text: 'Contacte con el administrador',
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
   DESACTIVAR PROVEEDOR
 ************************/


$(".tablas").on("click", ".btndesactivar", function () {

    let idprov = $(this).attr("Desactivar");

    swal({
        title: '¿Esta seguro de desactivar al proveedor?',
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
            params.idprov = idprov
            Post("Proveedores/desactivarProveedor", params).done(function (datos) {

                if (datos.dt.response == "ok") {

                    swal({
                        position: 'top-end',
                        type: 'success',
                        title: "Se desactivo al proveedor correctamente",
                        text: 'Empleado desactivado',
                        showConfirmButton: true,
                        timer: 60000,
                        confirmButtonText: 'Cerrar'
                    }, function () {
                            window.location = fnBaseURLWeb("Proveedores/Proveedores");
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
   ELIMINAR PROVEEDOR
 ************************/

$(".tablas").on("click", ".btneliminar", function () {

    let idprov = $(this).attr("Eliminar");

    swal({
        title: '¿Esta seguro de eliminar al proveedor?',
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
            params.idprov = idprov
            Post("Proveedores/eliminarProveedor", params).done(function (datos) {

                if (datos.dt.response == "ok") {

                    swal({
                        position: 'top-end',
                        type: 'success',
                        title: "Se elimino al proveedor correctamente",
                        text: 'Proveedor eliminado',
                        showConfirmButton: true,
                        timer: 60000,
                        confirmButtonText: 'Cerrar'
                    }, function () {
                            window.location = fnBaseURLWeb("Proveedores/Proveedores");
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



$(".tablas").on("click", ".btneditar", function () {

    let idprov = $(this).attr("editar");

    let params = new Object();
    params.idprov = idprov
    Post("Proveedores/obteditarProveedor", params).done(function (datos) {

        if (datos.dt.response = "ok") {
            debugger;
            $("#divlistaproveedores").hide();
            $(".divnewprovedor").hide();           
            $(".diveditprovedor").show();
            $("#lblinicial").html("Editar Proveedores");

            $("#idprov").val(datos.dt.idprov);
            $("#txteditpruc").val(datos.dt.ruc);
            $("#txteditprazonsocial").val(datos.dt.razonsocial);
            $("#txteditptelefono").val(datos.dt.telefono);
            $("#txteditpemail").val(datos.dt.email);
            $("#txteditpdireccion").val(datos.dt.direccion);


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
})

$("#btneditar").on("click", function () {
   let idprov =  $("#idprov").val();
    let ruc = $("#txteditpruc").val();
    let razonsocial = $("#txteditprazonsocial").val();
    let telefono = $("#txteditptelefono").val();
    let email = $("#txteditpemail").val();
    let direccion = $("#txteditpdireccion").val();


    if (ruc.trim() == "") {
        $("#msjeditruc").html("*Ingrese el ruc del proveedor").css("color", "red");
        $("#txteditpruc").css("border-color", "red");
        $("#txteditpruc").focus();
    } else if (razonsocial.trim() == "") {
        $("#msjeditrazonsocial").html("*Ingrese la razon social").css("color", "red");
        $("#txteditprazonsocial").css("border-color", "red");
        $("#txteditprazonsocial").focus();
    } else if (telefono.trim() == "") {
        $("#msjedittelefonos").html("*Ingrese un telefono del proveedor").css("color", "red");
        $("#txteditptelefono").css("border-color", "red");
        $("#txteditptelefono").focus();
    } else if (email.trim() == "") {
        $("#msjeditemail").html("*Ingrese un email del cliente").css("color", "red");
        $("#txtpemail").css("border-color", "red");
        $("#txteditpemail").focus();
    } else if (!validaEmail(email)) {
        $("#msjemail").html("*Ingrese un email valido").css("color", "red");
        $("#txteditpemail").css("border-color", "red");
        $("#txteditpemail").focus();
    } else if (direccion.trim() == "") {
        $("#msjeditdireccion").html("*Ingrese la direccion").css("color", "red");
        $("#txteditpdireccion").css("border-color", "red");
        $("#txteitpdireccion").focus();
    } else {


        var params = new Object();
        params.idprov = idprov
        params.ruc = ruc;
        params.razonsocial = razonsocial;
        params.telefono = telefono;
        params.email = email;
        params.direccion = direccion;


        Post("Proveedores/editarProv", params).done(function (data) {
            //debugger;
            if (data.dt.response == "ok") {
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: "Proveedor editado correctamente",
                    text: 'success',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                }, function () {
                    window.location = fnBaseURLWeb("Proveedores/Proveedores");
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

    } 
})

$("#btneditvolver").on("click", function () {
    window.location = fnBaseURLWeb("Proveedores/Proveedores");
})
