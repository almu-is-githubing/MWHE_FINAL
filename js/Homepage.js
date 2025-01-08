console.log("hello world");

// MENÚ

$(document).ready(function() {
  
    $('#menu-hamburguer').click(function() {
        $('#menu-items').addClass('show');
    });
  
    $('#close-icon').click(function() {
        $('#menu-items').removeClass('show');
    });
  
    $('.menu-link').click(function() {
        $('#menu-items').removeClass('show');
    });
});

// Link imágenes de colecciones a colecciones con más info
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
  }
}

// ALMU

function learnMore() {
    alert("Más información sobre el creador próximamente!");
}

$(document).ready(function () {

  // COMPROBACIÓN DEL FORMULARIO
    const $form = $(".formulario__incidencias");
    const $submitButton = $("#submit");
  
    $form.on("input", function () {

      const allFieldsFilled = $form
        .find("input, textarea")
        .toArray()
        .every((input) => input.checkValidity());
  
      $submitButton.prop("disabled", !allFieldsFilled);

    });

    // CAMBIAR RUTA IMAGEN FORMULARIO EN RESPONSIVE
    function updateImageSource() {
      const $image = $(".contact__form__img"); 
  
      if ($(window).width() < 985) {
        $image.attr("src", "Resources/Homepage/Homepage_Contacto/hirono_prince_contacto_responsive.webp"); 
      } else {
        $image.attr("src", "Resources/Homepage/Homepage_Contacto/hirono_prince_contacto.webp");
      }
    }
    
    updateImageSource();
  
    $(window).resize(function () {
      updateImageSource();
    });

  });
  
const acordeons = document.querySelectorAll(".footer_acordeonDisplay");

acordeons.forEach((footer_acordeonDisplay) => {
    footer_acordeonDisplay.addEventListener("click", () => {
        footer_acordeonDisplay.classList.toggle("active")
    });
});

// GSAP

gsap.from(".hirono-profile h2, .hirono-profile p", {
  opacity: 0,
  y: 30,
  duration: 1,
  stagger: 0.2
});


gsap.from(".creator-image", {
  opacity: 0,
  scale: 0.8,
  duration: 1.2,
  delay: 0.5
});


gsap.from(".gallery-image", {
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.3,
  delay: 1
});

gsap.from(".instagram-link a", {
  opacity: 0,
  y: 20,
  duration: 1,
  delay: 1.5
});


 gsap.from(".info__descripcion__texto h2", {
  x: -50,
  duration: 1,
  delay: 0.3,
  ease: "power2.out"
});

gsap.from(".info__descripcion__texto p", {
  x: -50,
  duration: 1,
  delay: 0.5,
  ease: "power2.out"
});


gsap.fromTo(".info__descripcion__imagen img", 
  { scale: 0.9 }, 
  { scale: 1, duration: 1, delay: 0.7, ease: "power2.out" } 
);