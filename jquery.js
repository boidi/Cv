$(function(){
    $('.back').click(function () {
        $('.test1').hide();
        $('.test').show();
    });
    $('.front').click(function(){
        $('.test').hide();
        $('.test1').show();
    });
    $('.all').click(function (){
            $('.test1').show();
            $('.test').show();
        }

    );

        $('[data-toggle="tooltip"]').tooltip();


});