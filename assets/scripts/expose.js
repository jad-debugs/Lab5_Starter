// expose.js

window.addEventListener('DOMContentLoaded', init);

function init() {
    const hornSelect = document.getElementById("horn-select");
    const hornImg = document.querySelector("#expose img");

    hornSelect.addEventListener("change", () => {
        if (hornSelect.value === "air-horn") {
            hornImg.src = "assets/images/air-horn.svg";
        } else if (hornSelect.value === "car-horn") {
            hornImg.src = "assets/images/car-horn.svg";
        } else if (hornSelect.value === "party-horn") {
            hornImg.src = "assets/images/party-horn.svg";
        }
    });

    
}