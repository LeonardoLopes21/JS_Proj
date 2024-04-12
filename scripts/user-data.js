let isLogged = localStorage.getItem("isLogged");

function loginUser(){
    let user = checkIfUserExists();

    if(user == null){
        window.alert("Usuário não existe!");
        return;
    }
}

function checkIfUserExists(){
    let user = localStorage.getItem("user_rs");
    return user;
}