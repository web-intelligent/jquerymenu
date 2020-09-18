$(document).ready(function () {
    $('.menu ul').slideUp();



    $('.menu li a').click(function () { 

        var menu = $(this).closest('.menu');

        // Если кликнутый элемент не виден
        if(!$(this).next().is(':visible')) {
            menu.find('ul').slideUp();
            menu.find('li').removeClass('active');
            menu.find('a').removeClass('active_link');
        }

        $(this).next().slideToggle();
        $(this).parent().toggleClass('active');
        $(this).toggleClass('active_link');
        
    });
});