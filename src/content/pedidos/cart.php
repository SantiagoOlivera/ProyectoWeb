<?php
    if($_GET['cartElements']===null){
        $strCartElements = null;
    }else{
        $strCartElements = $_GET['cartElements'];
    }
    echo $strCartElements;
    $array = json_decode('['.str_replace("'",'"',$strCartElements).']', true);
    echo $array;
    //echo sizeof($cart_elements);
    //echo "Funciona";
?>
<div id="cart" class="cart">
    
    <h1>Su Pedido</h1>

    <div class="cart-items">
        <?php
            //for(int i=0; i<$cart_elements.count(); i++){
        ?> 
            <div class="cart-item">
            <!-- elementos que se van a repetir  -->
            <?php
                if($strCartElements)
                echo "Sin elementos";
            ?>
                <div class="cart-item-title"></div>
                <div class="cart-item-img"></div>
                <div class="cart-item-total"></div>
                <div class="cart-item-quantity"></div>
            </div>
        <?php
        //}
        ?>
    </div>

    <div class="total">
    </div>
    <div class="quantity">
    </div>
    <div class="checkout">
        <button id="checkout-button" class="checkout-button">Checkout</button>
    </div>

</div>