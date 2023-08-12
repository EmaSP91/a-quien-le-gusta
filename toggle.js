const toggleContainer= document.querySelector(".toggle-container");

const toggleSwitch = document.querySelector(".toggle-switch");

const body = document.querySelector("body");
const title = document.querySelector(".title");
const music = document.querySelector(".music");
const question = document.querySelector(".question");

let darkMode = localStorage.getItem("darkmode") === "true";

console.log("Fuera de la funcion: "+darkMode)
updateDarkMode();
toggleContainer. addEventListener("click",function (){
  darkMode = !darkMode;
  console.log("Dentro de la funcion: "+darkMode)

  updateDarkMode();
});
function updateDarkMode(){
    if(darkMode){


  
body.classList.add("dark");

toggleSwitch.classList.add("active");  

title.textContent = "Agrega una película/serie";

music.src = "img/undraw_video.png"
question.src = "img/undraw_Faq_dark.png"
//console.log("Dark: "+darkMode)

    }else{
body.classList.remove("dark");

toggleSwitch.classList.remove("active");  
music.src = "img/undraw_happy_music.png"
question.src = "img/undraw_Faq.png" 
title.textContent = "Agrega una canción"     
 //console.log("Dark: "+darkMode)

    
 }

  
localStorage.setItem("darkmode", darkMode);
  
 }