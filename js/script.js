$(function() {
    var yRotation = 0;
    //keeps track of rotation of nav
    var dotRotation = 0;
    //keeps track of which dot is active
    var spin = setInterval(function() {
        //looping interval for the following function
        $('nav .dotDiv .dot').eq(dotRotation).removeClass('active');
        //the dot that has .active loses .active
        yRotation++;
        dotRotation++;
        //rotations are iterated through
        if(dotRotation > 2) dotRotation = 0;
        //if the dotRotation is greater than 2, it goes back to 0
        $('nav .dotDiv .dot').eq(dotRotation).addClass('active');
        //next dot gets .active class
        if(yRotation == 1) $('nav .tetrahedron').css('animation', 'spin1 1s ease-in-out forwards');
        if(yRotation == 2) $('nav .tetrahedron').css('animation', 'spin3 1s ease-in-out forwards');
        if(yRotation == 3) $('nav .tetrahedron').css('animation', 'spin5 1s ease-in-out forwards');
        //depending on the yRotation, the nav tetrahedron will have a certain animation
        if(yRotation > 2) yRotation = 0;
        // when yRotation is greater than 2, it goes back to 0
    }, 5000);
    function yRotateTo(rotateTo){
        //rotate function to determine what number of animation should activate depending on what dot was pushed
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
        //depending on what dot was pushed, a certain animation will be selected with an if statement
    }
    function rotateY(rotateTo){
        //funciton to give nav a rotate animation
        $('nav .tetrahedron').css('animation', 'spin' + rotateTo + ' 0.75s ease-in-out forwards');
        //depending on what animation was chosen in the yRotateTo function, it will give the nav that animation
    }
    $('nav .dotDiv .dot').eq(0).on('click', function(){
        //function for the first existing dot
        clearInterval(spin);
        //spin animation interval stops
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        //pushed dot gets .active, while other dot loses .active
        yRotateTo(0);
        //yRotateTo function with the number of dot
    });
    $('nav .dotDiv .dot').eq(1).on('click', function(){
        //function for the second existing dot
        clearInterval(spin);
        //function for the second existing dot
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        //pushed dot gets .active, while other dot loses .active
        yRotateTo(1);
        //yRotateTo function with the number of dot
    });
    $('nav .dotDiv .dot').eq(2).on('click', function(){
        //function for the third existing dot
        clearInterval(spin);
        //function for the third existing dot
        $(this).parent().find('.active').removeClass('active');
        $(this).addClass('active');
        //pushed dot gets .active, while other dot loses .active
        yRotateTo(2);
        //yRotateTo function with the number of dot
    });
    var fontSize = 0;
    //fontSize number
    function fontSizeLoop(text, textParentSize, cutOff){
        //function for making the fontSize
        while(text.outerHeight() < textParentSize - $(window).height() / 100 * cutOff){
            text.css('font-size', fontSize);
            fontSize++;
        }
        //while the text is smaller than its parent, the fontSize of the text will increase
        if(text.outerHeight() > textParentSize - $(window).height() / 100 * cutOff){
            //if the text ends up bigger than the parent, by mistake, the following happens:
            fontSize = parseFloat(text.css('font-size'));
            //fontSize is set to the text's fontSize, in case the first while loop wasn't applicable and it started from the fontSize being 0, which it gets turned to at the end of this function 
            while(text.outerHeight() > textParentSize - $(window).height() / 100 * cutOff){
                text.css('font-size', fontSize);
                fontSize--;
                //while the text is bigger than its parent, the fontSize of the text will decrease
            }
        }
        fontSize = 0;
        //fontSize reset to 0 for future pieces of text
    }
    fontSizeLoop($('header .title'), $('header').outerHeight(), 4.2);
    //title put through fontSizeLoop function
    if($('header .title').offset().left < $('header nav').offset().left + $('header nav').outerWidth()){
        //if the x coordinate of the title is left of the x coordinate of the nav, the following happens:
        $('header').css("justify-content", 'flex-end');
        //header justify-content is turned to flex-end
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
        //nearly the same as the fontSizeLoop function, apart from the fact that the title is resized to not overlap with the nav
        if($('header .title').offset().top - $('header .title').outerHeight(true) < $('#inverter').offset().top){
            //if the y coordinate of the title is below the y coordinate of the inverter, the following happens:
            fontSize = 0;
            //fontSize reset to 0
            $('header').css("align-items", 'flex-start');
            //header justify-content is turned to flex-end
            fontSizeLoop($('header .title'), $('header').height(), 5.3);
            //title put through fontSizeLoop function, against smaller height, to compensate for the inverter
            if($('header .title').offset().left < $('header nav').offset().left + $('header nav').outerWidth()){
                fontSize = 0;
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
            }
            //nearly the same as the fontSizeLoop function, apart from the fact that the title is resized to not overlap with the inverter and then the nav again
        }
        fontSize = 0;
        //fontSize reset to 0
    }
    for(var i = 0; i < $('main .row .textBox p').length; i++){
        fontSizeLoop($('main .row .textBox p').eq(i), $('main .row .textBox').eq(i).height(), 0);
        //textbox text put through fontSizeLoop function
    }
    for(var i = 0; i < $('footer a').length; i++){
        fontSizeLoop($('footer a').eq(i), $('footer').height() / 3, 0);
        //footer text put through fontSizeLoop function
    }
    $('main .row div h2').css('font-size',  $('main .row div h2').css('font-size'));
    $('main .row h1').css('font-size', $('main .row h1').css('font-size'));
    $('main .mainText p').css('font-size', $('main .mainText p').css('font-size'));
    //multiple text elements, whose fonts are set to viewport values in scss, have their fonts changed to pixels
    $('#back').css('height', $('#galleryImg').height());
    $('#next').css('height', $('#galleryImg').height());
    //buttons are sized to fit the galleryView
    var keyDown = false;
    //boolean for if a certain set of keys are being pressed
    $(window).keydown(function(key){
        if(key.keyCode == 17){
            $(window).keydown(function(key){
                if(key.keyCode == 187){
                    keyDown = true;
                    //if the ctrl and + keys are being pressed, keyDown is true
                }
            });
        }
    });
    $(window).keyup(function(key){
        if(key.keyCode == 187){
            $(window).keyup(function(key){
                if(key.keyCode == 17){
                    keyDown = false;
                    //if the ctrl and + keys are released, keyDown is false
                }
            });
        }
    });
    $(window).keydown(function(key){
        if(key.keyCode == 17){
            $(window).keydown(function(key){
                if(key.keyCode == 189){
                    keyDown = true;
                    //if the ctrl and - keys are being pressed, keyDown is true
                }
            });
        }
    });
    $(window).keyup(function(key){
        if(key.keyCode == 17){
            $(window).keyup(function(key){
                if(key.keyCode == 189){
                    keyDown = false;
                    //if the ctrl and - keys are released, keyDown is false
                }
            });
        }
    });
    $(window).resize(function() {
        //when the window resizes, the following function happens:
        if(!keyDown){
            //if the ctrl and + or ctrl and - are not being pressed, the website is resized, to allow for changes in browser sizes, while not interfering with zooming of the website
            fontSize = 0;
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
                if($('header .title').offset().top - $('header .title').outerHeight(true) < $('#inverter').offset().top){
                    fontSize = 0;
                    $('header').css("align-items", 'flex-start');
                    fontSizeLoop($('header .title'), $('header').height(), 5.3);
                    if($('header .title').offset().left < $('header nav').offset().left + $('header nav').outerWidth()){
                        fontSize = 0;
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
                    }
                }
                fontSize = 0;
            }
            else{
                $('header').css("justify-content", 'center');
                fontSizeLoop($('header .title'), $('header').outerHeight(), 4.2);
                //if the x coordinate of the title is right of the x coordinate of the nav, upon resize, the header is reverted back to having justify-content: center, and the title is resized back to normal
            }
            for(var i = 0; i < $('main .row .textBox p').length; i++){
                fontSizeLoop($('main .row .textBox p').eq(i), $('main .row .textBox').eq(i).height(), 0);
            }
            for(var i = 0; i < $('footer a').length; i++){
                fontSizeLoop($('footer a').eq(i), $('footer').height() / 4, 0);
            }
            $('main .row div h2').css('font-size',  $('main .row div h2').css('font-size'));
            $('main .row h1').css('font-size', $('main .row h1').css('font-size'));
            $('main .mainText p').css('font-size', '');
            $('main .mainText p').css('font-size', $('main .mainText p').css('font-size'));
            $('#back').css('height', $('#galleryImg').height());
            $('#next').css('height', $('#galleryImg').height());
        }
    });
});