function yardGreening (input){
    let squareMeters = Number(input[0]);

    let priceForGreening = squareMeters * 7.61;
    let discount =  priceForGreening * 0.18;
    let priceAfterDiscount = priceForGreening - discount;
    

    console.log(`The final price is: ${priceAfterDiscount} lv.`);
    console.log(`The discount is: ${discount} lv.`);

}
yardGreening(["550"])