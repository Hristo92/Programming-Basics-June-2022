function footballKit(input){

    let tShirtPrice = Number(input[0]);
    let sum = Number(input[1]);

    let shortsPrice = tShirtPrice * 0.75;
    let socksPrice = shortsPrice * 0.20;
    let shoesPrice = (tShirtPrice + shortsPrice) * 2;
    let totalAmount = tShirtPrice + shortsPrice + socksPrice + shoesPrice;
    let priceAfterDiscount = totalAmount - (totalAmount * 0.15);

    if(priceAfterDiscount >= sum){
        console.log(`Yes, he will earn the world-cup replica ball!`);
        console.log(`His sum is ${(priceAfterDiscount).toFixed(2)} lv.`);
    }else{
        console.log(`No, he will not earn the world-cup replica ball.`);
        console.log(`He needs ${(sum - priceAfterDiscount).toFixed(2)} lv. more.`)
    }

}
footballKit(["55", "310"])