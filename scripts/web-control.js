let priceFilter = null;
let userList

if(JSON.parse(localStorage.getItem("userlist"))){
  userList = JSON.parse(localStorage.getItem("userlist"))
} else {
  userList = []
}

function getNav(){
    let nav;
    if(isLogged){
        nav = `
        <div class="container-fluid">
          <a class="navbar-brand" href="#">Replay Store</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item clickable">
                <a class="nav-link active" aria-current="page" id="home" onclick="switchSections(this)">Home</a>
              </li>
              <li class="nav-item clickable">
                <a class="nav-link" onclick="switchSections(this)" id="reg" >Registrar Produto</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-warning standard-flex" type="button" id="cart" onclick="switchSections(this)">
                <span class="material-symbols-outlined">
                  shopping_bag
                  </span>
                  <div id="cart-counter">
    
                  </div>
    
              </button>
            </form>
          </div>
        </div>`
    } else {
        nav = `<div class="container-fluid">
          <a class="navbar-brand" href="#">Replay Store</a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item clickable">
                <a class="nav-link active" aria-current="page" id="home" onclick="switchSections(this)">Home</a>
              </li>
              <li class="nav-item clickable">
                <a class="nav-link" onclick="switchSections(this)" id="loginpage" >Realizar Login</a>
              </li>
            </ul>
            <form class="d-flex" role="search">
              <button class="btn btn-outline-warning standard-flex" type="button" id="cart" onclick="switchSections(this)">
                <span class="material-symbols-outlined">
                  shopping_bag
                  </span>
                  <div id="cart-counter">
    
                  </div>
    
              </button>
            </form>
          </div>
        </div>`
    }

    return nav;
}


function refreshNavbar(){
  document.getElementsByClassName("navbar")[0].innerHTML = getNav();
}

function switchSections(filter){
    const innerhtml = filter.id
    if(!isLogged){
        switch(innerhtml){
            case "home": shower('prod-sect'); hider('register-prod');hider("cart-sect"); hider('loginpage'); break;
            case "cart": hider('prod-sect'); hider('register-prod');hider("cart-sect"); shower('loginpage'); updateCart(); break;
            case "loginpage": shower('loginpage');  hider('prod-sect'); hider('register-prod'); hider("cart-sect"); break;
        }
    } else {

      switch(innerhtml){
        case "home": shower('prod-sect'); hider('register-prod');hider("cart-sect"); hider('loginpage'); break;
        case "reg": shower('register-prod'); hider('prod-sect');hider("cart-sect"); hider('loginpage'); break;
        case "cart": hider('prod-sect'); hider('register-prod');shower("cart-sect"); hider('loginpage'); updateCart(); break;

    }

    }
    
}

function goHome(){

    shower('prod-sect'); 
    hider('register-prod');
    hider("cart-sect");

}

function hider(className){
    const obj = document.getElementsByClassName(className)
    obj[0].style.display="none"

}

function shower(className){
    const obj = document.getElementsByClassName(className)
    obj[0].style.display="inline-block"
}

//===============================================================

function valueIsInArray(val, arr){
    for(let i in arr){
        if(arr[i] == val){
            return true
        }
    }

    return false;
}

function filter(){
    let newjSON;

    const allSelectors = document.getElementsByClassName("filters")
    const allChecked = []

    console.log(priceFilter)

    for(let i in allSelectors){
        if(allSelectors[i].checked){
            allChecked.push(allSelectors[i].value)
        }
    }

    

    if(allChecked.length < 1){

        if(priceFilter != null){

            newjSON = filterJSONByPrice(priceFilter, prods)
            

        } else{
            newjSON = prods
        }

    } else {
        newjSON = prods.filter(prod => valueIsInArray(prod.cat, allChecked))

        if(priceFilter!= null){
            newjSON = filterJSONByPrice(priceFilter, newjSON)
        }
    }

    
    addToHtml("prods-grid", printCards(newjSON))
}

function filterJSONByPrice(price, json){
    return(json.filter(prod => prod.price <= price))
}

function setFilterPrice(){
    const maxpric = document.getElementById("max-pric").value

    if(Number(maxpric) != NaN || maxpric != ""){
        priceFilter = Number(maxpric)
        filter()
    } else {
        filter()
    }
    

}

function removePriceFilter(){

    const allSelectors = document.getElementsByClassName("filters")

    document.getElementById("max-pric").value = ""

    for(let i in allSelectors){
        allSelectors[i].checked = false
    }

    priceFilter = null
    filter()
}


function switchToMakeAccount() {
  let cad_fields = $(".cad");
  let header = $("#create-login-header");
  let greenbutton = $("#button-cad-cont");
  header.html("Criar Conta")
  cad_fields.removeClass("hidden");
  let loginButtonContainers = $(".button-account-container");
  greenbutton.show();
  greenbutton.css("display", "flex");
  greenbutton.css("justify-content", "center");
  loginButtonContainers.addClass("hidden")
}

function switchToLogin() {
  let cad_fields = $(".cad");
  let header = $("#create-login-header");
  let greenbutton = $("#button-cad-cont");
  header.html("Login")
  cad_fields.addClass("hidden");
  let loginButtonContainers = $(".button-account-container");
  greenbutton.hide();
  loginButtonContainers.removeClass("hidden");
}


function genderSelectManager(id){
  let select = $("#" + id);

  if(select.val() == "o"){

    $("#gen-other-div").show();

  } else {

    $("#gen-other-div").hide();

  }
}

refreshNavbar();