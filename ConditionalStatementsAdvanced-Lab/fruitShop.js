function fruitShop(input) {
    let fruit = input[0];
    let day = input[1];
    let count = input[2];
    let totalAmount = 0;

    if (day === "Monday" || day === "Tuesday" || day === "Wednesday" || day === "Thursday" || day === "Friday") {
        if (fruit === "banana") {
            totalAmount = count * 2.50;
        } else if (fruit === "apple") {
            totalAmount = count * 1.20;
        } else if (fruit === "orange") {
            totalAmount = count * 0.85;
        } else if (fruit === "grapefruit") {
            totalAmount = count * 1.45;
        } else if (fruit === "kiwi") {
            totalAmount = count * 2.70;
        } else if (fruit === "pineapple") {
            totalAmount = count * 5.50;
        } else if (fruit === "grapes") {
            totalAmount = count * 3.85;
        }
    } else if (day === "Saturday" || day === "Sunday") {
        if (fruit === "banana") {
            totalAmount = count * 2.70;
        } else if (fruit === "apple") {
            totalAmount = count * 1.25;
        } else if (fruit === "orange") {
            totalAmount = count * 0.90;
        } else if (fruit === "grapefruit") {
            totalAmount = count * 1.60;
        } else if (fruit === "kiwi") {
            totalAmount = count * 3;
        } else if (fruit === "pineapple") {
            totalAmount = count * 5.60;
        } else if (fruit === "grapes") {
            totalAmount = count * 4.20;
        }
    }
        if (totalAmount > 0) {
            console.log(`${totalAmount.toFixed(2)}`);
        } else {
            console.log("error");
        }
}
fruitShop(["beer", "Friday", "3"])