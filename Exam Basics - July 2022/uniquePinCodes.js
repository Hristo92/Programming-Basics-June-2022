function uniquePinCodes(num1, num2, num3) {

    for (let i = 2; i <= num1; i += 2) {

        for (let j = 2; j <= num2; j++) {

            for (let p = 2; p <= num3; p += 2) {
                if (p % 2 === 0) {
                    console.log(i, j, p,);
                }
            }
        }
    }
}

uniquePinCodes(2, 2, 2)

