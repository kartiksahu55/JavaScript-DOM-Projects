
window.addEventListener("keydown", function(e){
    const audio= document.querySelector(`audio[keyData="${e.keyCode}"]`)
    const key= document.querySelector(`.key[keyData="${e.keyCode}"]`)
    console.log(e.keyCode);
    if (!audio) return;
    audio.currentTime=0
    audio.play();
    key.classList.add("playing");
    this.setTimeout((l)=>{
        key.classList.remove("playing");
    }, 150)
})