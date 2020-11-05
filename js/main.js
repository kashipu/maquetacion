let menu = document.querySelector('#navbar');
let btnmenu = document.querySelector('#burguer');
console.log(menu)

function collapse() {
    menu.classList.toggle('show')
    if(menu.classList.contains('show')) {
        btnmenu.setAttribute("aria-expanded", "true")
    } else {
        btnmenu.setAttribute("aria-expanded", "false")
    }
    
}