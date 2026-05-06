// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const synth = window.speechSynthesis;

    const faceImg = document.querySelector("#explore img");
    const textArea = document.getElementById("text-to-speak");
    const voiceSelect = document.getElementById("voice-select");
    const button = document.querySelector("#explore button");

    let voices = [];

    function loadVoices() {
        voices = synth.getVoices();
        voiceSelect.innerHTML = "";

        voices.forEach((v, i) => {
            const opt = document.createElement("option");
            opt.value = i;
            opt.textContent = v.name;
            voiceSelect.appendChild(opt);
        });
    }

    loadVoices();
    synth.onvoiceschanged = loadVoices;

    button.onclick = () => {
        const utter = new SpeechSynthesisUtterance(textArea.value);
        utter.voice = voices[voiceSelect.value];

        utter.onstart = () => {
            faceImg.src = "assets/images/smiling-open.png";
        };

        utter.onend = () => {
            faceImg.src = "assets/images/smiling.png";
        };

        synth.speak(utter);
    };
}