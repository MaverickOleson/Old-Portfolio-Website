$(function() {
    $('header h1').css({'margin-top': $('header h1').height() / 8, 'margin-bottom': $('header h1').height() / 8});
    $('header nav * *').css({'border-right-width': $('header').height() / 4.5 * 2,'border-left-width': $('header').height() / 4.5 * 2});
    $('header nav * *').css('border-bottom-width', Math.sqrt(Math.pow(Number($('header nav * *').css('border-right-width').split('px')[0]), 2) * 4 - Math.pow(Number($('header nav * *').css('border-right-width').split('px')[0]), 2)));
    $('header nav').css('margin-top', ($('header').outerHeight() - Math.tan(60 * Math.PI / 180) * Number($('header nav * *').css('border-right-width').split('px')[0])) / 2);
    $('header nav').css('margin-left', $('header nav').css('margin-top'));
    //$('header nav * * *').css({'left': $('header nav').width() / 2 - $('header nav * * *').width() / 2, 'top': Math.tan(60 * Math.PI / 180) * Number($('header nav *').css('border-right-width').split('px')[0]) / 2});
    $('main .row').css('height', 'calc(100vh - ' + $('header').outerHeight() + 'px)');
});
$(window).resize(function() {
    $('header h1').css({'margin-top': $('header h1').height() / 8, 'margin-bottom': $('header h1').height() / 8});
    $('header nav *').css({'border-right-width': $('header').height() / 4.5 * 2,'border-left-width': $('header').height() / 4.5 * 2});
    $('header nav').css('margin-top', ($('header').outerHeight() - Math.tan(60 * Math.PI / 180) * Number($('header nav *').css('border-right-width').split('px')[0])) / 2);
    $('header nav').css('margin-left', $('header nav').css('margin-top'));
    $('nav .panel1').css('border-bottom', '' + Math.sqrt(Math.pow(Number($('nav .panel1').css('border-right-width').split('px')[0]), 2) * 4 - Math.pow(Number($('nav .panel1').css('border-right-width').split('px')[0]), 2)) + 'px solid salmon');
    $('nav .panel1 .frontPanel *').css({'left': $('nav').width() / 2 - $('nav .panel1 .frontPanel *').width() / 2, 'top': Math.tan(60 * Math.PI / 180) * Number($('header nav *').css('border-right-width').split('px')[0]) / 2});
    $('main .row').css('height', 'calc(100vh - ' + $('header').outerHeight() + 'px)');
})

/*
Function to animate/reposition elements from navigation to body:

$(function(){
    $('#p1').css('position', 'absolute');
    $('#p1').animate({top: $('#p-place').offset().top - $('#p-place').height()});
    //Need to replace elements? Probably not, but if: remove and append
})*/