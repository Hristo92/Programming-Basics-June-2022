function onTimeForTheExam(input) {

    let examHours = Number(input[0]);
    let examMinutes = Number(input[1]);
    let arrivalHours = Number(input[2]);
    let arrivalMinute = Number(input[3]);

    let examHoursInMinutes = (examHours * 60) + examMinutes;
    let arrivalHoursInMinutes = (arrivalHours * 60) + arrivalMinute;

    let timeDifference = examHoursInMinutes - arrivalHoursInMinutes;


    let earlyHour;
    let earlyMin;
    let lateHour;
    let lateMin;


    if (timeDifference >= 0 && timeDifference <= 30) {  // on time

        if (timeDifference === 0) {
            console.log("On time");

        } else {
            console.log("On time");
            console.log(`${timeDifference} minutes before the start`);
        }

    }else if (timeDifference > 30) {          // Early

        earlyHour = Math.floor(timeDifference / 60);
        earlyMin = timeDifference % 60;


        if (timeDifference > 30 && timeDifference <= 59) {
            console.log("Early");
            console.log(`${timeDifference} minutes before the start`);
        } else if (timeDifference === 60) {
            console.log("Early");
            console.log(`${earlyHour}:0${earlyMin} hours before the start`);
        } else {
            console.log("Early");
            console.log(`${earlyHour}:${earlyMin} hours before the start`);
        }

    }else {      //  Late

        timeDifference = Math.abs(timeDifference);
        lateHour = Math.floor(timeDifference / 60);
        lateMin = timeDifference % 60;

        if (timeDifference <= 59) {
            console.log("Late");
            console.log(`${timeDifference} minutes after the start`);

        }
        else if (timeDifference === 60) {

            console.log("Late");
            console.log(`${lateHour}:0${lateMin} hours after the start`);
        }
        else {
            console.log("Late");
            console.log(`${lateHour}:${lateMin} hours after the start`);
        }
    }

}
onTimeForTheExam(["16", "00", "15", "00"])