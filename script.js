// =====================================================
// NAVIGATION
// =====================================================

document.querySelectorAll('.nav-links a').forEach(function (link) {
    link.addEventListener('click', function () {
        document.body.classList.remove('menu-open');
    });
});


// =====================================================
// RESEARCH PROJECT ACCORDION
// =====================================================

document.querySelectorAll('.project-head').forEach(function (head) {

    head.addEventListener('click', function () {

        var project = head.closest('.project');

        var isOpen = project.classList.toggle('open');

        head.setAttribute(
            'aria-expanded',
            isOpen ? 'true' : 'false'
        );

    });

});
