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

    generatorButton.addEventListener('click', function () {
            
            window.location.href = 'slots-generator.html';
});
    spinButton.addEventListener('click', function() {
        if (spinning) return;

        spinning = true;
        spinButton.disabled = true;

        const spinDuration = 2000; // Duration of the spinning animation in milliseconds
        const startTime = Date.now();

        function spin() {
            if (Date.now() - startTime < spinDuration) {
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
            }
        }

        spin();
    });
});
