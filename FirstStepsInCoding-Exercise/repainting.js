function repainting(input){
    let nylon = Number(input[0]);
    let paint = Number(input[1]);
    let concentrate = Number(input[2]);
    let workHours = Number(input[3]);

    let nylonPrice = (nylon + 2) * 1.50;
    let paintPrice = (paint + (paint * 10 / 100)) * 14.50;
    let concentratePrice = concentrate * 5.00;
    let bagCost = 0.40;
    let totalSum = nylonPrice + paintPrice + concentratePrice + bagCost;
    let sumForWorkers = (totalSum * (30 / 100)) * workHours;
    let totalExpense = totalSum + sumForWorkers; 

    console.log(totalExpense);
}
repainting(["5", "10", "10", "1"])