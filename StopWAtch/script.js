window.onload=function(){
let minutes="00"
let seconds="00"
let tens="00"
let appendtens=document.getElementById("tens")
let appendseconds=document.getElementById("seconds")
let appendminutes=document.getElementById("minutes")
let start=document.getElementById("start")
let stop=document.getElementById("stop")
let reset=document.getElementById("reset")
let interval;

start.onclick=function(){
    clearInterval(interval)
 interval=   setInterval(starttimer,10)
}
stop.onclick=function(){
    clearInterval(interval)

}
reset.onclick=function(){
    clearInterval(interval)
 tens="00"
 seconds="00"
 minutes="00"
 appendtens.innerHTML=tens
 appendseconds.innerHTML=seconds
 appendminutes.innerHTML=minutes
}
function starttimer() {
    tens++;

if (tens<=9) {
    appendtens.innerHTML="0"+tens 
}
if (tens>9) {
    appendtens.innerHTML=tens
}

if (tens>99) {
   console.log("seconds")
   seconds++
   appendseconds.innerHTML="0"+seconds
   tens=0
   appendtens.innerHTML="0"+0

}

if (seconds>9) {
    appendseconds.innerHTML=seconds
    
}
if (seconds>60) {
    console.log("minutes")
    minutes++
    appendminutes.innerHTML="0"+min
    seconds=0
    appendseconds.innerHTML="0"+0
    
}
}





}