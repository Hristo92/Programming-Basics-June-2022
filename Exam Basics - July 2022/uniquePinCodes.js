function uniquePinCodes(num1, num2, num3){

        let counter = 0;

        for (let i = 0; i < num1; i++) {
            if (num1 % 2 === 0) {
                counter += i;
            }
            for (let j = 0; j < num2; j++) {
                if (num2 >= 2 && num2 <= 7) {
                    counter += j;
                }
                for (let p = num3;p < num3;p++) {
                    if (num3 % 2 === 0) {
                        counter += i;                
                }                
            }    
            console.log(i);
        
        }




   //let index = 0;

   //let firstNumber = Number(input[index]);
   //index++;

   //let secondNumber = Number(input[index]);
   //index++;

   //let thirdNumber = Number(input[index]);
   //index++;

   //let myNumber = 0;

   //for (let i = 0; i < 9; i++) {

   //    if(firstNumber && thirdNumber % 2 === 0){
   //        myNumber++;
   //    }
   //    for (let j = 0; j < i; j++) {
   //        if(thirdNumber >= 2 && thirdNumber <= 7){
   //            myNumber++;
   //        }
   //    }
   //    
   //    
   //}
   //console.log(myNumber)

}
uniquePinCodes("3", "5", "5")