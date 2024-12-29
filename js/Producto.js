

$('.main-carousel').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    wrapAround: true,
  });

  // SELECCIÓN DE FOTOS 

$('#product-1').click(function(){
    $('#main-picture').attr('src', 'Resources/Producto/hirono_product_1.webp');
 });


$('#product-2').click(function(){
  $('#main-picture').attr('src', 'Resources/Producto/hirono_product_2.webp');
});


$('#product-3').click(function(){
  $('#main-picture').attr('src', 'Resources/Producto/hirono_product_3.webp');
});


$('#product-4').click(function(){
  $('#main-picture').attr('src', 'Resources/Producto/hirono_box_1.webp');
});


$('#product-5').click(function(){
  $('#main-picture').attr('src', 'Resources/Producto/hirono_box_2.webp');
});

// AÑADIR A FAVORITOS

$('#corazon').click(function() {
  if ($('#corazon').attr('class') === 'fa-regular fa-heart') {
    $('#corazon').attr('class', 'fa-solid fa-heart');    
  } else { 
    $('#corazon').attr('class', 'fa-regular fa-heart');
  }
});

$(document).ready(function () {
  $('#quantity').on('input', function () {
      // Obtener la cantidad seleccionada
      const quantity = parseInt($(this).val(), 10) || 1; // Por si el usuario deja vacío

      // Obtener el precio unitario
      const unitPrice = parseFloat($('#unit-price').data('price')) || 0;

      // Calcular el precio total
      const totalPrice = quantity * unitPrice;

      // Actualizar el campo del precio total
      $('#total-price').text(totalPrice.toFixed(2)); // Mostrar con 2 decimales

      // Depuración en consola
      console.log("Cantidad:", quantity);
      console.log("Precio unitario:", unitPrice);
      console.log("Precio total:", totalPrice);
  });
});