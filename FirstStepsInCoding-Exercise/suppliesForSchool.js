function suppliesForSchool(input){
    let packetPens = Number(input[0]);
    let packetMarkers = Number(input[1]);
    let litersDetergent = Number(input[2]);
    let discount = Number(input[3]);

    let priceForPens = packetPens * 5.80;
    let priceForMarkers = packetMarkers * 7.20;
    let priceForDetergent = litersDetergent * 1.20;
    let totalPrice = priceForPens + priceForMarkers + priceForDetergent;
    let priceWithDiscount = totalPrice - (totalPrice * (discount / 100));

    console.log(priceWithDiscount);
}
suppliesForSchool(["2", "3", "4", "25"])