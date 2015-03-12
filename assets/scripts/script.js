$(document).ready(function(){
    var clicks = true;
    $('.largebox').load(function() {
        $('.box').slideDown();
    });

    $('.hiddenmenu').click(function() {
        $('.hiddenmenu').css('right', '-200px');
    });
    $('.menu').click(function() {
        $('.hiddenmenu').css('right', '0px');
    });

    $('#hire').click(function() {
        $('.hirebox').css('display', 'block');
        $('.pagetrans').css('display','block');
        $('.pagetrans').animate({opacity:'1'},"fast");
        $('.diety').css('-webkit-filter', 'blur(7px)');
        $('.diety').css('-moz-filter', 'blur(7px)');
        $('.diety').css('-o-filter', 'blur(7px)');
        $('.diety').css('-ms-filter', 'blur(7px)');
        $('.diety').css('filter', 'blur(7px)');
    });


    $('.largebox').click(function() {

        //function body
        //$('.box').css('display', 'none');

        //alert("Hello");

    }); //auto-run


});
