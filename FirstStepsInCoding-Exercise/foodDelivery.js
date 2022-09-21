function foodDelivery(input){
    let chickenMenuCount = Number(input[0]);
    let fishMenuCount = Number(input[1]);
    let vegetarianMenuCount = Number(input[2]);

    let chickenMenuPrice = chickenMenuCount * 10.35;
    let fishMenuPrice = fishMenuCount * 12.40;
    let vegetarianMenuPrice = vegetarianMenuCount * 8.15;
    let totalMenuPrice = chickenMenuPrice + fishMenuPrice + vegetarianMenuPrice;
    let priceForDesert = totalMenuPrice * 20 / 100;
    let delivery = 2.50;
    let totalOrderPrice = totalMenuPrice + priceForDesert + delivery;
    
    console.log(totalOrderPrice);
}
foodDelivery(["9", "2", "6"])