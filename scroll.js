$(document).ready(function(){       
    var scroll_pos = 0;
    $(document).scroll(function() { 
        scroll_pos = $(this).scrollTop();
        console.log(scroll_pos);
        if(scroll_pos>2500){
            $(".home").css('color', '#a8a9b4');
            $(".main-home").css('color', '#a8a9b4');
            $(".about").css('color', '#a8a9b4');
            $(".main-about").css('color', '#a8a9b4');
            $(".re").css('color', '#a8a9b4');
            $(".main-re").css('color', '#a8a9b4');
            $(".port").css('color', '#a8a9b4');
            $(".main-port").css('color', '#a8a9b4');
            $(".sk").css('color', '#a8a9b4');
            $(".main-skill").css('color', '#a8a9b4');
            $(".con").css('color', '#2ECCFA');
            $(".main-con").css('color', '#fff');
        }else if(scroll_pos>2200){
            $(".home").css('color', '#a8a9b4');
            $(".main-home").css('color', '#a8a9b4');
            $(".about").css('color', '#a8a9b4');
            $(".main-about").css('color', '#a8a9b4');
            $(".re").css('color', '#a8a9b4');
            $(".main-re").css('color', '#a8a9b4');
            $(".port").css('color', '#a8a9b4');
            $(".main-port").css('color', '#a8a9b4');
            $(".sk").css('color', '#2ECCFA');
            $(".main-skill").css('color', '#fff');
            $(".con").css('color', '#a8a9b4');
            $(".main-con").css('color', '#a8a9b4');
        }else if(scroll_pos>1706){
            $(".home").css('color', '#a8a9b4');
            $(".main-home").css('color', '#a8a9b4');
            $(".about").css('color', '#a8a9b4');
            $(".main-about").css('color', '#a8a9b4');
            $(".re").css('color', '#a8a9b4');
            $(".main-re").css('color', '#a8a9b4');
            $(".port").css('color', '#2ECCFA');
            $(".main-port").css('color', '#fff');
            $(".sk").css('color', '#a8a9b4');
            $(".main-skill").css('color', '#a8a9b4');
            $(".con").css('color', '#a8a9b4');
            $(".main-con").css('color', '#a8a9b4');
        }else if(scroll_pos >940){
            $(".home").css('color', '#a8a9b4');
            $(".main-home").css('color', '#a8a9b4');
            $(".about").css('color', '#a8a9b4');
            $(".main-about").css('color', '#a8a9b4');
            $(".re").css('color', '#2ECCFA');
            $(".main-re").css('color', '#fff');
            $(".port").css('color', '#a8a9b4');
            $(".main-port").css('color', '#a8a9b4');
            $(".sk").css('color', '#a8a9b4');
            $(".main-skill").css('color', '#a8a9b4');
            $(".con").css('color', '#a8a9b4');
            $(".main-con").css('color', '#a8a9b4');
        }else if(scroll_pos > 384){
            $(".home").css('color', '#a8a9b4');
            $(".main-home").css('color', '#a8a9b4');
            $(".about").css('color', '#2ECCFA');
            $(".main-about").css('color', '#fff');
            $(".re").css('color', '#a8a9b4');
            $(".main-re").css('color', '#a8a9b4');
            $(".port").css('color', '#a8a9b4');
            $(".main-port").css('color', '#a8a9b4');
            $(".sk").css('color', '#a8a9b4');
            $(".main-skill").css('color', '#a8a9b4');
            $(".con").css('color', '#a8a9b4');
            $(".main-con").css('color', '#a8a9b4');
        }else{
            $(".home").css('color', '#2ECCFA');
            $(".main-home").css('color', '#fff');
            $(".about").css('color', '#a8a9b4');
            $(".main-about").css('color', '#a8a9b4');
            $(".re").css('color', '#a8a9b4');
            $(".main-re").css('color', '#a8a9b4');
            $(".port").css('color', '#a8a9b4');
            $(".main-port").css('color', '#a8a9b4');
            $(".sk").css('color', '#a8a9b4');
            $(".main-skill").css('color', '#a8a9b4');
            $(".con").css('color', '#a8a9b4');
            $(".main-con").css('color', '#a8a9b4');
        }

    });
});