// ==========================================================
// AI vs REAL VIDEO PERCEPTION STUDY
// Version 2.0
// Research Edition
// ==========================================================

// ==========================================================
// CONFIGURATION
// ==========================================================

const SCRIPT_URL = "https://script.google.com/macros/s/AKfycby8KheIF5ajstyShk0WAHpqg7sUG3K8GYz8OC1pWN1bmpWhE70MeoPFZ4OvfwqMHC9i/exec";
const EXPERIMENT = {

    VERSION: "2.0",

    MODEL: "Omni",

    QUESTIONS_PER_USER: 5

};

const VIDEO_URLS = {

A1: "https://res.cloudinary.com/hvrkirot/video/upload/v1783333984/A1.mp4",
A2: "https://res.cloudinary.com/hvrkirot/video/upload/v1783333988/A2.mp4",
A3: "https://res.cloudinary.com/hvrkirot/video/upload/v1783333986/A3.mp4",
A4: "https://res.cloudinary.com/hvrkirot/video/upload/v1783333989/A4.mp4",
A5: "https://res.cloudinary.com/hvrkirot/video/upload/v1783333992/A5.mp4",
A6: "https://res.cloudinary.com/hvrkirot/video/upload/v1783333994/A6.mp4",
A7: "https://res.cloudinary.com/hvrkirot/video/upload/v1783333997/A7.mp4",
A8: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334000/A8.mp4",
A9: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334001/A9.mp4",
A10: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334001/A10.mp4",
A11: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334004/A11.mp4",
A12: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334005/A12.mp4",
A13: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334006/A13.mp4",
A14: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334011/A14.mp4",
A15: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334014/A15.mp4",
A16: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334015/A16.mp4",
A17: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334015/A17.mp4",
A18: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334017/A18.mp4",
A19: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334020/A19.mp4",
R1: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334022/R1.mp4",
R2: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334024/R2.mp4",
R3: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334027/R3.mp4",
R4: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334027/R4.mp4",
R5: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334029/R5.mp4",
R6: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334034/R6.mp4",
R7: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334039/R7.mp4",
R8: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334035/R8.mp4",
R9: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334047/R9.mp4",
R10: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334042/R10.mp4",
R11: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334050/R11.mp4",
R12: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334051/R12.mp4",
R13: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334049/R13.mp4",
R14: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334057/R14.mp4",
R15: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334081/R15.mp4",
R16: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334055/R16.mp4",
R17: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334054/R17.mp4",
R18: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334062/R18.mp4",
R19: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334058/R19.mp4",
R20: "https://res.cloudinary.com/hvrkirot/video/upload/v1783334059/R20.mp4"
};

// ==========================================================
// CATEGORY ORDER
// ==========================================================

const CATEGORY_ORDER = [

    "human",
    "physics",
    "nature",
    "urban",
    "text"

];

// ==========================================================
// VIDEO DATABASE
// ==========================================================

const VIDEO_BANK = {

    human: [

        {
            id: "A1",
            category: "Human",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R1",
            category: "Human",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A2",
            category: "Human",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R2",
            category: "Human",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A3",
            category: "Human",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R3",
            category: "Human",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A4",
            category: "Human",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R4",
            category: "Human",
            source: "Real",
            model: null,
            answer: "Real"
        }

    ],

    physics: [

        {
            id: "A5",
            category: "Physics",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R5",
            category: "Physics",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A6",
            category: "Physics",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R6",
            category: "Physics",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A7",
            category: "Physics",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R7",
            category: "Physics",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A8",
            category: "Physics",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R8",
            category: "Physics",
            source: "Real",
            model: null,
            answer: "Real"
        }

    ],

    nature: [

        {
            id: "A9",
            category: "Nature",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R9",
            category: "Nature",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A10",
            category: "Nature",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R10",
            category: "Nature",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A11",
            category: "Nature",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R11",
            category: "Nature",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A12",
            category: "Nature",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R12",
            category: "Nature",
            source: "Real",
            model: null,
            answer: "Real"
        }

    ],

    urban: [

        {
            id: "A13",
            category: "Urban",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R13",
            category: "Urban",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A14",
            category: "Urban",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R14",
            category: "Urban",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A15",
            category: "Urban",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R15",
            category: "Urban",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A16",
            category: "Urban",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R16",
            category: "Urban",
            source: "Real",
            model: null,
            answer: "Real"
        }

    ],

    text: [

        {
            id: "A17",
            category: "Text",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R17",
            category: "Text",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A18",
            category: "Text",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R18",
            category: "Text",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A19",
            category: "Text",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R19",
            category: "Text",
            source: "Real",
            model: null,
            answer: "Real"
        },

        {
            id: "A20",
            category: "Text",
            source: "AI",
            model: "Omni",
            answer: "AI"
        },

        {
            id: "R20",
            category: "Text",
            source: "Real",
            model: null,
            answer: "Real"
        }

    ]

};

