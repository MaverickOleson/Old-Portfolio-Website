$(function() {
    $('header h1').css({'margin-top': $('header h1').height() / 8, 'margin-bottom': $('header h1').height() / 8});
    $('header nav').css('width', $('header').height() / 5 * 4);
    $('header nav').css('height', $('header nav').width());
    $('header nav').css('margin-top', (($('header').outerHeight()) - $('header nav').height()) / 2);
    $('header nav').css('margin-left', $('header nav').css('margin-top'));
    $('main').css('height', 'calc(100vh - ' + $('header').outerHeight() + 'px)');
});
$(window).resize(function() {
    $('header h1').css({'margin-top': $('header h1').height() / 8, 'margin-bottom': $('header h1').height() / 8});
    $('header nav').css('width', $('header').height() / 5 * 4);
    $('header nav').css('height', $('header nav').width());
    $('header nav').css('margin-top', (($('header').outerHeight()) - $('header nav').height()) / 2);
    $('header nav').css('margin-left', $('header nav').css('margin-top'));
    $('main').css('height', 'calc(100vh - ' + $('header').outerHeight() + 'px)');
})
/*
Function to animate/reposition elements from navigation to body:

$(function(){
    $('#p1').css('position', 'absolute');
    $('#p1').animate({top: $('#p-place').offset().top - $('#p-place').height()});
    //Need to replace elements? Probably not, but if: remove and append
})*/