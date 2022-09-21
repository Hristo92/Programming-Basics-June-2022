function shopping(input){
    let budget = Number(input[0]);
    let videoCard = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);
    let diff = 0;

    let videoCardPrice = videoCard * 250;
    let  processorPrice = processor * (videoCardPrice * 0.35);
    let ramPrice = ram * (videoCardPrice * 0.10);
    let totalPrice = videoCardPrice + processorPrice + ramPrice;

    if(videoCard > processor){
        let discount = totalPrice * 0.15;
        totalPrice = totalPrice - discount;
    }

    if(budget >= totalPrice){
        diff = budget - totalPrice;
        console.log(`You have ${diff.toFixed(2)} leva left!`)
    }else if(totalPrice > budget){
        diff = totalPrice - budget;
        console.log(`Not enough money! You need ${diff.toFixed(2)} leva more!`)
    }
}
shopping(["900", "2", "1", "3"])