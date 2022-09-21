    function cinema(input){
        let projection = input[0];
        let countRows = Number(input[1]);
        let countColumns = Number(input[2]);
        let sum = 0;

        if(projection === "Premiere"){
            sum = countColumns * countRows * 12;
        }else if(projection === "Normal"){
            sum = countColumns * countRows * 7.50;
        }else if(projection === "Discount"){
            sum = countColumns * countRows * 5;
        }

        console.log(`${sum.toFixed(2)} leva`);
    }
cinema(["Premiere", "10", "12"])