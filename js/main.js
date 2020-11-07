// Toogle menú
let menu = document.querySelector('#navbar');
let btnmenu = document.querySelector('#burguer');
let navView = document.querySelector('#nav-view');
let menuContent = document.querySelector('#menu-content');

function collapse() {
    menu.classList.toggle('show')
    if (menu.classList.contains('show')) {
        btnmenu.setAttribute("aria-expanded", "true")
        menuContent.classList.add('noshow')
    } else {
        btnmenu.setAttribute("aria-expanded", "false")
        menuContent.classList.remove('noshow')
    }

}

// Sticky menú
window.onscroll = function () {
    stickyMenu()
};

var sticky = navView.offsetTop;

function stickyMenu() {
    if (window.pageYOffset >= sticky) {
        navView.classList.add("sticky")
        menuContent.classList.add("sticky-content")
    } else {
        navView.classList.remove("sticky");
        menuContent.classList.remove("sticky-content");
        
    }
}



