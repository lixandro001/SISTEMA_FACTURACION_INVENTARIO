$(document).ready(function () {
    $("#lblprin").html("PROMOCIONES DE PRODUCTOS");
    document.getElementById("btnpromociones").disabled = true;

    $(".divnewpromo").hide();
    $(".diveditpromo").hide();

    $(".ocultar").hide();
    //$(".diveditdepartamento").hide();
    $("#txtdescripcion").hide();
    $("#txtcodbarra").show();
    
    document.getElementById("btnlectora").disabled = true;

})


$("#btncatalogo").on("click", function () {
    window.location = fnBaseURLWeb("Productos/Productos");
})

$("#btndepartamentos").on("click", function () {
    window.location = fnBaseURLWeb("Departamentos/Departamentos");
})


$("#btnewpromo").on("click", function () {
    $(".divnewpromo").show();
    $(".divpromocion").hide();
    $("#lblprin").html("NUEVA PROMOCIÓN");
    $("#txtcodbarra").focus();
})


$("#btnlectora").on("click", function () {
    $("#txtdescripcion").hide();
    $("#txtcodbarra").show();
    document.getElementById("btnteclado").disabled = false;
    document.getElementById("btnlectora").disabled = true;
    $("#txtdescripcion").val("");
    $("#txtcodbarra").val("");
})


$("#btnteclado").on("click", function () {
    $("#txtdescripcion").show();
    $("#txtcodbarra").hide();
    $("#txtdescripcion").val("");
    $("#txtcodbarra").val("");
    document.getElementById("btnteclado").disabled = true;
    document.getElementById("btnlectora").disabled = false;
})


$("#txtdescripcion").autocomplete({

    source: function (request, response) {
        PostAutocomplete("Productos/obtlistaProducto/", request.term).done(function (data) {
            
            response($.map(data, function (item) {

                return { label: item.desc, value: item.desc, id: item.idproducto, precioventa: item.precioventa };

            }))

        })
    }, 


    select: function (event, ui) {

        let descripcion = ui.item.value;
        let pventa = ui.item.precioventa;
        let idproducto = ui.item.id;

        $("#lbldescripcion").html(descripcion).css("color", "Green");

        $("#lblpventa").html(pventa).css("color", "Green");
        $("#txtidproducto").val(idproducto);
        $("#txtdescripcion").val("");
    }

})


$("#txtcodbarra").keyup(function (e) {
    e.preventDefault();
    tecla = e.which;
    cod = $("#txtcodbarra").val();

    if (tecla == 13) {
       
        let params = new Object();
        params.codbarra = cod;
        Post("Productos/obtlistaProducto_cod", params).done(function (datos) {
            debugger;
            $("#lbldescripcion").html(datos.dt[0].desc).css("color", "Green");

            $("#lblpventa").html(datos.dt[0].precioventa).css("color", "Green");

            $("#txtidproducto").val(datos.dt[0].idproducto);
        })
    }

    

})



$("#btnguardar").on("click", function () {


    let idproducto = $("#txtidproducto").val();
    let nompromo = $("#txtpromo").val();
    let finicio = $("#txtfinicio").val();
    let ffin = $("#txtffin").val();
    debugger;
    if (idproducto == "") {
        alertify.error("Tiene que buscar un producto");
        $("#txtcodbarra").focus();
    } else if (nompromo.trim() == "") {
        alertify.error("Ingrese el nombre de la promocion");
        $("#txtpromo").focus();
        $("#txtpromo").css("border-color", "red");
    } else if (finicio.trim() == "") {
        alertify.error("Ingrese la fecha de inicio");
        $("#txtfinicio").css("border-color", "red");
    } else if (ffin.trim() == "") {
        alertify.error("Ingrese la fecha de fin");
        $("#txtffin").css("border-color", "red");
    } else {


        let params = new Object();
        params.idproducto = idproducto;
        params.nompromo = nompromo;
        params.finicio = finicio;
        params.ffin = ffin;

        Post("Promociones/guardarPromocion", params).done(function (datos) {

            if (datos.dt.response == "ok") {
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: "Promoción registrada correctamente",
                    text: 'success',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                }, function () {
                        window.location = fnBaseURLWeb("Promociones/Promociones");
                })
            } else {
                swal({
                    position: 'top-end',
                    type: 'error',
                    title: datos.dt.response,
                    text: 'por favor valide lo solicitado o contacte con el administrador',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                })
            }

        })


    }


})


