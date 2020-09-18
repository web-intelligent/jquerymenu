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

    // $('.menu li a').click(function () {
    //     if (!$(this).hasClass('active')) {	//если "кликнутый" пункт неактивный:
    //          $('ul.akkordeon1 li > p').removeClass('active').next('div').slideUp(); //делаем неактивными все пункты и скрываем все блоки
    //         $(this).addClass('active');	//активируем "кликнутый" пункт
    //         $(this).next('div').slideDown(200);	//раскрываем следующий за ним блок с описанием
    //     } else {	//иначе:
    //         $(this).removeClass('active').next('div').slideUp();	//скрываем данный пункт
    //     }
    // });
});