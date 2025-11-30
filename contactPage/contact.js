


// code to count words of every page targeting its body element

function updateWordCount() {
    const counter = document.querySelector(".count-words");
    if (!counter) return;

    const text = document.body.innerText || "";
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    
    counter.textContent = "Words: " + words.length;
}

updateWordCount();