// ==========================================================
// EXPERIMENT STATE
// ==========================================================

const experiment = {

    participantID: crypto.randomUUID(),

    version: EXPERIMENT.VERSION,

    model: EXPERIMENT.MODEL,

    startedAt: new Date().toISOString(),

    browser: navigator.userAgent,

    language: navigator.language,

    screenWidth: window.innerWidth,

    screenHeight: window.innerHeight,

    responses: []

};

const currentAnswerKey = {};

const selectedVideos = [];

const playbackData = {};

const QUESTIONS_PER_USER = EXPERIMENT.QUESTIONS_PER_USER;

// ==========================================================
// UTILITIES
// ==========================================================

function shuffle(array){

    const arr=[...array];

    for(let i=arr.length-1;i>0;i--){

        const j=Math.floor(Math.random()*(i+1));

        [arr[i],arr[j]]=[arr[j],arr[i]];

    }

    return arr;

}

function selectStimuli() {

    selectedVideos.length = 0;

    // Randomly decide the participant's quota
    // true = 3 AI + 2 Real
    // false = 2 AI + 3 Real

    const threeAI = Math.random() < 0.5;

    // Randomly choose which categories will contribute AI videos
    const shuffledCategories = shuffle([...CATEGORY_ORDER]);

    const aiCategories = threeAI
        ? shuffledCategories.slice(0, 3)
        : shuffledCategories.slice(0, 2);

    CATEGORY_ORDER.forEach(category => {

        const pool = VIDEO_BANK[category].filter(video => {

            if (aiCategories.includes(category)) {
                return video.source === "AI";
            }

            return video.source === "Real";

        });

        selectedVideos.push(shuffle(pool)[0]);

    });

    return shuffle(selectedVideos);

}

const experimentStimuli = selectStimuli();

// ==========================================================
// DYNAMIC RENDERING
// ==========================================================

document.addEventListener("DOMContentLoaded",()=>{

    const container=document.getElementById("dynamic-questions-container");

    let html="";

    experimentStimuli.forEach((video,index)=>{

        currentAnswerKey[`${video.id}_answer`]=video.answer;

        playbackData[video.id]={

            started:false,

            startTime:0,

            responseTime:0,

            replayCount:0,

            completion:0,

            answered:false,

            order:index+1

        };

        html+=`

<section class="card video-card">

<div class="card-header">

<span class="badge">

Stimulus ${index+1}

</span>

<span class="instruction">

Watch carefully before answering.

</span>

</div>

<div class="video-wrapper">

<video

src="${VIDEO_URLS[video.id]}"

class="research-video"

data-id="${video.id}"

controls

playsinline

disablePictureInPicture

controlslist="nodownload"

preload="metadata"

></video>

</div>

<div class="question-block">

<p class="question-text">

Do you believe this video is authentic or AI-generated?

</p>

<div class="options-grid">

<label class="option-card">

<input

type="radio"

name="${video.id}_answer"

value="Real"

data-id="${video.id}"

required

>

<div class="option-content">

<span class="emoji">📹</span>

<span>Authentic</span>

</div>

</label>

<label class="option-card">

<input

type="radio"

name="${video.id}_answer"

value="AI"

data-id="${video.id}"

required

>

<div class="option-content">

<span class="emoji">🤖</span>

<span>AI Generated</span>

</div>

</label>

</div>

</div>

<input

type="hidden"

name="${video.id}_time"

id="${video.id}_timer"

>

</section>

`;

    });

    container.innerHTML=html;

    initialiseVideoTracking();

    initialiseAnswerTracking();

revealOptionsOnPlay();
});

