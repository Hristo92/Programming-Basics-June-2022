function godzillaVsKong(input){
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let clothesPricePerStatist = Number(input[2]);
    let total = 0;

    let decor = budget * 0.10;
    let clothesTotalPrice = statists * clothesPricePerStatist;
    let money = decor + clothesTotalPrice;

    if(statists > 150){
        let discount = (clothesTotalPrice * 0.10);
        clothesTotalPrice = clothesTotalPrice - discount;
        money = decor + clothesTotalPrice;
    }

    if(money > budget){
        total = money - budget;
        console.log("Not enough money!");
        console.log(`Wingard needs ${total.toFixed(2)} leva more.`);
    }else{
        total = budget - money;
        console.log("Action!");
        console.log(`Wingard starts filming with ${total.toFixed(2)} leva left.`)
    }

}
godzillaVsKong(["20000", "120", "55.5"])