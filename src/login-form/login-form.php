<?php
    function loginUser(){
        return false;         
    }
?>
<div id="loginForm" class="login-form" >
    <div class="login-box">
        <div id="closeLoginForm" class="close-login-form">
            <a href="#">
                <i class="material-icons">close</i>
            </a>
        </div>
        <h1>Login</h1>
        <form action="?action=loginUser" method="POST">
            <label>Usuario</label>
            <input id="user" required type="text">
            <label>Password</label>
            <input id="password" required type="password">
            <input id="loginInput" type="submit" value="LogIn">
            <?php 
                if(isset($_POST['action'])=='loginUser'){
                   if(loginUser()===true){
                     echo 'hola';
                   }
                }
            ?>
        </form>
    </div>
</div>