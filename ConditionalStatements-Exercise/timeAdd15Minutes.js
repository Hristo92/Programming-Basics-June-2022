function timeAdd15Minutes(input){
    let hours = Number(input[0]);
    let minutes = Number(input[1]);

    let timeInMinutes = minutes + (hours * 60);
        timeInMinutes = timeInMinutes + 15;

    let h = Math.floor(timeInMinutes / 60);
    let m = timeInMinutes % 60;
    
    if(h === 24){
        h = 0;
    }

    if(m < 10){
        console.log(`${h}:0${m}`)
    }else{
        console.log(`${h}:${m}`)
    }

    
}
timeAdd15Minutes(["1", "46"])