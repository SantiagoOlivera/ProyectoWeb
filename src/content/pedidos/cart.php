<?php
    $cart_elements = $_GET['cartElements'];
    echo $cart_elements;
    echo "Funciona";
?>
<div id="cart" class="cart">
    
    <h1>Su Pedido</h1>

    <div class="cart-items">
         <div class="cart-item">
                <!-- elementos que se van a repetir  -->
                <?php
                    echo "Sin elementos";
                ?>
                <div class="cart-item-title"></div>
                <div class="cart-item-img"></div>
                <div class="cart-item-total"></div>
                <div class="cart-item-quantity"></div>
         </div>
    </div>

    <div class="total">
    </div>
    <div class="quantity">
    </div>
    <div class="checkout">
        <button id="checkout-button" class="checkout-button">Checkout</button>
    </div>

</div>