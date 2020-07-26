function validar() {
    var login1 = document.querySelector("#login");
    var pass1 = document.querySelector("#password");
    var login = login1.value;
    var pass = pass1.value;

    var usuario = "alfredolopezq01@gmail.com";
    var password = "123456";

    if (login == "") {
        alert("El campo de \"LOGIN\" no puede estar vacio!!!");
        return false;
    }
    if (pass == "") {
        alert("El campo de \"PASSWORD\" no puede estar vacio!!!");
        return false;
    }

    // validamos el email qu ecumpla con los estandares minimos
    re = /^([\da-z_\.-]+)@([\da-z\.-]+)\.([a-z\.]{2,6})$/
    if (!re.exec(login)) {
        alert('email no valido!!!');
        return false;
    }

    if (login != usuario) {
        alert("El LOGIN  no coincide, revice sus datos!!!");
        return false;
    }
    if (pass != password) {
        alert("El PASSWORD  no coincide, revice sus datos!!!");
        return false;
    }
    window.open('principal.html', '_blank');
}