if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', ready)
}else{
    ready();
}

function ready(){
    var removeCartItemButtons = document.getElementsByClassName('btn-danger');
    for(let i = 0; i < removeCartItemButtons.length; i++){
        var button = removeCartItemButtons[i];
        button.addEventListener('click', removeCartItem);
    }

    var quantityInputs = document.getElementsByClassName('cart-quantity-input');
    for(let i = 0; i < quantityInputs.length; i++){
        var input = quantityInputs[i];
        input.addEventListener('change', quantityChanged);
    }    

    var addToCartButtons = document.getElementsByClassName('shop-item-button');
    for(var i = 0; i < addToCartButtons.length; i++){
        var button = addToCartButtons[i];
        button.addEventListener('click', addToCartClicked);
    }
    document.getElementsByClassName('btn-purchase')[0].addEventListener('click', purchaseClicked);
}

function purchaseClicked(){
    alert("Thank you for your purchase");
    var cartItems = document.getElementsByClassName('cart-items')[0];
    while(cartItems.hasChildNodes()){
        cartItems.removeChild(cartItems.firstChild);
    }
    updatCartTotal();
}

function addToCartClicked(event){
    var button = event.target;
    var shopItem = button.parentElement.parentElement;
    var shopTitle = shopItem.getElementsByClassName('shop-item-title')[0].innerText;
    var shopPrice = shopItem.getElementsByClassName('shop-item-price')[0].innerText;
    var imgSrc = shopItem.getElementsByClassName('shop-item-image')[0].src;
    // console.log(imgSrc);
    // console.log(button);    

    addItemToCart(shopTitle, shopPrice, imgSrc);
    updatCartTotal();
}

function addItemToCart(title, price, img){
    
    var cartItems = document.getElementsByClassName('cart-items')[0];
    var newCartRow = document.createElement('div');
    newCartRow.classList.add('cart-row');
    
    var cartItemNames = cartItems.getElementsByClassName('cart-item-title');
    for(let i = 0; i < cartItemNames.length; i++){
        let cartTitle = cartItemNames[i];
        if(cartTitle.innerText === title){
            alert("This item is already added to the cart");
            return;
        }
    }

    var cartItemsElement = "";
    cartItemsElement = `
            <div class="cart-item cart-column">
                <img class="cart-item-image" src="${img}">
                <span class="cart-item-title">${title}</span>
            </div>
            <span class="cart-price cart-column">${price}</span>
            <div class="cart-quantity cart-column">
                <input class="cart-quantity-input" type="number" value="1">
                <button class="btn btn-danger" type="button">REMOVE</button>
            </div>
    `
    newCartRow.innerHTML = cartItemsElement;
    cartItems.append(newCartRow);
    
    newCartRow.getElementsByClassName('btn-danger')[0].addEventListener('click', removeCartItem);
    newCartRow.getElementsByClassName('cart-quantity-input')[0].addEventListener('change', quantityChanged);
    // console.log(cartItems);
}

function quantityChanged(event){
    var input = event.target;
    if(isNaN(input.value) || input.value <= 0){
        input.value = 1
    }
    updatCartTotal();

}
function removeCartItem(event){
    var buttonClicked = event.target;
    buttonClicked.parentElement.parentElement.remove();    
    updatCartTotal();
}


function updatCartTotal(){
    var cartItemContainer = document.getElementsByClassName('cart-items')[0];
    var cartRows = cartItemContainer.getElementsByClassName('cart-row');
    var total = 0;
    for(var i = 0; i < cartRows.length; i++){
        var cartRow = cartRows[i];

        var cartPrice = cartRow.getElementsByClassName('cart-price')[0];
        var cartQuantity = cartRow.getElementsByClassName('cart-quantity-input')[0];
        
        var price = parseFloat(cartPrice.innerText.replace('$', ''));
        var quantity = cartQuantity.value;

        // var price = cartPrice.innerText.replace('$', '');

        
        total = total + (price * quantity);
    }
    total = Math.round(total * 100) / 100;
    document.getElementsByClassName('cart-total-price')[0].innerText = '$' + total;
}