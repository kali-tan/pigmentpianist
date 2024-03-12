
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

document.getElementById('changeColorButton').addEventListener('click', function() {
    const colorInput = document.getElementById('colorInput').value;
    document.body.style.backgroundColor = colorInput;
});
