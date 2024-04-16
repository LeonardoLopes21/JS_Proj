let isLogged = localStorage.getItem("isLogged");

function loginUser(){
    let user = getUser();

    if(user){
        isLogged = true;
        refreshNavbar();
        goHome();
    } else {
        window.alert("Email e/ou senha incorretos!")
    }
}

function getUser(){

    let email = $("#input-email").val();
    let pass = $("#input-pass").val();

    for(let i in userList){
        if(userList[i].email == email && userList[i].pass == pass){
            return true
        }
    }

    return false;
}

function verifyIfEmailExists(arr, email){
    for(let i in arr){
        if(arr[i].email == email){
            return true;
        }
    }
}

function registerUser(){

    let newUser = {

    }

    newUser.name = $("#input-username").val();
    newUser.email = $("#input-email").val();
    newUser.pass = $("#input-pass").val();
    newUser.cpf = $("#input-cpf").val();
    newUser.fathcpf = $("input-fath-cpf").val();
    newUser.mothcpf = $("input-moth-cpf").val();
    newUser.fath = $("#input-fath").val();
    newUser.moth = $("#input-moth").val();
    newUser.birthday = $("#input-age").val();

    if($("#other-gen").is(":visible")){
        newUser.gen = $("#other-gen").val();
    } else {
        newUser.gen = $("#input-gen").val();
    }
    newUser.cep = $("#input-cep").val();
    newUser.street = $("#input-street").val();
    newUser.num = $("#input-num").val();
    newUser.cdc = $("#input-cdc").val();
    
    if(checkIfAnyErrors() > 0){
        return
    } else {
        userList.push(newUser)
        localStorage.setItem("userlist",JSON.stringify(userList))
        $("#input-pass").val("")
        switchToLogin();
        goHome();
    }
    
}