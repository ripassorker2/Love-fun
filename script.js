const noButton = document.getElementById("no");

noButton.addEventListener("mouseover", () => {
    const randomTop = Math.floor(
        Math.random() * (window.innerHeight - noButton.offsetHeight)
    );
    const randomLeft = Math.floor(
        Math.random() * (window.innerWidth - noButton.offsetWidth)
    );

    noButton.style.position = "absolute"; // Ensure button position is absolute for random movement
    noButton.style.top = randomTop + "px";
    noButton.style.left = randomLeft + "px";
});

const yesButton = document.getElementById("yes");

yesButton.addEventListener("click", () => {
    popup.style.display = "block";
});

function closePopup() {
    popup.style.display = "none";
    noButton.style.position = "";
}
