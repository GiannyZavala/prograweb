function valida(){
    var usuario = document.getElementById('usuario');
    var pass = document.getElementById("password");



    if (usuario.value.length == 0 || pass.value.length == 0) {
        window.alert("Campos vacios:(");
    }
    else if (pass.value.length <= 6) {
        window.alert("Bien");
    }

    else {
        window.alert("deben ser menos de 6 car cact");
    }



}