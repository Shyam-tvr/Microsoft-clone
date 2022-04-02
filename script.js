function validation(event) {
    event.preventDefault();
    var username=document.getElementById("username").value;
    var password=document.getElementById("password").value;
    if (username=='user'&&password=='password') {
        window.location.replace("./Microsoft-clone/index.html");
    }else{
        alert("Login failed ...")
    }
}

    if (window.location.pathname == '/Microsoft-clone/index.html') {
        var a=document.getElementById("user");
        a.innerHTML= 'user'
    }





