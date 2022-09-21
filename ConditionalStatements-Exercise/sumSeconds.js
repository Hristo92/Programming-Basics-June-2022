function sumSeconds(input){
    let participant1 = Number(input[0]);
    let participant2 = Number(input[1]);
    let participant3 = Number(input[2]);

    let totalTimeInSeconds = participant1 + participant2 + participant3;
    let minutes = Math.floor(totalTimeInSeconds / 60);
    let seconds = totalTimeInSeconds % 60;
    
    if(seconds < 10){
        console.log(`${minutes}:0${seconds}`)
    }else{
        console.log(`${minutes}:${seconds}`)
    }
}
sumSeconds(["35", "45", "44"])