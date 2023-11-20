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


document.getElementById('hamburger-icon').addEventListener('click', function() {
    document.body.classList.toggle('is-active');
});
