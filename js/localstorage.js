var products = [];
addToCart.AddEventListener(
    "click",
    () => {
        var idProduct = document.querySelector("#idProdcuto");
    }
);

localStorage.setItem("products", JSON.stringify(products) );