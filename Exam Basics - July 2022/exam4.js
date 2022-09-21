function exam(input){
    let index = 0;
    let students = Number(input[index]);
    index++;

    let failingStudents = 0;
    let averageStudents = 0;
    let goodStudents = 0;
    let excellentStudents = 0;
    let averageGrade = 0;

    for (let i = 0; i <= students; i++) {
        let grade = Number(input[index]);
        index++;

        if (grade>=2.00 && grade<=2.99) {
            failingStudents++;
            averageGrade += grade;
        }else if (grade>=3.00 && grade<=3.99) {
            averageStudents++;
            averageGrade += grade;
        }else if (grade>=4.00 && grade<=4.99) {
            goodStudents++;
            averageGrade += grade;
        }else if (grade>=5.00) {
            excellentStudents++;
            averageGrade += grade;
        }
    }

    averageGrade = averageGrade / students;
    
    let group1 = failingStudents / students * 100;
    let group2 = averageStudents / students * 100;
    let group3 = goodStudents / students * 100;
    let group4 = excellentStudents / students * 100;

    
    console.log(`Top students: ${group4.toFixed(2)}%`);
    console.log(`Between 4.00 and 4.99: ${group3.toFixed(2)}%`);
    console.log(`Between 3.00 and 3.99: ${group2.toFixed(2)}%`);
    console.log(`Fail: ${group1.toFixed(2)}%`);
    console.log(`Average: ${averageGrade.toFixed(2)}`);

}
exam(["6",
"2",
"3",
"4",
"5",
"6",
"2.2"])

///////////////////////////////////////////

exam(["10",
"3.00",
"2.99",
"5.68",
"3.01",
"4",
"4",
"6.00",
"4.50",
"2.44",
"5"])