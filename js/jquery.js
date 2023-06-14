$(document).ready(function(){
    $(".nav-link").click(function(){
                $(".nav-link").removeClass("act")
                $(this).addClass("act")
            })
    $(window).scroll(function(){ //스크롤을 하면
        if($(window).scrollTop() > 80){ //+스크롤의 위치가 80보다 커지면
            $("body").addClass("scroll") //body에 scroll클래스를 삽입해라
        }
        else{
            $("body").removeClass("scroll")
        }

        if($(window).scrollTop() > 0){
            $(".navbar-brand").addClass("logo2")
        }
        else{
            $(".navbar-brand").removeClass("logo2")
        }
    })
        })