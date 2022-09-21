function worldSwimmingRecord(input){
    let recordInSeconds = Number(input[0]);
    let distanceInMeters = Number(input[1]);
    let timeInSecondsPerMeter = Number(input[2]);

    let totalSeconds = distanceInMeters * timeInSecondsPerMeter;
    let slowTime = Math.floor(distanceInMeters / 15) * 12.5;
    let totalTime = totalSeconds + slowTime;
    let time = totalTime - recordInSeconds;



    if(recordInSeconds <= totalTime){
        console.log(`No, he failed! He was ${time.toFixed(2)} seconds slower.`);
        
    }else if(recordInSeconds > totalTime){
        console.log(`Yes, he succeeded! The new world record is ${totalTime.toFixed(2)} seconds.`);
    }
}
worldSwimmingRecord(["55555.67", "3017", "5.03"])