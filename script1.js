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



console.log('Script loaded');

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM loaded');

    const calculateButton = document.getElementById('calculateButton');
    console.log('Calculate button:', calculateButton);

    calculateButton.addEventListener('click', function() {
        console.log('Button clicked');

        // Get the values of the input fields
        const redScaled = scaleRedValue(document.getElementById('red').value);
        const greenScaled = scaleGreenValue(document.getElementById('green').value);
        const blueScaled = scaleBlueValue(document.getElementById('blue').value);

        console.log('Red:', red);
        console.log('Green:', green);
        console.log('Blue:', blue);

        // Calculate the hex code
        const hexCode = rgbToHex(redScaled, greenScaled, blueScaled);
        console.log('Hex code:', hexCode);

        // Display the result
        document.getElementById('result').textContent = `Hex Code: ${hexCode}`;
    });
});

// Function to scale the input value from to 0-255
function scaleRedValue(red) {
    return Math.round((red / 100) * 255);
}

function scaleGreenValue(green) {
    return Math.round((green / 100) * 255);
}

function scaleBlueValue(blue) {
    return Math.round((blue / 3000) * 255);
}


function rgbToHex(red, green, blue) {
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
    return `#${redHex}${greenHex}${blueHex}`;
}