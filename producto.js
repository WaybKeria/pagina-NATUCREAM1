window.addEventListener('scroll', fadeInOnScroll);

function fadeInOnScroll() {
  var contenido = document.getElementById('contenido');
  var btnScroll2 = document.querySelector('.btn-scroll2');
  var contenidoPosition = contenido.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if (contenidoPosition < screenPosition) {
    contenido.classList.add('fade-in');
    btnScroll2.classList.add('fade-in-btn');
  }
}