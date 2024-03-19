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
        $(".topright").toggleClass("disappear");
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
        $(".topright").toggleClass("disappear");
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
        $(".topright").toggleClass("disappear");
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
        $(".topleft").toggleClass("disappear");
        $(".topright").toggleClass("disappear");
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
        $(".topleft").toggleClass("disappear");
        $(".topright").toggleClass("disappear");
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
        $(".topleft").toggleClass("disappear");
        $(".topright").toggleClass("disappear");
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
        $(".topleft").toggleClass("disappear");
        $(".descriptionfour").toggleClass("appear");
    }
);

$(".eight").hover(
    function(){
        $("body").toggleClass("bodyaction");
        $(".topleft").toggleClass("disappear");
        $(".topmiddle").toggleClass("disappear");
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






