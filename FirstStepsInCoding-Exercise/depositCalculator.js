function depositCalculator(input){
    let deposit = Number(input[0]);
    let depositPeriod = Number(input[1]);
    let yearInterest = Number(input[2]);

    let interestForOneYear = deposit * (yearInterest / 100);
    let monthlyInterest = interestForOneYear / 12;
    let sum = deposit + (depositPeriod * monthlyInterest);

    console.log(sum);
}
depositCalculator(["2350", "6", "7"])