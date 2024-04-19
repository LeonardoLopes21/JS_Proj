function isEmpty(id){
    let element = $("#" + id);
    return element.val().length < 1;
}


function isCreatingAccount(){

    let header = $("#create-login-header").html();

    return header != "Login"

}

function containNumbers(id){
    let numbers = "0123456789"
    let element = $("#" + id);
    for(let i in numbers){
        if(element.val().includes(numbers[i])){
            return true;
        }
    }

    return false;
}

function nameValidationBlur(id){

    if(!isCreatingAccount()){
        return
    }

    let element = $("#" + id);
    if(isEmpty(id)||containNumbers(id)||!hasTwoFullValues(id)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }
    

}

function hasNecessaryCharacters(array, text){

    for(let i in array){
        if(!text.includes(array[i])){
            return false;
        }
    }

    return true;
    
}

function hasAtLeastOne(array, text){
    let identifiers = 0;
    for(let i in array){
        if(text.includes(array[i])){
            identifiers++;
            break;
        }
    }

    return identifiers > 0;
}

function hasAnyEmailProvider(text){
    return hasAtLeastOne(["gmail", "outlook", "hotmail"], text);
}

function hasNecessaryCharactersEmail(text){
    let hasBasics = hasNecessaryCharacters(["@", ".com"], text);

    return hasBasics;
}



function validateEmailHover(id){

    if(!isCreatingAccount()){
        return
    }
    
    let element = $("#" + id)[0];
    let text = element.value;
    element.setAttribute("title", "")
    let errCount = 0;
    //Checagem se o campo está vazio 
    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!")
        }
        errCount++
    }

    if(!hasNecessaryCharactersEmail(text)){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Email deve incluir @ e .com");
        } else {
            element.setAttribute("title", element.title += "\nEmail deve incluir @ e .com!")
        }
        errCount++

    }

    if(!hasAnyEmailProvider(text)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Email deve possuir um provedor válido");
        } else {
            element.setAttribute("title", element.title += "\nEmail deve possuir um provedor válido!")
        }
        errCount++
    }

    if(verifyIfEmailExists(userList, text)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Email já está em uso");
        } else {
            element.setAttribute("title", element.title += "\nEmail já está em uso!")
        }
        errCount++

    }


    if(errCount < 1){
        element.setAttribute("title", element.title += ":D");
    }

    

}

function emailValidationBlur(id){

    if(!isCreatingAccount()){
        return
    }
    let element = $("#" + id);
    let text = element.val();
    if(isEmpty(id)|| !hasNecessaryCharactersEmail(text)|| !hasAnyEmailProvider(text) || verifyIfEmailExists(userList, text)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }
    

}

function hasTwoFullValues(id){
    if(!isCreatingAccount()){
        return
    }
    let element = $("#" + id);
    let array = element.val().split(" ")
    let filteredArray = []
    for(let i in array){
        if(array[i] != "" && array[i].length > 1){
            filteredArray.push(array[i])
        }
    }

    return filteredArray.length > 1;

}

function nameValidationHover(id){
    if(!isCreatingAccount()){
        return
    }
    let element = $("#" + id)[0];
    element.setAttribute("title", "")
    let errCount = 0;
    //Checagem se o campo está vazio 
    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!")
        }
        errCount++
    }

    if(containNumbers(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo contém números!");
        } else {
            element.setAttribute("title", element.title += "\nCampo contém números!")
        }
        errCount++
    }

    if(!hasTwoFullValues(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Nome não está completo!");
        } else {
            element.setAttribute("title", element.title += "\nNome não está completo!")
        }
        errCount++
    }

    if(errCount < 1){
        element.setAttribute("title", ":D");
    }
}

function eliminateUnwantedChars(unwantedchars, text){
    let newText = text;
    for(let i in unwantedchars){
        if(newText.includes(unwantedchars[i])){
            newText = newText.replace(unwantedchars[i], "");
        }
    }

    return newText;
}

function checkSpecialCharacters(text){
    return hasAtLeastOne("!@#$%¨&*()_+;.,\\/", text)
}


function passwordValidationHover(id, idorigin){
    if(!isCreatingAccount()){
        return
    }
    let element = $("#" + id)[0];
    let repeat = $("#" + idorigin)[0];
    text = element.value;
    element.setAttribute("title", "")
    let errCount = 0;

    if(!containNumbers(id)){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Senha deve conter números!");
        } else {
            element.setAttribute("title", element.title += "\nSenha deve conter números!");
        }
        errCount++

    }

    if(text.length < 8){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Senha deve conter pelo menos 8 caracteres!");
        } else {
            element.setAttribute("title", element.title += "\nSenha deve conter pelo menos 8 caracteres");
        }
        errCount++


    }

    if(!checkSpecialCharacters(text)){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Senha possuir pelo menos um caracter especial!");
        } else {
            element.setAttribute("title", element.title += "\nSenha possuir pelo menos um caracter especial!");
        }
        errCount++

    }

}


