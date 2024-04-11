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
    let element = document.getElementById(id);
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
    newText.replace("1", "")
    for(let i in unwantedchars){
        if(newText.includes(unwantedchars[i])){
            newText = newText.replace(unwantedchars[i], "");
        }
    }

    return newText;
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