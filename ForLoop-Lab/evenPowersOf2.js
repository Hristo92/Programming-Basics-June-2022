function evenPowersOf2(input){

    let n = Number(input[0]);
    let num = 1;

    for (let index = 0; index <= n; index+=2) {


        console.log(num)
        num = num * 2 * 2;

    }

}
evenPowersOf2(["6"])