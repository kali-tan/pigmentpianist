document.getElementById('changeColorButton').addEventListener('click', function() {
    const colorInput = document.getElementById('colorInput').value;
    document.body.style.backgroundColor = colorInput;
});
