function pcStore(input){

    let processorPrice = Number(input[0]);
    let videoPrice = Number(input[1]);
    let priceForOneRam = Number(input[2]);
    let ramCount = Number(input[3]);
    let discount = Number(input[4]);

    let processorPriceInLeva = processorPrice * 1.57;
    let videoPriceInLeva = videoPrice * 1.57;
    let priceForOneRamInLeva = priceForOneRam * 1.57;
    let totalPriceForRam = priceForOneRamInLeva * ramCount;
    let processorPriceAfterDiscount = processorPriceInLeva - (processorPriceInLeva * discount);
    let videoPriceAfterDiscount = videoPriceInLeva - (videoPriceInLeva * discount);
    let totalPrice = totalPriceForRam + processorPriceAfterDiscount + videoPriceAfterDiscount;

    console.log(`Money needed - ${totalPrice.toFixed(2)} leva.`);
     

}
pcStore(["500",
    "200",
    "80",
    "2",
    "0.05"])