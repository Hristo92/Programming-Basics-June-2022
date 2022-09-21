function santaHoliday(input){

    let days = Number(input[0]);
    let type = input[1];
    let review = input[2];
    days -= 1;
    let price = 0;

    if(type === "room for one person"){
        price = days * 18;

        if(review === "positive"){
            price = price + (price * 0.25);
        }else if(review === "negative"){
            price = price - (price * 0.10);
        }
    }

    if(type === "apartment"){
        price = days * 25;

        if(days < 10){
            price = price - (price * 0.30);
        }else if(days >= 10 && days < 15){
            price = price - (price * 0.35);
        }else if(days > 15){
            price = price - (price * 0.50);
        }

        if(review === "positive"){
            price = price + (price * 0.25);
        }else if(review === "negative"){
            price = price - (price * 0.10);
        }
    }

    if(type === "president apartment"){
        price = days * 35;

        if(days < 10){
            price = price - (price * 0.10);
        }else if(days >= 10 && days < 15){
            price = price - (price * 0.15);
        }else if(days > 15){
            price = price - (price * 0.20);
        }

        if(review === "positive"){
            price = price + (price * 0.25);
        }else if(review === "negative"){
            price = price - (price * 0.10);
        }
    }

    console.log(price.toFixed(2));

}
santaHoliday(["12",
    "room for one person",
    "positive"
    ])