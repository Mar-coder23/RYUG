


// code to count words of every page targeting its body element

function updateWordCount() {
    const counter = document.querySelector(".count-words");
    if (!counter) return;

    const text = document.body.innerText || "";
    const words = text.trim().split(/\s+/).filter(w => w.length > 0);
    
    counter.textContent = "Words: " + words.length;
}

updateWordCount();


let box = document.querySelector(".history-box")
let scrolling = false;
let autoScroll;

box.addEventListener("click", () => {
  if (!scrolling) {
   
    scrolling = true;
    autoScroll = setInterval(() => {
      box.scrollTop += 1;  
      
      if (box.scrollTop + box.clientHeight >= box.scrollHeight) {
        clearInterval(autoScroll);
        scrolling = false;
      }
    }, 20); 
  } else {
    
    clearInterval(autoScroll);
    scrolling = false;
  }
});