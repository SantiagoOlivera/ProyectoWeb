
console.log("Test");
let selectedProducts = [];

addToOrderButton.AddEventListener(
    "click",
    () => {
        var idProduct = addToOrderButton.getAttribute("value");
        selectedProducts.push(idProduct);
        console.log(idProduct);
        console.log(selectedProducts); 
    }
);

//localStorage.setItem("products", JSON.stringify(products) );