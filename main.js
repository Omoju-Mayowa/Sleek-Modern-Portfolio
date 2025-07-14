const menuBtn = document.querySelector('#menu-btn');
const closeBtn = document.querySelector('#close-btn');
const menu = document.querySelector('nav .container ul');
const navIcon = document.querySelector('nav .container a.nav-icon h3');

menuBtn.addEventListener('click', () => {
    menu.classList.add('show-menu');
    menuBtn.style.display = 'none';
    closeBtn.style.display = 'inline-block';
})

navIcon.addEventListener('click', () => {
    body.classList.toggle('dark-theme');
})

closeBtn.addEventListener('click', () => {
    menu.classList.remove('show-menu');
    menuBtn.style.display = 'inline-block';
    closeBtn.style.display = 'none';
})

const navItems = menu.querySelectorAll('li');

const changeActiveItems = () => {
    navItems.forEach(item => {
        const link = item.querySelector('a');
        link.classList.remove('active');
    })
}

navItems.forEach(item => {
    const link = item.querySelector('a');
    link.addEventListener('click', () => {
        changeActiveItems();
        link.classList.toggle('active');
    })
})





const readMoreBtn = document.querySelector('.read-more');
const readMoreContent = document.querySelector('.read-more-content');

readMoreBtn.addEventListener('click', () => {
    readMoreContent.classList.toggle('show-content');
    if(readMoreContent.classList.contains('show-content')) {
        readMoreBtn.textContent = "Show less";
    }   else {
        readMoreBtn.textContent = "Show more";
    }
})

const skillItems = document.querySelectorAll('section.skills .skill');

skillItems.forEach(skill => {
    skill.querySelector('.head').addEventListener('click', () => {
        skill.querySelector('.items').classList.toggle('show-items');
    })
})

window.addEventListener('scroll', () => {
    document.querySelector('nav').classList.toggle('show-box-shadow', window.scrollY > 0);
})