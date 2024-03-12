$(".one").click(
    function(){
        $(".two").css("opacity", "1");
        $(".three").css("opacity", "1");
    }
);

$(".one").hover(
    function(){
        $(".one").toggleClass("oneaction");
        $(".topmiddle").toggleClass("disappear");
        $(".descriptionone").toggleClass("appear");
    }
);

$(".two").click(
    function(){
        $(".four").css("opacity", "1");
        $(".five").css("opacity", "1");
    }
);

$(".two").hover(
    function(){
        $(".two").toggleClass("twoaction");
        $(".topmiddle").toggleClass("disappear");
        $(".descriptiontwo").toggleClass("appear");
    }
);

$(".three").click(
    function(){
        $(".six").css("opacity", "1");
    }
);

$(".three").hover(
    function(){
        $(".three").toggleClass("threeaction");
        $(".topmiddle").toggleClass("disappear");
        $(".descriptionthree").toggleClass("appear");
    }
);

$(".four").click(
    function(){
        $(".four").css("opacity", "0.5");
    }
);

$(".four").hover(
    function(){
        $(".four").toggleClass("fouraction");
    }
);

$(".five").click(
    function(){
        $(".five").css("opacity", "0.5");
    }
);

$(".five").hover(
    function(){
        $(".five").toggleClass("fiveaction");
    }
);

$(".six").click(
    function(){
        $(".seven").css("opacity", "1");
        $(".five").css("opacity", "1");
        $(".four").css("opacity", "1");
    }
);

$(".six").hover(
    function(){
        $(".six").toggleClass("sixaction");
    }
);

$(".seven").click(
    function(){
        $(".eight").css("opacity", "1");
    }
);

$(".seven").hover(
    function(){
        $(".seven").toggleClass("sevenaction");
        $(".topmiddle").toggleClass("disappear");
        $(".descriptionfour").toggleClass("appear");
    }
);

$(".eight").hover(
    function(){
        $("body").toggleClass("bodyaction");
    }
);

$(".abt").hover(
    function(){
        $(".activatedbar").toggleClass("aboutactivate");
    }
);

$(".abt").click(
    function(){
        window.location.href='summary.html';
    }
);

$(".mtr").hover(
    function(){
        $(".activatedbar").toggleClass("meteractivate");
    }
);

$(".mtr").click(
    function(){
        window.location.href='index.html';
    }
);

$(".calc").hover(
    function(){
        $(".activatedbar").toggleClass("calcactivate");
    }
);

$(".calc").click(
    function(){
        window.location.href='hexcode.html';
    }
);


$(".hex").hover(
    function(){
        $(".activatedbar").toggleClass("hexactivate");
    }
);

$(".hex").click(
    function(){
        window.location.href='colorpage.html';
    }
);

$(".per").hover(
    function(){
        $(".activatedbar").toggleClass("peractivate");
    }
);

$(".per").click(
    function(){
        window.location.href='custom.html';
    }
);

$(".art").hover(
    function(){
        $(".activatedbar").toggleClass("artactivate");
    }
);

$(".art").click(
    function(){
        window.location.href='gallery.html';
    }
);




