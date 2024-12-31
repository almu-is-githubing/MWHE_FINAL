console.log("hello world");

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