// ==========================================================
// VIDEO TRACKING
// ==========================================================

function initialiseVideoTracking(){

    const videos=document.querySelectorAll(".research-video");

    videos.forEach(video=>{

        const id=video.dataset.id;

        video.addEventListener("play",()=>{

            if(!playbackData[id].started){

                playbackData[id].started=true;

                playbackData[id].startTime=performance.now();

            }else{

                playbackData[id].replayCount++;

            }

        });

        video.addEventListener("ended",()=>{

            playbackData[id].completion=100;

        });

        video.addEventListener("timeupdate",()=>{

            if(video.duration){

                playbackData[id].completion=

                Math.round(

                    (video.currentTime/video.duration)*100

                );

            }

        });

    });

}

// ==========================================================
// ANSWER TRACKING
// ==========================================================

function initialiseAnswerTracking(){

    const radios=document.querySelectorAll(

        'input[type="radio"]'

    );

    radios.forEach(radio=>{

        radio.addEventListener("change",event=>{

            const id=event.target.dataset.id;

            if(playbackData[id].answered) return;

            playbackData[id].answered=true;

            if(playbackData[id].started){

                playbackData[id].responseTime=

                Math.round(

                    performance.now()-

                    playbackData[id].startTime

                );

            }

            const timer=document.getElementById(

                `${id}_timer`

            );

            timer.value=

            playbackData[id].responseTime;

        });

    });

}

// ==========================================================
// SCORE ENGINE
// ==========================================================

function calculateScore(formData){

    let score=0;

    Object.entries(currentAnswerKey)

    .forEach(([question,correct])=>{

        if(formData.get(question)===correct){

            score++;

        }

    });

    return score;

}

// ==========================================================
// RESPONSE COLLECTION
// ==========================================================

function buildResponses(formData){

    experiment.responses=[];

    experimentStimuli.forEach(video=>{

        const userAnswer=formData.get(

            `${video.id}_answer`

        );

        experiment.responses.push({

            participantID:

            experiment.participantID,

            experimentVersion:

            experiment.version,

            model:

            video.model,

            videoID:

            video.id,

            category:

            video.category,

            source:

            video.source,

            correctAnswer:

            video.answer,

            participantAnswer:

            userAnswer,

            isCorrect:

            userAnswer===video.answer,

            responseTime:

            playbackData[video.id].responseTime,

            replayCount:

            playbackData[video.id].replayCount,

            completion:

            playbackData[video.id].completion,

            order:

            playbackData[video.id].order,

            timestamp:

            new Date().toISOString()

        });

    });

}

// ==========================================================
// FORM SUBMISSION
// ==========================================================

const form=document.getElementById("researchForm");

const submitBtn=document.querySelector(".submit-btn");

const resultsScreen=document.getElementById("results-screen");

