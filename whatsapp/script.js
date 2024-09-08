document.querySelector(".chats").onclick=()=>{
    window.location.href="chats.html"
}
document.querySelector(".updates").onclick=()=>{
    window.location.href="updates.html"
}
document.querySelector(".calls").onclick=()=>{
    window.location.href="calls.html"
}

let today =new Date()
let hours=today.getHours()
let minutes=today.getMinutes()  
console.log(hours+":"+minutes)

let time=document.getElementById("time")
time.innerHTML=`<span>${hours}:${minutes}</span>`
   