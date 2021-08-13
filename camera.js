// DOM
const recordButton = document.querySelector('.record-button');
const stopButton = document.querySelector('.stop-button');
const playButton = document.querySelector('.play-button');
const downloadButton = document.querySelector('.download-button');
const previewPlayer = document.querySelector('#preview');
const recordingPlayer = document.querySelector('#recording');

let recorder;
let recordedChunks;
let timeout;
let interval;
let flag = true;

// Function
function videoStart(e) {
    navigator.mediaDevices
        .getUserMedia({ video: true, audio: true })
        .then(stream => {
            previewPlayer.srcObject = stream; //보여주는 용도
            startRecording(previewPlayer.captureStream(), e);
        });
}

function startRecording(stream, event) {
    recordedChunks = []; // 녹화 후 다시 녹화 할 경우 초기화
    recorder = new MediaRecorder(stream);
    recorder.ondataavailable = (e) => { recordedChunks.push(e.data)}
    recorder.start();
    // console.log(document.querySelector("."+nameClass));
    interval = setInterval(() => {
        if (flag)
            document.querySelector("." + event.path[0].className).style.backgroundColor = "#FF0000";
        else
            document.querySelector("." + event.path[0].className).style.backgroundColor = "#f1ee1b";
        flag = !flag;
        console.log(flag);
    }, 1000);
}

function stopRecording() {
    previewPlayer.srcObject.getTracks().forEach(track => track.stop());
    recorder.stop();
    clearInterval(interval);
    recordButton.style.backgroundColor = "#ccc";
    flag = true; // for other button
}

function playRecording() {
    const recordedBlob = new Blob(recordedChunks, { type: "video/webm" });
    recordingPlayer.src = URL.createObjectURL(recordedBlob);
    recordingPlayer.play();
    downloadButton.href = recordingPlayer.src;
    downloadButton.download = `recording_${new Date()}.webm`;
}

// Event
recordButton.addEventListener("click", videoStart);
stopButton.addEventListener("click", stopRecording);
playButton.addEventListener("click", playRecording);

