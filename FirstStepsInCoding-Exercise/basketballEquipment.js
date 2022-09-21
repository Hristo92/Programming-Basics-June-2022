function basketballEquipment(input){
    let yearBill = Number(input[0]);

    let basketballTrainers = yearBill - (yearBill * 40/100);
    let basketballTrackSuit = basketballTrainers - (basketballTrainers * 20/100);
    let basketballBall = basketballTrackSuit / 4;
    let basketballAccessories = basketballBall / 5;
    let totalSum = yearBill + basketballTrainers + basketballTrackSuit + basketballBall + basketballAccessories;

    console.log(totalSum);
}
basketballEquipment(["550"])