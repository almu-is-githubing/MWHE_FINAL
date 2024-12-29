

$(document).ready(function () {

  // CAROUSEL FLICKITY

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

  // CÁLCULO DEL PRECIO


  $('#quantity').on('input', function () {
    // Obtener la cantidad seleccionada
    const quantity = parseInt($(this).val(), 10) || 1; // Por si el usuario deja vacío

    // Obtener el precio unitario
    const unitPrice = parseFloat($('#unit-price').data('price')) || 0;

    // Calcular el precio total
    const totalPrice = quantity * unitPrice;

    // Formatear el precio total con coma y símbolo del euro
    const formattedPrice = totalPrice.toFixed(2).replace('.', ',') + " €";

    // Actualizar el campo del precio total
    $('#total-price').text(formattedPrice);
  });  

  // SELECCIONAR OPCIÓN DE PRODUCTO


  $('.single, .set').click(function () {

    $('.single, .set').removeClass('selected');

    $(this).addClass('selected');

    if ($(this).hasClass('single')) {
        $('#unit-price').data('price', 15);
        $('#unit-price').text("15,00€");
    } else if ($(this).hasClass('set')) {
        $('#unit-price').data('price', 90);
        $('#unit-price').text("90,00€");
    }

    $('#quantity').val(1);

    const unitPrice = parseFloat($('#unit-price').data('price')) || 0;
    const formattedPrice = unitPrice.toFixed(2).replace('.', ',') + " €";
    $('#total-price').text(formattedPrice);
  });

});