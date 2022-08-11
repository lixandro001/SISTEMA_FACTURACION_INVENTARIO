$(document).ready(function () {
    $("#lblprin").html("AJUSTAR EL INVENTARIO");
    document.getElementById("btnagregarinventario").disabled = false;
    document.getElementById("btnajustesinventario").disabled = true;

    $("#txtletora").show();
    $("#txtletora").focus();
    document.getElementById("btnlectora").disabled = true;
    $("#txtteclado").hide();
    document.getElementById("btnteclado").disabled = false;

    $(".oculto").show();
})


$("#btnteclado").on("click", function () {

    $("#txtletora").hide();
    document.getElementById("btnlectora").disabled = false;
    $("#txtteclado").show();
    $("#txtteclado").focus();
    document.getElementById("btnteclado").disabled = true;

})

$("#btnlectora").on("click", function () {

    $("#txtletora").show();
    $("#txtletora").focus();
    document.getElementById("btnlectora").disabled = true;
    $("#txtteclado").hide();
    document.getElementById("btnteclado").disabled = false;

})


$("#txtteclado").autocomplete({

    source: function (request, response) {
        PostAutocomplete("Productos/obtlistaProducto/", request.term).done(function (data) {

            response($.map(data, function (item) {

                return { label: item.desc, value: item.desc, id: item.idproducto, precioventa: item.precioventa, existen: item.existen };

            }))

        })
    },


    select: function (event, ui) {


        let descripcion = ui.item.value;
        let pventa = ui.item.precioventa;
        let idproducto = ui.item.id;
        let existen = ui.item.existen;

        $(".oculto").show();

        $("#lbldescripcion").html(descripcion).css("color", "Green");
        $("#llbprecioventa").html(pventa).css("color", "Green");
        $("#lblexistencias").html(existen);
        $("#txtidproducto").val(idproducto);

        //$("#txtteclado").val("");
    }

})


$("#txtletora").keyup(function (e) {
    e.preventDefault();
    tecla = e.which;
    cod = $("#txtletora").val();

    if (tecla == 13) {

        let params = new Object();
        params.codbarra = cod;
        Post("Productos/obtlistaProducto_cod", params).done(function (datos) {

            $(".oculto").show();

            $("#lbldescripcion").html(datos.dt[0].desc).css("color", "Green");
            $("#llbprecioventa").html(datos.dt[0].precioventa).css("color", "Green");
            $("#lblexistencias").html(datos.dt[0].existen);
            $("#txtidproducto").val(datos.dt[0].idproducto);
        })
    }

})




$("#btnagregarinventario").on("click", function () {
    window.location = fnBaseURLWeb("Inventarios/Inventarios");
})