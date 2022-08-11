

let password = document.getElementById('txtpassword');

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


$("#btningresar").on("click", function () {

    var ruc = $("#txtrucdni").val();
    var user = $("#txtuser").val();
    var pass = $("#txtpassword").val();

    console.log(ruc);
    console.log(user);
    console.log(pass);

    if (ruc.trim() == "") {
        $("#msjrucdni").html("* Ingres un ruc").css("color", "red");
    } else if (user.trim() == "") {
        $("#msjuser").html("* Ingres un usuario").css("color", "red");
    } else if (pass.trim() == "") {
        $("#msjpasswords").html("* Ingres una contraseña").css("color", "red");
    } else {

        var params = new Object();
        params.ruc = ruc;
        params.user = user;
        params.pass = pass;
        Post("Login/Acceder", params).done(function (datos) {
            console.log(datos);
            if (datos.dt.response == "ok") {
                window.location = fnBaseURLWeb("Panel/Panel");
            } else if (datos.dt == null) {
                swal({
                    position: "top-end",
                    type: "error",
                    title: datos.dt.response,
                    text: 'ERROR DEL SISTEMA',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                })
            }else {
                swal({
                    position: "top-end",
                    type: "error",
                    title: datos.dt.response,
                    text: 'Valide los campos solicitados o contacte con el administrador',
                    showConfirmButton: true,
                    timer: 60000,
                    confirmButtonText: 'Cerrar'
                })
            }
        });
    }

})

$("#txtrucdni").keyup(function () {
    $("#msjrucdni").html("").css("color", "red");
})

$("#txtuser").keyup(function () {
    $("#msjuser").html("").css("color", "red");
})

$("#txtpassword").keyup(function () {
    $("#msjpasswords").html("").css("color", "red");
})