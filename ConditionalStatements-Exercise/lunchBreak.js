function lunchBreak(input){
    let showName = input[0];
    let episodeTime = Number(input[1]);
    let breakDuration = Number(input[2]);
    let timeLeftAfterWatch = 0;

    let lunchTime = breakDuration / 8;
    let restTime = breakDuration / 4;
    let timeLeft = breakDuration - lunchTime - restTime;

    if(timeLeft >= episodeTime){
        timeLeftAfterWatch = timeLeft - episodeTime;
        console.log(`You have enough time to watch ${showName} and left with ${Math.ceil(timeLeftAfterWatch)} minutes free time.`)
    }else{
        timeLeftAfterWatch = episodeTime - timeLeft;
        console.log(`You don't have enough time to watch ${showName}, you need ${Math.ceil(timeLeftAfterWatch)} more minutes.`)
    }


}
lunchBreak(["Teen Wolf", "48", "60"])