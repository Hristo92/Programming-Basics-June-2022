function tradeCommissions(input){
    let city = input[0];
    let sales = Number(input[1]);
    let commission = 0;

    if(city === "Sofia" && sales >= 0 && sales <= 500){
        commission = sales * 0.05;
    }else if(city === "Sofia" && sales > 500 && sales <= 1000){
        commission = sales * 0.07;
    }else if(city === "Sofia" && sales > 1000 && sales <= 10000){
        commission = sales * 0.08;
    }else if(city === "Sofia" && sales > 10000){
        commission = sales * 0.12;
    }

    if(city === "Varna" && sales >= 0 && sales <= 500){
        commission = sales * 0.045;
    }else if(city === "Varna" && sales > 500 && sales <= 1000){
        commission = sales * 0.075;
    }else if(city === "Varna" && sales > 1000 && sales <= 10000){
        commission = sales * 0.10;
    }else if(city === "Varna" && sales > 10000){
        commission = sales * 0.13;
    }

    if(city === "Plovdiv" && sales >= 0 && sales <= 500){
        commission = sales * 0.055;
    }else if(city === "Plovdiv" && sales > 500 && sales <= 1000){
        commission = sales * 0.08;
    }else if(city === "Plovdiv" && sales > 1000 && sales <= 10000){
        commission = sales * 0.12;
    }else if(city === "Plovdiv" && sales > 10000){
        commission = sales * 0.145;
    }



    if(city !== "Sofia" && city !== "Varna" && city !== "Plovdiv" || sales < 0){
        console.log("error");
    }else{
        console.log(commission.toFixed(2));
    }


}
tradeCommissions(["Bourgas", "1500"])