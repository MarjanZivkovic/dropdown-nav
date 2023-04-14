// open and close nav menu
const openBtn = document.querySelector('.hamburger');
const closeBtn = document.querySelector('.close-btn');
const navContainer = document.querySelector('.nav-container');
const navBar = document.querySelector('nav');

function openNavbar(){
    navBar.classList.add('active');
    navContainer.classList.add('active');
    openBtn.style.display = 'none'; 
}

function closeNavbar(){
    navBar.classList.remove('active');
    navContainer.classList.remove('active');
    openBtn.style.display = 'block'; 
}

openBtn.addEventListener('click', openNavbar);

closeBtn.addEventListener('click', closeNavbar);
document.body.addEventListener('click', (e) =>{
    if(e.target === navContainer){
        closeNavbar();         
    }
});

// dropdown navigation
const interactiveLinks = document.querySelectorAll('.interactive-link');

interactiveLinks.forEach( link =>{
    link.addEventListener('mouseenter', () =>{
        link.children[3].classList.add('shown');
        link.children[1].children[0].src = './images/icon-arrow-up.svg';
    })
});

interactiveLinks.forEach( link =>{
    link.addEventListener('mouseleave', () =>{
        link.children[3].classList.remove('shown');
        link.children[1].children[0].src = './images/icon-arrow-down.svg';
    })
});