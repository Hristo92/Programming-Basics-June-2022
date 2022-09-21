function hotelRoom(input) {

    let month = input[0];
    let nights = Number(input[1]);

    let studio = 0;
    let apartment = 0;

    let totalAmountStudio = 0;
    let totalAmountApartment = 0;
    let discount = 0;

    if (month === "May" || month === "October") {
        totalAmountStudio = nights * 50;
        totalAmountApartment = nights * 65;
        if (nights > 7 && nights < 14) {
            discount = totalAmountStudio * 0.05;
            totalAmountStudio -= discount;
        } else if (nights > 14) {
            discount = totalAmountStudio * 0.30;
            totalAmountStudio -= discount;
        }
        if (nights > 14) {
            discount = totalAmountApartment * 0.10;
            totalAmountApartment -= discount;
        }
    } else if (month === "June" || month === "September") {
        totalAmountStudio = nights * 75.20;
        totalAmountApartment = nights * 68.70;
        if (nights > 14) {
            discount = totalAmountStudio * 0.20;
            totalAmountStudio -= discount;
        }

        if (nights > 14) {
            discount = totalAmountApartment * 0.10;
            totalAmountApartment -= discount;
        }

    } else if (month === "July" || month === "August") {
        totalAmountStudio = nights * 76;
        totalAmountApartment = nights * 77;
        if (nights > 14) {
            discount = totalAmountApartment * 0.10;
            totalAmountApartment -= discount;
        }
    }
    console.log(`Apartment: ${totalAmountApartment.toFixed(2)} lv.`)
    console.log(`Studio: ${totalAmountStudio.toFixed(2)} lv.`)
    
}
hotelRoom(["August", "20"]);