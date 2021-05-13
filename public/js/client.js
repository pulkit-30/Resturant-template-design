var navbar=document.querySelector('.navbar');
window.addEventListener('scroll',()=>{
    navbar.classList.toggle('active-navbar',window.scrollY>100)
})

$('.hamburger').on('click',()=>{
    $('.navbar ul').slideToggle()
})