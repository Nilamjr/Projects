const searchProduct = () => {
    const searchBox = document.getElementById('search-item').value.toUpperCase();
    const storeItems = document.getElementById("products-list");
    const product = document.querySelectorAll('.product');
    const productName = document.getElementsByTagName('h2');

    
    for(let i = 0; i < productName.length; i++){
        // if(i == 2){
        //     break;
        // }
        let match = product[i].getElementsByTagName('h2')[0];

        if(match){
            let textValue = match.textContent || match.innerHTML;
            if(textValue.toUpperCase().indexOf(searchBox) > -1){
                product[i].style.display = "";
            }
            else{
                product[i].style.display = "none";
            }
        }

        // console.log(product[i]);


        console.log("Match",match);

    }

    // console.log(productName.length);
}