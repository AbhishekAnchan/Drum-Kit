let numberOfDrums = document.querySelectorAll(".drum").length;
let sounds = ["tom-1", "tom-2", "tom-3", "tom-4", "snare", "crash", "kick-bass"];
let drums = ['w', 'a', 's', 'd', 'j', 'k', 'l'];
for(let i = 0; i < numberOfDrums; i++){
    document.querySelectorAll(".drum")[i].addEventListener('click', () => {
        let audio = new Audio("sounds/" + sounds[i] + ".mp3");
        audio.play();
        buttonAnimation(drums[i]);
    });
}

document.addEventListener("keydown", (event) => {
    console.log(event.key);
    switch (event.key) {
        case 'w':   let tom1 = new Audio("sounds/tom-1.mp3");
                    tom1.play();
                    break;

        case 'a':   let tom2 = new Audio("sounds/tom-2.mp3");
                    tom2.play();
                    break;

        case 's':   let tom3 = new Audio("sounds/tom-3.mp3");
                    tom3.play();
                    break;

        case 'd':   let tom4 = new Audio("sounds/tom-4.mp3");
                    tom4.play();
                    break;

        case 'j':   let snare = new Audio("sounds/snare.mp3");
                    snare.play();
                    break;

        case 'k':   let audio = new Audio("sounds/crash.mp3");
                    audio.play();
                    break;

        case 'l':   let kick = new Audio("sounds/kick-bass.mp3");
                    kick.play();
                    break;
    }

    buttonAnimation(event.key);
});

function buttonAnimation(buttonPressed){
    document.querySelector("." + buttonPressed).classList.add("pressed");
    setTimeout( () => {
        document.querySelector("." + buttonPressed).classList.remove("pressed");
        },
        100
    )
} 