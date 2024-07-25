document.addEventListener('DOMContentLoaded', function() {
    activateButtons();
    updateCart();
});

function activateButtons() {
    let cartList = JSON.parse(localStorage.getItem("productData")) || [];
    document.querySelectorAll('.card-button').forEach(button => {
        button.addEventListener('click', function(event) {
            console.log(event.target.parentElement.className);
            let parentDiv = event.target.parentElement; 
            let image = parentDiv.querySelector('img').src.split('/');

            let productInfo = {
                title: parentDiv.querySelector('h3').textContent,  
                price: parentDiv.querySelector('h4').textContent,  
                imagePath: image[image.length - 1]     
            };

            cartList.push(productInfo);

            localStorage.setItem('productData', JSON.stringify(cartList));
            alert("Product added to the cart");
            console.log('Product added to localStorage');
        });
    });
}

function updateCart() {
    let span = document.getElementById('amount-products');
    span.textContent = JSON.parse(localStorage.getItem("productData")).length || 0;
}

