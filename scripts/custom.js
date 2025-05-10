$(document).ready(function(){

    $(".navicon").click(function(){
        $(".topNav").css("right", 0);
    });

    $(".close").click(function(){
        $(".topNav").css("right", "-200px");
    });


    $(".topNav li a").click(function(){
        $(".topNav li ul").slideUp();
        $(this).next("ul").slideDown(1000);
    });

    //light box

    $(".close").click(function(){
        $(".lgBox").hide();
    });

    $(".coffeeX li img").click(function(){
        var x = $(this).attr("src");
        $(".contBox img").attr("src", x);
        $(".lgBox").fadeIn(500);
    });

    

});