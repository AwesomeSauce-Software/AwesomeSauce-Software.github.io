innovatetext = document.getElementById("innovatetext");
var texts = ["Being silly", "Inventing", "Developing", "Open Source", "Making things", "Being goofy", "Awesome!"];

function changeText() {
    var previousText = innovatetext.textContent;
    const pick = Math.floor(Math.random() * texts.length)
    var finaltext = texts[pick];
    if (pick == 0) {
        document.getElementById("innovatetext").onclick = function () {
            window.location.href = "legacy";
        }
    } else {
        document.getElementById("innovatetext").onclick = function () {}
    }
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

setInterval(changeText, 10000);

// when scrolling down, make .darken less opaque
window.addEventListener('scroll', function () {
    var value = window.scrollY;
    const scrollPercent = (value / (document.body.scrollHeight - window.innerHeight)) * 100;
    var scrollAmount = scrollPercent / 100 + 0.5;
    if (scrollAmount > 1.0) {
        scrollAmount = 1.0;
    }
    document.querySelector('.darken').style.opacity = scrollAmount;
})