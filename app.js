const hamburger = document.querySelector(".hamburger")
const headerRight = document.querySelector(".header-right")

hamburger.addEventListener('click', function(){
    headerRight.classList.toggle('show')
})