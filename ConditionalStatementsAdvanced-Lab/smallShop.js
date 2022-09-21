function smallShop(input) {
    let product = input[0];
    let city = input[1];
    let count = Number(input[2]);
    let totalAmount = 0;

    switch (city) {
        case "Sofia":
            if (product === "coffee") {
                totalAmount = count * 0.50;
            } else if (product === "water") {
                totalAmount = count * 0.80;
            } else if (product === "beer") {
                totalAmount = count * 1.20;
            } else if (product === "sweets") {
                totalAmount = count * 1.45;
            } else if (product === "peanuts") {
                totalAmount = count * 1.60;
            }
            console.log(`${totalAmount}`);
            break;

        case "Plovdiv":
            if (product === "coffee") {
                totalAmount = count * 0.40;
            } else if (product === "water") {
                totalAmount = count * 0.70;
            } else if (product === "beer") {
                totalAmount = count * 1.15;
            } else if (product === "sweets") {
                totalAmount = count * 1.30;
            } else if (product === "peanuts") {
                totalAmount = count * 1.50;
            }
            console.log(`${totalAmount}`);
            break;

        case "Varna":
            if (product === "coffee") {
                totalAmount = count * 0.45;
            } else if (product === "water") {
                totalAmount = count * 0.70;
            } else if (product === "beer") {
                totalAmount = count * 1.10;
            } else if (product === "sweets") {
                totalAmount = count * 1.35;
            } else if (product === "peanuts") {
                totalAmount = count * 1.55;
            }
            console.log(`${totalAmount}`);
            break;
    }
}
smallShop(["sweets", "Sofia", "2"])