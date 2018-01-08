$(function(){
    var timer = null;
    var osTop = null;
    var speed = null;
    var isTop = true;
    var clientHeight = document.documentElement.clientHeight;
    window.onscroll = function(){
        osTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (!isTop) {
            clearInterval(timer);
        }
        if (osTop > clientHeight) {
            $("#btn").show();
        }else{
            $("#btn").hide();
        }
        isTop = false;
    };
    $("#btn").on('click',function(){
        clearInterval (timer);
        timer = setInterval(function(){
            osTop = document.documentElement.scrollTop || document.body.scrollTop;
            speed = Math.floor(-osTop / 5);
            document.documentElement.scrollTop = document.body.scrollTop = osTop + speed;
            isTop = true;
        },30);
        if (osTop == 0) {
            clearInterval(timer);
        }
    })
});