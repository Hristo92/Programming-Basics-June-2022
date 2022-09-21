function numbersDivisibleBy9(num1, num2){

    let sum = 0;

    for (let i = num1; i <= num2 ; i++) {


        if(i % 9 === 0){
            console.log(i);
            sum += i;
        }

    }
    console.log(`The sum: ${sum}`);

}
numbersDivisibleBy9(100, 200);