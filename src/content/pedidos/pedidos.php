<?php
        $new_conexion = mysqli_connect("localhost","root","","lasrecetasdelavieja");
        $p = "SELECT * FROM productos";
        $p_ex = mysqli_query(
            $new_conexion,
            $p
        );
        if($p_ex === false){
            echo "Error al cargar los productos";
        }else{
            $cant = mysqli_num_rows($p_ex);
            //echo $cant;
        }
        
?>
<div class="order-search">
    <form action="" method="GET">
        <div class="form-item form-item-first">
            <input type="text">
        </div>
        <div class="form-item form-item-second">
            <input id="search" class="material-icons" type="submit" value="search">
        </div>
    </form>
</div>
<div class="spacer"></div>
<div  class="order-list">
    <?php
        while(
            $reg = mysqli_fetch_array($p_ex)
        ){
    ?>
        <div class="food-item" value="<?php echo $reg['id_producto'];?>">
            <img src="./img/foods/<?php echo $reg['img']; ?>" alt="">
            <h2><?php echo $reg['titulo'];?></h2>
            <p><?php echo $reg['descripcion']; ?></p>
            <h3>$ <?php echo $reg['precio']; ?></h3>
            <button id="addToOrderButton" class="add-to-order-button" value="<?php echo $reg['id_producto'];?>">Agregar al Pedido</button>
        </div>
    <?php        
        }
    ?>
</div>