playStates = [];

for(let i = 1; i <= 9; i++){
    let squareName = "square" + i;
    let square = document.getElementById(squareName);
    playStates.push(false);
    square.addEventListener("touchstart", function(event){
        let audio = document.getElementById(squareName + "Audio");
        if(playStates[i-1] === false){
            audio.play();
            playStates[i-1] = true;
        }
        else{
            audio.pause();
            audio.currentTime = 0;
            playStates[i-1] = false;
        }
    });
}

console.log(playStates);

