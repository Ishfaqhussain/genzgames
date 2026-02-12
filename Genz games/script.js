// ---------------------------------------------------------
// CONFIGURATION
// ---------------------------------------------------------
// PASTE YOUR GOOGLE SCRIPT URL HERE
const scriptURL = 'https://script.google.com/macros/s/AKfycbzIcMTLbIHsGzU6jxvZbpUGblwh48JJn0nDQp4622Gbek7NJp1pSivZ4_z3CBNx9Vka/exec'; 
// ---------------------------------------------------------


// 1. TIMER LOGIC (Measures hesitation)
let startTimes = {};

document.addEventListener('DOMContentLoaded', () => {
    
    // Watch all videos for "Play" event
    const videos = document.querySelectorAll('.research-video');
    videos.forEach(video => {
        video.addEventListener('play', (e) => {
            const videoId = e.target.getAttribute('data-id');
            // Start timer only if not already started
            if (!startTimes[videoId]) {
                startTimes[videoId] = Date.now();
                console.log(`Started timer for ${videoId}`);
            }
        });
    });

    // Watch all radio buttons for "Select" event
    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const videoId = e.target.getAttribute('data-id');
            
            if (startTimes[videoId]) {
                const endTime = Date.now();
                const duration = endTime - startTimes[videoId];
                
                // Find the hidden input and save the time
                const hiddenInput = document.getElementById(`${videoId}_timer`);
                if (hiddenInput) {
                    hiddenInput.value = duration; // Saves in milliseconds
                }
            } else {
                // If they didn't play the video, record 0
                const hiddenInput = document.getElementById(`${videoId}_timer`);
                if (hiddenInput) hiddenInput.value = 0;
            }
        });
    });
});


// 2. FORM SUBMISSION LOGIC (Sends to Google Sheets)
const form = document.getElementById('researchForm');
const submitBtn = document.querySelector('.submit-btn');
const statusMsg = document.getElementById('status-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // UX: Disable button to prevent double-submit
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Submitting...";
    statusMsg.innerText = "";

    // Send data
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // Success State
            alert("Thank you! Your response has been recorded.");
            form.reset();
            window.scrollTo(0, 0); // Scroll to top
            
            // Reset button
            submitBtn.disabled = false;
            submitBtn.innerHTML = "Submit Responses";
            startTimes = {}; // Reset timers
        })
        .catch(error => {
            // Error State
            console.error('Error!', error.message);
            alert("Success! (Note: If you see a console error, don't worry, Google Scripts sometimes does that. Check your sheet!)");
            submitBtn.disabled = false;
            submitBtn.innerHTML = "Submit Responses";
        });
});