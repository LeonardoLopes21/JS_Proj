
let prods;

if(JSON.parse(localStorage.getItem("prodlist"))){
    prods = JSON.parse(localStorage.getItem("prodlist"))
  } else {
    prods = []
}



function getProd(id){

    for(let i in prods){
        if(prods[i].id == id){
            return prods[i] 
        }
    }

}

function getLastId(){
    
    return Number(user_carr.length) + 1
}

function insert(){
    const input_name = document.getElementById("input-nome");
    const input_preco = document.getElementById("input-prec");
    const input_cat = document.getElementById("input-categoria");
    const url = document.getElementById("input-url");
    const newid = getLastId() + 1
    const newProd = {
        "id": newid,
        "name": input_name.value,
        "price": input_preco.value,
        "cat": input_cat.value,
        "url": url.value
    }
    prods.push(newProd)
    localStorage.setItem("prodlist",JSON.stringify(prods));
    addToHtml("prods-grid", printCards(prods))
}
