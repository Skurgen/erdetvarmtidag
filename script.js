document.addEventListener('DOMContentLoaded', function() {
    const generatorButton = document.getElementById('slots-generator-button');
    const spinButton = document.getElementById('spin-button');
    const slots = [
        document.getElementById('slot1'),
        document.getElementById('slot2'),
        document.getElementById('slot3'),
    ];

    const results = ["Ja", "Nej"];
    let spinning = false;

    // Get the audio element
    const audio = document.getElementById('background-music');

    // Get the image element
    const movingImage = document.getElementById('moving-image');

    generatorButton.addEventListener('click', function () {
        // Redirect to the slots generator
        window.location.href = 'slots-generator.html';
    });

    spinButton.addEventListener('click', function() {
        if (spinning) return;

        spinning = true;
        spinButton.disabled = true;

        // Start playing the background music
        audio.play();

        const spinDuration = 5000; // Extend the duration to 5 seconds
        const startTime = Date.now();
        const initialPosition = window.innerWidth; // Initial position of the image (off-screen to the right)

        function spin() {
            const currentTime = Date.now() - startTime;
            if (currentTime < spinDuration) {
                // Calculate the position of the image as it moves from right to left
                const imagePosition = initialPosition - (currentTime / spinDuration) * initialPosition;

                // Set the position of the image
                movingImage.style.left = imagePosition + 'px';

                slots.forEach(slot => {
                    const randomResult = results[Math.floor(Math.random() * results.length)];
                    slot.textContent = randomResult;
                });
                requestAnimationFrame(spin);
            } else {
                const randomResult = results[Math.floor(Math.random() * results.length)];
                slots.forEach(slot => {
                    slot.textContent = randomResult;
                });
                spinning = false;
                spinButton.disabled = false;

                // Stop the background music when the spinning is done
                audio.pause();

                // Reset the image position
                movingImage.style.left = initialPosition + 'px';
            }
        }

        spin();
    });
});