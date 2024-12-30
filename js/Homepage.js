console.log("hello world");

$(document).ready(function () {
    const $form = $(".formulario__incidencias");
    const $submitButton = $("#submit");
  
    $form.on("input", function () {
      // Verifica si todos los campos son válidos
      const allFieldsFilled = $form
        .find("input, textarea")
        .toArray()
        .every((input) => input.checkValidity());
  
      // Habilita o deshabilita el botón según el estado de los campos
      $submitButton.prop("disabled", !allFieldsFilled);
    });
  });