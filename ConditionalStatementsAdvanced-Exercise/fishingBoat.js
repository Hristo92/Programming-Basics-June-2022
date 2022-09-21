function fishingBoat(input) {
    let budget = Number(input[0]);
    let season = input[1];
    let fisherman = Number(input[2]);
    let totalAmount = 0;
    let discount = 0;
    let sum = 0;

    switch (season) {
        case "Spring":
            if (fisherman <= 6) {
                discount = 3000 * 0.10;
                totalAmount = 3000 - discount;
                if (fisherman % 2 === 0) {
                    totalAmount -= totalAmount * 0.05;
                }
                if (budget >= totalAmount) {
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                } else {
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                } break;
            } else if (fisherman >= 7 && fisherman <= 11) {
                discount = 3000 * 0.15;
                totalAmount = 3000 - discount;
                if (fisherman % 2 === 0) {
                    totalAmount -= totalAmount * 0.05;
                }
                if (budget >= totalAmount) {
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                } else {
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                } break;
            } else if (fisherman >= 12) {
                discount = 3000 * 0.25;
                totalAmount = 3000 - discount;
                if (fisherman % 2 === 0) {
                    totalAmount -= totalAmount * 0.05;
                }
                if(budget >= totalAmount){
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                }else{
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                }break;
            } 

        case "Summer":
            if (fisherman <= 6) {
                discount = 4200 * 0.10;
                totalAmount = 4200 - discount;
                if (fisherman % 2 === 0) {
                    totalAmount -= totalAmount * 0.05;
                }
                if(budget >= totalAmount){
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                }else{
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                }break;
            
            } else if (fisherman >= 7 && fisherman <= 11) {
                discount = 4200 * 0.15;
                totalAmount = 4200 - discount;
                if (fisherman % 2 === 0) {
                    totalAmount -= totalAmount * 0.05;
                }
                if(budget >= totalAmount){
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                }else{
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                }break;
            } else if (fisherman >= 12) {
                discount = 4200 * 0.25;
                totalAmount = 4200 - discount;
                if (fisherman % 2 === 0) {
                    totalAmount -= totalAmount * 0.05;
                }
                if(budget >= totalAmount){
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                }else{
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                }break;
            }

        case "Autumn":
            if (fisherman <= 6) {
                discount = 4200 * 0.10;
                totalAmount = 4200 - discount;
                if(budget >= totalAmount){
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                }else{
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                }break;
            } else if (fisherman >= 7 && fisherman <= 11) {
                discount = 4200 * 0.15;
                totalAmount = 4200 - discount;
                if(budget >= totalAmount){
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                }else{
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                }break;
            } else if (fisherman >= 12) {
                discount = 4200 * 0.25;
                totalAmount = 4200 - discount;
                if(budget >= totalAmount){
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                }else{
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                }break;
            }

        case "Winter":
            if (fisherman <= 6) {
                discount = 2600 * 0.10;
                totalAmount = 2600 - discount;
                if (fisherman % 2 === 0) {
                    totalAmount -= totalAmount * 0.05;
                }
                if(budget >= totalAmount){
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                }else{
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                }break;
            } else if (fisherman >= 7 && fisherman <= 11) {
                discount = 2600 * 0.15;
                totalAmount = 2600 - discount;
                if (fisherman % 2 === 0) {
                    totalAmount -= totalAmount * 0.05;
                }
                if(budget >= totalAmount){
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                }else{
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                }break;
            } else if (fisherman >= 12) {
                discount = 2600 * 0.25;
                totalAmount = 2600 - discount;
                if (fisherman % 2 === 0) {
                    totalAmount -= totalAmount * 0.05;
                }
                if(budget >= totalAmount){
                    sum = budget - totalAmount;
                    console.log(`Yes! You have ${sum.toFixed(2)} leva left.`);
                }else{
                    sum = totalAmount - budget;
                    console.log(`Not enough money! You need ${sum.toFixed(2)} leva.`);
                }break;
            }
    }

}
fishingBoat(["3000", "Summer", "11"])