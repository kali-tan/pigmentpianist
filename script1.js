
console.log('Script loaded');

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM loaded');

    const calculateButton = document.getElementById('calculateButton');
    console.log('Calculate button:', calculateButton);

    calculateButton.addEventListener('click', function() {
        console.log('Button clicked');

        // Get the values of the input fields
        const redScaled = scaleValue(document.getElementById('red').value);
        const greenScaled = scaleValue(document.getElementById('green').value);
        const blueScaled = scaleValue(document.getElementById('blue').value);

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

// Function to scale the input value from 1-100 to 0-255
function scaleValue(value) {
    return Math.round((value / 100) * 255);
}

function rgbToHex(red, green, blue) {
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
    return `#${redHex}${greenHex}${blueHex}`;
}