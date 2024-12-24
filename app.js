let maximum=parseInt(prompt("Enter the maximum "));
while(!maximum){
    maximum=parseInt(prompt("Enter a valid number"));
}
const targetNum=Math.floor(Math.random()*maximum)+1;
let guess=prompt("Enter your first guess! (type'q' to exit)");
let attempts=1;
while(parseInt(guess)!==targetNum){
    if(guess==='q') break;
    guess=parseInt(guess);
    
    if(guess>targetNum){
        guess=prompt("too high! enter another number");
        attempts++;
    }else if(guess>targetNum){
        guess=prompt("too low! enter another number");
        attempts++;
    }else{
        guess=prompt("Invalid guess! press 'q' to exit the game");
    }
}
if(guess==='q'){
    console.log("OK,YOU QUIT")
}else{
    console.log("CONGRATS YOU WIN")
    console.log(`You got it in ${attempts} guesses`)
}