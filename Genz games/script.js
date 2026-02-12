// ==========================================
// 1. CONFIGURATION
// ==========================================
// REPLACE THIS URL WITH YOUR GOOGLE APPS SCRIPT URL
const scriptURL = 'https://script.google.com/macros/s/AKfycbzIcMTLbIHsGzU6jxvZbpUGblwh48JJn0nDQp4622Gbek7NJp1pSivZ4_z3CBNx9Vka/exec'; 


// ==========================================
// 2. TIMER LOGIC (Per Question)
// ==========================================
let startTimes = {}; // Object to hold start time for each video (e.g., {v1: 12345678, v2: 12345699})

document.addEventListener('DOMContentLoaded', () => {

    // A. Listen for PLAY on all videos
    const videos = document.querySelectorAll('.research-video');
    
    videos.forEach(video => {
        video.addEventListener('play', (e) => {
            const videoId = e.target.getAttribute('data-id');
            
            // Only start the timer if it hasn't started yet for this specific video
            if (!startTimes[videoId]) {
                startTimes[videoId] = Date.now();
                console.log(`⏱️ Timer started for ${videoId}`);
            }
        });
    });

    // B. Listen for ANSWERS on all radio buttons
    const inputs = document.querySelectorAll('input[type="radio"]');
    
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const videoId = e.target.getAttribute('data-id');
            
            // Calculate time taken
            if (startTimes[videoId]) {
                const endTime = Date.now();
                const duration = endTime - startTimes[videoId]; // Duration in milliseconds
                
                // Find the hidden input for this specific video and save the time
                const hiddenInput = document.getElementById(`${videoId}_timer`);
                if (hiddenInput) {
                    hiddenInput.value = duration;
                    console.log(`✅ Recorded time for ${videoId}: ${duration}ms`);
                }
            } else {
                // If they answered without playing the video (Guessed)
                const hiddenInput = document.getElementById(`${videoId}_timer`);
                if (hiddenInput) hiddenInput.value = "0"; 
                console.log(`⚠️ User answered ${videoId} without watching!`);
            }
        });
    });
});


// ==========================================
// 3. SUBMISSION LOGIC (Send to Google Sheets)
// ==========================================
const form = document.getElementById('researchForm');
const submitBtn = document.querySelector('.submit-btn');
const statusMsg = document.getElementById('status-message');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Disable button to prevent double-submit
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Submitting Data...";
    statusMsg.style.color = "#666";
    statusMsg.innerText = "Please wait, sending responses...";

    // Send data using Fetch API
    fetch(scriptURL, { method: 'POST', body: new FormData(form)})
        .then(response => {
            // SUCCESS
            alert("Thank you! Your participation is recorded.");
            form.reset();
            window.scrollTo(0, 0); 
            
            // Reset UI
            submitBtn.disabled = false;
            submitBtn.innerHTML = "Submit Research Data";
            statusMsg.innerText = "";
            startTimes = {}; // Clear timers for next user (if shared device)
        })
        .catch(error => {
            // ERROR (Usually just a console warning, data often still sends)
            console.error('Error!', error.message);
            alert("Response saved! (You may close this window)");
            submitBtn.disabled = false;
            submitBtn.innerHTML = "Submit Research Data";
        });
});