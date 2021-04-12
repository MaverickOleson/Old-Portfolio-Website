$(function() {
    
    //alert(90 - Math.asin(Math.sqrt(Math.pow($('.panel1 .frontPanel').width(), 2) - Math.pow($('.panel1 .frontPanel').width() / 2 / Math.cos(30), 2)) / Math.sqrt(Math.pow($('.panel1 .frontPanel').width(),2) - Math.pow($('.panel1 .frontPanel').width() / 2,2))));
    //$('header nav * div').css({'border-right-width': $('header').height() / 4.5 * 2,'border-left-width': $('header').height() / 4.5 * 2});
    //$('header nav * div').css('border-bottom-width', Math.sqrt(Math.pow(Number($('header nav * div').css('border-right-width').split('px')[0]), 2) * 4 - Math.pow(Number($('header nav * div').css('border-right-width').split('px')[0]), 2)));
    //$('header nav').css('margin-top', ($('header').outerHeight() - Math.tan(60 * Math.PI / 180) * Number($('header nav * div').css('border-right-width').split('px')[0])) / 2);
    //$('header nav').css('margin-left', $('header nav').css('margin-top'));
    //$('header nav .panel1').css('transform', 'rotateX(' + (90 - Math.asin(Math.sqrt(Math.pow(Number($('header nav * div').css('border-right-width').split('px')[0]) * 2, 2) - Math.pow(Number($('header nav * div').css('border-right-width').split('px')[0]) / Math.cos(1 / 6 * Math.PI), 2)) / Number($('header nav * div').css('border-bottom-width').split('px')[0])) * 180 / Math.PI) + 'deg)');
    //$('header nav .panel2').css({'right': -1 * Number($('header nav * div').css('border-right-width').split('px')[0]) + (Number($('header nav * div').css('border-right-width').split('px')[0]) / 2 - Math.tan(1 / 3 * Math.PI)),'transform': 'rotateY(-300deg) rotateX(' + (90 - Math.asin(Math.sqrt(Math.pow(Number($('header nav * div').css('border-right-width').split('px')[0]) * 2, 2) - Math.pow(Number($('header nav * div').css('border-right-width').split('px')[0]) / Math.cos(1 / 6 * Math.PI), 2)) / Number($('header nav * div').css('border-bottom-width').split('px')[0])) * 180 / Math.PI) + 'deg)'/* translateX(' + (Number($('header nav * div').css('border-right-width').split('px')[0]) / 2 - Math.tan(1 / 3 * Math.PI)) + 'px)'*/});
    //$('header nav .panel3').css({'right': -1 * (Number($('header nav * div').css('border-right-width').split('px')[0]) / 2 - Math.tan(1 / 3 * Math.PI)),'transform': 'rotateY(60deg) rotateX(' + (90 - Math.asin(Math.sqrt(Math.pow(Number($('header nav * div').css('border-right-width').split('px')[0]) * 2, 2) - Math.pow(Number($('header nav * div').css('border-right-width').split('px')[0]) / Math.cos(1 / 6 * Math.PI), 2)) / Number($('header nav * div').css('border-bottom-width').split('px')[0])) * 180 / Math.PI) + 'deg)'});
    //$('header nav .panel1 .backPanel *').css({'left': -$('header nav .panel1 .backPanel *').width() / 2, 'top': Math.tan(60 * Math.PI / 180) * Number($('header nav * div').css('border-right-width').split('px')[0]) / 2});
    //$('header nav .panel1 .frontPanel *').css({'left': -$('header nav .panel1 .frontPanel *').width() / 2, 'top': Math.tan(60 * Math.PI / 180) * Number($('header nav * div').css('border-right-width').split('px')[0]) / 2});
    //$('header nav .panel2 .backPanel *').css({'left': -$('header nav .panel2 .backPanel *').width() / 2, 'top': Math.tan(60 * Math.PI / 180) * Number($('header nav * div').css('border-right-width').split('px')[0]) / 2});
    //$('header nav .panel2 .frontPanel *').css({'left': -$('header nav .panel2 .frontPanel *').width() / 2, 'top': Math.tan(60 * Math.PI / 180) * Number($('header nav * div').css('border-right-width').split('px')[0]) / 2});
    //$('header nav .panel3 .backPanel *').css({'left': -$('header nav .panel3 .backPanel *').width() / 2, 'top': Math.tan(60 * Math.PI / 180) * Number($('header nav * div').css('border-right-width').split('px')[0]) / 2});
    //$('header nav .panel3 .frontPanel *').css({'left': -$('header nav .panel3 .frontPanel *').width() / 2, 'top': Math.tan(60 * Math.PI / 180) * Number($('header nav * div').css('border-right-width').split('px')[0]) / 2});
    //$('header nav * .frontPanel').animate({transform: 'rotateY(90deg)'}, 3000);
    //$('header nav * .backPanel').css('animation', 'spin2 7.5s infinite ease-in-out');
    //$('header nav * div *').css('transform', 'translateX(' + Number($('header nav * div').css('border-right-width').split('px')[0]) - $('header nav * div *').width() / 2 + ')')
    //$('main .row').css('height', 'calc(100vh - ' + $('header').outerHeight() + 'px)');
});
/*$(window).resize(function() {
    $('header h1').css({'margin-top': $('header h1').height() / 8, 'margin-bottom': $('header h1').height() / 8});
    $('header nav *').css({'border-right-width': $('header').height() / 4.5 * 2,'border-left-width': $('header').height() / 4.5 * 2});
    $('header nav').css('margin-top', ($('header').outerHeight() - Math.tan(60 * Math.PI / 180) * Number($('header nav *').css('border-right-width').split('px')[0])) / 2);
    $('header nav').css('margin-left', $('header nav').css('margin-top'));
    $('nav .panel1').css('border-bottom', '' + Math.sqrt(Math.pow(Number($('nav .panel1').css('border-right-width').split('px')[0]), 2) * 4 - Math.pow(Number($('nav .panel1').css('border-right-width').split('px')[0]), 2)) + 'px solid salmon');
    $('nav .panel1 .frontPanel *').css({'left': $('nav').width() / 2 - $('nav .panel1 .frontPanel *').width() / 2, 'top': Math.tan(60 * Math.PI / 180) * Number($('header nav *').css('border-right-width').split('px')[0]) / 2});
    $('main .row').css('height', 'calc(100vh - ' + $('header').outerHeight() + 'px)');
})*/

/*
Function to animate/reposition elements from navigation to body:

$(function(){
    $('#p1').css('position', 'absolute');
    $('#p1').animate({top: $('#p-place').offset().top - $('#p-place').height()});
    //Need to replace elements? Probably not, but if: remove and append
})*/