form.addEventListener("submit",async(event)=>{

    event.preventDefault();

    submitBtn.disabled=true;

    submitBtn.innerHTML="Processing...";

    const formData=new FormData(form);

    const score=calculateScore(formData);

    buildResponses(formData);

    const percentage=Math.round(

        (score/QUESTIONS_PER_USER)*100

    );

    const roast=getRoast(score);

    updateResults(score,roast);

    const payload=buildPayload(formData,score);
try{

    await fetch(

        SCRIPT_URL,

        {

            method:"POST",

            body:JSON.stringify(payload)

        }

    );

}catch(error){

    console.error(error);

}

    form.style.display="none";

    resultsScreen.style.display="block";

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

// ==========================================================
// PAYLOAD
// ==========================================================

function buildPayload(formData,score){

    return{

participant:{

participantID:
experiment.participantID,

experimentVersion:
experiment.version,

startedAt:
experiment.startedAt,

browser:
experiment.browser,

language:
experiment.language,

screenWidth:
experiment.screenWidth,

screenHeight:
experiment.screenHeight,

generation:
formData.get("generation"),

gender:
formData.get("gender"),

education:
formData.get("education"),

occupation:
formData.get("occupation"),

area:
formData.get("area"),

aiFrequency:
formData.get("aiFrequency")

},

        score:score,

        totalQuestions:

        QUESTIONS_PER_USER,

        responses:

        experiment.responses

    };

}

// ==========================================================
// RESULT SCREEN
// ==========================================================

function updateResults(score,roast){

    document.getElementById(

        "user-score"

    ).innerText=score;

    document.getElementById(

        "roast-title"

    ).innerText=roast.title;

    document.getElementById(

        "roast-message"

    ).innerText=roast.message;

    buildShareLinks(score);

}

// ==========================================================
// ROAST ENGINE
// ==========================================================

function getRoast(score){

    const percentage=

    (score/QUESTIONS_PER_USER)*100;

    if(percentage===100){

        return{

            title:

            "Are you a Terminator?",

            message:

            "Flawless. You spotted every synthetic video."

        };

    }

    if(percentage>=75){

        return{

            title:

            "Excellent Eye",

            message:

            "You detect synthetic media better than most people."

        };

    }

    if(percentage>=50){

        return{

            title:

            "Average Observer",

            message:

            "Some AI fooled you. You're not alone."

        };

    }

    if(percentage>0){

        return{

            title:

            "AI Got You",

            message:

            "Modern AI videos remain surprisingly convincing."

        };

    }

    return{

        title:

        "Completely Fooled",

        message:

        "Every video fooled you. Don't worry, you're not the only one."

    };

}

// ==========================================================
// SHARE LINKS
// ==========================================================

function buildShareLinks(score){

    const url=

    "https://gennzgames.netlify.app";

    const text=

    `I scored ${score}/${QUESTIONS_PER_USER} in the AI Video Perception Study. Can you do better?`;

    document.getElementById(

        "share-wa"

    ).href=

    `https://api.whatsapp.com/send?text=${encodeURIComponent(text+" "+url)}`;

    document.getElementById(

        "share-x"

    ).href=

    `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;

    document.getElementById(

        "share-reddit"

    ).href=

    `https://www.reddit.com/submit?url=${encodeURIComponent(url)}&title=${encodeURIComponent(text)}`;

}

// ==========================================================
// DOWNLOAD SCORE CARD
// ==========================================================

const downloadBtn=

document.getElementById(

    "download-btn"

);

if(downloadBtn){

    downloadBtn.addEventListener(

        "click",

        async()=>{

            const capture=

            document.getElementById(

                "capture-area"

            );

            const canvas=

            await html2canvas(

                capture,

                {

                    scale:2,

                    useCORS:true,

                    backgroundColor:null

                }

            );

            const link=

            document.createElement("a");

            link.download=

            "AI-Video-Perception-Score.png";

            link.href=

            canvas.toDataURL();

            link.click();

        }

    );

}
// ==========================================================
// ENABLE ANSWERS AFTER VIDEO STARTS
// ==========================================================

function revealOptionsOnPlay(){

    document.querySelectorAll(".research-video").forEach(video=>{

        const id = video.dataset.id;

        const radios = document.querySelectorAll(
            `input[name="${id}_answer"]`
        );

        // Disable answer options initially
        radios.forEach(radio=>{
            radio.disabled = true;
        });

        // Enable after the participant presses Play
        video.addEventListener("play",function(){

            radios.forEach(radio=>{
                radio.disabled = false;
            });

        }, { once:true });

    });

}
// ==========================================================
// END OF SCRIPT.JS
// VERSION 2.0
// ==========================================================
