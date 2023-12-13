function updateActiveLink() {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#sidebar ul li a');
    const menuButtonLinks = document.querySelectorAll('.menu-nav .nav-item a');

    let currentSectionId = 'start'; // Default to 'start' section
    let currentSectionBottom = 0; // Track the bottom position of the current section

    sections.forEach((section, index) => {
        const sectionTop = section.getBoundingClientRect().top;
        const sectionBottom = sectionTop + section.offsetHeight;

        // If the section is at least half shown at the top and not passed halfway at the bottom
        if (sectionTop < (window.innerHeight / 2) && sectionBottom > (window.innerHeight / 2)) {
            currentSectionId = section.id;
            currentSectionBottom = sectionBottom; // Update the bottom position of the current section
        }
    });

    // If we're at the bottom of the page, set the last section as active
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        currentSectionId = sections[sections.length - 1].id;
    }

    // update sidebar
    navLinks.forEach(link => {
        link.classList.remove('current');
        if (link.getAttribute('href').substring(1) === currentSectionId) {
            link.classList.add('current');
        }
    });

    // update menu button
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



