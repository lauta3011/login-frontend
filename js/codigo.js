$("#btnIngresar").click(ingresar);

var users = [{mail:"admin",pass:"admin"}, {mail:"aaa",pass:"123"}];

function ingresar(){
    var mail = $("#txtEmail").val();
    var password = $("#txtPassword").val();
    
    for (i = 0; i < users.length; i++) {
        if(mail === users[i].mail && password === users[i].pass){
            window.location.replace("datos.html");
        }
    }
}