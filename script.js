let startBtn = document.querySelector(".start-btn");
let nextBtn = document.querySelector(".next-btn");

let para = document.querySelectorAll("p");


let count = 0;

startBtn.addEventListener("click",()=>{
    count = 1;
    para[0].innerText = `1 Machli🐠 - x (1)`;
    para[1].innerText = `pani me gayi🌊 - x (1)`;
    para[2].innerText = `chapak💦 - x (1)`;
})
nextBtn.addEventListener("click",()=>{
    if(count<=0){
        alert("First start the game!😡");
        alert("I started it for you 🫡 :)")
    }
    count++;
    
    game(count);
})

const game = (count)=>{
     para[0].innerText = `${count} Machli🐠 - x (${count})`;
     para[1].innerText = `pani me gayi🌊 - x (${count})`;
     para[2].innerText = `chapak💦 - x (${count})`;
}
