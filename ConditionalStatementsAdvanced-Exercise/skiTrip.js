function skiTrip(input){

    let days = Number(input[0]);
    let typeOfProperty = input[1];
    let review = input[2];

    let nights = days - 1;
    let totalPrice = 0;

    if(typeOfProperty === "room for one person"){
        totalPrice = nights * 18;
        if(review === "positive"){
            totalPrice += totalPrice * 0.25;
        }else if(review === "negative"){
            totalPrice -= totalPrice * 0.10;
        }
    }else if(typeOfProperty === "apartment"){
        totalPrice = nights * 25;
        if(days < 10){
            totalPrice -= totalPrice * 0.30;
        }else if(days >= 10 && days <= 15){
            totalPrice -= totalPrice * 0.35;
        }else if(days > 15){
            totalPrice -= totalPrice * 0.50;
        }
        if(review === "positive"){
            totalPrice += totalPrice * 0.25;
        }else if(review === "negative"){
            totalPrice -= totalPrice * 0.10;
        }
    }else if(typeOfProperty === "president apartment"){
        totalPrice = nights * 35;
        if(days < 10){
            totalPrice -= totalPrice * 0.10;
        }else if(days >= 10 && days <= 15){
            totalPrice -= totalPrice * 0.15;
        }else if(days > 15){
            totalPrice -= totalPrice * 0.20;
        }
        if(review === "positive"){
            totalPrice += totalPrice * 0.25;
        }else if(review === "negative"){
            totalPrice -= totalPrice * 0.10;
        }
    
    }        
    console.log(`${totalPrice.toFixed(2)}`);
}
skiTrip(["30", "president apartment", "negative"])