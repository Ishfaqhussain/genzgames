// ==========================================
// 1. CONFIGURATION
// ==========================================
const scriptURL = 'https://script.google.com/macros/s/AKfycbzIcMTLbIHsGzU6jxvZbpUGblwh48JJn0nDQp4622Gbek7NJp1pSivZ4_z3CBNx9Vka/exec'; 

// ==========================================
// 2. TIMER LOGIC (Per Question)
// ==========================================
let startTimes = {}; 

document.addEventListener('DOMContentLoaded', () => {
    const videos = document.querySelectorAll('.research-video');
    videos.forEach(video => {
        video.addEventListener('play', (e) => {
            const videoId = e.target.getAttribute('data-id');
            if (!startTimes[videoId]) {
                startTimes[videoId] = Date.now();
            }
        });
    });

    const inputs = document.querySelectorAll('input[type="radio"]');
    inputs.forEach(input => {
        input.addEventListener('change', (e) => {
            const videoId = e.target.getAttribute('data-id');
            if (startTimes[videoId]) {
                const endTime = Date.now();
                const duration = endTime - startTimes[videoId]; 
                const hiddenInput = document.getElementById(`${videoId}_timer`);
                if (hiddenInput) {
                    hiddenInput.value = duration;
                }
            } else {
                const hiddenInput = document.getElementById(`${videoId}_timer`);
                if (hiddenInput) hiddenInput.value = "0"; 
            }
        });
    });
});

// ==========================================
// 3. GAMIFIED SUBMISSION & ROAST LOGIC
// ==========================================
const form = document.getElementById('researchForm');
const submitBtn = document.querySelector('.submit-btn');
const statusMsg = document.getElementById('status-message');
const resultsScreen = document.getElementById('results-screen');

// 🔴 THE ANSWER KEY (Set to correct answers)
const answerKey = {
    v1_answer: "Real", 
    v2_answer: "AI"    
};

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Grade the user
    let score = 0;
    const totalQuestions = Object.keys(answerKey).length;
    const formData = new FormData(form);

    for (const [question, correctAnswer] of Object.entries(answerKey)) {
        if (formData.get(question) === correctAnswer) {
            score++;
        }
    }

    // Determine the Roast
  
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
    // Update the UI
    document.getElementById('user-score').innerText = score;
    document.getElementById('total-questions').innerText = totalQuestions;
    document.getElementById('roast-title').innerText = title;
    document.getElementById('roast-message').innerText = message;

    // Send Data
    submitBtn.disabled = true;
    submitBtn.innerHTML = "Calculating your IQ...";
// ... (This goes right before the 'fetch' command in your script.js) ...

    // 5. GENERATE DYNAMIC SOCIAL SHARE LINKS
    // IMPORTANT: Replace this with your actual Netlify Live URL once deployed!
    const testUrl = "https://genzgames.netlify.app"; 
    const shareText = `I just scored ${score}/${totalQuestions} on the UoK AI Deepfake Test! Are you a Terminator or an NPC? Take the test: `;

    document.getElementById('share-wa').href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + testUrl)}`;
    document.getElementById('share-x').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(testUrl)}`;
    document.getElementById('share-reddit').href = `https://www.reddit.com/submit?url=${encodeURIComponent(testUrl)}&title=${encodeURIComponent(shareText)}`;
    
    // ... (Now the fetch command starts here) ...
    
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            form.style.display = 'none';
            resultsScreen.style.display = 'block';
            window.scrollTo(0, 0); 
        })
        .catch(error => {
            console.error('Error!', error.message);
            // Show results even if Google Sheets fails slightly
            form.style.display = 'none';
            resultsScreen.style.display = 'block';
            window.scrollTo(0, 0);
        });
});

// ==========================================
// 4. HTML2CANVAS SCREENSHOT LOGIC
// ==========================================
const downloadBtn = document.getElementById('download-btn');

if (downloadBtn) {
    downloadBtn.addEventListener('click', () => {
        const originalText = downloadBtn.innerHTML;
        downloadBtn.innerHTML = "Generating Image...";
        downloadBtn.disabled = true;

        const captureArea = document.getElementById('capture-area');

        html2canvas(captureArea, {
            scale: 2, 
            useCORS: true, 
            backgroundColor: null 
        }).then(canvas => {
            const imageURL = canvas.toDataURL("image/png");

            const link = document.createElement('a');
            link.download = 'AI-Detection-Score.png';
            link.href = imageURL;
            
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            downloadBtn.innerHTML = "✅ Downloaded! Now share it.";
            setTimeout(() => {
                downloadBtn.innerHTML = originalText;
                downloadBtn.disabled = false;
            }, 3000);
        }).catch(err => {
            console.error("Screenshot failed:", err);
            alert("Oops! Couldn't generate the image. Try taking a normal screenshot!");
            downloadBtn.innerHTML = originalText;
            downloadBtn.disabled = false;
        });
    });
}