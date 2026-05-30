let cartCount =localStorage.getItem("cartCount");

if(cartCount=== null){
    cartCount= 0;
}else{
    cartCount=parseInt(cartCount);
}

let cartCountDisplay= document.querySelector("#cart-count");
cartCountDisplay.innerText = cartCount;


let cartButtons=document.querySelectorAll(".card button");

cartButtons.forEach(function(button){

   ;+ button.addEventListener("click",function(){

        let productCard= button.parentElement;

        let productName= productCard.querySelector("h3").innerText;
        let productPrice= productCard.querySelector("p").innerText;

        alert(productName +"added to cart\nPrice:" + productPrice);

        cartCount++;
        cartCountDisplay.innerText= cartCount;

        localStorage.setItem("cartCount",cartCount);
});
});

let searchInput = document.querySelector("input");
let productCard= document.querySelectorAll(".card");

searchInput.addEventListener("keyup",function(){
    let searchValue= searchInput.value.toLowerCase();

    productCard.forEach(function(card){

        let productName= card.querySelector("h3").innerText.toLowerCase();
        
        if(productName.includes(searchValue)){
            card.style.display="block";
        }
        else {
            card.style.display="none";
        }
    });

});