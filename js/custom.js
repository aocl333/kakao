$(document).ready(function(){
//    스크롤 높이에따른 애니메이션 시작 이벤트
    $(document).scroll(function(){
        var scrolltop = $(window).scrollTop();
        if(scrolltop > 0){
            $(".menubox").addClass("menushadow");
        }else{
            $(".menubox").removeClass("menushadow");
        }
        if(scrolltop >= $(".sectiona").offset().top - $(window).height() + 300){
            $(".sectionaimg01").addClass("ani01");
            $(".sectionaimg02").addClass("ani02");
            $(".sectionaimg03").addClass("ani03");
        }
    });
//    메인 카드 애니메이션
        $(document).ready(function(){
            $(".sectiondcard").hide(); //Hide all content
            $(".thumbimgbox li:first").addClass("active").show(); //Activate first tab
            $(".sectiondcard:first").show(); //Show first tab content

            //On Click Event
            $(".thumbimgbox li").click(function() {

                $(".thumbimgbox li").removeClass("active"); //Remove any "active" class
                $(this).addClass("active"); //Add "active" class to selected tab
                $(".sectiondcard").hide(); //Hide all tab content
                var activeImg = $(this).find("a").attr("href"); //Find the href attribute value to identify the active tab + content
                $(activeImg).fadeIn(); //Fade in the active ID content
                return false;
            });

        });
    //    스토어 지역클릭 이벤트
        $(".city>ul>li").click(function(){
            $(".city>ul>li").removeClass("cityon");
            $(".city>ul>li>a").css({"color":"#7d7d7d"});
            $(this).addClass("cityon");
            $(this).find("a").css({"color":"#000"});
        });
        $("#allcity").click(function(){
            $(".sectbline>div").show();
        });
        $("#seoul").click(function(){
            $(".sectbline>div").hide();
            $(".sectbline>div.seoul").show();    
        });
        $("#gyunggi").click(function(){
            $(".sectbline>div").hide();
            $(".sectbline>div.gyunggi").show();    
        });
        $("#inchon").click(function(){
            $(".sectbline>div").hide();
            $(".sectbline>div.inchon").show();    
        });
        $("#busan").click(function(){
            $(".sectbline>div").hide();
            $(".sectbline>div.busan").show();    
        });
    
    $(document).ready(function(){
     $(".panelBg").hide();
    //패널오픈
    $(".panel").click(function(){
         $(".panelBg").fadeIn();
        $(".panelMenu").css("width","60%");
    })
    
     $(".panelBg,.closeBtn").click(function(){
        $(".panelMenu").css("width","0");
        $(".panelBg").fadeOut();
    })
    
})

});
