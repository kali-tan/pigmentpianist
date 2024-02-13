
console.log('Script loaded');

document.addEventListener("DOMContentLoaded", function() {
    console.log('DOM loaded');

    const calculateButton = document.getElementById('calculateButton');
    console.log('Calculate button:', calculateButton);

    calculateButton.addEventListener('click', function() {
        console.log('Button clicked');

        // Get the values of the input fields
        const red = parseInt(document.getElementById('red').value);
        const green = parseInt(document.getElementById('green').value);
        const blue = parseInt(document.getElementById('blue').value);

        console.log('Red:', red);
        console.log('Green:', green);
        console.log('Blue:', blue);

        // Calculate the hex code
        const hexCode = rgbToHex(red, green, blue);
        console.log('Hex code:', hexCode);

        // Display the result
        document.getElementById('result').textContent = `Hex Code: ${hexCode}`;
    });
});

function rgbToHex(red, green, blue) {
    const redHex = red.toString(16).padStart(2, '0');
    const greenHex = green.toString(16).padStart(2, '0');
    const blueHex = blue.toString(16).padStart(2, '0');
    return `#${redHex}${greenHex}${blueHex}`;
}