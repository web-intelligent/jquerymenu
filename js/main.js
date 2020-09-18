$(document).ready(function () {
    $('.menu ul').slideUp();

    $('.menu li a').click(function (e) { 
        e.preventDefault();
        
        
        if (!$(this).next().is(':visible')) {
            // Если кликнутый элемент не виден
            $('.menu ul').slideUp();
            $(this).closest('ul').slideDown();
        }

        $(this).next().slideToggle();
        
    });
});