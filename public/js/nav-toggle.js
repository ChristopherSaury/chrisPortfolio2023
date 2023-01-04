let deskNav = document.getElementById('desktop-nav');
let burgerBtn = document.querySelector('.icons-container .fa-bars');

burgerBtn.addEventListener('click', function(){
    if(!deskNav.classList.contains('nav-click')){
        deskNav.nextElementSibling.style.paddingLeft = '300px';
    }else if(deskNav.classList.contains('nav-click')){
        deskNav.nextElementSibling.style.paddingLeft = '80px';
    }
});