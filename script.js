document.addEventListener('DOMContentLoaded', function() {
    let startTime = localStorage.getItem('startTime');

    // If no startTime exists, set the current time as the start time
    if (!startTime) {
        startTime = Date.now();
        localStorage.setItem('startTime', startTime);
    }

    const timeElement = document.getElementById('number');

    if (!timeElement) {
        console.error('Element not found');
        return;
    }

    setInterval(function() {
        // Calculate the number of seconds since the start time
        const currentTime = Date.now();
        const seconds = Math.floor((currentTime - startTime) / 1000);

        // Update the textContent of the timeElement
        timeElement.textContent = `Fun Fact! I have been coding for ${seconds} seconds.`;

        // Log the update
        console.log(`Updated text content to ${seconds} seconds`);
    }, 1000);  // 1000 milliseconds equals 1 second
});


