// Swiper
const swiper = new Swiper('.prod__rel__carrusel', {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    grabCursor: true,
    centeredSlides: true,
    effect: 'slide',
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
      $('#main-picture').attr('src', 'Resources/Producto/Producto_Fotos/hirono_product_1.webp');
  });


  $('#product-2').click(function(){
    $('#main-picture').attr('src', 'Resources/Producto/Producto_Fotos/hirono_product_2.webp');
  });


  $('#product-3').click(function(){
    $('#main-picture').attr('src', 'Resources/Producto/Producto_Fotos/hirono_product_3.webp');
  });


  $('#product-4').click(function(){
    $('#main-picture').attr('src', 'Resources/Producto/Producto_Fotos/hirono_box_1.webp');
  });


  $('#product-5').click(function(){
    $('#main-picture').attr('src', 'Resources/Producto/Producto_Fotos/hirono_box_2.webp');
  });


  // AÑADIR A FAVORITOS

  $('#corazon').click(function() {
    if ($('#corazon').attr('class') === 'fa-regular fa-heart') {
      $('#corazon').attr('class', 'fa-solid fa-heart');    
    } else { 
      $('#corazon').attr('class', 'fa-regular fa-heart');
    }
  });


  // SELECCIONAR MÉTODO DE PAGO

  $(".payment__icons").click(function () {

    if ($(this).hasClass("chosen__payment__method")) {
      $(this).removeClass("chosen__payment__method");
    } else {
      $(".icon").removeClass("chosen__payment__method");
      $(this).addClass("chosen__payment__method");
    }
  });

  
  // CÁLCULO DEL PRECIO

  $('#quantity').on('input', function () {

    const quantity = parseInt($(this).val(), 10) || 1;

    const unitPrice = parseFloat($('#unit-price').data('price')) || 0;

    const totalPrice = quantity * unitPrice;

    const formattedPrice = totalPrice.toFixed(2).replace('.', ',') + " €";

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
    const formattedPrice = unitPrice.toFixed(2).replace('.', ',') + "€";
    $('#total-price').text(formattedPrice);
  });

});

const acordeons = document.querySelectorAll(".footer_acordeonDisplay");

acordeons.forEach((footer_acordeonDisplay) => {
    footer_acordeonDisplay.addEventListener("click", () => {
        footer_acordeonDisplay.classList.toggle("active")
    });
});
