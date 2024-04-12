function isEmpty(id){
    let element = $("#" + id);
    return element.val().length < 1;
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


    if(errCount < 1){
        element.setAttribute("title", element.title += ":D");
    }

    

}

function emailValidationBlur(id){

    let element = $("#" + id);
    let text = element.val();
    if(isEmpty(id)|| !hasNecessaryCharactersEmail(text)|| !hasAnyEmailProvider(text)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }
    

}

function hasTwoFullValues(id){
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

    if(repeat.value != text){

        repeat.classList.add("red-error")
        
    } else {
        repeat.classList.remove("red-error");
    }

}


function passwordValidationBlur(id, idorigin){

    let element = $("#" + id);
    let repeat = $("#" + idorigin)[0];
    let text = element.val();
    if(isEmpty(id)|| text.length < 8|| !checkSpecialCharacters(text)){
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

    let element = $("#" + id)[0];
    let elementorigin = $("#" + idorigin)[0];
    element.setAttribute("title", "")
    let errCount = 0;

    if(elementorigin.value != element.value){

        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Senhas devem ser iguais!");
        } else {
            element.setAttribute("title", element.title += "\nSenha devem ser iguais!");
        }
        errCount++

    }

}

function repeatPasswordValidationBlur(id, idorigin){

    let element = $("#" + id);
    let elementorigin = $("#" + idorigin);
    let textpassr = element.val();
    let textpass = elementorigin.val(); 
    if(textpass != textpassr){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }

}

function cpfAdjusting(){

    let input = $("#input-cpf")
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