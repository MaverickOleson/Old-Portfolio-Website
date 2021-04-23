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
    if($('header .title').offset().left < $('header nav').offset().left + $('header nav').outerWidth()){
        $('header').css("justify-content", 'flex-end');
        while($('header .title').outerWidth() < $('header').outerWidth() - $('header nav').outerWidth(true)){
            $('header .title').css('font-size', fontSize);
            fontSize++;
        }
        if($('header .title').outerWidth() > $('header').outerWidth() - $('header nav').outerWidth(true)){
            fontSize = parseFloat($('header .title').css('font-size'));
            while($('header .title').outerWidth() > $('header').outerWidth() - $('header nav').outerWidth(true)){
                $('header .title').css('font-size', fontSize);
                fontSize--;
            }
        }
        fontSize = 0;
    }
    for(var i = 0; i < $('main .row .textBox').length; i++){
        fontSizeLoop($('main .row .textBox p').eq(i), $('main .row .textBox').eq(i).height(), 0);
    }
    fontSizeLoop($('footer p'), $('footer').outerHeight(), 1.7);
    $('main .row div h2').css('font-size',  $('main .row div h2').css('font-size'));
    $('main .row h1').css('font-size', $('main .row h1').css('font-size'));
    $('main .row .mainText p').css('font-size', $('main .row .mainText p').css('font-size'));
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
            if($('header .title').offset().left < $('header nav').offset().left + $('header nav').outerWidth()){
                $('header').css("justify-content", 'flex-end');
                while($('header .title').outerWidth() < $('header').outerWidth() - $('header nav').outerWidth(true)){
                    $('header .title').css('font-size', fontSize);
                    fontSize++;
                }
                if($('header .title').outerWidth() > $('header').outerWidth() - $('header nav').outerWidth(true)){
                    fontSize = parseFloat($('header .title').css('font-size'));
                    while($('header .title').outerWidth() > $('header').outerWidth() - $('header nav').outerWidth(true)){
                        $('header .title').css('font-size', fontSize);
                        fontSize--;
                    }
                }
                fontSize = 0;
            }
            else{
                $('header').css("justify-content", 'center');
                fontSizeLoop($('header .title'), $('header').outerHeight(), 5.2);
            }
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