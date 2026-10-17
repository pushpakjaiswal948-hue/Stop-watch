let date = new Date()
console.log(date);
let heading = document.querySelector("h2")
let hours = 0;
let minute = 0;
let second = 0;
let timer = null;
let startbtn = document.querySelector("#start-btn")

let stopbtn = document.querySelector("#stop-btn")
let resetbtn = document.querySelector("#reset-btn")
function start(){
    timer = setInterval(()=>{
        second++;
        if(second == 60){
            second = 0;
            minute++;
        }
        if(minute == 60){
            minute = 0;
            hours++;
        }
        heading.innerText = String(hours).padStart(2,"0") + ":" + String(minute).padStart(2,"0") + ":" + String(second).padStart(2,"0") 
    },1000);
}
startbtn.addEventListener("click", function(){
    if(timer !== null){
        clearInterval(timer);
    }
    start()
    
    
});

stopbtn.addEventListener("click", function(){
    
        clearInterval(timer);
       
   
})
resetbtn.addEventListener("click", function(){
    
        clearInterval(timer)
        heading.innerHTML = `00:00:00`;
        second = 0;
        minute = 0;
        hours = 0;
   
})



