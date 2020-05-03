var menuToggler=document.querySelector(".menu-toggler");
var menu=document.querySelectorAll(".top-nav .nav-link");
var bar=document.querySelectorAll(".bar");
var nav=document.querySelector(".top-nav");
menuToggler.addEventListener("click", function(){
    nav.classList.toggle("open");
    this.classList.toggle("open");
    bar.forEach(function(bar){
        bar.classList.toggle("open");
    })   
});

menu.forEach(function(menus){

menus.addEventListener("click", function(){
    menuToggler.classList.remove("open");
    nav.classList.toggle("open");
    bar.forEach(function(bar){
        bar.classList.toggle("open");
    })  
});


});


$('nav a[href*="#"]').on('click', function(){
    $('html, body').animate({
        scrollTop: $($(this).attr('href')).offset().top
    }, 2000);
})

$('#up').on('click', function(){
    $('html, body').animate({
        scrollTop: 0
    }, 2000);
});
