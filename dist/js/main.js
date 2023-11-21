function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#sidebar ul li a');

    let passedSections = Array.from(sections).map((section, index) => {
        return {
            y: section.getBoundingClientRect().top - section.offsetHeight * 0.5, 
            id: sections[index].id
        };
    }).filter(section => section.y < 0);

    let currentSectionId = passedSections.length > 0 ? passedSections[passedSections.length - 1].id : 'start';

    navLinks.forEach(link => {
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



