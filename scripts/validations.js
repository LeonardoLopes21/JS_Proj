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
    if(isEmpty(id)||containNumbers(id)){
        element.addClass("red-error");
    } else {
        element.removeClass("red-error");
    }
    

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
            element.setAttribute("title", "\nCampo está vazio!")
        }
        errCount++
    } else {
        element.setAttribute("title", "")
    }

    if(containNumbers(id)){
        if(element.title.length < 1){
            element.setAttribute("title", element.title += "Campo contém números!");
        } else {
            element.setAttribute("title", "\nCampo contém números!")
        }
        errCount++
    }

    if(errCount > 1){
        element.setAttribute("title", "Field is Correct! :D");
    }
}