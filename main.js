document.addEventListener('DOMContentLoaded', function () {
    const links = document.querySelectorAll('header nav a');
    const sections = document.querySelectorAll('section');

    function updateActiveLink() {
        let index = sections.length;

        while (--index && window.scrollY + 50 < sections[index].offsetTop) {}

        links.forEach((link) => link.classList.remove('active'));
        links[index].classList.add('active');
    }

    updateActiveLink();
    window.addEventListener('scroll', updateActiveLink);
});
