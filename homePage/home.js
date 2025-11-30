
// code to count words of every page targeting its body element

function updateWordCount() {
    const counter = document.querySelector(".count-words");
    if (!counter) return;

    const text = document.body.innerText || "";
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    
    counter.textContent = "Words: " + words.length;
}

updateWordCount();



let audio = document.querySelector(".music")
let btn = document.querySelector(".play-btn")

btn.addEventListener("click", () => {
  if (audio.paused) {
    audio.play();
    btn.textContent = "Pause";
  } else {
    audio.pause();
    btn.textContent = "Play";
  }
});