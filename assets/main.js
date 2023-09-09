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