// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById("horn-select");
    const hornImg = document.querySelector("#expose img");

    const volumeSlider = document.getElementById("volume");
    const volumeIcon = document.querySelector("#volume-controls img");
    const audio = document.querySelector("audio");


    hornSelect.addEventListener("change", () => {
        if (hornSelect.value === "air-horn") {
            hornImg.src = "assets/images/air-horn.svg";
            audio.src = "assests/audio/air-horn.mp3";
        } else if (hornSelect.value === "car-horn") {
            hornImg.src = "assets/images/car-horn.svg";
            audio.src = "assests/audio/car-horn.mp3";

        } else if (hornSelect.value === "party-horn") {
            hornImg.src = "assets/images/party-horn.svg";
            audio.src = "assests/audio/party-horn.mp3";
        }
    });

    volumeSlider.addEventListener("input", () => {
        if (volumeSlider.value == 0) {
            volumeIcon.src = "assets/icons/volume-level-0.svg"
            volumeIcon.alt = "Volume level 0"
            audio.volume = 0;
        }
        else if (volumeSlider.value >= 1 && volumeSlider.value < 33) {
            volumeIcon.src = "assets/icons/volume-level-1.svg"
            volumeIcon.alt = "Volume level 1"
            audio.volume = volumeSlider.value/100;
        }
        else if (volumeSlider.value >= 33 && volumeSlider.value < 67) {
            volumeIcon.src = "assets/icons/volume-level-2.svg"
            volumeIcon.alt = "Volume level 2"
            audio.volume = volumeSlider.value/100;
        }
        else if (volumeSlider.value >= 67) {
            volumeIcon.src = "assets/icons/volume-level-3.svg"
            volumeIcon.alt = "Volume level 3"
            audio.volume = volumeSlider.value/100;
        }
    });

    
}