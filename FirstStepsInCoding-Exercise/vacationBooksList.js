function vacationBooksList(input){
    let numberOfPages = Number(input[0]);
    let pagesPerHour = Number(input[1]);
    let daysCount = Number(input[2]);

    let totalTimePerBook = numberOfPages / pagesPerHour;
    let hoursPerDay = totalTimePerBook / daysCount;

    console.log(hoursPerDay);
}
vacationBooksList(["432", "15", "4"])