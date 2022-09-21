function journey(input){
    let budget = Number(input[0]);
    let season = input[1];
    let place;
    let destination;

    if(season === "summer"){
        if(budget <= 100){
            destination = "Bulgaria";
            place = "Camp";
            budget -= budget * 0.70;
        }else if(budget <=1000){
            destination = "Balkans";
            place = "Camp";
            budget -= budget * 0.60;
        }else{
            destination = "Europe";
            place = "Hotel";
            budget -= budget * 0.10;
        }
    }
    
    if(season === "winter"){
        if(budget <= 100){
            destination = "Bulgaria";
            place = "Hotel";
            budget -= budget * 0.30;
        }else if(budget <=1000){
            destination = "Balkans";
            place = "Hotel";
            budget -= budget * 0.20;
        }else{
            destination = "Europe";
            place = "Hotel";
            budget -= budget * 0.10;
        }
    }

    console.log(`Somewhere in ${destination}`);
    console.log(`${place} - ${budget.toFixed(2)}`)

}
journey(["50", "summer"])
journey(["75", "winter"])
journey(["312", "summer"])
journey(["678.53", "winter"])
journey(["1500", "summer"])
