let arr = []

for(let i = 0; i < 10; i++){
    let option = window.prompt("Selecione a opção: ")

    switch(option){
        case "a": arr.push(Number(window.prompt("Adicione o número desejado"))); break;
        case "b": arr.pop(); break;
        case "c": arr.shift(); break;
        case "d": arr.unshift(Number(window.prompt("Adicione o número"))); break;
        case "e": window.alert(arr.length); break;
        case "f": window.alert(getAllElementsInOneString()); break;
    }
}

function getAllElementsInOneString(){
    let stringy = ""

    for(let i in arr){
        stringy += arr[i] + "\n"
    }

    return stringy


}