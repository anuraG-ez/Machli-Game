let startBtn = document.querySelector(".start-btn");
let nextBtn = document.querySelector(".next-btn");

let para = document.querySelectorAll("p");


let count = 0;

        // Function to speak text using Web Speech API
function speak(text) {
    const synth = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "hi-IN";
    utterance.rate = 1.3;
    synth.speak(utterance);
}
startBtn.addEventListener("click",()=>{
    count = 1;
    para[0].innerText = `1 Machli🐠 - x (1)`;
    para[1].innerText = `pani me gayi🌊 - x (1)`;
    para[2].innerText = `chapak💦 - x (1)`;
   say(count);
})


nextBtn.addEventListener("click",()=>{
    if(count<=0){
        alert("First start the game!😡");
        alert("I started it for you 🫡 :)")
    }
   
    count++;
    say(count);
    game(count);
})
const say = (count)=>{
    for(let i=0;i<count;i++){
        
        speak(count+"Maachli");
    }
    for(let i=0;i<count;i++){

        speak("pani me gayi");
    }
    for(let i=0;i<count;i++){

        speak("chaapaak");
    }
}

const game = (count)=>{
     para[0].innerText = `${count} Machli🐠 - x (${count})`;
     para[1].innerText = `pani me gayi🌊 - x (${count})`;
     para[2].innerText = `chapak💦 - x (${count})`;
}
