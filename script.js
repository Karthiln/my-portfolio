const nav =document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50){
        nav.classList.add('scrolled');
    }else {
        nav.classList.remove('scrolled');
    }
});

const title = document.querySelector('h1');
setTimeout(() => {title.innerText = 'Karthik | Software Developer'; }, 2000);