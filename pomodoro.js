const readline = require('node:readline');

const { stdin: input, stdout: output } = require('node:process');

const rl = readline.createInterface({ input, output });

const workDuration = 25 * 60;
const smallBreak = 5 * 60;
const longBreak = 15 * 60;
let pomo = 4;



function startTimer(type,duration)
{
    console.log(`${type} timer started!`);
    setTimeout(()=>{
        console.log(`${type} timer finished!`)
        if(type === "Work"){
            if(pomo === 1){
                pomo = 4;
                startTimer("break",longBreak);
            }else{
                startTimer("break",smallBreak);
            }
        }else if(type === "break"){
            pomo--;
            startTimer("Work",workDuration);
        }
    },duration * 1000)
    //rl.close();
}

rl.question('Press S to start the timer: ', (ans) => {
    if(ans === "S" || ans === "s"){
        startTimer("Work",workDuration);
    }else{
        console.log("Bye!!");
        rl.close();
    }
});