// Research projects: tap a heading to open or close it.
document.querySelectorAll('.project-head').forEach(function (head) {
  head.addEventListener('click', function () {
    var box = head.parentElement;
    box.classList.toggle('open');
    head.setAttribute('aria-expanded', box.classList.contains('open'));
  });
});
