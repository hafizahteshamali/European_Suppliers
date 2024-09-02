let headerTop = document.getElementById('headerTop');

window.addEventListener('scroll', ()=>{
    if(window.scrollY > 0){
        headerTop.style.background = "#242424";
    }
    else{
        headerTop.style.background = "#242424";
    }
})









let menuIcon = document.getElementById('menu-icon');
let closeIcon = document.getElementById('close-icon');
let responsiveBar = document.querySelector('.responsive-bar');

let isShow = false;

const Modal = () => {
    isShow = !isShow;
    if (isShow) {
        responsiveBar.classList.add('showModal');
        menuIcon.style.display = "none";
        closeIcon.style.display = "block";
    } else {
        responsiveBar.classList.remove('showModal');
        menuIcon.style.display = "block";
        closeIcon.style.display = "none";
    }
}

menuIcon.addEventListener('click', Modal);
closeIcon.addEventListener('click', Modal);

AOS.init();