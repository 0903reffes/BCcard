$(function(){
    $(".gnb1>ul>li").mouseover(function(){
        $(".gnb1>ul>li>ul").stop().slideDown(400);
        $("header").addClass("on");
    });

    $(".gnb1>ul>li").mouseout(function(){
        $(".gnb1>ul>li>ul").stop().slideUp(100);
        $("header").removeClass("on");
    });
    
});