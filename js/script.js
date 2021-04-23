$(function() {
    var yRotation = 0;
    var dotRotation = 0;
    var spin = setInterval(function() {
        $('nav .dotDiv .dot').eq(dotRotation).removeClass('active');
        yRotation++;
        dotRotation++;
        if(dotRotation > 2) dotRotation = 0;
        $('nav .dotDiv .dot').eq(dotRotation).addClass('active');
        if(yRotation == 1) $('nav .tetrahedron').css('animation', 'spin1 1s ease-in-out forwards');
        if(yRotation == 2) $('nav .tetrahedron').css('animation', 'spin3 1s ease-in-out forwards');
        if(yRotation == 3) $('nav .tetrahedron').css('animation', 'spin5 1s ease-in-out forwards');
        if(yRotation > 2) yRotation = 0;
    }, 5000);
    function yRotateTo(rotateTo){
        if(rotateTo - 1 == yRotation){
            rotateY(rotateTo * 2 - 1);
            yRotation = rotateTo;
        }
        if(rotateTo + 1 == yRotation){
            rotateY((rotateTo + 2) * 2);
            yRotation = rotateTo;
        }
        if(rotateTo - 2 == yRotation){
            rotateY(2);
            yRotation = rotateTo;
        }
        if(rotateTo + 2 == yRotation){
            rotateY(5);
            yRotation = rotateTo;
        }
    }
    function rotateY(rotateTo){
        $('nav .tetrahedron').css('animation', 'spin' + rotateTo + ' 0.75s ease-in-out forwards');
    }
    $('nav .dotDiv .dot').eq(0).on('click', function(){
        clearInterval(spin);
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        yRotateTo(0);
    });
    $('nav .dotDiv .dot').eq(1).on('click', function(){
        clearInterval(spin);
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        yRotateTo(1);
    });
    $('nav .dotDiv .dot').eq(2).on('click', function(){
        clearInterval(spin);
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        yRotateTo(2);
    });
    var fontSize = 0;
    function fontSizeLoop(text, textParentSize, cutOff){
        while(text.outerHeight() < textParentSize - $(window).height() / 100 * cutOff){
            text.css('font-size', fontSize);
            fontSize++;
        }
        if(text.outerHeight() > textParentSize - $(window).height() / 100 * cutOff){
            fontSize = parseFloat(text.css('font-size'));
            while(text.outerHeight() > textParentSize - $(window).height() / 100 * cutOff){
                text.css('font-size', fontSize);
                fontSize--;
            }
        }
        fontSize = 0;
    }
    fontSizeLoop($('header .title'), $('header').outerHeight(), 4.2);
    //$('header .title').css({'padding-right': $('header .title').outerWidth() / 11, 'padding-left': $('header .title').outerWidth() / 11});
    for(var i = 0; i < $('main .row .textBox').length; i++){
        fontSizeLoop($('main .row .textBox p').eq(i), $('main .row .textBox').eq(i).height(), 0);
    }
    fontSizeLoop($('footer p'), $('footer').outerHeight(), 1.7);
    $('main .row div h2').css('font-size',  $('main .row div h2').css('font-size'));
    $('main .row h1').css('font-size', $('main .row h1').css('font-size'));
    $('main .row .mainText p').css('font-size', $('main .row .mainText p').css('font-size'));
    //
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
    var keyDown = false;
    $(window).keydown(function(key){
        if(key.keyCode == 17){
            $(window).keydown(function(key){
                if(key.keyCode == 187){
                    keyDown = true;
                }
            });
        }
    });
    $(window).keyup(function(key){
        if(key.keyCode == 187){
            $(window).keyup(function(key){
                if(key.keyCode == 17){
                    keyDown = false;
                }
            });
        }
    });
    $(window).keydown(function(key){
        if(key.keyCode == 17){
            $(window).keydown(function(key){
                if(key.keyCode == 189){
                    keyDown = true;
                }
            });
        }
    });
    $(window).keyup(function(key){
        if(key.keyCode == 17){
            $(window).keyup(function(key){
                if(key.keyCode == 189){
                    keyDown = false;
                }
            });
        }
    });
    $(window).resize(function() {
        if(!keyDown){
            fontSize = 0;
            for(var i = 0; i < $('main .tetrahedron div').length; i++){
                fontSizeLoop($('header .tetrahedron div a h2').eq(i), $('header .tetrahedron div').eq(i).outerHeight(), 5.2);
            }
            fontSizeLoop($('header .title'), $('header').outerHeight(), 5.2);
            //$('header .title').css({'padding-right': $('header .title').outerWidth() / 11, 'padding-left': $('header .title').outerWidth() / 11});
            for(var i = 0; i < $('main .row .textBox').length; i++){
                fontSizeLoop($('main .row .textBox p').eq(i), $('main .row .textBox').eq(i).height(), 0);
            }
            fontSizeLoop($('footer p'), $('footer').outerHeight(), 1.7);
            $('main .row div h2').css('font-size',  $('main .row div h2').css('font-size'));
            $('main .row h1').css('font-size', $('main .row h1').css('font-size'));
            $('main .row .mainText p').css('font-size', $('main .row .mainText p').css('font-size'));
        }
    });
});
/*$(window).resize(function() {
    if($(window).width() > $(window).height()) {
        $('main .row').css('height', 'calc(100vh - ' + $('header').outerHeight() + 'px)');
        //$('nav *').css('width', $('nav *').outerWidth() * 2);
    }
    else{
        $('main .row').css('height', 'calc((100vh - ' + $('header').outerHeight() + 'px) * 2)');
    }
    var fontSize = 0;
    while($('header .title').outerHeight() < $('header').outerHeight() - $(window).height() / 100 * 5.2){
        $('header .title').css('font-size', fontSize + 'px');
        fontSize++;
    }
    if($('header .title').outerHeight() > $('header').outerHeight() - $(window).height() / 100 * 5.2){
        fontSize = Number($('header .title').css('font-size').split('px')[0]);
        while($('header .title').outerHeight() > $('header').outerHeight()  - $(window).height() / 100 * 5.2){
            $('header .title').css('font-size', fontSize + 'px');
            fontSize--;
        }
    }
    fontSize = 0;
    //$('header .title').css({'padding-right': $('header .title').outerWidth() / 11, 'padding-left': $('header .title').outerWidth() / 11});
    for(var i = 0; i < 2; i++){
        while($('main .row .textBox p').eq(i).outerHeight() < $('main .row .textBox').eq(i).height()){
            $('main .row .textBox p').eq(i).css('font-size', fontSize + 'px');
            fontSize++;
        }
        if($('main .row .textBox p').eq(i).outerHeight() > $('main .row .textBox').eq(i).height()){
            fontSize = Number($('main .row .textBox p').eq(i).css('font-size').split('px')[0]);
            while($('main .row .textBox p').eq(i).outerHeight() > $('main .row .textBox').eq(i).height()){
                $('main .row .textBox p').eq(i).css('font-size', fontSize + 'px');
                fontSize--;
            }
        }
        fontSize = 0;
    }
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