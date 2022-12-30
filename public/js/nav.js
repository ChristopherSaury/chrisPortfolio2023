let nav = document.getElementById('desktop-nav');
let menuIcon = document.querySelector('.icons-container .fa-bars');
let chrisCopyright = document.querySelector('#desktop-nav .copyright p');
let navLinks = document.querySelectorAll('#desktop-nav .links-container a .page');
let navIcons = document.querySelectorAll('#desktop-nav .links-container a .nav-icon');

menuIcon.addEventListener('click', function(){
        if(!nav.classList.contains('nav-click')){
            nav.classList.add('nav-click');
            chrisCopyright.style.display = 'none';
            navLinks.forEach(element => {
                element.style.display = 'none';
            });
            navIcons.forEach(element => {
                element.style.display = 'initial';
            });
            nav.style.width = '80px';
        } else if (nav.classList.contains('nav-click')){
            nav.classList.remove('nav-click');
            chrisCopyright.style.display = 'initial';
            navLinks.forEach(element => {
                element.style.display = 'initial';
            });
            navIcons.forEach(element => {
                element.style.display = 'none';
            });
            nav.style.width = '300px';
        }
})