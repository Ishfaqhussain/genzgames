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

// ==========================================
// 3. GAMIFIED SUBMISSION & ROAST LOGIC
// ==========================================
const form = document.getElementById('researchForm');
const submitBtn = document.querySelector('.submit-btn');
const statusMsg = document.getElementById('status-message');
const resultsScreen = document.getElementById('results-screen');

// 🔴 THE ANSWER KEY: Set the correct answers for your videos here
const answerKey = {
    v1_answer: "Real", 
    v2_answer: "AI"    
    // Add v3_answer, v4_answer, etc., as you build your 40 videos
};

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // 1. GRADE THE USER INSTANTLY
    let score = 0;
    const totalQuestions = Object.keys(answerKey).length;
    const formData = new FormData(form);

    for (const [question, correctAnswer] of Object.entries(answerKey)) {
        if (formData.get(question) === correctAnswer) {
            score++;
        }
    }

    // 2. DETERMINE THE ROAST (Calculate Percentage)
    const percentage = (score / totalQuestions) * 100;
    let title = "";
    let message = "";

    if (percentage === 100) {
        title = "Are you a terminator?";
        message = "Flawless. You see right through the matrix. Please protect us when the robots take over.";
    } else if (percentage >= 75) {
        title = "Not completely useless!";
        message = "You survived... barely. You're smart enough to avoid obvious scams, but a good deepfake will still steal your identity.";
    } else if (percentage >= 50) {
        title = "Absolute NPC Energy.";
        message = "Average. Mediocre. You're definitely out here forwarding WhatsApp University rumors to your family group chat without checking them.";
    } else if (percentage > 0) {
        title = "A Threat to Society.";
        message = "Oof. You are the exact reason Nigerian Princes still make a living sending emails. Please stay off the internet for your own safety.";
    } else {
        title = "Certified Room Temperature IQ.";
        message = "Zero points?! Did you even open your eyes, or did you just smash the screen with your forehead? Even a random number generator would score higher.";
    }

    // 3. UPDATE THE UI
    document.getElementById('user-score').innerText = score;
    document.getElementById('total-questions').innerText = totalQuestions;
    document.getElementById('roast-title').innerText = title;
    document.getElementById('roast-message').innerText = message;

    // 4. DISABLE BUTTON & SEND TO GOOGLE SHEETS
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Calculating your IQ...";
    
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            // Hide the form, show the roast!
            form.style.display = 'none';
            resultsScreen.style.display = 'block';
            window.scrollTo(0, 0); 
        })
        .catch(error => {
            console.error('Error!', error.message);
            // Even if Google Sheets fails due to CORS, still show them their roast
            form.style.display = 'none';
            resultsScreen.style.display = 'block';
            window.scrollTo(0, 0);
        });
});