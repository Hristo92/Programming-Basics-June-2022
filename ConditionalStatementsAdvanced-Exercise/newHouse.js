function newHouse(input) {
    let flowersType = input[0];
    let flowersCount = Number(input[1]);
    let budget = Number(input[2]);
    let flowersPrice = 0;
    let sum = 0;


    switch (flowersType) {
        case "Roses":
            if (flowersCount > 80) {
                flowersPrice = flowersCount * 5;
                flowersPrice -= flowersPrice * 0.10;
            } else {
                flowersPrice = flowersCount * 5;
            }
            sum = Math.abs(budget - flowersPrice);

            if (budget >= flowersPrice) {
                console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${sum.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${sum.toFixed(2)} leva more.`)
            }
            break;
        case "Dahlias":
            if (flowersCount > 90) {
                flowersPrice = flowersCount * 3.80;
                flowersPrice -= flowersPrice * 0.15;
            } else {
                flowersPrice = flowersCount * 3.80;
            }
            sum = Math.abs(budget - flowersPrice);

            if (budget >= flowersPrice) {
                console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${sum.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${sum.toFixed(2)} leva more.`)
            }
            break;
        case "Tulips":
            if (flowersCount > 80) {
                flowersPrice = flowersCount * 2.80;
                flowersPrice -= flowersPrice * 0.15;
            } else {
                flowersPrice = flowersCount * 2.80;
            }
            sum = Math.abs(budget - flowersPrice);

            if (budget >= flowersPrice) {
                console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${sum.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${sum.toFixed(2)} leva more.`)
            }
            break;
        case "Narcissus":
            if (flowersCount < 120) {
                flowersPrice = flowersCount * 3;
                flowersPrice += flowersPrice * 0.15;
            } else {
                flowersPrice = flowersCount * 3;
            }
            sum = Math.abs(budget - flowersPrice);

            if (budget >= flowersPrice) {
                console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${sum.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${sum.toFixed(2)} leva more.`)
            }
            break;
        case "Gladiolus":
            if (flowersCount < 80) {
                flowersPrice = flowersCount * 2.50;
                flowersPrice += flowersPrice * 0.20;
            } else {
                flowersPrice = flowersCount * 2.50;
            }
            sum = Math.abs(budget - flowersPrice);

            if (budget >= flowersPrice) {
                console.log(`Hey, you have a great garden with ${flowersCount} ${flowersType} and ${sum.toFixed(2)} leva left.`)
            } else {
                console.log(`Not enough money, you need ${sum.toFixed(2)} leva more.`)
            }
            break;
    }
}
newHouse(["Gladiolus", "70", "250"])