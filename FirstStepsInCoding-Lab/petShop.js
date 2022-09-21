function petShop(input){
    let packetsForDogs = Number(input[0]);
    let packetsForCats = Number(input[1]);

    let priceForDogs = packetsForDogs * 2.50;
    let priceForCats = packetsForCats * 4;

    let totalFoodPrice = priceForCats + priceForDogs;

    console.log(totalFoodPrice);
}
petShop([
    "5 ",
    "4 "
])
petShop(["13",
"9"]
)
