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
