function toyShop(input){
    let excursionPrice = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let talkingDolls = Number(input[2]);
    let teddyBears = Number(input[3]);
    let minions = Number(input[4]);
    let trucks = Number(input[5]);

    let puzzleSum = puzzleCount * 2.60;
    let talkingDollsSum = talkingDolls * 3;
    let teddyBearsSum = teddyBears * 4.10;
    let minionsSum = minions * 8.20;
    let trucksSum = trucks * 2;

    let totalToysCount = puzzleCount + talkingDolls + teddyBears + minions + trucks;
    let totalSumForToys = puzzleSum + talkingDollsSum + teddyBearsSum + minionsSum + trucksSum;

    if(totalToysCount >= 50){
        let discount = totalSumForToys * 0.25;
        totalSumForToys = totalSumForToys - discount;
        totalSumForToys = totalSumForToys - (totalSumForToys * 0.10)
    }else{
        totalSumForToys = totalSumForToys - (totalSumForToys * 0.10)
    }

    if(totalSumForToys >= excursionPrice){
        totalSumForToys = totalSumForToys - excursionPrice;
        console.log(`Yes! ${totalSumForToys.toFixed(2)} lv left.`)
    }else{
        totalSumForToys = excursionPrice - totalSumForToys;
        console.log(`Not enough money! ${totalSumForToys.toFixed(2)} lv needed.`)
    }



}
toyShop(["40.8", "20", "25", "30", "50", "10"])