function passwordValidationBlur(id, idorigin){

    if(!isCreatingAccount()){
        return
    }

    let element = $("#" + id);
    let repeat = $("#" + idorigin)[0];
    let text = element.val();
    if(isEmpty(id)|| text.length < 8|| !checkSpecialCharacters(text) || !containNumbers(id)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

    if(repeat.value != text){

        repeat.classList.add("red-error")
        
    } else {
        repeat.classList.remove("red-error");
    }

}

function repeatPasswordValidationHover(id, idorigin){

    if(!isCreatingAccount()){
        return
    }

    let element = $("#" + id)[0];
    let elementorigin = $("#" + idorigin);
    element.setAttribute("title", "")
    let errCount = 0;

    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!");
        }
        errCount++

    }

    if(elementorigin.val() != element.value){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Senhas devem ser iguais!");
        } else {
            element.setAttribute("title", element.title += "\nSenha devem ser iguais!");
        }
        errCount++

    }

}

function repeatPasswordValidationBlur(id, idorigin){

    if(!isCreatingAccount()){
        return
    }

    let element = $("#" + id);
    let elementorigin = $("#" + idorigin);
    let textpassr = element.val();
    let textpass = elementorigin.val(); 
    if(textpass != textpassr || isEmpty(id)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}


function adjustCPF(string){
    let newString = string.replace(".", "");
    newString = newString.replace(".", "");
    newString = newString.replace("-", "");

    let stringArr = newString.match(/.{1,3}/g)
    let cpfend = stringArr.pop();

    let finalString = (stringArr.join('.') + "-" + cpfend);

    return finalString;
}

function cpfAdjusting(id){

    let input = $("#" + id)
    let inputVal = input.val();

    let invalidChars = "abcdefghijlmnopqrstuvwxyzáéíóúãõ;!@#$%¨&*()_+="
    let upperCaseInvalidChars = invalidChars.toUpperCase();

    inputVal = eliminateUnwantedChars(invalidChars, inputVal);
    inputVal = eliminateUnwantedChars(upperCaseInvalidChars, inputVal);

    input.val(inputVal);

    input.val();
    if(inputVal.length == 3 || inputVal.length == 7){
        input.val(inputVal + ".")
    } else if(inputVal.length == 11){
        input.val(inputVal + "-");
    }

}

function getAge(dateString) {
    var today = new Date();
    var birthDate = new Date(dateString);
    var age = today.getFullYear() - birthDate.getFullYear();
    var m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}

function ageValidationHover(id){

    if(!isCreatingAccount()){
        return
    }
    let element = $("#" + id)[0];
    element.setAttribute("title", "")
    let errCount = 0;
    let age = getAge(element.value)
    if(age < 18){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Você deve ter pelo menos 18 anos para fazer sua conta!");
        } else {
            element.setAttribute("title", element.title += "\nVocê deve ter pelo menos 18 anos para fazer sua conta!!");
        }
        errCount++

    }

    if(isEmpty(id)){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!");
        }
        errCount++

    }

}

function ageValidationBlur(id){

    if(!isCreatingAccount()){
        return
    }

    let element = $("#" + id);
    let age = getAge(element.val());
    
    if(age < 18 || isEmpty(id)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}

function cpfHover(id){

    if(!isCreatingAccount()){
        return
    }
    let element = $("#" + id)[0];
    element.setAttribute("title", "")
    let errCount = 0;

    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!")
        }
        errCount++
    }

    if(element.value.length < 14){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "CPF incompleto!");
        } else {
            element.setAttribute("title", element.title += "\nCPF incompleto!")
        }
        errCount++

    }

}

function cpfBlur(id){

    if(!isCreatingAccount()){
        return
    }
    

    let element = $("#" + id);
    let text = element.val();
    text = adjustCPF(text);
    element.val(text)
    if(isEmpty(id) || element.val().length < 14){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}


function cepValidationHover(id){

    if(!isCreatingAccount()){
        return
    }
    let element = $("#" + id)[0];
    element.setAttribute("title", "")
    let errCount = 0;

    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!")
        }
        errCount++
    }

    if(element.value.length < 9){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "CEP Incompleto!");
        } else {
            element.setAttribute("title", element.title += "\nCEP Incompleto!")
        }
        errCount++
    }


}

function cepValidationBlur(id){

    if(!isCreatingAccount()){
        return
    }

    let element = $("#" + id);
    if(isEmpty(id) || element.val().length < 9){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}

function cepAdjuster(id){

    let cep = $("#" + id);

    let cepval = $("#" + id).val();

    if(cepval.length == 5){
        cep.val(cepval += "-")
    }

}

function cdcAdjuster(id){

    let cdc = $("#" + id);

    let cdcval = $("#" + id).val();

    let unwantedchars = "aqwertyuiopáéíóúãõsadfghjklzxcvbnm,.;/]~ç[´p'?:><}^ç{`!@#$%¨&*()\\";

    let unwantedcharsUpperCase = unwantedchars.toUpperCase();

    cdcval = eliminateUnwantedChars(unwantedchars, cdcval);

    cdcval = eliminateUnwantedChars(unwantedcharsUpperCase, cdcval)

    if(cdcval.length == 4 || cdcval.length == 9 || cdcval.length == 14 ){
        cdc.val(cdcval += " ")
    }

    cdc.val(cdcval);

}

function cdcValidationHover(id){

    let element = $("#" + id)[0];
    element.setAttribute("title", "");
    let errCount = 0;

    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!")
        }
        errCount++
        return;
    }

    if(!hasAtLeastOne(["3", "4", "5", "6"],element.value[0])){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Deve começar com 3, 4, 5, 6!");
        } else {
            element.setAttribute("title", element.title += "\nDeve começar com 3, 4, 5, 6!")
        }
        errCount++


    }

    if(element.value.length < 19){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Cartão Incompleto!");
        } else {
            element.setAttribute("title", element.title += "\nCartão Incompleto!")
        }
        errCount++


    }
    

}