$("#btneliminar").on("click", function () {


    swal({
        title: '¿Esta seguro de eliminar la promoción?',
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


            let tabla = $('.tablas').DataTable();
            let data = tabla.rows().data();

            let hayseleccion = 0;
            let datos = "";

            for (var i = 1; i <= data.length; i++) {
                if ($('#cbox_' + i).is(":checked")) {
                    datos = datos + $.trim($("#row_" + i).text()) + "|";
                    hayseleccion = 1;
                }
            }

            if (hayseleccion == 1) {

                let params = new Object();
                params.datos = datos;
                Post("Promociones/eliminarPromociones", params).done(function (datos) {

                    if (datos.dt.response == "ok") {

                        swal({
                            position: 'top-end',
                            type: 'success',
                            title: "Se elimino la promoción correctamente",
                            text: 'Promoción eliminada',
                            showConfirmButton: true,
                            timer: 60000,
                            confirmButtonText: 'Cerrar'
                        }, function () {
                                window.location = fnBaseURLWeb("Promociones/Promociones");
                        })


                    }

                })


            } else {
                swal({
                    position: 'top-end',
                    type: 'error',
                    title: 'No a seleccionado ningun una promoción',
                    text: 'debe seleccionar almenos una promoción para eliminarlo.',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                })
            }

        }

    })

})

$("#btnModificar").on("click", function () {

    let tabla = $('.tablas').DataTable();
    let data = tabla.rows().data();

    let hayseleccion = 0;
    let datos = "";

    for (var i = 1; i <= data.length; i++) {
        if ($('#cbox_' + i).is(":checked")) {
            datos = datos + $.trim($("#row_" + i).text()) + "|";
            hayseleccion = 1;
        }
    }


    if (hayseleccion == 1) {

        let params = new Object();
        params.datos = datos;
        Post("Promociones/obtEditarPromo", params).done(function (datos) {

            if (datos.dt.response != "Error") {
                $("#lblprin").html("EDITAR PROMOCIÓN");

                $(".diveditpromo").show();
                $(".divpromocion").hide();
                $("#edittxtidproducto").val(datos.dt.idproducto);
                $("#edittxtidpromo").val(datos.dt.idpromocion);
                
                $("#editlbldescripcion").html(datos.dt.descProducto).css("color", "Green");
                $("#editlblpventa").html(datos.dt.pventa1).css("color", "Green");
                $("#edittxtpromo").val(datos.dt.nombrePromocion);

                document.getElementById("edittxtfinicio").value = datos.dt.finicio;
                document.getElementById("edittxtffin").value = datos.dt.ffin;


            } else {
                swal({
                    position: 'top-end',
                    type: 'error',
                    title: 'Debe seleccionar una promoción para editar',
                    text: 'No debe seleccionar mas de una promoción.',
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
            title: 'Seleccione almenos una promoción',
            text: 'No a seleccionado una promoción.',
            showConfirmButton: true,
            timer: 60000,
            confirmButtonText: 'Cerrar'
        })
    }




})

$("#btnEditar").on("click", function () {


    let idpromo = $("#edittxtidpromo").val();
    let nompromo = $("#edittxtpromo").val();
    let finicio = $("#edittxtfinicio").val();
    let ffin = $("#edittxtffin").val();
    debugger;
    if (nompromo.trim() == "") {
        alertify.error("Ingrese el nombre de la promocion");
        $("#edittxtpromo").focus();
        $("#edittxtpromo").css("border-color", "red");
    } else if (finicio.trim() == "") {
        alertify.error("Ingrese la fecha de inicio");
        $("#edittxtfinicio").css("border-color", "red");
    } else if (ffin.trim() == "") {
        alertify.error("Ingrese la fecha de fin");
        $("#edittxtffin").css("border-color", "red");
    } else {


        let params = new Object();
        params.idpromo = idpromo;
        params.nompromo = nompromo;
        params.finicio = finicio;
        params.ffin = ffin;

        Post("Promociones/editarPromocion", params).done(function (datos) {

            if (datos.dt.response == "ok") {
                swal({
                    position: 'top-end',
                    type: 'success',
                    title: "Promoción editada correctamente",
                    text: 'success',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                }, function () {
                    window.location = fnBaseURLWeb("Promociones/Promociones");
                })
            } else {
                swal({
                    position: 'top-end',
                    type: 'error',
                    title: datos.dt.response,
                    text: 'por favor valide lo solicitado o contacte con el administrador',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                })
            }

        })


    }


})

$(".btnvolver").on("click", function () {
    window.location = fnBaseURLWeb("Promociones/Promociones");
})

$("#cerrarModulo").on("click", function () {
    window.location = fnBaseURLWeb("Panel/Panel");
})

