function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#sidebar ul li a');
    const menuButtonLinks = document.querySelectorAll('.menu-nav .nav-item a');

    let currentSectionId = 'start'; 
    let currentSectionBottom = 0; 

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = sectionTop + section.offsetHeight;

        
        if (sectionTop < (window.innerHeight / 2) && sectionBottom > (window.innerHeight / 2)) {
            currentSectionId = section.id;
            currentSectionBottom = sectionBottom; 
        }
    });

  
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        currentSectionId = sections[sections.length - 1].id;
    }


    navLinks.forEach(link => {
        link.classList.remove('current');
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('current');
        }
    });


    menuButtonLinks.forEach(link => {
        link.classList.remove('current');
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('current');
        }
    });
}


window.addEventListener('scroll', updateActiveLink);
window.addEventListener('DOMContentLoaded', updateActiveLink);






// Select DOM Items

const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');


// Set Initial State of Menu 
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
    if(!showMenu) {
        menuBtn.classList.add('close');
        menu.classList.add('show');
        menuNav.classList.add('show');
        navItems.forEach(item => item.classList.add('show'));

        //set Menu State
        showMenu = true;
    } else {
        menuBtn.classList.remove('close');
        menu.classList.remove('show');
        menuNav.classList.remove('show');
        navItems.forEach(item => item.classList.remove('show'));

        //set Menu State
        showMenu = false;
    }
}

document.getElementById('year').textContent = new Date().getFullYear();



