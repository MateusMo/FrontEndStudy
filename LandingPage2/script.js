document.addEventListener("DOMContentLoaded", function () {
    function setupHoverSound(squareElement, audioElement) {
        squareElement.addEventListener("mouseover", function () {
            if (!audioElement.ended && !audioElement.paused) {
                audioElement.pause();
                audioElement.currentTime = 0;
            }
    
            audioElement.play().then(() => {
            }).catch(error => {
                console.error("Error playing audio:", error);
            });
        });
    
        squareElement.addEventListener("mouseout", function () {
            audioElement.pause();
            audioElement.currentTime = 0; 
        });
    }

    var firstSquare = document.querySelector(".first__square");
    var hoverSoundFirstSquare = document.getElementById("hoverSound_first__square");
    setupHoverSound(firstSquare, hoverSoundFirstSquare);

    var secondSquare = document.querySelector(".second__square");
    var hoverSoundSecondSquare = document.getElementById("hoverSound_second__square");
    setupHoverSound(secondSquare, hoverSoundSecondSquare);

    var thirdSquare = document.querySelector(".third__square");
    var hoverSoundThirdSquare = document.getElementById("hoverSound_third__square");
    setupHoverSound(thirdSquare, hoverSoundThirdSquare);

    var forthSquare = document.querySelector(".forth__square");
    var hoverSoundForthSquare = document.getElementById("hoverSound_forth__square");
    setupHoverSound(forthSquare, hoverSoundForthSquare);
});

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function changeGalaxy() {
    const root = document.documentElement;

    // Generate random colors close to space colors
    const mainColor = getRandomColor();
    const secondaryColor = getRandomColor();
    const textMainColor = getRandomColor();
    const textSecondaryColor = getRandomColor();

    // Update CSS variables with the random colors
    root.style.setProperty('--background-color-main', mainColor);
    root.style.setProperty('--background-color-secondary', secondaryColor);
    root.style.setProperty('--text-main', textMainColor);
    root.style.setProperty('--text-secondary', textSecondaryColor);
}
