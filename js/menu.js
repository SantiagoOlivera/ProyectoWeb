
//cargar submenu
let submenu = document.querySelector("#submenu");
function cargarSubmenu(menu){
    switch (menu){
        case 'inicio':
            submenu.innerHTML = `
            <li class="submenu-item"><a href="#whoweare">Quíenes Somos</a></li>
            <li class="submenu-item"><a href="#howtoorder">Cómo Ordenar</a></li>
            <li class="submenu-item"><a href="#opinions">Opiniones</a></li>
            `;
        break;
        case 'pedidos':
        submenu.innerHTML = `
            <li id="cartPage" class="submenu-item"><a href="#">Su Pedido</a></li>
            <li class="submenu-item"><a href="#">Promos</a></li>
            `;
        break;
        case 'contacto':
        submenu.innerHTML = ``;
        break;
    }
}


//first init swiper
function initSwiper5(){
    let swiper5 = new Swiper('.swiper5', {
        slidesPerView:  5,
        slidesPerGroup: 5,
        spaceBetween: 5, 
        breakpoints: {
            // when window width is >= 1200px
            1200: {
                slidesPerView:  3,
                slidesPerGroup: 3
            },
            // when window width is >= 900px
            900: {
                slidesPerView:  2,
                slidesPerGroup: 2
            },
            // when window width is >= 560px
            560: {
              slidesPerView:  1,
              slidesPerGroup: 1
            }
        }, 
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    }); 
}
function initSwiper1(){
    let swiper1 = new Swiper('.swiper1', {
        slidesPerView:  1,
        slidesPerGroup: 1,
        loop: true,
        loopFillGroupWithBlank: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
    });
}

//Deault content call Inicio
var x = new XMLHttpRequest();
x.onreadystatechange = function (){
    console.log(x.status);
    if(x.status === 200 && x.readyState === 4){
        pageContent.innerHTML =  x.responseText;
        initSwiper1();
        initSwiper5();
    }
}
x.open("GET", "./src/content/inicio/inicio.php" ,true);
x.send();


//function for each li for chang css class
let menuElements = document.querySelectorAll("#menu li");
menuElements.forEach(
    function(element){
        element.addEventListener(
            "click",
            () => {
                for(var i=0; i<menuElements.length ; i++){
                    menuElements[i].classList.remove("current");
                }
                element.classList.add("current");
            }
        )
    }
);



//function for each menu item for change page content
let menuItems = document.querySelectorAll("#menu li a");
menuItems.forEach(
    function(element){
        element.addEventListener(
            "click",
            () => {
                var x = new XMLHttpRequest();
                x.onreadystatechange = function (){
                    console.log(x.status);
                    if(x.status === 200 && x.readyState === 4){
                        pageContent.innerHTML =  x.responseText;
                        //despues de cargar la pagina o imprimir el contenido de la misma
                        if(element.getAttribute("value")=='inicio'){
                            initSwiper1();
                            initSwiper5();
                        }
                        
                    }
                }
                switch(element.getAttribute("value")){
                    case 'inicio':
                        cargarSubmenu('inicio');
                        x.open("GET", "./src/content/inicio/inicio.php" ,true);
                        x.send();
                    break;
                    case 'pedidos':
                        cargarSubmenu('pedidos');
                        x.open("GET", "./src/content/pedidos/pedidos.php" ,true);
                        x.send();
                        let cartPage = document.querySelector('#cartPage');
                        cartPage.addEventListener(
                            "click",
                            () => {
                                var x = new XMLHttpRequest();
                                x.onreadystatechange = function (){
                                    console.log(x.status);
                                    if(x.status === 200 && x.readyState === 4){
                                        pageContent.innerHTML =  x.responseText;
                                    }
                                }
                                x.open("GET", "./src/content/pedidos/cart.php");
                                x.send();
                            }
                           
                        );
                    break;
                    case 'contacto':
                        cargarSubmenu('contacto');
                        x.open("GET", "./src/content/contacto/contact-form.php" ,true);
                        x.send();
                    break;
                }
            }
        )
    }
);

//Function open and close user login options
let login = document.querySelector("#login");
let loginUser = document.querySelector("#logedUserForm");
login.addEventListener(
    "click",
    () => {
        loginForm.style.display = "block";
        /* console.log("hola");
        if(loginUser.style.display === "block"){
            loginUser.style.display = "none";
        }else{
            loginUser.style.display = "block";
        } */
    }
);

let loginForm = document.querySelector("#loginForm");
//Funcion close login form
let closeLoginForm = document.querySelector("#closeLoginForm");
closeLoginForm.addEventListener(
    "click",
    () => {
        loginForm.style.display = "none";
    }
);

/* login.addEventListener(
    "click",
    () => {
        console.log("hola");
        loginUser.style.display = "none";   
    }
); */
//Metodos y Funciones
/* function cargarSubmenu(menu){
    // 0. borrar todos los submenus
    submenu.innerHTML = ''; 
    //var menu = 0;
    // 1. insertar los submenus
    for(i=0; i<submenuItems[menu].length; i++){
        if(submenuItems[menu][i] != ''){
            submenu.innerHTML = submenu.innerHTML + '<li class="submenu-item"><a>' + submenuItems[menu][i] + '</a></li>';
        }
    }
} */
//cargar submenu por defecto
//cargarSubmenu(0);
/* var submenuElements = document.querySelectorAll("#submenu li a");
submenuElements.forEach(
    function(subItem){
        subItem.onclick = function(event){
            for(var i=0; i<submenuElements.length; i++){
                submenuElements[i].classList.remove("active-menu-item");
            }
            subItem.classList.add("active-menu-item");
        }
    }
);

//seleccionar elementos del menor 
var menuItems = document.querySelectorAll("#menu li a");
//seleccionar elemetos del submenu
menuItems.forEach(
    function(item){
        item.onclick = function(event){
            //modificar items del submenu
            menu = item.getAttribute("value");
            cargarSubmenu(menu);
            //modificar clase del menu  
            for(var i=0; i<menuItems.length; i++){
                menuItems[i].classList.remove("active-menu-item");
            }
            switch(menu){
                case '0':
                         
                break;
                case '1':
                        
                break;
                case '2':
                        
                break;
            }
            //
            item.classList.add("active-menu-item"); 
            var submenuElements = document.querySelectorAll("#submenu li a");
            submenuElements.forEach(
                function(subItem){
                    subItem.onclick = function(event){
                        for(var i=0; i<submenuElements.length; i++){
                            submenuElements[i].classList.remove("active-menu-item");
                        }
                        subItem.classList.add("active-menu-item");
                    }
                }
            );
        }
    }
);
 */
