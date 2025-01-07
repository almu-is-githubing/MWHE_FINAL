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
        $image.attr("src", "Resources/Homepage/hirono_prince_contacto_responsive.webp"); 
      } else {
        $image.attr("src", "Resources/Homepage/hirono_prince_contacto.webp");
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
