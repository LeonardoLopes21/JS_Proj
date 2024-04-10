

const prods = [{
    "id": 1,
    "name": "SNES",
    "price": 10.98,
    "cat": "j",
    "url": "https://redstorebrasil.com.br/wp-content/uploads/2023/07/50ccee7b64.webp"
},

{
    "id": 2,
    "name": "Caneca ST",
    "price": 5.92,
    "cat": "can",
    "url": "https://images-americanas.b2w.io/produtos/105067180/imagens/caneca-stranger-things-branca/105067180_1_large.jpg"
},

{
    "id":3,
    "name": "Camisa HP",
    "price": 20.97,
    "cat": "cam",
    "url": "https://images.tcdn.com.br/img/img_prod/737444/camiseta_harry_potter_masculina_hogwarts_filme_classico_23907761_1_20200427181714.jpg"

}

]

function getProd(id){

    for(let i in prods){
        if(prods[i].id == id){
            return prods[i] 
        }
    }

}

function getLastId(){
    let counter;
    for(let i in prods){
        counter = i
    }
    return Number(counter) + 1
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

    addToHtml("prods-grid", printCards(prods))
}
