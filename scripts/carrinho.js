let user_carr = []


function addToCart(json){

    const counter = document.getElementById("cart-counter")

    if(idInCart(json.id)){
        increaseQuant(json.id)
    } else {
        json["quant"] = 1
        user_carr.push(json)
    }

    counter.innerHTML = findTotalItems()

}

function resetCartDisplay(){

    const counter = document.getElementById("cart-counter")
    counter.innerHTML = "0"


}

function findTotalItems(){
    let counter = 0
    for(let i in user_carr){
        counter += user_carr[i].quant
    }

    return counter
}

function idInCart(id){

    for(let i in user_carr){
        if(user_carr[i].id == id){
            return true;
        }
    }

    return false

}

function increaseQuant(id){
    for(let i in user_carr){
        if(user_carr[i].id == id){
            user_carr[i].quant++
        }
    }
}


function getProdQuant(prodID, json){
    let prodCount = 0
    
    for(let i in json){
        if(json[i].id == prodID){
            prodCount++;
        }
    }

    return prodCount;
}

function returnCorrectCat(cat){
    let correctCategoria
    switch(cat){
        case "cam": correctCategoria = "Camisa"; break;
        case "j": correctCategoria = "Jogos"; break;
        case "est": correctCategoria = "Estatuetas"; break;
        case "fil": correctCategoria = "Filmes"; break;
        case "can": correctCategoria = "Caneca"; break;
        case "cha": correctCategoria = "Chaveiros"; break;
        case "p": correctCategoria = "Posters"; break;
    }
    return correctCategoria;
}


function cartTemplate(){

    let htmlText = ""
    let subtotal = 0

    for(let i = 0; i < user_carr.length; i++){
        if(user_carr[i].quant >= 1){
            htmlText += `
            <tr>
              <th scope="row">${i + 1}</th>
              <td>${user_carr[i].name}</td>
              <td>${returnCorrectCat(user_carr[i].cat)}</td>
              <td>${user_carr[i].price}</td>
              <td>${user_carr[i].quant}</td>
              <td> R$${user_carr[i].quant * user_carr[i].price}</td>
            </tr>`

            subtotal += user_carr[i].quant * user_carr[i].price;
            
        }

    }

    const fullTable = `
    <h1 class="roboto register-header">Carrinho</h1>
    <div>
    <table class="table table-cart">
    <thead>
      <tr>
        <th scope="col">#</th>
        <th scope="col">Nome</th>
        <th scope="col">Categoria</th>
        <th scope="col">Preço Unitário</th>
        <th scope="col">Quantidade</th>
        <th scope="col">Preço Total</th>
      </tr>
    </thead>
    <tbody>
    ${htmlText}
    </tbody>
  </table>
<b> Total: R$${parseFloat(subtotal).toFixed(2)} </b>
  </div>
  <div class="flex-center">
  <a onclick="finalizePurchase()" style="margin-top: 30px;" class="btn btn-outline-success">Finalizar Compra</a>
  </div>
  `

    return fullTable


}

function finalizePurchase(){
    user_carr = []
    goHome()
    resetCartDisplay()

}

function updateCart(){
    const obj = document.getElementsByClassName("cart-sect")
    obj[0].innerHTML = cartTemplate();
    

}