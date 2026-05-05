// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById("horn-select");
    const hornImg = document.querySelector("#expose img");
    const audio = document.querySelector("audio")

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


}