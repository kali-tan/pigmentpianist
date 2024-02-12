

let stream = null;
let paused = false;
let audioContext = null;
let analyser = null;
let maxDecibels = -Infinity;
let sumDecibels = 0;
let countDecibels = 0;
let animationFrameId = null;

// Function to update the decibel meter
function updateDecibelMeter() {
    if (!paused) {
        // Get frequency data
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        // Calculate average amplitude
        let total = 0;
        for (let i = 0; i < bufferLength; i++) {
            total += dataArray[i];
        }
        const averageAmplitude = total / bufferLength;

        // Convert amplitude to decibels (simplified calculation)
        const decibels = 20 * Math.log10(averageAmplitude / 255) + 100;

        // Update max decibels
        maxDecibels = Math.max(maxDecibels, decibels);

        // Update sum and count for average calculation
        if (decibels >= 0) {
            sumDecibels += decibels;
            countDecibels++;
        }

        // Calculate average decibels
        const averageDecibels = countDecibels > 0 ? sumDecibels / countDecibels : null;

        // Map decibels to a scale of 0 to 100
        const scaledDecibels = Math.min(100, decibels / 2);

        const soundLevelElement = document.getElementById('soundLevel');
        soundLevelElement.style.width = scaledDecibels + '%';

        // Update the decibel display
        let decibelDisplay = document.getElementById('decibelDisplay');
        if (averageDecibels !== null) {
            decibelDisplay.textContent = `Current: ${Math.round(decibels)} dB | Average: ${Math.round(averageDecibels)} dB | Max: ${Math.round(maxDecibels)} dB`;
        } else {
            decibelDisplay.textContent = `Current: ${Math.round(decibels)} dB | Average: null | Max: ${Math.round(maxDecibels)} dB`;
        }
    }

    // Call this function recursively to update the decibel meter continuously
    animationFrameId = requestAnimationFrame(updateDecibelMeter);
}

const startButton = document.getElementById('startButton');
startButton.addEventListener('click', function() {
    startButton.disabled = true; // Disable the start button once clicked
    navigator.mediaDevices.getUserMedia({ audio: true })
        .then(function(streamObj) {
            stream = streamObj;
            audioContext = new AudioContext();
            const source = audioContext.createMediaStreamSource(stream);
            analyser = audioContext.createAnalyser();
            analyser.fftSize = 2048; // Adjust FFT size for frequency analysis
            source.connect(analyser);

            const soundBarElement = document.getElementById('soundBar');
            const soundLevelElement = document.createElement('div');
            soundLevelElement.id = 'soundLevel';
            soundBarElement.appendChild(soundLevelElement);

            // Start updating the decibel meter
            updateDecibelMeter();
        })
        .catch(function(err) {
            console.error('Error accessing microphone:', err);
        });
});

const pauseButton = document.getElementById('pauseButton');
const nextbutton = document.getElementById('nextbutton');

pauseButton.addEventListener('click', function() {
    paused = !paused; // Toggle pause state

    if (paused) {
        pauseButton.textContent = 'Resume';
        cancelAnimationFrame(animationFrameId);
        nextbutton.style.animation = 'blink 1s infinite linear'; 
    } else {
        pauseButton.textContent = 'Pause';
        updateDecibelMeter(); // Resume updating the decibel meter
        nextbutton.style.animation = 'none'; 
    }

});

const resetButton = document.getElementById('resetButton');
resetButton.addEventListener('click', function() {
    // Reload the page
    location.reload();
});


$("#nextbutton").click(
    function(){
        window.location.href = "https://kali-tan.github.io/pigmentpianist/hexcode.html"; 
    }
)


