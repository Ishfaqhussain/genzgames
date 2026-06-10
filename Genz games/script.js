// ==========================================
// 1. CONFIGURATION & DATABASE
// ==========================================
const scriptURL = 'https://script.google.com/macros/s/ABC'; 

// Master Database: Add all 40 videos and their correct answers here
const masterVideoBank = [
    { id: 'v1', answer: 'Real' },
    { id: 'v2', answer: 'AI' },
    { id: 'v3', answer: 'Real' },
    { id: 'v4', answer: 'AI' },
    { id: 'v5', answer: 'Real' },
    { id: 'v6', answer: 'AI' },
    { id: 'v7', answer: 'Real' },
    { id: 'v8', answer: 'AI' },
    // Keep adding up to { id: 'v40', answer: 'AI' }
];

const QUESTIONS_PER_USER = 5;
let startTimes = {}; 
let currentAnswerKey = {}; // Stores the answers for the 5 selected videos

// ==========================================
// 2. DYNAMIC RENDERING & TIMER LOGIC
// ==========================================
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Shuffle and pick 5 random videos
    const shuffledBank = masterVideoBank.sort(() => 0.5 - Math.random());
    const selectedVideos = shuffledBank.slice(0, QUESTIONS_PER_USER);

    // 2. Generate HTML
    const container = document.getElementById('dynamic-questions-container');
    let htmlContent = '';

    selectedVideos.forEach((video, index) => {
        // Build answer key for grading
        currentAnswerKey[`${video.id}_answer`] = video.answer;

        htmlContent += `
        <section class="card video-card">
            <div class="card-header">
                <span class="badge">Video 0${index + 1}</span>
                <span class="instruction">Watch carefully, then decide.</span>
            </div>
            
            <div class="video-wrapper">
                <video src="videos/${video.id}.mp4" controls controlslist="nodownload" class="research-video" data-id="${video.id}"></video>
            </div>

            <div class="question-block">
                <p class="question-text">Is this video Real or AI-Generated?</p>
                <div class="options-grid">
                    <label class="option-card">
                        <input type="radio" name="${video.id}_answer" value="Real" required data-id="${video.id}">
                        <div class="option-content">
                            <span class="emoji">📹</span>
                            <span>Real Video</span>
                        </div>
                    </label>
                    <label class="option-card">
                        <input type="radio" name="${video.id}_answer" value="AI" required data-id="${video.id}">
                        <div class="option-content">
                            <span class="emoji">🤖</span>
                            <span>AI Generated</span>
                        </div>
                    </label>
                </div>
            </div>
            <input type="hidden" name="${video.id}_time" id="${video.id}_timer">
        </section>`;
    });

    // Inject into the page
    container.innerHTML = htmlContent;

    // 3. Attach Event Listeners (Must happen AFTER HTML is injected)
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
const resultsScreen = document.getElementById('results-screen');

form.addEventListener('submit', e => {
    e.preventDefault();
    
    // Grade the user using the dynamic answer key
    let score = 0;
    const formData = new FormData(form);

    for (const [question, correctAnswer] of Object.entries(currentAnswerKey)) {
        if (formData.get(question) === correctAnswer) {
            score++;
        }
    }

    // Determine the Roast
    const percentage = (score / QUESTIONS_PER_USER) * 100;
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
    document.getElementById('roast-title').innerText = title;
    document.getElementById('roast-message').innerText = message;

    submitBtn.disabled = true;
    submitBtn.innerHTML = "Calculating your IQ...";

    // Generate Dynamic Social Share Links
    const testUrl = "https://www.libraryinfoscience.in"; 
    const shareText = `I just scored ${score}/${QUESTIONS_PER_USER} on the AI Deepfake Test! Are you a Terminator or an NPC? Take the test: `;

    document.getElementById('share-wa').href = `https://api.whatsapp.com/send?text=${encodeURIComponent(shareText + testUrl)}`;
    document.getElementById('share-x').href = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(testUrl)}`;
    document.getElementById('share-reddit').href = `https://www.reddit.com/submit?url=${encodeURIComponent(testUrl)}&title=${encodeURIComponent(shareText)}`;
    
    // Submit to Google Sheets
    fetch(scriptURL, { method: 'POST', body: formData })
        .then(response => {
            form.style.display = 'none';
            resultsScreen.style.display = 'block';
            window.scrollTo(0, 0); 
        })
        .catch(error => {
            console.error('Error!', error.message);
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