$(document).ready(function () {
    var originalColors = [];

    $(document).on("mouseenter mouseleave", ".icon1", function(e){
        if (e.type == "mouseenter") {
            originalColors[$(this).index('.icon1')] = $(this).css('color');
            $(this).css('color', 'white');
        } else {
            $(this).css('color', originalColors[$(this).index('.icon1')]);
        }
    });

    $(document).on("mouseenter mouseleave", ".icon2", function(e){
        if (e.type == "mouseenter") {
            originalColors[$(this).index('.icon2')] = $(this).css('color');
            $(this).css('color', 'white');
        } else {
            $(this).css('color', originalColors[$(this).index('.icon2')]);
        }
    });
    
    $(document).on("mouseenter mouseleave", ".icon3", function(e){
        if (e.type == "mouseenter") {
            originalColors[$(this).index('.icon3')] = $(this).css('color');
            $(this).css('color', 'white');
        } else {
            $(this).css('color', originalColors[$(this).index('.icon3')]);
        }
    });

    $(document).on("mouseenter mouseleave", ".tweet", function(e){
        if (e.type == "mouseenter") {
            $(this).css('box-shadow', '5px 10px');
        } else {
            $(this).css('box-shadow', '');
        }
    });
})