let soundboard = document.getElementById("soundboard");

for (let i = 0; i < sounds.names.length; i++) {
    let soundName = sounds.names[i];
    let soundPath = sounds.paths[i];
    let sound = new Audio(soundPath);
    
    const btn = document.createElement("button");
    btn.innerHTML = soundName;
    soundboard.appendChild(btn);
    
    const playImg = document.createElement("div");
    playImg.setAttribute("class", "play-img");


    sound.addEventListener('play', function() { 
       soundboard.appendChild(playImg);
        console.log("det var get")
    });

    btn.addEventListener("click", function() {
        sound.play()
    });
};



