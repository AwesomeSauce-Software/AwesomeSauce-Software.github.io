innovatetext = document.getElementById("innovatetext");
var texts = ["Open Source", "Inventing", "Developing", "Being silly", "Making things"];

function changeText() {
    var previousText = innovatetext.textContent;
    var finaltext = texts[Math.floor(Math.random() * texts.length)];
    let i = 0;
    const intervalId = setInterval(() => {
        // If there is still text from the original text, remove it
        if (previousText.length > 0) {
            previousText = previousText.slice(0, -1);
            innovatetext.textContent = previousText;
        }
        // If there is not any original text left, start adding the final text
        else if (i < finaltext.length) {
            innovatetext.textContent += finaltext[i++];
        }
        // When all changes are done, terminate the interval
        else {
            clearInterval(intervalId);
        }

    }, 100);
}

// tilt card to follow mouse
const mouseMovement = (e) => {
    // get card
    var card = e.target;
    if (!e.target.classList.contains('card')) {
        card = e.target.closest('.card');
    }
    const coordBox = card.getBoundingClientRect();
    const centerPointX = coordBox.x + coordBox.width / 2;
    const centerPointY = coordBox.y + coordBox.height / 2;

    const maxRotation = 10;

    //Y rotation
    const rotationFactorY = maxRotation / (coordBox.width / 2);
    const yRotation = Math.ceil((e.clientX - centerPointX) * rotationFactorY);

    //X rotation
    const rotationFactorX = maxRotation / (coordBox.height / 2);
    const xRotation = -1 * Math.ceil((e.clientY - centerPointY) * rotationFactorX);

    card.style.cssText = `transform: rotateY(${yRotation}deg) rotateX(${xRotation}deg);`;

    // change background color gradient to white where mouse is
    const gradientX = Math.ceil((e.clientX - coordBox.x) / coordBox.width * 100);
    const gradientY = Math.ceil((e.clientY - coordBox.y) / coordBox.height * 100);
    card.style.background = `linear-gradient(${gradientX}deg, #1e1e1ea5 0%, #282828a5 100%)`;
}

// Reset card rotation when mouse leaves
const mouseLeave = (e) => {
    const card = e.target;
    card.style.transform = `rotateX(0deg) rotateY(0deg)`;
}

// Get all cards and attach mousemove and mouseleave events
const cards = document.querySelectorAll('.card');

cards.forEach(card => {
    card.addEventListener('mousemove', mouseMovement);
    card.addEventListener('mouseleave', mouseLeave);
});

setInterval(changeText, 10000);