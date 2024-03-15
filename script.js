const handHours = document.querySelector(".hand.hours");
const handMinutes = document.querySelector(".hand.mins");
const handSeconds = document.querySelector(".hand.sec");

function getCurrentTime(){
   let date = new Date();
   let currentHours = date.getHours();
   let currentMinutes = date.getMinutes();
   let currentSeconds = date.getSeconds();

   handHours.style.transform = `rotate(${currentHours * 30 + currentMinutes/2}deg)`;
   handMinutes.style.transform = `rotate(${currentMinutes * 6 + currentSeconds * 0.1}deg)`;
   handSeconds.style.transform = `rotate(${6 + currentSeconds * 6}deg)`;
}

getCurrentTime();

setInterval(getCurrentTime, 1000);
