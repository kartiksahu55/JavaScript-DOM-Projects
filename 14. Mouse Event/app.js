const xPosition=document.getElementById("xPosition")
const yPosition=document.getElementById("yPosition")

window.addEventListener("mousemove", (event)=>{
    console.log(event);
    xPosition.innerText=event.clientX
    yPosition.innerText=event.clientY
})