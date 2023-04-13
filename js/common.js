const cart = document.querySelector(".cart span");
let cartProducts = JSON.parse(localStorage.getItem(CART)) || [];


function getcart(){
    cart.innerHTML = cartProducts.length;
}

getcart();