function cdcValidationBlur(id){

    let element = $("#" + id);
    let elementval = element.val()
    if(isEmpty(id) || !hasAtLeastOne(["3", "4", "5", "6"],elementval[0]) || elementval.length < 19){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}


function otherGenHover(id){

    if(!isCreatingAccount()){
        return
    }
    let element = $("#" + id)[0];
    element.setAttribute("title", "")
    let errCount = 0;

    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!")
        }
        errCount++
    }

}

function otherGenderValidator(){
    let element = $("#other-gen")
    if(isEmpty("other-gen")){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }
}

function streetValidationHover(id){

    if(!isCreatingAccount()){
        return
    }
    let element = $("#" + id)[0];
    element.setAttribute("title", "")
    let errCount = 0;

    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!")
        }
        errCount++
    }

    if(containNumbers(id)){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo não pode ter números!");
        } else {
            element.setAttribute("title", element.title += "\nCampo não pode ter números!");
        }
        errCount++

    }

}

function streetValidationBlur(id){

    if(!isCreatingAccount()){
        return
    }

    let element = $("#" + id);
    if(isEmpty(id) || containNumbers(id)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}

function numAdjuster(id){

    let num = $("#" + id);

    let numval = num.val();

    let unwantedchars = "aqwertyuiopáéíóúãõsadfghjklzxcvbnm,.;/]~ç[´p'?:><}^ç{`!@#$%¨&*()\\";

    let unwantedcharsUpperCase = unwantedchars.toUpperCase();

    numval = eliminateUnwantedChars(unwantedchars, numval);

    numval = eliminateUnwantedChars(unwantedcharsUpperCase, numval);

    num.val(numval);

}

function numValidationHover(id){

    if(!isCreatingAccount()){
        return
    }
    let element = $("#" + id)[0];
    element.setAttribute("title", "")
    let errCount = 0;

    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!")
        }
        errCount++
    }

}

function numValidationBlur(id){

    if(!isCreatingAccount()){
        return
    }

    let element = $("#" + id);
    if(isEmpty(id)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}

function streetValidationBlur(id){

    if(!isCreatingAccount()){
        return
    }

    let element = $("#" + id);
    if(isEmpty(id)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}

function productNameValidationBlur(id){
    let element = $("#" + id);
    if(isEmpty(id)||containNumbers(id)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}

function productNameValidationHover(id){
    let element = $("#" + id)[0];
    element.setAttribute("title", "");
    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!")
        }
    }

    if(containNumbers(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo contém números!");
        } else {
            element.setAttribute("title", element.title += "\nCampo contém números!")
        }
    }

}

function productPriceValidationHover(id){
    let element = $("#" + id)[0];
    element.setAttribute("title", "");
    if(isEmpty(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo está vazio!");
        } else {
            element.setAttribute("title", element.title += "\nCampo está vazio!")
        }
    }

    if(Number(element.value) > 1000){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Não oferecemos produtos com preço acima de 1000 R$!");
        } else {
            element.setAttribute("title", element.title += "\nNão oferecemos produtos com preço acima de 1000 R$!")
        }
    }


}

function productPriceValidationBlur(id){

    let element = $("#" + id);
    if(isEmpty(id)||Number(element.val()) > 1000){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}



function checkIfAnyErrors(){

    nameValidationBlur("input-username")
    nameValidationBlur("input-fath")
    nameValidationBlur("input-moth")
    emailValidationBlur('input-email')
    passwordValidationBlur('input-pass', 'input-pass-again')
    repeatPasswordValidationBlur('input-pass-again', 'input-pass')
    cpfBlur("input-cpf")
    cpfBlur('input-fath-cpf')
    cpfBlur('input-moth-cpf')
    ageValidationBlur("input-age")
    if($("#other-gen").is(":visible")){
        otherGenderValidator()
    }
    cepValidationBlur("input-cep");
    streetValidationBlur('input-street')
    numValidationBlur('input-num')
    cdcValidationBlur("input-cdc");

    return(document.getElementsByClassName("red-error").length);
}

function checkIfAnyErrorsProd(){
    productNameValidationBlur('input-nome');
    productPriceValidationBlur('input-prec');
    return(document.getElementsByClassName("red-error").length);
}


