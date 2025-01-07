document.addEventListener("DOMContentLoaded", () => {
    const video = document.getElementById("myvideo");
    const button = document.getElementById("button");

    if (video && button) {
        button.addEventListener("click", () => {
            if (video.paused) {
                video.play();
                button.textContent = "Berhenti";
                video.style.display = "block";
            } else {
                video.pause();
                button.textContent = "Mulai";
                video.style.display = "none";
            }
        });
    }

    const video2 = document.getElementById("myvideo2");
    const button2 = document.getElementById("button2");

    if (video2 && button2) {
        button2.addEventListener("click", () => {
            if (video2.paused) {
                video2.play();
                button2.textContent = "Berhenti";
                video2.style.display = "block";
            } else {
                video2.pause();
                button2.textContent = "Mulai";
                video2.style.display = "none";
            }
        });
    }
});

