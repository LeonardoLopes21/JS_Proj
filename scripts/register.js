function returnCard(id, prodName, prodPrice, prodPicUrl){
    return(`<div class="card prod-card-item" style="">
    <img src="${prodPicUrl}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${prodName}</h5>
      <p class="card-text"> R$${prodPrice}</p>
      <a onclick="addToCart(getProd(${id}))" class="btn btn-outline-dark">Adicionar ao carrinho</a>
    </div>
  </div>`)
}


function printCards(json){
    let fullString = ""

    for(let i in json){
        fullString += returnCard(json[i].id, json[i].name, json[i].price, json[i].url)
    }

    return fullString
}

function addToHtml(id, string){

    const filler = document.getElementsByClassName(id)
    filler[0].innerHTML = string;

}
