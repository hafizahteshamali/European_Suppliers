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


let wholesaleLi =  document.querySelector('.wholesaleLi ul');
let wholesaleList = document.getElementById('wholesaleList');

const wholeSaleDropdown = (e)=>{
    wholesaleLi.classList.toggle('wholesaleLiShow');
    if(wholesaleLi.classList.contains('wholesaleLiShow')) {
        wholesaleList.classList.add('rotate');
    } else {
        wholesaleList.classList.remove('rotate');
    }
}
wholesaleList.addEventListener('click', wholeSaleDropdown);


let aboutLi = document.querySelector('.aboutLi ul');
let aboutList = document.getElementById('aboutList');
const aboutDropDown = (e)=>{
    aboutLi.classList.toggle('aboutDropDownShow'); 
    if(aboutLi.classList.contains('aboutDropDownShow')) {
        aboutList.classList.add('Aboutrotate');
    } else {
        aboutList.classList.remove('Aboutrotate');
    }  
}
aboutList.addEventListener('click', aboutDropDown);



let b2bli = document.querySelector('.b2bli ul');
let b2bList = document.getElementById('b2bList');
const b2bDropDown = (e)=>{
    b2bli.classList.toggle('b2bDropDownShow');
    if(b2bli.classList.contains('b2bDropDownShow')){
        b2bList.classList.add('b2bRotate');
    }
    else{
        b2bList.classList.remove('b2bRotate');
    }
}
b2bList.addEventListener('click', b2bDropDown);


let navlist = document.querySelectorAll('.navlist');
let navicon = document.querySelectorAll('.navicon');

const changingBackground = () => {
    navlist.forEach((tab, index) => {
        tab.addEventListener('click', () => {
            // Remove 'active' class from all navicons and navlists
            navicon.forEach((content) => {
                content.classList.remove('active');
            });
            navlist.forEach((tab) => {
                tab.classList.remove('active');
            });

            // Add 'active' class to the clicked navlist and corresponding navicon
            navicon[index].classList.add('active');
            tab.classList.add('active');
        });
    });
}

changingBackground();


let topBtn = document.getElementById('topBtn');

const scroolingToTop = ()=>{
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    })
}

topBtn.addEventListener('click', scroolingToTop);