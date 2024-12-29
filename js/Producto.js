// Inicializar Swiper
const swiper = new Swiper('.relacionados-carrusel', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    effect: 'slide', // Cambiar a 'coverflow' si quieres un efecto 3D más pronunciado
    pagination: {
      el: '.relacionados-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.relacionados-next',
      prevEl: '.relacionados-prev',
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });
  