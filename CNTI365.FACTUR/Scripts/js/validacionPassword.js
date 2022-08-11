
document.getElementById("btnregistrar").disabled = true;

/* vamos a crar unas variables */
let password = document.getElementById('txtcontraseña');
let confirPassword = document.getElementById('txtconfircontraseña');

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


$("#txtcontraseña").keyup(function () {

    let contraseña = $("#txtcontraseña").val();
    let confircontraseña = $("#txtconfircontraseña").val();

    if (contraseña.trim() == "") {
        password.setAttribute('type', 'password');
        $("#faeyeslash").hide();
        $("#faeye").show();
        $("#msjpassword").html("").css("color", "red");
    } else{
        $("#faeye").show();

        if (!/[A-Z]/.test(contraseña)) {
            $("#msjpassword").html("* Debe tener almenos una mayúscula").css("color", "red");
            $("#txtcontraseña").css("border-color", "red");
            document.getElementById("btnregistrar").disabled = true;
        } else if (!/[a-z]/.test(contraseña)) {
            $("#msjpassword").html("* Debe tener almenos una minuscula").css("color", "red");
            $("#txtcontraseña").css("border-color", "red");
            document.getElementById("btnregistrar").disabled = true;
        } else if (!/[#@!$%=]/.test(contraseña)) {
            $("#msjpassword").html("* Debe tener almenos un caracter especial").css("color", "red");
            $("#txtcontraseña").css("border-color", "red");
            document.getElementById("btnregistrar").disabled = true;
        } else if (contraseña.length < 8) {
            $("#msjpassword").html("* Debe tener como minimo 8 caracteres").css("color", "red");
            $("#txtcontraseña").css("border-color", "red");
            document.getElementById("btnregistrar").disabled = true;
        } else if (confircontraseña != "") {
            if (contraseña != confircontraseña) {
                $("#msjpassword").html("* las contraseñas no coinciden").css("color", "red");
                $("#txtcontraseña").css("border-color", "red");
                document.getElementById("btnregistrar").disabled = true;
            } else {
                $("#msjpassword").html("").css("color", "red");
                $("#txtcontraseña").css("border-color", "");
                $("#txtconfircontraseña").css("border-color", "");
                document.getElementById("btnregistrar").disabled = false;
                $("#msjconfirpassword").html("").css("color", "red");
            }
        } else {
            $("#msjpassword").html("").css("color", "red");
            $("#txtcontraseña").css("border-color", "");
            document.getElementById("btnregistrar").disabled = false;
        }



    }

})





/************************************************/

$("#confirfaeye").on("click", function () {
    if (confirPassword.type === 'password') {

        confirPassword.setAttribute('type', 'text');
        $("#confirfaeyeslash").show();
        $("#confirfaeye").hide();

    }

})

$("#confirfaeyeslash").on("click", function () {
    if (confirPassword.type === 'text') {

        confirPassword.setAttribute('type', 'password');
        $("#confirfaeyeslash").hide();
        $("#confirfaeye").show();

    }

})


$("#txtconfircontraseña").keyup(function () {

    let contraseña = $("#txtcontraseña").val();
    let confircontraseña = $("#txtconfircontraseña").val();

    if (confircontraseña.trim() == "") {
        password.setAttribute('type', 'password');
        $("#confirfaeyeslash").hide();
        $("#confirfaeye").show();
        $("#msjconfirpassword").html("").css("color", "red");
    } else {
        $("#confirfaeye").show();

        if (!/[A-Z]/.test(confircontraseña)) {
            $("#msjconfirpassword").html("* Debe tener almenos una mayúscula").css("color", "red");
            $("#txtconfircontraseña").css("border-color", "red");
            document.getElementById("btnregistrar").disabled = true;
        } else if (!/[a-z]/.test(confircontraseña)) {
            $("#msjconfirpassword").html("* Debe tener almenos una minuscula").css("color", "red");
            $("#txtconfircontraseña").css("border-color", "red");
            document.getElementById("btnregistrar").disabled = true;
        } else if (!/[#@!$%=]/.test(confircontraseña)) {
            $("#msjconfirpassword").html("* Debe tener almenos un caracter especial").css("color", "red");
            $("#txtconfircontraseña").css("border-color", "red");
            document.getElementById("btnregistrar").disabled = true;
        } else if (confircontraseña.length < 8) {
            $("#msjconfirpassword").html("* Debe tener como minimo 8 caracteres").css("color", "red");
            $("#txtconfircontraseña").css("border-color", "red");
            document.getElementById("btnregistrar").disabled = true;
        } else if (confircontraseña != "") {
            if (confircontraseña != contraseña) {
                $("#msjconfirpassword").html("* las contraseñas no coinciden").css("color", "red");
                $("#txtconfircontraseña").css("border-color", "red");

                document.getElementById("btnregistrar").disabled = true;

            } else {
                $("#msjconfirpassword").html("").css("color", "red");
                $("#txtcontraseña").css("border-color", "");
                $("#txtconfircontraseña").css("border-color", "");
                $("#msjpassword").html("").css("color", "red");
                document.getElementById("btnregistrar").disabled = false;
            }
        } else {
            $("#msjconfirpassword").html("").css("color", "red");
            $("#txtconfircontraseña").css("border-color", "");
            document.getElementById("btnregistrar").disabled = false;
        }



    }

})






